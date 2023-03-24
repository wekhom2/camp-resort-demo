import React from "react";
import { motion } from "framer-motion";
const Banner = ({ children, title, subtitle }) => {
  return (
    <motion.div
      className="banner"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </motion.div>
  );
};

export default Banner;
