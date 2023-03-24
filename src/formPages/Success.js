import React from "react";
import { motion } from "framer-motion";

import { MdOutlineDomainVerification } from "react-icons/md";

import "../extra.css";

function Success({ formData }) {
  return (
    <>
      <article className="success-tab">
        <motion.div
          className="sucess-icon"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="s-icon">
            <MdOutlineDomainVerification />
          </div>
          <h4>SUCCESS</h4>
        </motion.div>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Thank you {formData.firstName}. Your resrvation details have been
          successfully submitted. An Email will be sent to {formData.email} with
          details on payment processing.
        </motion.p>
      </article>
    </>
  );
}

export default Success;
