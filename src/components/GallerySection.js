import React, { useRef, useState, useEffect } from "react";
import { images } from "../constants";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "../style1.css";

function GallerySection() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <>
      <div className="gallery-section">
        <div className="home-gallery">
          <div className="h-gall__top">
            <div className="heading">
              <h5>WELCOME TO OUR PHOTO GALLERY</h5>
              <h2>Resort Photo Gallery</h2>
            </div>
            <div className="h-gal__button">
              <Link to="/gallery" className="btn-primary ">
                view gallery
              </Link>
            </div>
          </div>

          <motion.div
            className="h-gall__bottom"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="gall-hold">
              <motion.div ref={carousel} className="outer-frame">
                <motion.div
                  drag="x"
                  dragConstraints={{ right: 0, left: -width }}
                  className="inner-frame"
                >
                  <motion.div className="item">
                    <img src={images.adds12} className="food_img fd4" />
                  </motion.div>
                  <motion.div className="item">
                    <img src={images.adds19} className="food_img fd4" />
                  </motion.div>
                  <motion.div className="item">
                    <img src={images.food3} className="food_img fd4" />
                  </motion.div>
                  <motion.div className="item">
                    <img src={images.adds13} className="food_img fd4" />
                  </motion.div>
                  <motion.div className="item">
                    <img src={images.adds5} className="food_img fd4" />
                  </motion.div>
                  <motion.div className="item">
                    <img src={images.img1} className="food_img fd4" />
                  </motion.div>
                  <motion.div className="item">
                    <img src={images.pool1} className="food_img fd4" />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default GallerySection;
