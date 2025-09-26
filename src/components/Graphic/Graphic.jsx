import React, { useMemo, useState } from "react";
import "./Graphic.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

// 오른쪽 큰 썸네일 25장
import s01 from "../../img/graphic/1.png";
import s02 from "../../img/graphic/2.png";
import s03 from "../../img/graphic/3.png";
import s04 from "../../img/graphic/4.png";
import s05 from "../../img/graphic/5.png";
import s06 from "../../img/graphic/6.png";
import s07 from "../../img/graphic/7.png";
import s08 from "../../img/graphic/8.png";
import s09 from "../../img/graphic/9.png";
import s10 from "../../img/graphic/10.png";
import s11 from "../../img/graphic/11.png";
import s12 from "../../img/graphic/12.png";
import s13 from "../../img/graphic/13.png";
import s14 from "../../img/graphic/14.png";
import s15 from "../../img/graphic/15.png";
import s16 from "../../img/graphic/16.png";
import s17 from "../../img/graphic/17.png";
import s18 from "../../img/graphic/18.png";
import s19 from "../../img/graphic/19.png";
import s20 from "../../img/graphic/20.png";
import s21 from "../../img/graphic/21.png";
import s22 from "../../img/graphic/22.png";
import s23 from "../../img/graphic/23.png";
import s24 from "../../img/graphic/24.png";
import s25 from "../../img/graphic/25.png";

// 작품명(왼쪽) 10장 (n01~n10까지만 존재)
import n01 from "../../img/graphic/평일.png";
import n02 from "../../img/graphic/watcher.png";
import n03 from "../../img/graphic/더박스.png";
import n04 from "../../img/graphic/알고있지만.png";
import n05 from "../../img/graphic/아다마스.png";
import n06 from "../../img/graphic/야한사진관.png";
import n07 from "../../img/graphic/살롱드홈즈.png";
import n08 from "../../img/graphic/하이퍼나이프.png";
import n09 from "../../img/graphic/씬.png";
import n10 from "../../img/graphic/다미안.png";

// 프로그램 아이콘
import icPs from "../../img/graphic/ps.png";
import icAi from "../../img/graphic/ai.png";
import icSk from "../../img/graphic/sk.png";
import icEn from "../../img/graphic/en.png";

// ✅ slides 배열 하나만 유지
const slides = [
  { section: "포스터", contribution: "100%", programs: [icPs, icAi], nameImgs: [n09, n10], right: s01 },
  { section: "포스터", contribution: "100%", programs: [icPs, icAi], nameImgs: [n07, n06], right: s02 },
  { section: "포스터", contribution: "100%", programs: [icPs, icAi], nameImgs: [n01], right: s03 },
  { section: "현수막", contribution: "100%", programs: [icPs, icAi], nameImgs: [n07, n06], right: s04 },
  { section: "현수막", contribution: "100%", programs: [icPs, icAi], nameImgs: [n07, n06], right: s05 },
  { section: "현수막", contribution: "100%", programs: [icPs, icAi], nameImgs: [n05, n03], right: s06 },
  { section: "그래픽", contribution: "100%", programs: [icPs, icAi], nameImgs: [n03, n04], right: s07 },
  { section: "LOGO", contribution: "100%", programs: [icPs, icAi], nameImgs: [n07], right: s08 },
  { section: "LOGO", contribution: "100%", programs: [icPs, icAi], nameImgs: [n07], right: s09 },
  { section: "LOGO", contribution: "100%", programs: [icPs, icAi], nameImgs: [n07], right: s10 },
  { section: "LOGO", contribution: "100%", programs: [icPs, icAi], nameImgs: [n06], right: s11 },
  { section: "LOGO", contribution: "100%", programs: [icPs, icAi], nameImgs: [n06, n05], right: s12 },
  { section: "LOGO", contribution: "100%", programs: [icPs, icAi], nameImgs: [n06, n05], right: s13 },
  { section: "LOGO", contribution: "100%", programs: [icPs, icAi], nameImgs: [n02, n01], right: s14 },
  { section: "세트디자인", contribution: "90%", programs: [icPs, icSk, icEn], nameImgs: [n07], right: s15 },
  { section: "세트디자인", contribution: "90%", programs: [icPs, icSk, icEn], nameImgs: [n07], right: s16 },
  { section: "세트디자인", contribution: "90%", programs: [icPs, icSk, icEn], nameImgs: [n07], right: s17 },
  { section: "세트디자인", contribution: "90%", programs: [icPs, icSk, icEn], nameImgs: [n06], right: s18 },
  { section: "세트디자인", contribution: "90%", programs: [icPs, icSk, icEn], nameImgs: [n08], right: s19 },
  { section: "세트디자인", contribution: "90%", programs: [icPs, icSk, icEn], nameImgs: [n07], right: s20 },
  { section: "천장 그래픽디자인", contribution: "100%", programs: [icPs, icSk, icEn], nameImgs: [n05], right: s21 },
  { section: "소품디자인", contribution: "100%", programs: [icPs, icSk, icEn], nameImgs: [n06], right: s22 },
  { section: "소품디자인", contribution: "100%", programs: [icPs, icSk, icEn], nameImgs: [n06], right: s23 },
  { section: "호리디자인", contribution: "100%", programs: [icPs], nameImgs: [n05], right: s24 },
  { section: "호리디자인", contribution: "100%", programs: [icPs], nameImgs: [n05], right: s25 },
];

