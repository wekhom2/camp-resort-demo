import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import BookingForm from "../components/BookingForm";
import Grid from "../components/Grid";
import { images } from "../constants";
import Title from "../components/Title";
import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";

import "../extra.css";

function Bookings() {
  return (
    <>
      <Hero hero="roomsHero booksHero">
        <Banner title="Booking" subtitle="Get booked with us now" />
      </Hero>

      <div className="booking-container">
        <Title subTitle=" ONLINE RESERVATION" title="Book A Room" />
        <div className="book-wrapper">
          <div className="booking-left">
            <Grid
              fpic4={images.adds18}
              fpic1={images.adds7}
              fpic2={images.adds17}
              fpic3={images.img6}
            />
          </div>

          <div className="booking-right">
            <BookingForm />
          </div>
        </div>
      </div>
      <FooterForm />
      <Footer />
    </>
  );
}

export default Bookings;
