import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { images } from "../constants";

import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";

import "../extra.css";

function Gallery() {
  return (
    <>
      <Hero hero="roomsHero gallHero">
        <Banner title="Gallery" subtitle="Jacaranda Photo Gallery" />
      </Hero>

      <div className="gallery-page-container">
        <div className="page-gallery">
          <div className="heading">
            <h5>OUR STUNNING ALBUM</h5>
            <h2>Experience Jacaranda Through Images</h2>
          </div>

          <div className="main_gallery">
            <div className="main_columns">
              <div className="photo">
                <img
                  src={images.adds1}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.adds6}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.adds9}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
            </div>

            <div className="main_columns">
              <div className="photo">
                <img
                  src={images.adds11}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.food5}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.scape1}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
            </div>

            <div className="main_columns">
              <div className="photo">
                <img
                  src={images.food11}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.adds17}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.adds16}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
            </div>

            <div className="main_columns">
              <div className="photo">
                <img
                  src={images.adds15}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.adds13}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.img3}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
            </div>

            <div className="main_columns">
              <div className="photo">
                <img
                  src={images.food10}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.img6}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.food9}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
            </div>

            <div className="main_columns">
              <div className="photo">
                <img
                  src={images.adds12}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.adds5}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
              <div className="photo">
                <img
                  src={images.scape2}
                  className="main_gallery-pic"
                  alt="jacaranda"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterForm />
      <Footer />
    </>
  );
}

export default Gallery;
