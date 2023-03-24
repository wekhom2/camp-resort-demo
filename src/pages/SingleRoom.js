import React from "react";
import { RoomConsumer } from "../context";
import { Link, useParams } from "react-router-dom";
import moment from "moment/moment";
import { motion } from "framer-motion";

import Banner from "../components/Banner";
import StyledHero from "../components/StyledHero";

import Footer from "../components/Footer";
import FooterForm from "../components/FooterForm";

function SingleRoom() {
  const { slug } = useParams();

  return (
    <>
      <RoomConsumer>
        {(value) => {
          const { rooms } = value;
          const room = rooms.find((room) => room.slug === slug);

          if (!room) {
            return (
              <div className="error">
                <h3>No such room could be found...</h3>
                <Link to="/rooms" className="btn-primary">
                  Back to rooms
                </Link>
              </div>
            );
          }

          const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            exceptions,
            breakfast,
            children,
            images,
          } = room;

          const defaultPay = price;

          let newDate = new Date();

          let today = moment(newDate).format("MM-DD-YYYY");
          console.log(extras);

          const pay = exceptions;

          let newCosts = pay.map((cost) => {
            let newTag = cost.name;
            let result1 = new Date(cost.starting);
            let result2 = new Date(cost.ending);
            let dateIn = moment(result1).format("DD-MM-YYYY");
            let dateOut = moment(result2).format("DD-MM-YYYY");

            return { newTag, dateIn, dateOut };
          });

          let costList = newCosts.filter(function (el) {
            return today >= el.dateIn && today <= el.dateOut;
          });

          let quoted = "";

          if (costList.length === 0) {
            quoted = defaultPay;
          } else {
            quoted = costList[0].newTag;
          }

          return (
            <div>
              <StyledHero img={images[0]}>
                <Banner title={`${name} room`}>
                  <Link to="/rooms" className="btn-primary">
                    back to rooms
                  </Link>
                </Banner>
              </StyledHero>

              <section className="single-room">
                <div className="single-room-images">
                  {images.map((item, index) => (
                    <img key={index} src={item} alt={name} />
                  ))}
                </div>

                <div className="single-room-info">
                  <motion.div
                    className="room-info_container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <motion.article
                      className="desc"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="heading">
                        <h5>ROOM DETAILS</h5>
                      </div>

                      <p>{description}</p>
                    </motion.article>

                    <motion.article
                      className="info"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: 0.45, duration: 0.5 }}
                      variants={{
                        hidden: { opacity: 0, y: 50 },
                        visible: { opacity: 1, y: 0 },
                      }}
                    >
                      <div className="heading">
                        <h5>ROOM INFORMATION</h5>
                      </div>
                      <h6>
                        price <span className="green-tag"> Ksh{quoted} </span>{" "}
                      </h6>
                      <h6>size : {size} SQFT</h6>
                      <h6>
                        max capacity :
                        {capacity > 1
                          ? `${capacity} people`
                          : `${capacity} person`}
                      </h6>
                      <h6>
                        {children ? "children allowed" : "no children allowed"}
                      </h6>
                      <h6>{breakfast && "free breakfast included"}</h6>

                      <Link to={`/booking/${slug}`} className="btn-primary">
                        Book Room
                      </Link>
                    </motion.article>
                  </motion.div>
                </div>
              </section>

              <motion.section
                className="room-extras"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="heading">
                  <h5>EXTRAS OFFERED</h5>
                </div>
                <ul className="extras">
                  {extras.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </motion.section>
            </div>
          );
        }}
      </RoomConsumer>
      <FooterForm />
      <Footer />
    </>
  );
}

export default SingleRoom;
