import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
import Title from "./Title";

import "../style1.css";

function FooterForm() {
  return (
    <>
      <div className="footer-top">
        <motion.div
          className="footer-form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Title
            subTitle="JACARANDA NEWSLETTER"
            title="Subscribe To Our Newsletter"
          />
          <div className="foot-form_holder">
            <form className="small-form">
              <input type="email" placeholder="Enter Your Email" />
              <Button text="submit" />
            </form>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default FooterForm;
