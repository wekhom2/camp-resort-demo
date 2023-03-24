import React from "react";
import Room from "./Room";
import { motion, AnimatePresence } from "framer-motion";

const RoomsList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <motion.div layout className="roomslist-center">
        <AnimatePresence>
          {rooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default RoomsList;
