import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiPhoneCall, BiLocationPlus } from "react-icons/bi";

import "../style1.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-mid">
            <div className="footer-sqre logo__cont">
              <div className="footer-logo">
                <img src={logo} alt="Jacaranda Bush Resort" />
              </div>
              <div>
                <p>
                  Jacaranda Bush Camp prides itself as one of the best forms of
                  accommodation while on your visit to the Maasai Mara.
                </p>
                <p>Best bush camp and resort in the Mara</p>
              </div>
            </div>

            <div className="footer-sqre1">
              <div className="heading">
                <h5>CONTACT</h5>
              </div>
              <div className="contact-dets">
                <div className="contact-data">
                  <div className="cont-icon">
                    <BiLocationPlus />
                  </div>
                  <div className="cont-p">
                    <p>Maasai Mara, Narok County, Kenya</p>
                  </div>
                </div>

                <div className="contact-data">
                  <div className="cont-icon">
                    <BiPhoneCall />
                  </div>
                  <div className="cont-p">
                    <p>+254 711 566 666</p>
                  </div>
                </div>

                <div className="contact-data">
                  <div className="cont-icon">
                    <HiOutlineMailOpen />
                  </div>
                  <div className="cont-p">
                    <p>jacarandabushcamp@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="footer-socials">
                <a href="https://www.facebook.com/Jacaranda-Bush-Camp-101858405807491/">
                  <div className="soc-icon">
                    <BsFacebook />
                  </div>
                </a>

                <a href="https://instagram.com/jacaranda_bush_camp?igshid=YmMyMTA2M2Y">
                  <div className="soc-icon">
                    <FiInstagram />
                  </div>
                </a>

                <a href="wa.me/254711566666">
                  <div className="soc-icon">
                    <BsWhatsapp />
                  </div>
                </a>
              </div>
            </div>

            <div className="footer-sqre1">
              <div className="heading">
                <h5>IMPORTANT LINKS</h5>
              </div>

              <div className="foot__links">
                <ul>
                  <li>
                    <Link to="/about" className="foot__link">
                      About Jacaranda
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="foot__link">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="foot__link">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms&conditions" className="foot__link">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-par">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | Jacaranda Bush Camp & Resort. Designed by
                MW Wekhomba
              </p>
            </div>
            <div>01</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
