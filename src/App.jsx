import React, { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Web from "./components/Web/Web";
import Graphic from "./components/Graphic/Graphic";
import Header from "./components/Header/Header";

import bg1 from "./video/bg.mp4";
import bg2 from "./video/bg2.mp4";
// import poster1 from "./video/bg1-poster.jpg";
// import poster2 from "./video/bg2-poster.jpg";

import "./App.scss";

function useIsMobile(maxWidth = 480) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= maxWidth : false
  );
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= maxWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [maxWidth]);
  return isMobile;
}

export default function App() {
  const location = useLocation();
  const isMobile = useIsMobile(480);

  // 라우트 기반 판정 (PC/태블릿)
  const routeWantsBg2 = useMemo(
    () => location.pathname === "/web" || location.pathname === "/graphic",
    [location.pathname]
  );

  // 스크롤 기반 판정 (모바일/PC 공통으로 감시)
  const [scrollWantsBg2, setScrollWantsBg2] = useState(false);
  useEffect(() => {
    const webEl = document.getElementById("web");
    const graphicEl = document.getElementById("graphic");
    if (!webEl || !graphicEl) return;

    let webVisible = false;
    let graphicVisible = false;
    const update = () => setScrollWantsBg2(webVisible || graphicVisible);

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.target === webEl) webVisible = e.isIntersecting;
          if (e.target === graphicEl) graphicVisible = e.isIntersecting;
        }
        update();
      },
      { threshold: 0.25, rootMargin: "0px 0px -10% 0px" }
    );

    io.observe(webEl);
    io.observe(graphicEl);
    update();
    return () => io.disconnect();
  }, []);

  // 최종 bg 판정: 라우트 OR 스크롤
  const wantsBg2 = scrollWantsBg2 || routeWantsBg2;

  // ===== 배경 비디오 두 겹 =====
  const v1 = useRef(null);
  const v2 = useRef(null);
  const [active, setActive] = useState("bg1");

  // 최초 로드: 두 비디오 미리 로드
  useEffect(() => {
    const preloads = [bg1, bg2].map((href) => {
      const l = document.createElement("link");
      l.rel = "preload";
      l.as = "video";
      l.href = href;
      l.type = "video/mp4";
      document.head.appendChild(l);
      return l;
    });

    const a = v1.current;
    const b = v2.current;
    if (a) {
      a.src = bg1;
      a.preload = "auto";
      a.muted = true;
      a.playsInline = true;
      a.loop = true;
      a.load();
      a.play().catch(() => {});
    }
    if (b) {
      b.src = bg2;
      b.preload = "auto";
      b.muted = true;
      b.playsInline = true;
      b.loop = true;
      b.load();
    }

    return () => {
      preloads.forEach((n) => n.remove());
    };
  }, []);

  // 전환 처리
  useEffect(() => {
    const next = wantsBg2 ? "bg2" : "bg1";
    if (next === active) return;

    const show = next === "bg2" ? v2.current : v1.current;
    if (!show) return;

    const ready = show.readyState >= 3;
    const doSwitch = () => {
      show.play().catch(() => {});
      setActive(next);
    };

    if (ready) {
      doSwitch();
    } else {
      const onReady = () => {
        show.removeEventListener("canplaythrough", onReady);
        doSwitch();
      };
      show.addEventListener("canplaythrough", onReady, { once: true });
      show.load();
    }
  }, [wantsBg2, active]);

  // 오버레이: bg2일 때 숨김
  const showOverlay = active !== "bg2";

  return (
    <div className="app">
      {/* 배경 */}
      <div className="bg-stack" aria-hidden="true">
        <video
          ref={v1}
          className={`bg-layer ${active === "bg1" ? "is-active" : ""}`}
        />
        <video
          ref={v2}
          className={`bg-layer ${active === "bg2" ? "is-active" : ""}`}
        />
      </div>

      {showOverlay && <div className="overlay" />}

      {/* 모바일 = 스크롤형 / PC = 라우터 */}
      {isMobile ? (
        <main className="mobile-page">
          <section id="home" className="m-section"><Home /></section>
          <section id="about" className="m-section"><About /></section>
          <section id="web" className="m-section"><Web /></section>
          <section id="graphic" className="m-section"><Graphic /></section>
        </main>
      ) : (
        <div className="content-box">
          <Header />
          <div className="content-inner">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/web" element={<Web />} />
              <Route path="/graphic" element={<Graphic />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}
