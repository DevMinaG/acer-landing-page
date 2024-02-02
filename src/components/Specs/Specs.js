import React from "react";
import "./Specs.css";
import RedLine from "../RedLine/RedLine";
import Container from "../Container/Container";
import section1 from "../../assets/section1.jpg";
import midsection3 from "../../assets/midsection3.jpeg";
import section2 from "../../assets/section2.jpg";

export default function Specs() {
  return (
    <section className="specs">
      <Container>
        <div className="content">
          <div className="col-1">
            <RedLine type="small" />
            <h2 className="title">
              Pure Gaming
              <br /> experience with better
              <br /> graphics quality
            </h2>
            <ul className="dashed secondary-text">
              <li>Intel® Core™ i7-12700H processor Tetradeca-core 2.30 GHz</li>
              <li>16 GB, DDR5 SDRAM</li>
              <li>Multiprocessing threads execution</li>
            </ul>
            <button className="moreInfo">
              <a href="#">
                More info
                <i className="fas fa-long-arrow-alt-right"></i>
              </a>
            </button>
            <div className="spec_image">
              <img src={section1} alt="Specifications" />
              <p className="caption">
              Reign over the game world with the combined power of a 12th Gen Intel ® Core™ i7 processor 1 with
              <br/> its new performance hybrid architecture and NVIDIA ® GeForce RTX™ 30 Series GPUs..{" "}
              </p>
            </div>
          </div>
          <div className="col-2">
            <div className="spec_image">
              <img src={midsection3} alt="Specifications" />
              <p className="caption">
                Offering a plenty of software management techniques
                <br /> developed and published by Rockstar Games.{" "}
              </p>
            </div>
            <div className="spec_image">
              <img src={section2} alt="Specifications" />
              <p className="caption">
                Take your gaming experience to the next level
                <br /> with hard core cooling process and threads.{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
