import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Profile from "../components/Profile";
import FoodSection from "../components/FoodSection";
import Reviews from "../components/Reviews";
import FooterForm from "../components/FooterForm";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Hero hero="roomsHero aboutHero">
        <Banner title="About Us" subtitle="About jacaranda bush camp" />
      </Hero>
      <Profile />
      <FoodSection />
      <Reviews />
      <FooterForm />
      <Footer />
    </>
  );
}

export default About;
