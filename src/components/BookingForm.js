import React, { useState } from "react";
import Intro from "../formPages/Intro";
import Personalinfo from "../formPages/Personalinfo";
import Confirm from "../formPages/Confirm";
import Success from "../formPages/Success";
import RoomEntry from "../formPages/RoomEntry";
import Button from "./Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "../extra.css";

function BookingForm() {
  let navigate = useNavigate();
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adults: "",
    children: "",
    mobile: "",
    nationality: "",
    msgs: "",
    startDate: "",
    endDate: "",
  });

  const formTitle = [
    "Book Online",
    "Personal Info",
    "Custom Details",
    "Confirm Reservation",
    "Done",
  ];

  const PageDisplay = () => {
    if (page === 0) {
      return <Intro formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Personalinfo formData={formData} setFormData={setFormData} />;
    } else if (page === 2) {
      return <RoomEntry formData={formData} setFormData={setFormData} />;
    } else if (page === 3) {
      return <Confirm formData={formData} />;
    } else {
      return <Success formData={formData} />;
    }
  };

  return (
    <main className="form-holder">
      <form className="form-container">
        <div className="heading">
          <h5>{formTitle[page]}</h5>
        </div>

        <motion.div
          className="form-pages"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {PageDisplay()}
        </motion.div>

        <div className="form-buttons">
          {page !== 0 && page !== 4 ? (
            <Button
              text={"prev"}
              onClick={(e) => {
                e.preventDefault();
                setPage((currPage) => currPage - 1);
              }}
            />
          ) : null}

          <Button
            text={page !== 4 ? "Next" : "Back Home"}
            onClick={(e) => {
              e.preventDefault();

              if (page === formTitle.length - 1) {
                navigate("/");
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          />
        </div>
      </form>
    </main>
  );
}

export default BookingForm;
