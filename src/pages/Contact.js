import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Title from "../components/Title";
import Button from "../components/Button";
import GMap from "../components/GMap";
import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMailOpen, HiGlobe } from "react-icons/hi";
import { BiPhoneCall } from "react-icons/bi";
import "../extra.css";
import { useState } from "react";

function Contact() {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    msg: "",
  });

  const [focused, setFocused] = useState(false);

  return (
    <>
      <Hero hero="roomsHero contactHero">
        <Banner title="Contact Us" subtitle="Get in touch with us" />
      </Hero>

      <div className="contact-page">
        <Title
          subTitle="LETS TALK"
          title="Contact Us With Any Queries You May Have"
        />
        <div className="cont-page">
          <motion.div
            className="cont-top"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="cont-top-grid">
              <div className="heading">
                <h5>OUR MOBILE</h5>
              </div>
              <div className="cont-top-info">
                <span>
                  <BiPhoneCall />
                </span>
                <a href="tel:+254-711566666">+254 711 566 666</a>
              </div>
            </div>

            <div className="cont-top-grid">
              <div className="heading">
                <h5>OFFICIAL EMAIL</h5>
              </div>
              <div className="cont-top-info">
                <span>
                  <HiOutlineMailOpen />
                </span>
                <a href="mailto:jacarandabushcamp@gmail.com">
                  jacrandabushcamp@gmail.com
                </a>
              </div>
            </div>

            <div className="cont-top-grid">
              <div className="heading">
                <h5>BOOKING.COM</h5>
              </div>
              <div className="cont-top-info">
                <span>
                  <HiGlobe />
                </span>
                <a href="http://www.booking.com/Share-OQ0Yoxi">
                  Jacaranda on Booking.com
                </a>
              </div>
            </div>

            <div className="cont-top-grid">
              <div className="heading">
                <h5>OUR SOCIALS</h5>
              </div>
              <div className="cont-top-info">
                <span>
                  <a href="https://www.facebook.com/Jacaranda-Bush-Camp-101858405807491/">
                    <BsFacebook />
                  </a>
                </span>
                <span>
                  <a href="https://instagram.com/jacaranda_bush_camp?igshid=YmMyMTA2M2Y=">
                    <FiInstagram />
                  </a>
                </span>
                <span>
                  <a href="wa.me/254711566666">
                    <BsWhatsapp />
                  </a>
                </span>
              </div>
            </div>
          </motion.div>

          <div className="cont-last">
            <motion.div
              className="cont-last01"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <form className="contact-page-form">
                <label>First Name</label>
                <input
                  type="text"
                  value={contactData.firstName}
                  className="fields"
                  {...register("firstName", {
                    required: true,
                    maxLength: 100,
                  })}
                  onChange={(e) =>
                    setContactData({
                      ...contactData,
                      firstName: e.target.value,
                    })
                  }
                />
                <div className="contact-error">
                  {errors.firstName && (
                    <p className="text-red mt-1">
                      {errors.firstName.type === "required" &&
                        "This field is required."}
                      {errors.firstName.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>

                <label>Last Name</label>
                <input
                  type="text"
                  value={contactData.lastName}
                  className="fields"
                  {...register("lastName", {
                    required: true,
                    maxLength: 100,
                  })}
                  onChange={(e) =>
                    setContactData({ ...contactData, lastName: e.target.value })
                  }
                />
                <div className="contact-error">
                  {errors.lastName && (
                    <p>
                      {errors.lastName.type === "required" &&
                        "This field is required."}
                      {errors.lastName.type === "maxLength" &&
                        "Max length is 100 char."}
                    </p>
                  )}
                </div>

                <label>Email</label>
                <input
                  type="email"
                  value={contactData.email}
                  className="fields"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                  onChange={(e) =>
                    setContactData({ ...contactData, email: e.target.value })
                  }
                />
                {errors.email && (
                  <p className="contact-error">
                    {errors.email.type === "required" &&
                      "This field is required."}
                    {errors.email.type === "pattern" &&
                      "Invalid email address."}
                  </p>
                )}

                <label>Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  value={contactData.msg}
                  className="fields"
                  {...register("message", {
                    required: true,
                    maxLength: 2000,
                  })}
                  onChange={(e) =>
                    setContactData({ ...contactData, msg: e.target.value })
                  }
                />
                {errors.message && (
                  <p className="contact-error">
                    {errors.message.type === "required" &&
                      "This field is required."}
                    {errors.message.type === "maxLength" &&
                      "Max length is 2000 char."}
                  </p>
                )}

                <Button
                  text="Send Message"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                />
              </form>
            </motion.div>

            <motion.div
              className="cont-last01"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="maps-box">
                <GMap />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <FooterForm />
      <Footer />
    </>
  );
}

export default Contact;
