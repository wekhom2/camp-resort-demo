import React, { Component } from "react";
import { FaSwimmingPool } from "react-icons/fa";
import { SiHotelsdotcom } from "react-icons/si";
import { GiHotMeal, GiAirBalloon } from "react-icons/gi";
import { motion } from "framer-motion";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <SiHotelsdotcom />,
        title: "comfortable rooms",
        info: "Imagine the luxury – you’re in a Deluxe room equipped with everything you may need. You’ve been chilling out by the pool with a good read all afternoon. Our facilities simply give off a relaxed atmosphere.",
      },
      {
        icon: <GiHotMeal />,
        title: "food & restaurant",
        info: "Our world class chefs are here to ensure that you not only get an amazing meal but you also get an experience out of it. With a combination of well-trained staff and a great ambiance, our services are simply unmatched",
      },
      {
        icon: <GiAirBalloon />,
        title: "hot air baloon",
        info: "A hot air balloon in the Maasai Mara is an adventure of a lifetime the perfect way to experience masai Mara from a very exclusive point.",
      },
      {
        icon: <FaSwimmingPool />,
        title: "swimming pool",
        info: "The crystal clear blue water of our swimming pool available to all our guests will offer relief from hot days or just fill your time during those lazy afternoons.",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title subTitle="OUR SERVICES" title="Check Out Our Services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <motion.div
                className="servv"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <motion.article
                  key={`item-${item.title}`}
                  className="service"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <span>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <p>{item.info}</p>
                </motion.article>
              </motion.div>
            );
          })}
        </div>
      </section>
    );
  }
}
