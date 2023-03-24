import React from "react";
import { images } from "../constants";
import { motion } from "framer-motion";
import Grid from "./Grid";
import "../style1.css";

function FoodSection() {
  return (
    <>
      <div className="restaurant top">
        <div className="rest-cont flex_obj">
          <div className="about-left">
            <motion.div
              className="heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h5>WELCOME TO OUR FOOD SECTION</h5>
              <h2>Our Restaurant</h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                At Jacaranda, we pride ourselves on offering an exceptional
                dining experience with our high-end cuisine. Our menu is a
                perfect blend of local and international flavors, carefully
                crafted by our expert chefs to tantalize your taste buds. We are
                passionate about food and committed to using only the freshest,
                highest quality ingredients to create delicious, mouth-watering
                dishes. From farm-fresh produce to the finest cuts of meat, we
                source our ingredients from trusted suppliers who share our
                commitment to quality. Our menu offers a wide range of options,
                from classic dishes to contemporary creations. Whether you’re in
                the mood for a steak cooked to perfection or a vegetarian
                delight, we have something to suit every taste and preference.
                Our expert chefs are also happy to accommodate any dietary
                restrictions or special requests, so you can enjoy your meal
                with confidence.
              </motion.p>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                At Jacaranda, we believe that dining is not just about the food,
                but also about the experience. That’s why we strive to create a
                warm and welcoming atmosphere where you can relax and enjoy your
                meal with friends and family. Whether you’re celebrating a
                special occasion or just enjoying a night out, we are committed
                to making your experience unforgettable.
              </motion.p>
              <p>
                We invite you to explore our menu and discover the many flavors
                that await you at Jacaranda
              </p>
            </motion.div>
          </div>

          <div className="about-right">
            <Grid
              fpic1={images.food6}
              fpic2={images.food7}
              fpic3={images.food4}
              fpic4={images.food5}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodSection;
