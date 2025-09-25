import React, { useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Web from "./components/Web/Web";
import Graphic from "./components/Graphic/Graphic";
import Header from "./components/Header/Header";

import bgVideo from "./video/bg.mp4";   // ✅ src에 있는 mp4 import
// import posterImg from "./assets/video/poster.jpg"; // 선택: 첫 프레임 대신 표시할 이미지

import "./App.scss";

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    // iOS/모바일 브라우저에서 자동재생 보조
    const v = videoRef.current;
    if (!v) return;
    v.muted = true; // iOS 자동재생 필수
    const tryPlay = () => v.play().catch(() => {});
    if (v.readyState >= 2) tryPlay();
    else v.addEventListener("loadeddata", tryPlay, { once: true });
  }, []);

  return (
    <div className="app">
      {/* ✅ 배경 MP4 */}
      <div className="bg-video" aria-hidden="true">
        <video
          ref={videoRef}
          className="bg-video__media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          // poster={posterImg}
        >
          <source src={bgVideo} type="video/mp4" />
          {/* 필요하면 WebM 추가
          <source src={bgVideoWebm} type="video/webm" />
          */}
        </video>
      </div>

      {/* ✅ 오버레이 */}
      <div className="overlay"></div>

      {/* 중앙 네모 박스 */}
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
