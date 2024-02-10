import React from "react";
import "../../styles/Line.css";
import { motion } from "framer-motion";

function Icon() {
  const svgLine = {
    init: {
      y: "-20%",
      x: "250%",
    },
    anime: {
      x: "173%",
      transition: {
        duration: 1,
      },
    },
  };
  return (
    <motion.svg
      variants={svgLine}
      initial="init"
      whileInView="anime"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 57 102.24"
      className="line"
    >
      <g data-name="Layer 2">
        <path
          d="M54.5 2.5L2.5 33.5 2.5 99.74"
          className="cls-1"
          data-name="Layer 1"
        ></path>
      </g>
    </motion.svg>
  );
}

export default Icon;