export default function Graphic() {
  const [active, setActive] = useState(0);
  const current = useMemo(() => slides[active] ?? slides[0], [active]);

  // 기여도(%) → 5개 점수로 변환
  const pct = parseInt(String(current.contribution).replace("%", ""), 10);
  const activeDots = Math.min(5, Math.max(0, Math.round((isNaN(pct) ? 0 : pct) / 20)));

  return (
    <section className="graphic">
      <div className="graphic-viewport">
        <h2 className="graphic-title">PORTFOLIO GRAPHIC</h2>

        <div className="graphic-board">
          {/* LEFT */}
            <aside className="g-left">
            {/* 섹션 제목 */}
            <h3 className="g-left__title">{current.section}</h3>

            {/* 기여도 박스 */}
            <div className="g-meter">
                <ul className="g-meter__dots">
                {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className={i < activeDots ? "active" : ""} />
                ))}
                </ul>
                <span className="g-meter__caption">기여도 : {current.contribution}</span>
            </div>

            {/* PROGRAM */}
            <p className="g-left__label -program">PROGRAM</p>
            <div
                className={`g-left__icons ${
                current.stackPrograms ? "column" : "" /* 필요할 때만 세로 배치 */
                }`}
            >
                {current.programs.map((src, i) => (
                <img key={i} src={src} alt="program" />
                ))}
            </div>

            {/* [작 품] */}
            <p className="g-left__label -works">[작  품]</p>
            <div className="g-left__works">
                {current.nameImgs.map((src, i) => (
                <img key={i} className="g-left__workname" src={src} alt={`work ${i + 1}`} />
                ))}
            </div>
            </aside>
            

          {/* RIGHT - Vertical Coverflow */}
          <div className="g-right">
            <Swiper
              className="g-swiper g-swiper--coverflow"
              modules={[EffectCoverflow, Autoplay]}
              direction="vertical"
              effect="coverflow"
              centeredSlides
              loop
              speed={800}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,          // 기본
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{ delay: 10000, disableOnInteraction: false }}
              onSlideChange={(sw) => setActive(sw.realIndex)}
              breakpoints={{
                // ≥ 1440
                1440: {
                  slidesPerView: 1.35,
                  spaceBetween: 18,
                  coverflowEffect: { depth: 220 },
                },
                // 1200 ~ 1439
                1200: {
                  slidesPerView: 1.28,
                  spaceBetween: 16,
                  coverflowEffect: { depth: 200 },
                },
                // 900 ~ 1199  (여기까지는 2컬럼 유지)
                900: {
                  slidesPerView: 1.22,
                  spaceBetween: 14,
                  coverflowEffect: { depth: 180 },
                },
                // 600 ~ 899  (이하 1컬럼이지만 형태 유지)
                600: {
                  slidesPerView: 1.18,
                  spaceBetween: 12,
                  coverflowEffect: { depth: 160 },
                },
                // < 600
                0: {
                  slidesPerView: 1.14,
                  spaceBetween: 10,
                  coverflowEffect: { depth: 140 },
                },
              }}
            >
              {slides.map((s, idx) => (
                <SwiperSlide key={idx}>
                  <div className="g-card-slide">
                    <img src={s.right} alt={`${s.section} ${idx + 1}`} />
                    
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
