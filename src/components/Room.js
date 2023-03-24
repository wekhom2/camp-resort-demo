import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import { AiFillStar, AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdLocalHotel } from "react-icons/md";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

export default function Room({ room }) {
  const { name, slug, images, discount, beds, capacity, price } = room;

  return (
    <motion.article
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="room"
    >
      <motion.div
        className="img-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={discount > 0 ? "ribbon showRibbon" : "ribbon"}>
          <span>{discount}% discount</span>
        </div>
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>ksh {price}/Night</h6>
        </div>
      </motion.div>
      <motion.div
        className="room-info__container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="room-info__top">
          <h5 className="room-info">{name}</h5>
          <div className="starz">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        </div>

        <div className="room-info__mid">
          <div className="info-icon-tag">
            <MdLocalHotel />
            <p>{beds} Bed</p>
          </div>

          <div className="info-icon-tag">
            <AiOutlineUsergroupDelete />
            <p>{capacity} People</p>
          </div>
        </div>

        <div className="room-info__button">
          <Link to={`/room/${slug}`} className="btn-primary ">
            room features
          </Link>
        </div>
      </motion.div>
    </motion.article>
  );
}

Room.propTypes = {
  Room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
