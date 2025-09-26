import React from "react";
import "./Web.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 썸네일 9장 (src 경로)
import w01 from "../../img/web/fenty.png";
import w02 from "../../img/web/moodic.png";
import w03 from "../../img/web/movie.png";
import w04 from "../../img/web/amuse.png";
import w05 from "../../img/web/tamburins.png";
import w06 from "../../img/web/seoul.png";
import w07 from "../../img/web/starbuks.png";
import w08 from "../../img/web/hotels.png";
import w09 from "../../img/web/movie.png";

// 우하단 아이콘 (src 경로)
import icGithub from "../../img/web/git.png";
import icNotion from "../../img/web/notion.png";

/**
 * slides: 9장 전부 채움
 */
const slides = [
  {
    thumb: w01,
    liveUrl: "https://jeongeunkill.github.io/FENTY/",
    date: "September 2025",
    title: "FENDY",
    tags: ["REACT", "SCSS", "JSX"],
    desc:
      "React와 SCSS를 사용해 Fenty Beauty 공식 메인 페이지를 클론 코딩한 프로젝트입니다. Swiper.js를 활용해 자동 재생 및 네비게이션이 가능한 배너 슬라이드를 구현했으며, 컴포넌트 모듈화로 유지보수성을 높였습니다. 다양한 해상도에서도 최적화된 반응형 웹으로 구현했습니다.",
    github: "https://github.com/jeongeunkill/FENTY.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w02,
    liveUrl: "https://moodic-main.vercel.app/",
    date: "August 2025",
    title: "MOODIC PROJECT",
    tags: ["REACT", "SCSS", "JSX"],
    desc:
      "React 기반의 팀 프로젝트로, Axios로 외부 API를 연동해 실시간 콘텐츠를 출력했습니다. 재사용 가능한 컴포넌트 구조를 적용하고 Swiper.js로 자동 재생·네비게이션·루프 슬라이드를 구현했습니다.",
    github: "https://github.com/jeongeunkill/MOODIC.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w03,
    liveUrl: "https://jeongeunkill.github.io/movie-app/",
    date: "May 2025",
    title: "TMDB",
    tags: ["REACT", "SCSS", "JSX"],
    desc:
      "React를 사용하여 영화 검색, 상세페이지 등의 주요 기능을 구현 TMDB 영화사이트 웹페이지를 구현 하였습니다. 이 프로젝트에서는 영화 검색, 상세페이지 등의 주요 기능을 구현하였으며, 메인 페이지 내 FreshBox 및 Location 페이지는 Swiper API를 활용하여 요소 전환 효과를 적용했습니다. 각 페이지에서 직관적인 UI와 효율적인 데이터 처리를 구현하여 사용자 경험을 최적화 했습니다.",
    github: "https://github.com/jeongeunkill/movie-app.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w04,
    liveUrl: "https://jeongeunkill.github.io/AMUSE/",
    date: "August 2025",
    title: "AMUSE",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    desc:
      "HTML, CSS, JavaScript를 사용해 어뮤즈(A.MUSE) 공식 메인 페이지를 클론 코딩한 프로젝트입니다. Swiper.js를 적용하여 자동 재생과 네비게이션이 가능한 배너 슬라이드를 구현하였으며, 전체 페이지의 레이아웃과 기능을 원본 사이트와 동일하게 반응형 사이트로 재현했습니다.",
    github: "https://github.com/jeongeunkill/AMUSE.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w05,
    liveUrl: "https://jeongeunkill.github.io/TAMBURINS/",
    date: "July 2025",
    title: "TAMBERINS",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    desc:
      "HTML, CSS, JavaScript를 사용해 탬버린즈(Tamburins) 공식 메인 페이지를 클론 코딩한 프로젝트입니다. 메인 화면에 비디오를 배경으로 적용하여 브랜드 특유의 몰입감을 구현하였으며, 하단 푸터 영역까지 원본과 동일하게 반응형 사이트로 재현하여 전체 페이지 구조를 완성했습니다.",
    github: "https://github.com/jeongeunkill/TAMBURINS.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w06,
    liveUrl: "https://jeongeunkill.github.io/Seoul-Historiography/",
    date: "June 2025",
    title: "서울역사편찬원",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    desc:
      "서울역사편찬원 공식 메인 페이지를 클론 코딩한 프로젝트입니다. 메인 배너 영역에 Swiper.js를 활용한 슬라이드 기능을 구현하여 시각적인 역동성을 높였으며, 네비게이션 바를 상단 고정 형태로 제작하여 사용자가 어떤 위치에서도 메뉴에 쉽게 접근할 수 있도록 구성했습니다. 또한, 버튼 클릭 시 페이지 최상단으로 부드럽게 이동하는 기능과 PC·태블릿·모바일 해상도에 대응하는 반응형 디자인을 적용해 원본과 유사한 사용자 경험을 제공했습니다.",
    github: "https://github.com/jeongeunkill/Seoul-Historiography.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w07,
    liveUrl: "https://jeongeunkill.github.io/starbucks/",
    date: "May 2025",
    title: "STARBUCKS",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    desc:
      "HTML, CSS, JavaScript를 사용하여 스타벅스 코리아 메인 페이지를 클론 코딩한 프로젝트입니다. 메인 화면 배너와 메뉴, 프로모션 섹션 등 주요 콘텐츠를 반응형으로 구현하고, 마우스 오버, 슬라이더, 드롭다운 메뉴 등 원본의 인터랙티브 기능을 JavaScript로 재현했습니다. 하단 푸터까지 포함하여 전체 페이지 구조를 원본과 동일하게 구성하고, 데스크탑과 모바일 환경 모두에서 자연스러운 사용자 경험을 제공합니다.",
    github: "https://github.com/jeongeunkill/starbucks.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w08,
    liveUrl: "https://jeongeunkill.github.io/Design-Hotels/",
    date: "May 2025",
    title: "Design Hotels",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    desc:
      "디자인호텔스(Design Hotels) 공식 메인 페이지를 HTML, CSS, JavaScript로 클론 코딩한 프로젝트입니다. 마우스 오버, 슬라이더, 드롭다운 메뉴 등 원본의 인터랙티브 기능을 JavaScript로 재현했습니다. 하단 푸터까지 포함하여 전체 페이지 구조를 원본과 동일하게 구성하고, 데스크탑과 모바일 환경 모두에서 자연스러운 사용자 경험을 제공합니다.",
    github: "https://github.com/jeongeunkill/Design-Hotels.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
  {
    thumb: w09,
    liveUrl: "https://jeongeunkill.github.io/movie-app/",
    date: "May 2025",
    title: "TMDB",
    tags: ["REACT", "SCSS", "JSX"],
    desc:
      "React를 사용하여 영화 검색, 상세페이지 등의 주요 기능을 구현 TMDB 영화사이트 웹페이지를 구현 하였습니다. 이 프로젝트에서는 영화 검색, 상세페이지 등의 주요 기능을 구현하였으며, 메인 페이지 내 FreshBox 및 Location 페이지는 Swiper API를 활용하여 요소 전환 효과를 적용했습니다. 각 페이지에서 직관적인 UI와 효율적인 데이터 처리를 구현하여 사용자 경험을 최적화 했습니다.",
    github: "https://github.com/jeongeunkill/movie-app.git",
    notion: "https://www.notion.so/2780224363c0805abd7df973b199b58a",
  },
];

export default function Web() {
  return (
    <section className="web">
      <div className="web-viewport">
        <h2 className="web-title">POTOPOLIO WEB</h2>

        <Swiper
          className="web-swiper"
          modules={[Pagination, Autoplay]}
          loop
          speed={800}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
        >
          {slides.map((s, i) => (
            <SwiperSlide key={i}>
              <article className="web-card">
                <div className="web-card__left">
                  <a
                    href={s.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="web-thumb-link"
                    aria-label={`${s.title} 사이트 열기`}
                  >
                    <img src={s.thumb} alt={s.title} className="web-thumb" />
                  </a>
                </div>

                <div className="web-card__right">
                  <p className="web-date">{s.date}</p>
                  <h3 className="web-heading">{s.title}</h3>

                  <ul className="web-tags">
                    {s.tags.map((t, idx) => (
                      <li key={idx} className="web-tag">{t}</li>
                    ))}
                  </ul>

                  <p className="web-desc">{s.desc}</p>

                  <div className="web-links">
                    <a href={s.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                      <img src={icGithub} alt="GitHub" />
                    </a>
                    <a href={s.notion} target="_blank" rel="noreferrer" aria-label="Notion">
                      <img src={icNotion} alt="Notion" />
                    </a>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
