import React from "react";
import "./intro.css";
import acer_1_1 from "../../assets/acer_1_1.png";
import RedLine from "../RedLine/RedLine";

export default function Intro() {
  return (
    <section className="intro">
      <div className="bgImage">
        <div className="content">
          <img src={acer_1_1} alt="Not found" />
          <RedLine />
          <h4>Gaming Laptop</h4>
          <p className="secondary-text">
          Discover relentless speed and performance for the ultimate gaming victory.

          </p>
        </div>
      </div>
    </section>
  );
}
