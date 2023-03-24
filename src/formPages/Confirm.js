import React from "react";
import { useParams } from "react-router-dom";
import { RoomConsumer } from "../context";
import { Link } from "react-router-dom";

import "../extra.css";
import moment from "moment/moment";
import { BiTable } from "react-icons/bi";

function Confirm({ formData }) {
  const { slug } = useParams();

  const day_1 = formData.startDate;
  const day_2 = formData.endDate;
  const min_Date = moment(day_1).format("MM-DD-YYYY");
  const max_Date = moment(day_2).format("MM-DD-YYYY");

  return (
    <>
      <RoomConsumer>
        {(value) => {
          const { rooms } = value;
          const room = rooms.find((room) => room.slug === slug);

          if (!room) {
            return (
              <div className="error">
                <h3>Room quotation cannot be processed...</h3>
                <Link to="/rooms" className="btn-primary">
                  Back to rooms
                </Link>
              </div>
            );
          }

          const { exceptions, price } = room;
          const payingTables = exceptions;
          const defaultPrice = price;

          let models = payingTables;
          let newModel = models.map((model) => {
            let tag = model.name;
            let res1 = new Date(model.starting);
            let res2 = new Date(model.ending);
            let dateIn = moment(res1).format("DD-MM-YYYY");
            let dateOut = moment(res2).format("DD-MM-YYYY");

            return { tag, dateIn, dateOut };
          });

          let last = newModel.filter(function (el) {
            return min_Date >= el.dateIn && max_Date <= el.dateOut;
          });

          let quoter = "";

          if (last.length === 0) {
            quoter = defaultPrice;
          } else {
            quoter = last[0].tag;
          }

          return (
            <div className="confirm-container">
              <p>Please confirm that your personal details are correct</p>

              <div className="confirm-tab">
                <div className="flex-words">
                  <h6>Name: </h6>
                  <h6>
                    {formData.firstName} {formData.lastName}
                  </h6>
                </div>

                <div className="flex-words">
                  <h6>Email: </h6>
                  <h6>{formData.email}</h6>
                </div>

                <div className="flex-words">
                  <h6>Room Type: </h6>
                  <h6>{slug}</h6>
                </div>

                <div className="flex-words">
                  <h6>Adults: </h6>
                  <h6>{formData.adults}</h6>
                </div>

                <div className="flex-words">
                  <h6>Children: </h6>
                  <h6>{formData.children}</h6>
                </div>

                <div className="flex-words">
                  <h6>From: {min_Date}</h6>
                  <h6>To: {max_Date}</h6>
                </div>

                <div className="flex-words">
                  <h6>Price Quote: </h6>
                  <h6>KES {quoter}</h6>
                </div>
              </div>
            </div>
          );
        }}
      </RoomConsumer>
    </>
  );
}

export default Confirm;
