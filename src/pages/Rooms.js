import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomsContainer from "../components/RoomsContainer";

import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";

function Rooms() {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner
          title="Our Rooms"
          subtitle="Find a room that's just right for you."
        />
      </Hero>
      <RoomsContainer />
      <FooterForm />
      <Footer />
    </>
  );
}

export default Rooms;
