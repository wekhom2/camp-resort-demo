import React from "react";

import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import Slideshow from "../components/Slideshow";
import Profile from "../components/Profile";
import FoodSection from "../components/FoodSection";
import Reviews from "../components/Reviews";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";

function Home() {
  return (
    <>
      <Slideshow />
      <Profile />
      <FeaturedRooms />
      <Services />

      <FoodSection />
      <Reviews />
      <GallerySection />
      <FooterForm />
      <Footer />
    </>
  );
}

export default Home;
