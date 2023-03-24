import React from "react";
import { images } from "../constants";
import { motion } from "framer-motion";

import "../extra.css";

const Grid = ({ fpic1, fpic2, fpic3, fpic4 }) => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="grid-section">
      <motion.div
        className="food-gallery"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="column">
          <motion.div variants={projectVariant} className="fd-gall_pic">
            <img src={fpic1} className="food_img fd1" />
          </motion.div>
          <motion.div variants={projectVariant} className="fd-gall_pic">
            <img src={fpic2} className="food_img fd2" />
          </motion.div>
        </div>

        <div className="column">
          <motion.div variants={projectVariant} className="fd-gall_pic">
            <img src={fpic3} className="food_img fd3" />
          </motion.div>
          <motion.div variants={projectVariant} className="fd-gall_pic">
            <img src={fpic4} className="food_img fd4" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Grid;
