import React from "react";
import { images } from "../constants";
import { motion } from "framer-motion";
import "../style1.css";
import Grid from "./Grid";

function Profile() {
  return (
    <>
      <div className="profile-section">
        <div className="about-container flex_obj">
          <div className="about-left">
            <Grid
              fpic1={images.img5}
              fpic2={images.img2}
              fpic3={images.img1}
              fpic4={images.img9}
            />
          </div>

          <div className="about-right">
            <motion.div
              className="heading"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <h5>RAISING COMFORT TO THE HIGHEST LEVEL</h5>
              <h2>Welcome to Jacaranda Camp & Resort</h2>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {" "}
                Jacaranda Bush Camp is among the Market Leaders Hospitality
                companies in East Africa. Located in Mara Triangle near Mara
                River it gives you an authentic bush and cultural experience. It
                comprises of 14 Lodges all Ensuite, Set well apart, designed
                tastefully and Inspired by home away from home culture with an
                African taste.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                {" "}
                With garden views, Jacaranda Bush Camp is located in Musiara
                campsite and has a restaurant, a 24 hour front desk, bar,
                garden, year round pool and sun terrace. Free Wi-Fi is offered.
                There is a private bathroom with showers in all units along with
                slippers and free toiletries.
              </motion.p>

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.45, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Customers can also relax in the shared lounge area. The compound
                offers a buffet of full English/Irish breakfast. Maasai Mara is
                30.6km from Jacaranda Bush Camp, while Keekorok is 45.1 km from
                the property. The nearest airport is Keekorok, 46.7km from the
                accommodation and we offer a paid airport shuttle service
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
