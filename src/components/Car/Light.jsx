import React from "react";
import "../../styles/Light.css";
import { motion } from "framer-motion";

function Light() {
  const Vsvg = {
    init: {
      opacity: 0,
    },
    anime: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 2,
        duration: 2,
      },
    },
  };

  const eOne = {
    init: {
      opacity: 0,
    },
    anime: {
      opacity: 1,
      ease: "easeOut",
      transition: {
        opacity: {
          yoyo: Infinity,
          duration: 1,
        },
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <motion.svg
      variants={Vsvg}
      initial="init"
      animate="anime"
      exit="exit"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 847.52 105.76"
      className="Light"
    >
      <g data-name="Layer 2">
        <g>
          <motion.path
            variants={eOne}
            fill="#fcee21"
            d="M360.66 58.6c14.73 8.3 58.9 12.54 98.65 9.47s60.05-12.31 45.32-20.62S445.74 34.9 406 38s-60.06 12.29-45.34 20.6zm137.26-9.45L441 52.21l13.27 4-88.18.83 62.12-3.43-13.79-4.18z"
          ></motion.path>
          {/* <motion.ellipse
            className="eTwo"
            cx="423.76"
            cy="52.88"
            fill="none"
            stroke="#fca821"
            strokeMiterlimit="10"
            strokeWidth="7"
            rx="222.14"
            ry="24.46"
          ></motion.ellipse> */}
          {/* <motion.ellipse
            className="eThree"
            cx="423.76"
            cy="52.88"
            fill="none"
            stroke="#fcee21"
            strokeMiterlimit="10"
            strokeWidth="14"
            rx="416.76"
            ry="45.88"
          ></motion.ellipse> */}
        </g>
      </g>
    </motion.svg>
  );
}

export default Light;
