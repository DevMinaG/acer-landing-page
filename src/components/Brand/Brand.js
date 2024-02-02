import React, { useState } from "react";
import "./brand.css";
import Container from "../Container/Container";
import RedLine from "../RedLine/RedLine";
import brand_img from "../../assets/brand_img.png";
import FindMore from "../FindMore/FindMore";

export default function Brand() {
  const [toggle, setToggle] = useState(false);
  return (
    <section className="brand">
      <div className="bgImage">
        <Container>
          <nav>
            <h1 className="logo">acer</h1>
            <ul className={`header-links ${toggle ? "header-links-show" : ""}`}>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Laptops</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
            </ul>
            <div className="header-icons">
              <a href="#">
                <i className="fas fa-user"></i>
              </a>
              <a href="#">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
            <div className="toggle" onClick={() => setToggle(!toggle)}>
              <i class="fas fa-sliders-h"></i>
            </div>
          </nav>
          <div className="content">
            <div className="col-1">
              <RedLine type="small" />
              <h1 className="title">
                Acer Nitro 5: <br /> Unleashed Power
              </h1>
              <p className="description secondary-text">
                Dominate the battlefield with Nitro 5’s high-performance graphics and processing, tailor-made for seamless gaming.
              </p>
              <FindMore text="Find out more" />
              <div className="trailer">
                <div className="left">
                  <h3 className="t_title">Trailer</h3>
                  <p className="t_description">
                    Experience cutting-edge gaming with the Acer Nitro 5 – where speed meets precision in a sleek design.
                    Get ready to elevate your play with
                    next-gen graphics and powerful processing wrapped in a bold, immersive package.
                  </p>
                </div>
                <div className="right">
                  {/* <video width="300" controls="controls" preload="metadata">
                    <source
                      src="https://www.w3schools.com/html/mov_bbb.mp4#t=0.5"
                      type="video/mp4"
                    ></source>
                  </video> */}
                  <iframe width="350"
                    src="https://www.youtube.com/embed/fmSmcSfC5fk?si=Sm2eNwwoCX4ZfwRN"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                  </iframe>
                </div>
              </div>
            </div>
            <div className="col-2">
              <img src={brand_img} alt="Acer" />
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">VK</a>
                <a href="#">Twitter</a>
                <a href="#">Youtube</a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
