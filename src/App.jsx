import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Web from "./components/Web/Web";
import Graphic from "./components/Graphic/Graphic";
import Header from "./components/Header/Header";

import bgVideo1 from "./video/bg.mp4";   // ✅ Home / About
import bgVideo2 from "./video/bg2.mp4";  // ✅ Web / Graphic

import "./App.scss";

function App() {
  const videoRef = useRef(null);
  const location = useLocation();

  // 현재 경로별 비디오 선택
  const isWebOrGraphic =
    location.pathname === "/web" || location.pathname === "/graphic";

  const getVideoSrc = () => (isWebOrGraphic ? bgVideo2 : bgVideo1);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, [location]);

  return (
    <div className="app">
      {/* ✅ 배경 MP4 */}
      <div className="bg-video" aria-hidden="true">
        <video
          ref={videoRef}
          key={getVideoSrc()} // 경로 바뀌면 비디오 새로고침
          className="bg-video__media"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={getVideoSrc()} type="video/mp4" />
        </video>
      </div>

      {/* ✅ 오버레이: Web/Graphic 에서는 숨김 */}
      {!isWebOrGraphic && <div className="overlay"></div>}

      {/* 중앙 박스 */}
      <div className="content-box">
        <Header />
        <div className="content-inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/web" element={<Web />} />
            <Route path="/graphic" element={<Graphic />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
