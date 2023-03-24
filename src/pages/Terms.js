import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { motion } from "framer-motion";
import Title from "../components/Title";
import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";

import "../extra.css";

function Terms() {
  return (
    <>
      <Hero hero="roomsHero gensHero">
        <Banner
          title="Terms & Conditions"
          subtitle="Go through our terms and conditions"
        />
      </Hero>
      <div className="plain-texts">
        <Title title="Terms and Conditions Apply" subTitle="TERMS OF SERVICE" />

        <motion.div className="plain-texts-holder">
          <p className="intro-para">
            Welcome to the terms and conditions page for Jacaranda Bush Camp.
            Please read these terms carefully before using our website or making
            a reservation at our resort. By using our website or making a
            reservation, you agree to be bound by these terms and conditions.
          </p>

          <div className="heading">
            <h2>1. Reservations and Payment </h2>
          </div>

          <p>
            All reservations must be made through our website or by calling our
            reservation desk. Payment for your reservation will be collected at
            the time of booking. We accept all major credit cards and debit
            cards. All rates are quoted in the local currency and US dollars and
            are subject to applicable taxes and fees
          </p>

          <div className="heading">
            <h2>2. Cancellation Policy </h2>
          </div>

          <p>
            If you need to cancel your reservation, please do so at least 48
            hours prior to your scheduled arrival date. If you cancel within 48
            hours of your arrival date, you will be charged for the first
            night's stay. If you fail to show up for your reservation, you will
            be charged for the entire stay.
          </p>

          <div className="heading">
            <h2>3. Check-In and Check-Out </h2>
          </div>

          <p>
            Check-In and Check-Out Check-in time is 2:00 PM and check-out time
            is 11:00 AM. Early check-in and late check-out may be available upon
            request and are subject to availability.
          </p>

          <div className="heading">
            <h2>4. Smoking and Pet Policy </h2>
          </div>

          <p>
            Our hotel has designated smoking areas. We do not allow pets in our
            hotel.
          </p>

          <div className="heading">
            <h2>5. Damage to Hotel Property </h2>
          </div>

          <p>
            Guests will be held responsible for any damage caused to hotel
            property during their stay. This includes damage to rooms,
            furnishings, fixtures, and equipment. The cost of repair or
            replacement will be charged to the guest's credit card on file.
          </p>

          <div className="heading">
            <h2>6. Limitation of Liability </h2>
          </div>

          <p>
            Our hotel will not be held responsible for any loss, damage, or
            injury sustained by guests on the premises. We are not liable for
            any theft or loss of personal belongings or valuables during your
            stay.
          </p>

          <div className="heading">
            <h2>Governing Law </h2>
          </div>

          <p>
            These terms and conditions shall be governed by and construed in
            accordance with the laws of the jurisdiction in which our hotel is
            located.
          </p>

          <p className="intro-para">
            Thank you for reading our terms and conditions. If you have any
            questions or concerns, please contact our customer service team
          </p>
        </motion.div>
      </div>

      <FooterForm />
      <Footer />
    </>
  );
}

export default Terms;
