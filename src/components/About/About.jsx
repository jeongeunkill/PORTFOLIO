import React, { useEffect } from "react";
import "./About.scss";
import aboutImage from "../../img/about/about01.png"; // PC/모바일 공용
import imageMapResize from "image-map-resizer";

function About() {
  useEffect(() => {
    imageMapResize(); // ✅ 모든 <map>에 자동 적용
  }, []);
  return (
    <div className="about">
      {/* Home 이미지 실제 높이(px)와 동일한 뷰포트 박스 */}
      <div className="about-viewport">
        {/* 세로 스크롤 가능한 영역 */}
        <div className="about-scroller" role="region" aria-label="About image scroller">
          {/* 이미지 상단부터 노출, 아래는 스크롤로 탐색 */}
          <img src={aboutImage} alt="About Visual" className="about-visual"   useMap="#map1"  width={1440}   
  height={2225}/>
          <map id="map1" name="map1">
            <area shape="rect" alt="github" title="깃허브 연결" coords="51,1757,215,1823" href="https://github.com/jeongeunkill/PORTFOLIO.git" target="_blank"/>
            <area shape="rect" alt="notion" title="노션 연결" coords="233,1756,407,1843" href="https://www.notion.so/2780224363c0805abd7df973b199b58a" target="_blank"/>
          </map>
        </div>
      </div>
    </div>
  );
}

export default About;
