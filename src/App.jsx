import React, { useEffect, useRef, useMemo, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Web from "./components/Web/Web";
import Graphic from "./components/Graphic/Graphic";
import Header from "./components/Header/Header";

import bgVideo1 from "./video/bg.mp4";   // 기본
import bgVideo2 from "./video/bg2.mp4";  // Web/Graphic

import "./App.scss";

/** 간단한 뷰포트 감지 훅 */
function useIsMobile(maxWidth = 480) {
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" ? window.innerWidth <= maxWidth : false
  );
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const onResize = () => setIsMobile(window.innerWidth <= maxWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [maxWidth]);
  return isMobile;
}

function App() {
  const videoRef = useRef(null);
  const location = useLocation();
  const isMobile = useIsMobile(480);

  // 📱 모바일: 스크롤 섹션 감지로 비디오 전환
  const [mobileVideo, setMobileVideo] = useState(bgVideo1);

  // 💻 데스크탑/태블릿: 경로 기준
  const isWebOrGraphic = useMemo(
    () => location.pathname === "/web" || location.pathname === "/graphic",
    [location.pathname]
  );

  // 실제 비디오 소스
  const videoSrc = useMemo(() => {
    if (isMobile) return mobileVideo;
    return isWebOrGraphic ? bgVideo2 : bgVideo1;
  }, [isMobile, mobileVideo, isWebOrGraphic]);

  // ✅ 오버레이 표시 여부 (핵심 수정)
  const showOverlay = useMemo(() => {
    if (isMobile) {
      // 모바일: bg2.mp4(=Web 섹션 활성)일 땐 오버레이 숨김
      return mobileVideo !== bgVideo2;
    }
    // 데스크탑/태블릿: /web, /graphic 에선 숨김, 그 외 표시
    return !isWebOrGraphic;
  }, [isMobile, mobileVideo, isWebOrGraphic]);

  // autoplay 보장
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, [videoSrc]);

  // 📱 모바일: Web 섹션 보이면 bg2로, 벗어나면 bg1로
  useEffect(() => {
  if (!isMobile) return;

  const webEl = document.getElementById("web");
  const graphicEl = document.getElementById("graphic");
  if (!webEl || !graphicEl) return;

  let webVisible = false;
  let graphicVisible = false;

  const updateBg = () => {
    // 둘 중 하나라도 보이면 bg2 유지
    setMobileVideo(webVisible || graphicVisible ? bgVideo2 : bgVideo1);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.target === webEl) webVisible = entry.isIntersecting;
        if (entry.target === graphicEl) graphicVisible = entry.isIntersecting;
      }
      updateBg();
    },
    {
      threshold: 0.25,        // 25% 이상 보이면 "보이는 중"으로 판단
      root: null,
      rootMargin: "0px 0px -10% 0px", // 살짝 여유 (하단 근접 시 놓침 방지)
    }
  );

  observer.observe(webEl);
  observer.observe(graphicEl);

  // 초기 상태 반영
  updateBg();

  return () => observer.disconnect();
}, [isMobile]);

  return (
    <div className="app">
      {/* 배경 MP4 */}
      <div className="bg-video" aria-hidden="true">
        <video
          ref={videoRef}
          key={videoSrc}
          className="bg-video__media"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* ✅ 오버레이 표시/숨김 */}
      {showOverlay && <div className="overlay" />}

      {/* 📱 모바일: content-box 없이 단일 페이지 (네비 제거) */}
      {isMobile ? (
        <main className="mobile-page">
          <section id="home" className="m-section"><Home /></section>
          <section id="about" className="m-section"><About /></section>
          <section id="web" className="m-section"><Web /></section>
          <section id="graphic" className="m-section"><Graphic /></section>
        </main>
      ) : (
        /* 💻 데스크탑/태블릿: 기존 레이아웃 유지 */
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

export default App;
