import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

import Title from "../components/Title";
import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";

import "../extra.css";

function Privacy() {
  return (
    <>
      <Hero hero="roomsHero gensHero">
        <Banner
          title="Privacy Policy"
          subtitle="We value our visitor's privacy"
        />
      </Hero>

      <div className="plain-texts">
        <Title
          title="Policy on the Jacaranda Website"
          subTitle="PRIVACY POLICY"
        />

        <div className="plain-texts-holder">
          <p className="intro-para">
            At Jacaranda bush camp, we respect your privacy and are committed to
            protecting your personal information. This Privacy Policy describes
            the types of information we may collect from you or that you may
            provide when you visit our website and our practices for collecting,
            using, maintaining, protecting, and disclosing that information.
          </p>

          <div className="heading">
            <h2>Information We Collect:</h2>
          </div>

          <p>
            When you visit our website, we may collect certain information about
            your visit automatically. This information may include your IP
            address, browser type, referring/exit pages, operating system,
            date/time stamp, and/or click stream data. We may also use cookies
            or similar technologies to collect information about your visit and
            your use of our website. If you choose to make a reservation with
            us, we will collect information from you such as your name, email
            address, phone number, and credit card information. We do not store
            any financial data collected on our website, and we use
            industry-standard encryption to protect your credit card
            information.
          </p>

          <div className="heading">
            <h2>How We Use Your Information</h2>
          </div>

          <p>
            We use the information we collect from you to provide you with our
            services, to communicate with you about your reservation or other
            inquiries, and to improve our website and services. We may also use
            your information to send you marketing or promotional communications
            if you opt-in to receive such communications. You may opt-out of
            receiving these communications at any time.
          </p>

          <div className="heading">
            <h2>Information Sharing</h2>
          </div>

          <p>
            We may share your information with our third-party service providers
            who help us provide our services to you. For example, we may share
            your information with a payment processor to process your
            reservation payment. We may also share your information with our
            partners who help us promote our services. We may also share your
            information if required by law or legal process, to protect our
            rights or the rights of others, or to investigate or prevent fraud.
          </p>

          <div className="heading">
            <h2>Third-Party Links</h2>
          </div>

          <p>
            Our website may contain links to third-party websites. We do not
            control these websites and are not responsible for their privacy
            practices. We encourage you to review the privacy policies of these
            websites before providing any personal information to them.
          </p>

          <div className="heading">
            <h2>Children’s Privacy</h2>
          </div>

          <p>
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13. If you are under 13, please do not provide any information on
            this website. Changes to this Privacy Policy:We may update this
            Privacy Policy from time to time. If we make changes, we will post
            the updated Privacy Policy on our website and update the effective
            date.
          </p>

          <div className="heading">
            <h2>Contact Us: </h2>
          </div>

          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at jacarandabushcamp@gmail.com or 0711566666
          </p>
        </div>
      </div>

      <FooterForm />
      <Footer />
    </>
  );
}

export default Privacy;
