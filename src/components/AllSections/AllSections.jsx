// src/components/AllSections/AllSections.jsx
import React from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Web from "../Web/Web";
import Graphic from "../Graphic/Graphic";
import "./AllSections.scss";

export default function AllSections() {
  return (
    <div className="all-sections">
      <section id="home" className="all-section">
        <Home />
      </section>
      <section id="about" className="all-section">
        <About />
      </section>
      <section id="web" className="all-section">
        <Web />
      </section>
      <section id="graphic" className="all-section">
        <Graphic />
      </section>
    </div>
  );
}
