import React, { useState } from "react";
import { images } from "../constants";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

import "../style1.css";

function Reviews() {
  const reviewData = [
    {
      id: 1,
      name: "John Doe",
      country: "Kenya",
      image: images.profile1,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 2,
      name: "Mark Doe",
      country: "Kenya",
      image: images.profile2,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 3,
      name: "Jane Doe",
      country: "Kenya",
      image: images.profile3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 4,
      name: "Grant Kelly",
      country: "Kenya",
      image: images.profile6,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
    },
    {
      id: 5,
      name: "John Doe",
      country: "Kenya",
      image: images.profile8,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = reviewData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(reviewData) || reviewData.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="testimonials-section">
        <div className="review-wrapper">
          <motion.div
            className="review-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: -50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <motion.div
              className="heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h5>OUR GUESTS LOVE OUR SERVICES</h5>
              <h2>People Say...</h2>
            </motion.div>

            <div className="para-slides">
              <div className="review-btn" onClick={nextSlide}>
                <AiOutlineArrowRight />
              </div>

              {reviewData.map((rev, index) => {
                return (
                  <motion.div
                    className={index === current ? "para active" : "para"}
                    key={index}
                  >
                    <p>{rev.review}</p>

                    <div className="profile-box flex_obj">
                      <div className="client-img">
                        <img src={rev.image} className="food_img fd4" />
                      </div>
                      <div className="client-name">
                        <h5>{rev.name}</h5>
                        <h5>{rev.country}</h5>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Reviews;
