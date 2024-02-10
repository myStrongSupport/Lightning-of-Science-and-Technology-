import React from "react";
import Slider from "../components/Services/Slider";
import "../styles/Services.css";
import { motion } from "framer-motion";
import Car from "../components/Car/Car2";
const Services = () => {
  const serviceVariant = {
    init: {},
    anime: {},
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.section
      variants={serviceVariant}
      initial="init"
      animate="anime"
      exit="exit"
      className="services"
      id="services"
    >
      <div className="services-container">
        <Slider />
        <div className="services-container_img">
          <motion.div className="over-img">
            <Car />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
