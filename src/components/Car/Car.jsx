import { motion } from "framer-motion";
import "../../styles/Car.css";
function Car(props) {
  // All Svg
  const Vsvg = {
    init: {
      x: "10%",
      y: "-7%",
      scale: 1.2,
      strokeDashoffset: 2000,
    },
    anime: {
      strokeDashoffset: 0,
      transition: {
        duration: 5,
      },
    },
    exit: {
      x: ["10%", "30%", "-100%"],
      transition: {
        duration: 3,
      },
    },
  };
  const Vsvg2 = {
    init: {
      x: "-100%",
      y: "-7%",
      scale: 1.2,
      strokeDashoffset: 0,
    },
    anime: {
      x: "10%",
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
    exit: {
      x: ["10%", "30%", "-100%"],
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };
  // Tire
  const move = {
    init: {
      rotate: "-400deg",
    },
    anime: {
      rotate: "0deg",
      transition: {
        duration: 2,
        ease: "easeOut",
      },
    },
    exit: {
      rotate: ["0deg", "200deg", "-500deg"],
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };
  // Path
  const Vpath = {
    init: {
      opacity: 0,
      scale: 0.9999,
    },
    anime: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        opacity: {
          duration: 3,
          yoyo: Infinity,
        },
        scale: {
          duration: 10,
          yoyo: Infinity,
        },
      },
    },
  };
  return (
    <motion.svg
      variants={props.check ? Vsvg : Vsvg2}
      initial="init"
      animate="anime"
      exit="exit"
      className="structure"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 914.59 299.57"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="564.59"
          x2="688.14"
          y1="181.32"
          y2="181.32"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#f15a24"></stop>
          <stop offset="0.11" stopColor="#f36f24"></stop>
          <stop offset="0.41" stopColor="#f7a522"></stop>
          <stop offset="0.67" stopColor="#facd22"></stop>
          <stop offset="0.87" stopColor="#fbe521"></stop>
          <stop offset="1" stopColor="#fcee21"></stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="568.31"
          x2="683.64"
          y1="193.8"
          y2="193.8"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-3"
          x1="562.15"
          x2="690.54"
          y1="188.86"
          y2="188.86"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-4"
          x1="566.41"
          x2="673.78"
          y1="174.49"
          y2="174.49"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-5"
          x1="603.53"
          x2="636.09"
          y1="187.15"
          y2="187.15"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-6"
          x1="586.47"
          x2="670.56"
          y1="139.58"
          y2="139.58"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="603.62"
          x2="622.84"
          y1="179.9"
          y2="179.9"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-8"
          x1="638.31"
          x2="693.32"
          y1="167.15"
          y2="167.15"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-9"
          x1="613.37"
          x2="635.64"
          y1="185.62"
          y2="185.62"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-10"
          x1="558.83"
          x2="616.4"
          y1="158.93"
          y2="158.93"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-11"
          x1="612.92"
          x2="627.12"
          y1="186.08"
          y2="186.08"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-12"
          x1="588.1"
          x2="630.42"
          y1="144.23"
          y2="144.23"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-13"
          x1="562.08"
          x2="689.25"
          y1="193.52"
          y2="193.52"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-14"
          x1="557.39"
          x2="690.81"
          y1="185.29"
          y2="185.29"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-15"
          x1="588.46"
          x2="660.19"
          y1="181.9"
          y2="181.9"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-16"
          x1="644.58"
          x2="670.54"
          y1="213.91"
          y2="213.91"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-17"
          x1="575.82"
          x2="630.19"
          y1="178.56"
          y2="178.56"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-18"
          x1="564.13"
          x2="687.6"
          y1="177.98"
          y2="177.98"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-19"
          x1="561.87"
          x2="687.47"
          y1="184.44"
          y2="184.44"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-20"
          x1="577.19"
          x2="680.35"
          y1="183.77"
          y2="183.77"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-21"
          x1="582.95"
          x2="682.08"
          y1="198.77"
          y2="198.77"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-22"
          x1="617"
          x2="652.76"
          y1="188.51"
          y2="188.51"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-23"
          x1="582.61"
          x2="665.94"
          y1="136.37"
          y2="136.37"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-24"
          x1="620.7"
          x2="630.37"
          y1="193.63"
          y2="193.63"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-25"
          x1="600.58"
          x2="646.18"
          y1="143.17"
          y2="143.17"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-26"
          x1="617.01"
          x2="652.23"
          y1="180.18"
          y2="180.18"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-27"
          x1="571.05"
          x2="653.7"
          y1="162.63"
          y2="162.63"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-28"
          x1="608.97"
          x2="652.66"
          y1="188.07"
          y2="188.07"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-29"
          x1="600.93"
          x2="630.04"
          y1="153.05"
          y2="153.05"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-30"
          x1="579.46"
          x2="687.89"
          y1="181.43"
          y2="181.43"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-31"
          x1="572.93"
          x2="676.34"
          y1="191.83"
          y2="191.83"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-32"
          x1="644.91"
          x2="670.17"
          y1="213.16"
          y2="213.16"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-33"
          x1="571.65"
          x2="645.15"
          y1="208.61"
          y2="208.61"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-34"
          x1="601.11"
          x2="673.19"
          y1="183.1"
          y2="183.1"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-35"
          x1="579.2"
          x2="664.43"
          y1="191.5"
          y2="191.5"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-36"
          x1="576.27"
          x2="665.16"
          y1="177.99"
          y2="177.99"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-37"
          x1="75.34"
          x2="200.04"
          y1="179.47"
          y2="179.47"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-38"
          x1="77.8"
          x2="202.5"
          y1="182.86"
          y2="182.86"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-39"
          x1="88.88"
          x2="196.35"
          y1="181.78"
          y2="181.78"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-40"
          x1="70.41"
          x2="192.65"
          y1="193.93"
          y2="193.93"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-41"
          x1="129.49"
          x2="152.04"
          y1="185.93"
          y2="185.93"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-42"
          x1="99.34"
          x2="183.42"
          y1="137.01"
          y2="137.01"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-43"
          x1="121.49"
          x2="134.07"
          y1="192.68"
          y2="192.68"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-44"
          x1="112.26"
          x2="159.42"
          y1="141.52"
          y2="141.52"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-45"
          x1="121.49"
          x2="151.15"
          y1="179.32"
          y2="179.32"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-46"
          x1="70.89"
          x2="129.26"
          y1="156.36"
          y2="156.36"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-47"
          x1="121.77"
          x2="151.62"
          y1="187.1"
          y2="187.1"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-48"
          x1="100.16"
          x2="143.28"
          y1="141.66"
          y2="141.66"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-49"
          x1="93.54"
          x2="201.13"
          y1="178.48"
          y2="178.48"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-50"
          x1="68.04"
          x2="203.06"
          y1="181.46"
          y2="181.46"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-51"
          x1="84.8"
          x2="171.52"
          y1="191.37"
          y2="191.37"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-52"
          x1="157.44"
          x2="182.6"
          y1="211.03"
          y2="211.03"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-53"
          x1="96.06"
          x2="158.39"
          y1="199.47"
          y2="199.47"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-54"
          x1="76.19"
          x2="199.66"
          y1="175.4"
          y2="175.4"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-55"
          x1="73.93"
          x2="199.53"
          y1="181.86"
          y2="181.86"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-56"
          x1="89.25"
          x2="192.42"
          y1="181.2"
          y2="181.2"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-57"
          x1="95.82"
          x2="194.95"
          y1="196.19"
          y2="196.19"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-58"
          x1="129.87"
          x2="164.82"
          y1="185.93"
          y2="185.93"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-59"
          x1="95.47"
          x2="178.81"
          y1="133.79"
          y2="133.79"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-60"
          x1="133.56"
          x2="143.24"
          y1="191.05"
          y2="191.05"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-61"
          x1="112.64"
          x2="159.05"
          y1="140.6"
          y2="140.6"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-62"
          x1="129.87"
          x2="164.3"
          y1="177.6"
          y2="177.6"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-63"
          x1="83.92"
          x2="166.57"
          y1="160.05"
          y2="160.05"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-64"
          x1="121.83"
          x2="164.72"
          y1="185.49"
          y2="185.49"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-65"
          x1="113.8"
          x2="142.91"
          y1="150.48"
          y2="150.48"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-66"
          x1="93.92"
          x2="200.76"
          y1="178.48"
          y2="178.48"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-67"
          x1="84.99"
          x2="189.2"
          y1="189.25"
          y2="189.25"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-68"
          x1="157.77"
          x2="182.23"
          y1="210.58"
          y2="210.58"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-69"
          x1="83.71"
          x2="158.02"
          y1="206.04"
          y2="206.04"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-70"
          x1="84.68"
          x2="169.92"
          y1="176.51"
          y2="176.51"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-71"
          x1="100.02"
          x2="186.72"
          y1="188.92"
          y2="188.92"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <linearGradient
          id="linear-gradient-72"
          x1="98.56"
          x2="185.26"
          y1="174.68"
          y2="174.68"
          xlinkHref="#linear-gradient"
        ></linearGradient>
        <radialGradient
          id="radial-gradient"
          cx="265.02"
          cy="62.01"
          r="17.51"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="0.06" stopColor="#fffde1" stopOpacity="0.86"></stop>
          <stop offset="0.16" stopColor="#fef9b4" stopOpacity="0.66"></stop>
          <stop offset="0.26" stopColor="#fdf68d" stopOpacity="0.49"></stop>
          <stop offset="0.37" stopColor="#fdf46c" stopOpacity="0.34"></stop>
          <stop offset="0.48" stopColor="#fdf250" stopOpacity="0.21"></stop>
          <stop offset="0.59" stopColor="#fcf03c" stopOpacity="0.12"></stop>
          <stop offset="0.71" stopColor="#fcef2d" stopOpacity="0.05"></stop>
          <stop offset="0.84" stopColor="#fcee24" stopOpacity="0.01"></stop>
          <stop offset="1" stopColor="#fcee21" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="radial-gradient-2"
          cx="265.02"
          cy="62.01"
          r="2.16"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff"></stop>
          <stop offset="0.09" stopColor="#fffef4" stopOpacity="0.95"></stop>
          <stop offset="0.26" stopColor="#fefcd5" stopOpacity="0.81"></stop>
          <stop offset="0.48" stopColor="#fef8a4" stopOpacity="0.59"></stop>
          <stop offset="0.76" stopColor="#fdf361" stopOpacity="0.29"></stop>
          <stop offset="1" stopColor="#fcee21" stopOpacity="0"></stop>
        </radialGradient>
        <radialGradient
          id="radial-gradient-3"
          cx="335.35"
          cy="53.89"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-4"
          cx="335.35"
          cy="53.89"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-5"
          cx="368.99"
          cy="17.51"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-6"
          cx="368.99"
          cy="17.51"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-7"
          cx="439.15"
          cy="19.97"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-8"
          cx="439.15"
          cy="19.97"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-9"
          cx="547.06"
          cy="37.2"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-10"
          cx="547.06"
          cy="37.2"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-11"
          cx="464.59"
          cy="29.51"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-12"
          cx="464.59"
          cy="29.51"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-13"
          cx="506.79"
          cy="75.97"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-14"
          cx="506.79"
          cy="75.97"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-15"
          cx="453.31"
          cy="170.85"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-16"
          cx="453.31"
          cy="170.85"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-17"
          cx="330.83"
          cy="210.86"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-18"
          cx="330.83"
          cy="210.86"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-19"
          cx="298.01"
          cy="171.06"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-20"
          cx="298.01"
          cy="171.06"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-21"
          cx="274.62"
          cy="159.16"
          r="12.31"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-22"
          cx="274.62"
          cy="159.16"
          r="1.52"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-23"
          cx="415.76"
          cy="96.39"
          r="12.31"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-24"
          cx="415.76"
          cy="96.39"
          r="1.52"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-25"
          cx="462.05"
          cy="77.02"
          r="12.31"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-26"
          cx="462.05"
          cy="77.02"
          r="1.52"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-27"
          cx="487.43"
          cy="118.55"
          r="12.31"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-28"
          cx="487.43"
          cy="118.55"
          r="1.52"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-29"
          cx="521.62"
          cy="117.04"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-30"
          cx="521.62"
          cy="117.04"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-31"
          cx="547.57"
          cy="209.22"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-32"
          cx="547.57"
          cy="209.22"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-33"
          cx="728.92"
          cy="194.45"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-34"
          cx="728.92"
          cy="194.45"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-35"
          cx="678.05"
          cy="137.83"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-36"
          cx="678.05"
          cy="137.83"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-37"
          cx="344.89"
          cy="171.47"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-38"
          cx="344.89"
          cy="171.47"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-39"
          cx="65.07"
          cy="107.46"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-40"
          cx="65.07"
          cy="107.46"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-41"
          cx="60.96"
          cy="150.96"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-42"
          cx="60.96"
          cy="150.96"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-43"
          cx="23.33"
          cy="208.67"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-44"
          cx="23.33"
          cy="208.67"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-45"
          cx="55.53"
          cy="210.86"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-46"
          cx="55.53"
          cy="210.86"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-47"
          cx="17.51"
          cy="140.56"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-48"
          cx="17.51"
          cy="140.56"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-49"
          cx="192.56"
          cy="100.9"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-50"
          cx="192.56"
          cy="100.9"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-51"
          cx="291.03"
          cy="94.34"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-52"
          cx="291.03"
          cy="94.34"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-53"
          cx="444.48"
          cy="114.85"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-54"
          cx="444.48"
          cy="114.85"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-55"
          cx="442.33"
          cy="150.96"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-56"
          cx="442.33"
          cy="150.96"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-57"
          cx="489.92"
          cy="150.96"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-58"
          cx="489.92"
          cy="150.96"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-59"
          cx="435.76"
          cy="50.02"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-60"
          cx="435.76"
          cy="50.02"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-61"
          cx="443.97"
          cy="44.96"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-62"
          cx="443.97"
          cy="44.96"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-63"
          cx="471.32"
          cy="39.97"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-64"
          cx="471.32"
          cy="39.97"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-65"
          cx="491.26"
          cy="209.52"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-66"
          cx="491.26"
          cy="209.52"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-67"
          cx="627.89"
          cy="184.08"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-68"
          cx="627.89"
          cy="184.08"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-69"
          cx="731.28"
          cy="128.7"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-70"
          cx="731.28"
          cy="128.7"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-71"
          cx="742.36"
          cy="101.62"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-72"
          cx="742.36"
          cy="101.62"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-73"
          cx="666.04"
          cy="93"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-74"
          cx="666.04"
          cy="93"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-75"
          cx="583.57"
          cy="123.16"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-76"
          cx="583.57"
          cy="123.16"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-77"
          cx="650.04"
          cy="50.23"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-78"
          cx="650.04"
          cy="50.23"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-79"
          cx="392.79"
          cy="129.52"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-80"
          cx="392.79"
          cy="129.52"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-81"
          cx="557.11"
          cy="77.2"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-82"
          cx="557.11"
          cy="77.2"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-83"
          cx="312.78"
          cy="117.62"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-84"
          cx="312.78"
          cy="117.62"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-85"
          cx="342.73"
          cy="98.03"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-86"
          cx="342.73"
          cy="98.03"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-87"
          cx="362.84"
          cy="65.61"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-88"
          cx="362.84"
          cy="65.61"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-89"
          cx="227.85"
          cy="131.26"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-90"
          cx="227.85"
          cy="131.26"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-91"
          cx="246.72"
          cy="181.32"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-92"
          cx="246.72"
          cy="181.32"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-93"
          cx="128.97"
          cy="100.49"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-94"
          cx="128.97"
          cy="100.49"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-95"
          cx="30.5"
          cy="163.26"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-96"
          cx="30.5"
          cy="163.26"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-97"
          cx="214.62"
          cy="69.31"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-98"
          cx="214.62"
          cy="69.31"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-99"
          cx="367.66"
          cy="214.76"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-100"
          cx="367.66"
          cy="214.76"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-101"
          cx="416.28"
          cy="211.68"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-102"
          cx="416.28"
          cy="211.68"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-103"
          cx="445.92"
          cy="211.98"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-104"
          cx="445.92"
          cy="211.98"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-105"
          cx="133.07"
          cy="186.55"
          r="17.51"
          xlinkHref="#radial-gradient"
        ></radialGradient>
        <radialGradient
          id="radial-gradient-106"
          cx="133.07"
          cy="186.55"
          r="2.16"
          xlinkHref="#radial-gradient-2"
        ></radialGradient>
      </defs>
      <g style={{ isolation: "isolate" }}>
        <g data-name="Layer 2">
          <g fill="none" stroke="#fcee21" strokeMiterlimit="10">
            <path d="M552.39 215.59s-10.67-77.34 52.72-98.26c0 0 75.57-17.53 93.69 71.42a24.89 24.89 0 001.44 4.71l1.16 2.73a15.44 15.44 0 0012.85 9.35h0l13.34-3.86c7.1-4.06 13.52-13.55 18.24-20.22h0a13.1 13.1 0 002.4-7.22c.4-15.91.88-74.39-13.26-89.94-16.41-18-62.36-31.18-88-34 0 0-133.55-39.39-171.7-38.16l-82.89-2.31-28.91 9.85-98.08 43.7S63.68 65.47 16.9 141.16l.1 61.89 4.21 5.62a8.1 8.1 0 003.18 2.53 47.67 47.67 0 0030.5 2.8 7.91 7.91 0 005.56-5.06h0v-2.56L62.36 156s62.1-90.27 147.71-3.18l.27 63.9z"></path>
            <path d="M618.79 41.89L506.79 76l-187.48.82S287 74.52 280.53 71l-15.14-8.4M619.88 41.61C516.13 41.19 437.12 30 397.15 22.82c-18.82-3.36-29-5.83-29-5.83"></path>
            <path d="M330.63 76.69L397.15 22.82"></path>
          </g>
          <g
            fill="none"
            stroke="#cd8b02"
            strokeLinejoin="round"
            strokeWidth="0.5"
          >
            <path d="M279.14 167.37L194.15 129.08 453.31 170.85 279.14 167.37z"></path>
            <path d="M298.22 172.13L258.78 197.69 331.45 215.37 298.22 172.13z"></path>
            <path d="M453.31 170.85L524.7 72.07 536.18 215.37 453.31 170.85z"></path>
            <path d="M124.59 94.47L212.03 66.21 142.51 113.48 124.59 94.47z"></path>
            <path d="M695.13 143.63L710.93 167.74 747.83 137.01 695.13 143.63z"></path>
            <path d="M194.15 129.08L260.08 196.05 211.16 150.37 194.15 129.08z"></path>
            <path d="M212.03 66.21L194.15 129.08 168.22 74.37 212.03 66.21z"></path>
            <path d="M279.14 167.37L331.45 215.37 524.7 72.07 279.14 167.37z"></path>
            <path d="M265.46 63.02L194 128.59 300.61 108.01 265.46 63.02z"></path>
            <path d="M453.31 170.85L418.77 215.51 478.13 214.96 453.31 170.85z"></path>
            <path d="M524.7 72.07L564.02 146.58 536.18 215.37 524.7 72.07z"></path>
            <path d="M194.41 130.92L234.14 215.24 283.1 215.24 194.41 130.92z"></path>
            <path d="M298.22 172.13L265.46 63.02 300.61 108.01 298.22 172.13z"></path>
            <path d="M234.14 215.24L211.16 150.37 260.08 196.05 234.14 215.24z"></path>
            <path d="M180.8 127.43L124.59 94.47 212.03 66.21 180.8 127.43z"></path>
            <path d="M168.22 74.37L124.59 94.47 175.06 80.93 168.22 74.37z"></path>
            <path d="M83.97 92.69L124.59 94.47 50.47 108.56 83.97 92.69z"></path>
            <path d="M30.36 124.42L50.47 108.56 77.96 138.37 30.36 124.42z"></path>
            <path d="M124.59 94.47L95.46 123.88 50.47 108.56 135.12 77.92 124.59 94.47z"></path>
            <path d="M68.66 105.82L34.62 205.42 50.47 108.56 68.66 105.82z"></path>
            <path d="M17.51 149.18L50.88 138.78 61.54 156.15 34.62 205.42 17.51 149.18z"></path>
            <path d="M77.96 138.37L30.36 124.42 34.62 205.42"></path>
            <path d="M16.41 171.47L61.27 172.29 34.62 205.42 16.41 171.47z"></path>
            <path d="M38.57 213.87L34.62 205.42 16.14 200.74 38.57 213.87z"></path>
            <path d="M60.18 200.74L38.57 213.87 34.62 205.42 60.18 200.74z"></path>
            <path d="M16.14 200.74L60.18 200.74 38.57 213.87 16.14 200.74z"></path>
            <path d="M34.62 205.42L28.09 207.47 51.94 186.5 34.62 205.42z"></path>
            <path d="M60.45 179.47L15.93 182.14 56.35 158.96 60.45 179.47z"></path>
            <path d="M36.24 143.98L56.35 158.96 15.32 153.83 36.24 143.98z"></path>
            <path d="M74.19 128.73L68.66 105.82"></path>
            <path d="M125.89 114.23L265.46 63.02 104.35 85.92 125.89 114.23z"></path>
            <path d="M196.05 98.85L158.92 117.72 300.61 108.01 196.05 98.85z"></path>
            <path d="M194 128.59L344.17 143.98 346.01 97 196.05 98.85 194 128.59z"></path>
            <path d="M300.61 108.01L279.14 167.37 346.01 97 300.61 108.01z"></path>
            <path d="M344.17 143.98L320.41 119.9 279.14 167.37 380.07 76.49 344.17 143.98z"></path>
            <path d="M298.22 172.13L279.71 167.2 453.31 170.85 298.22 172.13z"></path>
            <path d="M210.82 214.35L244.43 180.6 244.94 180.09 211.03 184.4 210.82 214.35z"></path>
            <path d="M258.83 214.96L244.43 180.6 242.62 214.96 258.83 214.96z"></path>
            <path d="M310.11 214.76L244.43 180.6 279.14 167.37 310.11 214.76z"></path>
            <path d="M344.17 143.98L369.81 214.76 279.14 167.37 344.17 143.98z"></path>
            <path d="M379.25 77.51L331.71 214.53 344.17 143.98 380.07 77.1 453.31 117.31 423.97 76.28 344.17 143.98 453.31 117.31 506.58 75.73 461.72 76.56 453.31 117.31"></path>
            <path d="M418.77 215.51L404.07 153.01 453.31 170.85 418.77 215.51z"></path>
            <path d="M380.68 172.09L418.77 215.51 418.22 213.17 408.58 172.5 380.68 172.09z"></path>
            <path d="M445.92 214.14L418.77 215.51 344.17 143.98 445.92 214.14z"></path>
            <path d="M470.74 157.93L462.4 76.49 344.17 143.98 470.74 157.93z"></path>
            <path d="M695.13 143.63L742.36 101.31 651.89 50.84 695.13 143.63z"></path>
            <path d="M688.68 69.24L695.13 143.63 556.97 78.06 688.68 69.24z"></path>
            <path d="M692.51 166.55L695.13 143.63 732.24 196.16 692.51 166.55z"></path>
            <path d="M556.97 78.06L649.43 52.69 526.61 70.33 556.97 78.06z"></path>
            <path d="M583.16 128.8L557.11 79.36 524.7 72.07 583.16 128.8z"></path>
            <path d="M688.68 69.24L713.09 68.35 525.93 71.97 688.68 69.24z"></path>
            <path d="M536.18 215.37L555.54 169.01 524.63 214.41 536.18 215.37z"></path>
            <path d="M536.19 215.37L524.08 215.17"></path>
            <path d="M506.58 75.73L444.21 216.06 524.7 72.07 506.58 75.73z"></path>
            <path d="M551.71 124.97L536.28 214.34 506.58 75.73 524.7 72.07 551.71 124.97z"></path>
            <path d="M445.92 214.14L487.43 117.04 453.31 117.31 445.92 214.14z"></path>
            <path d="M710.93 167.74L699.96 188.98 732.24 196.16 710.93 167.74z"></path>
            <path d="M747.83 176.12L695.86 177.21 747.83 137.01 747.83 176.12z"></path>
            <path d="M659.75 92.15L660.59 92.94 747.88 176.68 712.32 69.19 659.75 92.15z"></path>
            <path d="M583.16 128.8L549.52 62.61 524.7 72.07 572.77 137.55 536.28 214.34 487.43 117.04 460.08 76.28"></path>
            <path d="M675.89 137.83L712.27 68.62 742.36 101.31 675.89 137.83z"></path>
            <path d="M718.29 88.86L675.89 137.83 669.29 119.16 659.75 92.15 742.36 101.31 557.93 77.99"></path>
            <path d="M637.6 115.94L651.89 50.84 688.06 67.87 637.6 115.94z"></path>
            <path d="M617.22 41.54L660.14 92.39 556.97 78.06 617.22 41.54z"></path>
            <path d="M344.17 77.92L346.01 97 273.6 89.82 344.17 77.92z"></path>
            <path d="M212.03 66.21L273.6 89.82 124.59 94.47 212.03 66.21z"></path>
          </g>
          <g fill="none" stroke="#cd8b02">
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M57.91 209.74L17 190.75 59.37 187.1 57.91 209.74z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M23.58 208.28L62.37 156 16.9 141.16 23.58 208.28z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M17.73 170.3L98.81 88.49 57.91 209.74 53.52 179.06 68.86 148.38 35.26 120.63 53.52 175.41"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M55.72 106.02L82.74 137.43 123.65 82.64 277.77 71.69 112.69 119.17 264.62 97.98 328.17 81.18 277.04 125.74 210.07 152.82 306.99 78.26 210.34 216.72 277.04 125.74 98.81 88.49 164.55 120.63 290.19 76.8 210.07 152.82 182.08 70.23 108.31 118.44 244.17 65.84"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M550.96 210.47L440.66 76.8 327.91 145.3 210.34 216.72 552.39 215.59 274.85 128.66"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M306.26 104.56L327.91 145.3 469.88 111.86 306.26 104.56z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M269.74 214.13L390.99 108.21 349.36 214.86 269.74 214.13z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M528.32 71.69L399.03 167.38 468.42 77.53 328.17 76.8 328.17 81.18 474.26 213.4 259.51 147.66"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M620.35 51.24c4.38 0 96.42 38 96.42 38l14.61 83.27-11 20.45-23.37-38L651 99.45s-97.85 17.55-97.85 22.64-9.5 54.78-9.5 57.7-50.4 21.21-50.4 21.21l-124.17-4.39s-111.76-1.46-116.87-4.38S204 125 198.88 121.36 139 101.64 139 101.64l-81.82 35.79-2.92 58.43s-21.92 6.58-24.11 2.93 11.69-75.24 11.69-75.24L134.6 87l129.29-14.58L325.25 87l92 2.92 78.89.73s48.94-7.3 54.78-8.77 69.43-30.64 69.43-30.64z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M629.12 62.19s84-6.57 108.83 114.68l-2.19-42.36s-1.46-38-7.3-48.94-113.22-41.64-113.22-41.64"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M651.76 93.6L550.96 81.91 453.08 203.9 651.76 93.6z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M434.82 173.95L485.22 128.66 522.47 211.93 434.82 173.95z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M553.88 91.41L452.35 138.16 537.81 150.58 553.88 91.41z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M381.5 61.46L436.28 40.28 421.67 66.58 381.5 61.46z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M447.97 65.11L498.37 50.51 436.28 40.28 447.97 65.11z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M514.44 61.46L447.97 65.11 541.46 41.01 514.44 61.46z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M436.28 40.28L396.1 22.75 362.63 50.51 331.82 76.07 421.67 66.58 436.28 40.28z"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M523.93 52.7L362.63 50.51 493.25 36.63 526.85 52.7"
            ></path>
            <path
              strokeMiterlimit="10"
              strokeWidth="0.25"
              d="M434.82 20.56L515.9 22l-24.11 10.24-59.89-8.76s-19-1.46-26.3-4.38-21.84-6.81-17.53-8 175.31 24.8 175.31 24.8"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M463.36 16.93L465.21 17.25 481.96 20.21 463.9 30.88 463.36 16.93z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M481.96 20.21L516.15 16.38 511.77 36.89 481.96 20.21z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M500.9 75.67L524.7 49.82 472.38 39.56 500.9 75.67z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M371.04 44.07L403.25 75.87 383.35 34.84 384.07 35.11 410.84 44.9 426.24 66.55 537.01 39.36"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M330.83 76.49L402.62 76.37 500.08 74.85 330.83 76.49z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M508.49 45.3L410.43 70.33 475.05 73.82 508.49 45.3z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M508.49 45.3L391.56 27.25 472.38 39.56 508.49 45.3z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M404.67 75.96L508.49 45.3 500.9 75.67 404.67 75.96z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M398.53 36.69L508.49 45.3 410.23 45.3 410.23 69.31 403.25 75.87 391.56 27.25 427.25 76.08 392.77 68.99"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M391.97 28.28L409.81 53.72 370.84 44.9 391.97 28.28z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M410.23 69.31L523.88 49.61 549.52 62.61 410.23 69.31z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M558.96 60.08L524.7 49.82 553.21 61.31"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M538.65 65.82L523.88 50.64 517.93 73"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M597.73 40.59L590.96 51.46 617.22 41.54 597.73 40.59z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M591.37 50.02L560.6 45.1 580.09 44.69 542.34 62.74 546.03 44.48 559.57 58.43"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M347.93 27.05L335.35 56.04 293.77 49.75 347.93 27.05z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M343.55 65.34L324.4 36.89 330.83 76.49 343.55 65.34z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M384.31 26.23L346.01 46.74 371.18 22.4 384.31 26.23z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M347.93 27.05L346.01 46.74 343.55 65.34 336.17 53.85 347.93 27.05z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M385.68 26.23L367.9 45.37 371.18 22.4 385.68 26.23z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M347.93 27.05L369.81 16.93 343.83 63.7 367.9 45.37 370.36 33.34 347.93 27.05z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M562.44 41L547.3 42.87 571.68 29.23 523.88 50.64"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M417.2 60.21L468.62 52.28 442.09 64.04 417.2 60.21z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M437.17 55.02L520.59 61.31 451.05 30.06 431.08 18.84 384.58 18.57 431.63 10.36 437.17 55.02z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M541.86 23.49L514.23 26.23 524.7 49.82 541.86 23.49z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M402.62 76.37L403.25 75.87 398.53 36.69 410.84 44.9 402.62 76.37z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M265.46 63.02L335.35 56.04 330.83 76.49 265.46 63.02z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeWidth="0.5"
              d="M324.4 36.89L295.34 74.23 336.17 53.85 324.4 36.89z"
            ></path>
          </g>
          <g fill="none">
            <g
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              data-name="lines"
            >
              <path d="M376.68 19.05L274.73 67.77"></path>
              <path d="M267.65 63.36L370.53 17.82"></path>
              <path d="M371.55 17.92L269.19 64.18"></path>
              <path d="M270.21 65.1l102.68-46.67c-.63-.27-.66-.55-.16-.84a5.53 5.53 0 011.2-.44c16.41-4.48 159.84-8.41 243.29 24.39"></path>
              <path d="M272.06 65.92L374.12 18.53 617.22 41.54"></path>
              <path d="M273.19 66.74L375.25 18.84"></path>
              <path d="M277.5 69.1L377.5 19.35"></path>
              <path d="M378.43 19.56L279.85 70.64"></path>
              <path d="M282.01 71.67L379.66 19.97"></path>
              <path d="M380.99 19.76L284.88 72.28"></path>
              <path d="M294.01 73.82L383.56 20.38 381.92 20.28 287.65 73.31"></path>
              <path d="M297.09 74.74L384.79 20.89 386.32 21.3 301.6 75.05"></path>
              <path d="M303.75 75.46L388 21.3 390.05 21.61 306.63 75.87"></path>
              <path d="M394.43 22.53L329.09 76.49"></path>
              <path d="M326.73 76.39L393.4 22.12 324.27 76.49"></path>
              <path d="M322.01 76.49L391.76 21.82 309.6 75.87"></path>
              <path d="M318.93 76.49L389.4 21.2"></path>
              <path d="M316.17 76.18L386.33 20.69"></path>
              <path d="M313.91 75.67L382.53 19.94"></path>
              <path d="M290.93 73.31L380.48 19.49"></path>
              <path d="M276.78 68.28l100.48-49.44L619 41.82c-35.54-18.1-247.42-30.59-249.33-24.76"></path>
            </g>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M371 17.35c2.59-1.77 78-21.72 244.59 23"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M312 117.28L227.59 132.98 453.31 170.85 312 117.28z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M298.22 172.13L258.78 197.69 348.63 177.24 298.22 172.13z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M453.31 170.85L521.62 117.04 490.23 215.17 453.31 170.85z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M128.97 102.13L212.03 66.21 142.51 113.48 128.97 102.13z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M731.03 127.42L710.93 167.74 747.83 137.01 731.03 127.42z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M227.59 132.98L260.08 196.05 211.16 150.37 227.59 132.98z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M212.03 66.21L227.59 132.98 168.22 74.37 212.03 66.21z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M312 117.28L348.63 177.24 521.62 117.04 312 117.28z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M265.46 63.02L227.44 132.49 300.61 108.01 265.46 63.02z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M453.31 170.85L418.77 215.51 478.13 214.96 453.31 170.85z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M521.62 117.04L564.02 146.58 490.23 215.17 521.62 117.04z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M227.85 134.82L234.14 215.24 283.1 215.24 227.85 134.82z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M298.22 172.13L265.46 63.02 300.61 108.01 298.22 172.13z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M234.14 215.24L211.16 150.37 260.08 196.05 234.14 215.24z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M180.8 127.43L128.97 102.13 212.03 66.21 180.8 127.43z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M168.22 74.37L128.97 102.13 175.06 80.93 168.22 74.37z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M83.97 92.69L128.97 102.13 84.52 113.48 83.97 92.69z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M30.36 124.42L84.52 113.48 77.96 138.37 30.36 124.42z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M128.97 102.13L95.46 123.88 84.52 113.48 135.12 77.92 128.97 102.13z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M68.66 105.82L29.83 163.71 84.52 113.48 68.66 105.82z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M17.51 140.56L50.88 130.17 61.54 156.15 29.83 163.71 17.51 140.56z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M30.36 124.42L29.83 163.71 77.96 138.37 30.36 124.42z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M16.41 171.47L61.27 172.29 29.83 163.71 16.41 171.47z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M38.57 213.87L29.83 163.71 16.14 200.74 38.57 213.87z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M60.18 200.74L38.57 213.87 29.83 163.71 60.18 200.74z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M16.14 200.74L60.18 200.74 38.57 213.87 16.14 200.74z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M29.83 163.71L28.09 207.47 51.94 186.5 29.83 163.71z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M60.45 179.47L15.93 182.14 56.35 158.96 60.45 179.47z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M36.24 135.36L56.35 158.96 15.32 153.83 36.24 135.36z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M68.66 105.82L159.88 81.34 78.57 136.39 68.66 105.82z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M125.89 114.23L265.46 63.02 104.35 85.92 125.89 114.23z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M196.05 98.85L158.92 117.72 300.61 108.01 196.05 98.85z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M227.44 132.49L393.2 130.65 346.01 97 196.05 98.85 227.44 132.49z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M300.61 108.01L312 117.28 346.01 97 300.61 108.01z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M393.2 130.65L320.41 119.9 312 117.28 380.07 76.49 393.2 130.65z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M298.22 172.13L312.57 117.11 453.31 170.85 298.22 172.13z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M210.82 214.35L244.43 180.6 244.94 180.09 211.03 184.4 210.82 214.35z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M258.83 214.96L244.43 180.6 242.62 214.96 258.83 214.96z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M310.11 214.76L244.43 180.6 312 117.28 310.11 214.76z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M393.2 130.65L369.81 214.76 312 117.28 393.2 130.65z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M379.25 77.51L348.89 176.39 393.2 130.65 380.07 77.1 453.31 117.31 423.97 76.28 393.2 130.65 453.31 117.31 506.58 75.73 461.72 76.56 453.31 117.31"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M418.77 215.51L404.07 153.01 453.31 170.85 418.77 215.51z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M380.68 172.09L418.77 215.51 418.22 213.17 408.58 172.5 380.68 172.09z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M445.92 214.14L418.77 215.51 393.2 130.65 445.92 214.14z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M470.74 157.93L462.4 76.49 393.2 130.65 470.74 157.93z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M651.89 50.84L731.03 127.42 742.36 101.31 651.89 50.84z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M580.15 53.17L626.11 114.99 731.03 127.42 580.15 53.17z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M692.51 166.55L731.03 127.42 732.24 196.16 692.51 166.55z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M580.15 53.17L649.43 52.69 523.53 115.31 580.15 53.17z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M583.16 128.8L580.29 54.47 521.62 117.04 583.16 128.8z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M626.11 114.99L713.09 68.35 522.85 116.95 626.11 114.99z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M490.23 215.17L555.54 169.01 524.63 214.41 490.23 215.17z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M551.98 214.41L490.23 215.17 478.13 214.96 551.98 214.41z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M506.58 75.73L444.21 216.06 521.62 117.04 506.58 75.73z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M551.71 124.97L490.33 214.13 506.58 75.73 521.62 117.04 551.71 124.97z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M445.92 214.14L487.43 117.04 453.31 117.31 445.92 214.14z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M710.93 167.74L699.96 188.98 732.24 196.16 710.93 167.74z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M747.83 176.12L695.86 177.21 747.83 137.01 747.83 176.12z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M712.27 68.62L659.75 92.15 660.59 92.94 747.83 176.12 712.27 68.62z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M583.16 128.8L549.52 62.61 521.62 117.04 572.77 137.55 490.33 214.13 487.43 117.04 460.08 76.28"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M712.27 68.62L675.89 137.83 742.36 101.31 712.27 68.62z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M718.29 88.86L675.89 137.83 669.29 119.16 659.75 92.15 742.36 101.31 581.11 53.1"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M637.6 115.94L651.89 50.84 625.49 113.62 637.6 115.94z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M617.22 41.54L660.14 92.39 580.15 53.17 617.22 41.54z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M344.17 77.92L346.01 97 273.6 89.82 344.17 77.92z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M212.03 66.21L273.6 89.82 128.97 102.13 212.03 66.21z"
            ></path>
            <path
              stroke="#d6cc33"
              strokeMiterlimit="10"
              strokeWidth="0.75"
              d="M712.27 68.62s54.16 32.83 20.51 128.56M711.18 68.9s54.15 32.82 20.51 128.56M710.9 68.9s54.16 32.82 20.52 128.56M709.81 69.17S764 102 730.32 197.73"
            ></path>
            <g stroke="#fcee21" strokeLinejoin="round">
              <path d="M463.35 17l1.85.33 16.74 3-18.05 10.58c-.22-5.56-.33-8.34-.54-13.91zM481.94 20.28l34.17-3.82-4.38 20.45zM500.87 75.57l47-36h-75.5zM371.08 44.07c-4.09 9-6.14 13.45-10.24 22.41q11.28-15.8 22.54-31.61l.73.26 26.75 9.76-50 21.59 110.69-27.11M330.89 76.39L360.21 67l139.84 7.77z"></path>
              <path d="M443.05 45.3l-32.6 25L475 73.73zM443.05 45.3l-51.47-18 80.79 12.27z"></path>
              <path d="M362.26 66.57l80.79-21.27 57.82 30.27z"></path>
              <path d="M398.56 36.71l44.49 8.59h-32.81v23.93l-49.4-2.75 30.74-39.18 1.23 47.7-42.44-15.38"></path>
              <path d="M392 28.32q8.92 12.68 17.83 25.37l-38.95-8.8zM410.24 69.23L547 39.37c1 9.27 1.48 13.91 2.46 23.18zM558.89 60l-11.07-20.43c2.13 8.68 3.2 13 5.33 21.68"></path>
              <path d="M538.59 65.75c3.37-10.14 5-15.21 8.41-25.36l-29.12 32.52M597.64 40.6c-2.7 4.33-4.06 6.5-6.76 10.84l26.24-9.89zM591.29 50l-14.36-8.38 19.48-.41-37.72 18c1.47-7.28 2.21-10.92 3.69-18.21l13.53 13.91M348 27.09L335.41 56l-41.56-6.27z"></path>
              <path d="M343.61 65.28l-19.14-28.37 6.42 39.48zM384.34 26.28l-38.27 20.45 25.15-24.27z"></path>
              <path d="M348 27.09c-.76 7.86-1.15 11.79-1.91 19.64-1 7.42-1.48 11.13-2.46 18.55-3-4.58-4.43-6.88-7.38-11.46Q342.1 40.46 348 27.09zM385.71 26.28l-17.77 19.09c1.31-9.17 2-13.75 3.28-22.91z"></path>
              <path d="M348 27.09L369.85 17l-26 46.64 24.06-18.27c1-4.8 1.47-7.2 2.46-12zM562.38 41l1.26-1.6 8-10.12L547 40.39"></path>
              <path d="M578.44 40.73l-6.84-11.45-65.06 7.63 89.87 4.3zM410.86 25.19l51.39-7.91L435.73 29z"></path>
              <path d="M430.81 20l83.38 6.28L451 30.09l-20-11.18-46.48-.27 47-8.18c-.21 3.82-.38 5.73-.71 9.54z"></path>
              <path d="M541.8 23.55l-27.61 2.73 33.63 13.29zM360.21 67l.63-.5 37.72-29.77 12.3 8.18zM265.56 63l69.85-7c-1.81 8.16-2.71 12.24-4.52 20.39z"></path>
              <path d="M324.47 36.91l-29.05 37.23 40.81-20.32c-4.71-6.76-7.06-10.14-11.76-16.91z"></path>
            </g>
            <path
              stroke="#fcee21"
              strokeLinejoin="round"
              strokeWidth="0.25"
              d="M89.38 136.39L73.78 143l24.42-16.87zm-28.31 73.85l11.07-13.13-10.66-25.23zm4.51-58.46l-4.31 36.92 12.51 17zM75 143l-13.73 45.7 9.85 6.36zm-6.57 7.39l3.69 15.18 7.8-27.69zm-6.36 49.85l8.41-18.46-7.38-25.44zm11.69 5.54l-5.68 2-7 2.49m7-2.49l5.07-63.15-8.62 64.62L66.19 151m104.63-24.62L209 157.93l-19.49-22.16zm35.9 23.18l-3.9 42.26 6.57 23.39zm-4.92-5.74l.61 30.36 8.59 31.14zm0 0l-4.11 11.69 12.11 32.62zm8.33 30.16l-.33-21.75L190.1 135l20.11 43.91zm-.47 43.62l-7-31.25-6 23.59 13.4 7.59m.14-7.32l-11.22-5.94 11.42 12.92zm-.27-5.19L200.7 199l9.1 14.63zm.88-4.58l-9.5-4.45 9.16 13.2zm-.47-8.76l-7.6-6 7.73 12.44zm.27 23.73l-13.61-6.9 12.65 7.72.47-2.47.83-4.43-12.71-3.33L210 216.26m348.61-42.81l-2.39-4.65-4.31 45.61zm-.82 12.79L556 171.61l-4.11 43.28zm-4.51 30.16l-1.64-.55 9.16-13.2-1.91-7.93-7.73 20.93 2-.14 6.36-17.92-1.23-8.75-5.62 27.16m-.55-1.92l9.16-8.75m.69 2.05l-10.13 5.68m11.08-3.9l-10.8 2.73m11.49-1.3l-11.9-.75 13.2 3.83-13.48-1.43 13.57 3.27-12.85-.14 12-3.14-12.51-1.58 9.71-6.29-9.64-1 8.34-3.41-8.34-3 6.9-2.67-6.29-2.39 5.75-1.85-5.68-3.15 5.4-.68-5.95 3.42 6.71 2.53-6.55 2.77 7.25 2.18-7.32 2.67s9.71 1.92 8.76 2.12-10.4 4-10.4 4l11.56 1.23-9.51 1.23 12.57 3.14M696 177.62l-9.84 30.78s16.61-6.16 17.85-6.57zm-2.87-6.15L689 202.65l10.69-8.65M689 157.11v45.54l8.21-16.82m-8.11-16.41l2.26-4-1.75 8.72 3.8-4.52-2.56 9.65 4.71-3.59-5 14 7.28-6.16-7.9 10.79 8.62-6.79-8.82 10 9.13-5.12-11.53 10.6 13.48-7.09s-.41.21-1.54.93l-12.31 9 15.08-8.2m-15.7 10l16.62-7.8"
            ></path>
          </g>
          <motion.g data-name="tire front" className="tire" variants={move}>
            <g>
              <path
                fill="none"
                stroke="url(#linear-gradient)"
                strokeLinejoin="round"
                d="M687.64 186.79L635.83 119.16 565.09 174.22 594.83 243.48 657.75 241.53 687.64 186.79z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-2)"
                strokeLinejoin="round"
                d="M677.07 145.01L584.99 136.14 568.81 220.93 631.78 251.46 683.14 215.37 677.07 145.01z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-3)"
                strokeLinejoin="round"
                d="M562.8 157.15L656.1 127.49 690.03 172.68 613.52 250.24 562.65 209.62 562.8 157.15z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-4)"
                strokeLinejoin="round"
                d="M610.58 120.37L673.28 228.61 566.91 194.18 610.58 120.37z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-5)"
                strokeLinejoin="round"
                d="M635.59 174.69L622.56 178.39 604.03 187.48 626.67 199.61 635.59 174.69z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-6)"
                strokeLinejoin="round"
                d="M586.97 155.58L670.06 136.5 599.9 123.58 586.97 155.58z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-7)"
                strokeLinejoin="round"
                d="M622.56 178.39L613.87 172.54 604.03 187.48"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-8)"
                strokeLinejoin="round"
                d="M677.29 145.78L638.81 172.5 692.82 188.52 677.29 145.78z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-9)"
                strokeLinejoin="round"
                d="M635.59 174.69L613.87 172.54 622.56 178.88 627.01 199.09"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-10)"
                strokeLinejoin="round"
                d="M592.02 145.05L615.9 167.89 559.33 172.82 592.02 145.05z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-11)"
                strokeLinejoin="round"
                d="M626.67 199.61L613.37 172.54"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-12)"
                strokeLinejoin="round"
                d="M588.6 170.35L620.75 118.11 629.92 145.87 588.6 170.35z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-13)"
                strokeLinejoin="round"
                d="M688.75 199.92L638.81 172.5 648.29 244.51 562.58 156.38 654.04 142.52 688.75 199.92z"
              ></path>
              <path
                fill="url(#linear-gradient-14)"
                d="M624.74 119.58a65.87 65.87 0 0138.87 12.75 64 64 0 0123.67 34.32 66.46 66.46 0 01-5.73 50.35 64.68 64.68 0 01-56.89 34 66.69 66.69 0 01-63.77-48.49 64.07 64.07 0 015.93-49.51 65.81 65.81 0 0139.55-30.8 67.23 67.23 0 0118.37-2.58m0-1a68.5 68.5 0 00-18.64 2.61c-35.43 10.06-56.23 46.16-46.18 81.59A67.79 67.79 0 00624.66 252a65.19 65.19 0 0017.84-2.49c35.43-10 55.79-47.7 45.74-83.13a65.67 65.67 0 00-63.5-47.8z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-15)"
                strokeLinejoin="round"
                d="M618 132.98L588.96 230.57 659.68 203.25 618 132.98"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-16)"
                strokeLinejoin="round"
                d="M645.03 202.56L662.49 239.41 670.04 188.41 645.03 202.56"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-17)"
                strokeLinejoin="round"
                d="M576.32 195.77L629.69 147.13 592.54 152.98 613.4 209.99 576.32 195.77z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-18)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M638.74 119.07L564.25 154.35 583.96 236.89 658.71 227.18 687.48 168.51 638.74 119.07z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-19)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M595.66 117.84L562 204 631.42 251.04 687.34 204.82 670.06 136.5 595.66 117.84z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-20)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M580.39 236.82L577.31 138.97 630.05 118.66 680.23 220.27 617.35 248.89 580.39 236.82z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-21)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M583.08 178.97L681.96 154.56 617.13 242.98 583.08 178.97z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-22)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M617.13 171.59L630.29 181.91 620.82 205.44 652.64 183.76 617.13 171.59z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-23)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M582.73 149.84L665.82 130.76 596.82 122.9 582.73 149.84z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-24)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M630.29 181.91L622.29 188.68 620.82 205.44"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-25)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M600.7 123.58L640.93 166.05 646.05 120.3 600.7 123.58z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-26)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M617.13 171.59L622.29 188.68 630.77 182.05 652.23 183.28"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-27)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M586.97 139.31L653.58 179.18 571.18 185.95 586.97 139.31z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-28)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M652.64 183.76L608.99 192.37"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-29)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M601.06 185.74L621.37 120.37 629.92 145.87 601.06 185.74z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-30)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M658.36 126.04L640.93 166.05 687.77 178.42 579.59 236.82 586.97 139.31 658.36 126.04z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-31)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M573.01 177.12L644.69 229.3 676.21 154.35 597.23 175.28"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-32)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M645.03 202.56L648.38 237.92 670.04 188.41 645.03 202.56"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-33)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M621.23 234.36L600.86 182.87 571.77 222.32 645.03 202.56 621.23 234.36z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-34)"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M606.47 134.89L601.36 231.31 672.94 194.06 606.47 134.89z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-35)"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M664.18 148.77L579.45 165.57 639.34 234.23 664.18 148.77z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-36)"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M644.46 138.54L576.52 197.71 664.91 217.43 644.46 138.54z"
              ></path>
            </g>
          </motion.g>
          <motion.g data-name="tire back" className="tire" variants={move}>
            <g>
              <path
                fill="none"
                stroke="url(#linear-gradient-37)"
                strokeLinejoin="round"
                d="M155.84 122.23L75.84 153.62 110.3 236.71 185.04 227 199.54 165.93 155.84 122.23z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-38)"
                strokeLinejoin="round"
                d="M112.76 121L78.3 207.17 156.25 244.71 202 193.63 182.92 133.93 112.76 121z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-39)"
                strokeLinejoin="round"
                d="M94.04 233.5L89.38 136.39 142.92 116.08 195.85 210.86 143.53 247.48 94.04 233.5z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-40)"
                strokeLinejoin="round"
                d="M70.91 178.24L192.15 147.47 130 240.4 70.91 178.24z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-41)"
                strokeLinejoin="round"
                d="M130 169.01L130 182.55 133.69 202.86 151.53 184.4 130 169.01z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-42)"
                strokeLinejoin="round"
                d="M99.84 153.01L182.92 133.93 112.76 121 99.84 153.01z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-43)"
                strokeLinejoin="round"
                d="M130 182.55L121.99 189.32 133.69 202.86"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-44)"
                strokeLinejoin="round"
                d="M112.76 121L128.76 165.32 158.92 117.72 112.76 121z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-45)"
                strokeLinejoin="round"
                d="M130 169.01L121.99 189.32 130.47 182.69 151.13 183.92"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-46)"
                strokeLinejoin="round"
                d="M104.08 142.48L128.76 165.32 71.39 170.24 104.08 142.48z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-47)"
                strokeLinejoin="round"
                d="M151.54 184.39L121.86 189.8"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-48)"
                strokeLinejoin="round"
                d="M100.66 167.78L133.62 115.53 142.78 143.3 100.66 167.78z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-49)"
                strokeLinejoin="round"
                d="M171.23 123.47L128.76 165.32 200.63 175.85 94.04 233.5 104.08 142.48 171.23 123.47z"
              ></path>
              <path
                fill="url(#linear-gradient-50)"
                d="M135.55 116.48c36.12 0 65.51 29.15 65.51 65s-29.39 65-65.51 65S70 217.29 70 181.46s29.39-65 65.51-65m0-2c-37.29 0-67.51 30-67.51 67s30.22 67 67.51 67 67.51-30 67.51-67-30.23-67-67.51-67z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-51)"
                strokeLinejoin="round"
                d="M85.07 174.55L171.02 229.12 164.05 153.62 85.07 174.55"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-52)"
                strokeLinejoin="round"
                d="M157.9 199.99L174.1 236.23 182.1 185.83 157.9 199.99"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-53)"
                strokeLinejoin="round"
                d="M134.1 231.78L101.07 167.16 96.56 204.5 157.9 199.99 134.1 231.78z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-54)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M151.6 116.49L76.31 151.78 96.83 234.31 171.57 224.6 199.54 165.93 151.6 116.49z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-55)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M108.52 115.26L74.06 201.42 144.29 248.47 199.4 202.24 182.92 133.93 108.52 115.26z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-56)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M94.04 233.5L89.38 136.39 142.92 116.08 192.29 217.7 130.22 246.31 94.04 233.5z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-57)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M95.94 176.39L194.82 151.98 130 240.4 95.94 176.39z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-58)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M130 169.01L143.16 179.33 133.69 202.86 164.7 181.18 130 169.01z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-59)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M95.6 147.26L178.68 128.18 109.69 120.32 95.6 147.26z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-60)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M143.16 179.33L135.16 186.1 133.69 202.86"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-61)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M112.76 121L153.79 163.47 158.92 117.72 112.76 121z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-62)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M130 169.01L135.16 186.1 143.64 179.47 164.29 180.7"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-63)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M99.84 136.73L166.44 176.6 84.04 183.37 99.84 136.73z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-64)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M164.7 181.18L121.86 189.8"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-65)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M113.92 183.16L134.23 117.79 142.78 143.3 113.92 183.16z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-66)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M171.23 123.47L153.79 163.47 200.63 175.85 94.04 233.5 99.84 136.73 171.23 123.47z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-67)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M85.07 174.55L157.55 226.72 189.08 151.78 110.09 172.7"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-68)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M157.9 199.99L161.25 235.34 182.1 185.83 157.9 199.99"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-69)"
                strokeLinejoin="round"
                strokeWidth="0.25"
                d="M134.1 231.78L113.72 180.29 83.84 219.75 157.9 199.99 134.1 231.78z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-70)"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M152.87 129.39L84.93 192.21 169.67 223.62 152.87 129.39z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-71)"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M100.27 145.46L103.15 145.83 186.47 156.42 128.76 232.39 100.27 145.46z"
              ></path>
              <path
                fill="none"
                stroke="url(#linear-gradient-72)"
                strokeLinejoin="round"
                strokeWidth="0.5"
                d="M125.11 127.2L98.81 222.16 185 200.25 125.11 127.2z"
              ></path>
            </g>
          </motion.g>
          <motion.g variants={Vpath} className="lighting">
            <g data-name="54">
              <circle
                cx="265.02"
                cy="62.01"
                r="17.51"
                fill="url(#radial-gradient)"
              ></circle>
              <circle
                cx="265.02"
                cy="62.01"
                r="2.16"
                fill="url(#radial-gradient-2)"
              ></circle>
            </g>
            <g data-name="53">
              <circle
                cx="335.35"
                cy="53.89"
                r="17.51"
                fill="url(#radial-gradient-3)"
              ></circle>
              <circle
                cx="335.35"
                cy="53.89"
                r="2.16"
                fill="url(#radial-gradient-4)"
              ></circle>
            </g>
            <g data-name="52">
              <circle
                cx="368.99"
                cy="17.51"
                r="17.51"
                fill="url(#radial-gradient-5)"
              ></circle>
              <circle
                cx="368.99"
                cy="17.51"
                r="2.16"
                fill="url(#radial-gradient-6)"
              ></circle>
            </g>
            <g data-name="51">
              <circle
                cx="439.15"
                cy="19.97"
                r="17.51"
                fill="url(#radial-gradient-7)"
              ></circle>
              <circle
                cx="439.15"
                cy="19.97"
                r="2.16"
                fill="url(#radial-gradient-8)"
              ></circle>
            </g>
            <g data-name="50">
              <circle
                cx="547.06"
                cy="37.2"
                r="17.51"
                fill="url(#radial-gradient-9)"
              ></circle>
              <circle
                cx="547.06"
                cy="37.2"
                r="2.16"
                fill="url(#radial-gradient-10)"
              ></circle>
            </g>
            <g data-name="49">
              <circle
                cx="464.59"
                cy="29.51"
                r="17.51"
                fill="url(#radial-gradient-11)"
              ></circle>
              <circle
                cx="464.59"
                cy="29.51"
                r="2.16"
                fill="url(#radial-gradient-12)"
              ></circle>
            </g>
            <g data-name="48">
              <circle
                cx="506.79"
                cy="75.97"
                r="17.51"
                fill="url(#radial-gradient-13)"
              ></circle>
              <circle
                cx="506.79"
                cy="75.97"
                r="2.16"
                fill="url(#radial-gradient-14)"
              ></circle>
            </g>
            <g data-name="47">
              <circle
                cx="453.31"
                cy="170.85"
                r="17.51"
                fill="url(#radial-gradient-15)"
              ></circle>
              <circle
                cx="453.31"
                cy="170.85"
                r="2.16"
                fill="url(#radial-gradient-16)"
              ></circle>
            </g>
            <g data-name="46">
              <circle
                cx="330.83"
                cy="210.86"
                r="17.51"
                fill="url(#radial-gradient-17)"
              ></circle>
              <circle
                cx="330.83"
                cy="210.86"
                r="2.16"
                fill="url(#radial-gradient-18)"
              ></circle>
            </g>
            <g data-name="45">
              <circle
                cx="298.01"
                cy="171.06"
                r="17.51"
                fill="url(#radial-gradient-19)"
              ></circle>
              <circle
                cx="298.01"
                cy="171.06"
                r="2.16"
                fill="url(#radial-gradient-20)"
              ></circle>
            </g>
            <g data-name="44">
              <circle
                cx="274.62"
                cy="159.16"
                r="12.31"
                fill="url(#radial-gradient-21)"
              ></circle>
              <circle
                cx="274.62"
                cy="159.16"
                r="1.52"
                fill="url(#radial-gradient-22)"
              ></circle>
            </g>
            <g data-name="43">
              <circle
                cx="415.76"
                cy="96.39"
                r="12.31"
                fill="url(#radial-gradient-23)"
              ></circle>
              <circle
                cx="415.76"
                cy="96.39"
                r="1.52"
                fill="url(#radial-gradient-24)"
              ></circle>
            </g>
            <g data-name="42">
              <circle
                cx="462.05"
                cy="77.02"
                r="12.31"
                fill="url(#radial-gradient-25)"
              ></circle>
              <circle
                cx="462.05"
                cy="77.02"
                r="1.52"
                fill="url(#radial-gradient-26)"
              ></circle>
            </g>
            <g data-name="41">
              <circle
                cx="487.43"
                cy="118.55"
                r="12.31"
                fill="url(#radial-gradient-27)"
              ></circle>
              <circle
                cx="487.43"
                cy="118.55"
                r="1.52"
                fill="url(#radial-gradient-28)"
              ></circle>
            </g>
            <g data-name="40">
              <circle
                cx="521.62"
                cy="117.04"
                r="17.51"
                fill="url(#radial-gradient-29)"
              ></circle>
              <circle
                cx="521.62"
                cy="117.04"
                r="2.16"
                fill="url(#radial-gradient-30)"
              ></circle>
            </g>
            <g data-name="39">
              <circle
                cx="547.57"
                cy="209.22"
                r="17.51"
                fill="url(#radial-gradient-31)"
              ></circle>
              <circle
                cx="547.57"
                cy="209.22"
                r="2.16"
                fill="url(#radial-gradient-32)"
              ></circle>
            </g>
            <g data-name="38">
              <circle
                cx="728.92"
                cy="194.45"
                r="17.51"
                fill="url(#radial-gradient-33)"
              ></circle>
              <circle
                cx="728.92"
                cy="194.45"
                r="2.16"
                fill="url(#radial-gradient-34)"
              ></circle>
            </g>
            <g data-name="37">
              <circle
                cx="678.05"
                cy="137.83"
                r="17.51"
                fill="url(#radial-gradient-35)"
              ></circle>
              <circle
                cx="678.05"
                cy="137.83"
                r="2.16"
                fill="url(#radial-gradient-36)"
              ></circle>
            </g>
            <g data-name="36">
              <circle
                cx="344.89"
                cy="171.47"
                r="17.51"
                fill="url(#radial-gradient-37)"
              ></circle>
              <circle
                cx="344.89"
                cy="171.47"
                r="2.16"
                fill="url(#radial-gradient-38)"
              ></circle>
            </g>
            <g data-name="35">
              <circle
                cx="65.07"
                cy="107.46"
                r="17.51"
                fill="url(#radial-gradient-39)"
              ></circle>
              <circle
                cx="65.07"
                cy="107.46"
                r="2.16"
                fill="url(#radial-gradient-40)"
              ></circle>
            </g>
            <g data-name="34">
              <circle
                cx="60.96"
                cy="150.96"
                r="17.51"
                fill="url(#radial-gradient-41)"
              ></circle>
              <circle
                cx="60.96"
                cy="150.96"
                r="2.16"
                fill="url(#radial-gradient-42)"
              ></circle>
            </g>
            <g data-name="33">
              <circle
                cx="23.33"
                cy="208.67"
                r="17.51"
                fill="url(#radial-gradient-43)"
              ></circle>
              <circle
                cx="23.33"
                cy="208.67"
                r="2.16"
                fill="url(#radial-gradient-44)"
              ></circle>
            </g>
            <g data-name="32">
              <circle
                cx="55.53"
                cy="210.86"
                r="17.51"
                fill="url(#radial-gradient-45)"
              ></circle>
              <circle
                cx="55.53"
                cy="210.86"
                r="2.16"
                fill="url(#radial-gradient-46)"
              ></circle>
            </g>
            <g data-name="31">
              <circle
                cx="17.51"
                cy="140.56"
                r="17.51"
                fill="url(#radial-gradient-47)"
              ></circle>
              <circle
                cx="17.51"
                cy="140.56"
                r="2.16"
                fill="url(#radial-gradient-48)"
              ></circle>
            </g>
            <g data-name="30">
              <circle
                cx="192.56"
                cy="100.9"
                r="17.51"
                fill="url(#radial-gradient-49)"
              ></circle>
              <circle
                cx="192.56"
                cy="100.9"
                r="2.16"
                fill="url(#radial-gradient-50)"
              ></circle>
            </g>
            <g data-name="29">
              <circle
                cx="291.03"
                cy="94.34"
                r="17.51"
                fill="url(#radial-gradient-51)"
              ></circle>
              <circle
                cx="291.03"
                cy="94.34"
                r="2.16"
                fill="url(#radial-gradient-52)"
              ></circle>
            </g>
            <g data-name="27">
              <circle
                cx="444.48"
                cy="114.85"
                r="17.51"
                fill="url(#radial-gradient-53)"
              ></circle>
              <circle
                cx="444.48"
                cy="114.85"
                r="2.16"
                fill="url(#radial-gradient-54)"
              ></circle>
            </g>
            <g data-name="26">
              <circle
                cx="442.33"
                cy="150.96"
                r="17.51"
                fill="url(#radial-gradient-55)"
              ></circle>
              <circle
                cx="442.33"
                cy="150.96"
                r="2.16"
                fill="url(#radial-gradient-56)"
              ></circle>
            </g>
            <g data-name="25">
              <circle
                cx="489.92"
                cy="150.96"
                r="17.51"
                fill="url(#radial-gradient-57)"
              ></circle>
              <circle
                cx="489.92"
                cy="150.96"
                r="2.16"
                fill="url(#radial-gradient-58)"
              ></circle>
            </g>
            <g data-name="24">
              <circle
                cx="435.76"
                cy="50.02"
                r="17.51"
                fill="url(#radial-gradient-59)"
              ></circle>
              <circle
                cx="435.76"
                cy="50.02"
                r="2.16"
                fill="url(#radial-gradient-60)"
              ></circle>
            </g>
            <g data-name="23">
              <circle
                cx="443.97"
                cy="44.96"
                r="17.51"
                fill="url(#radial-gradient-61)"
              ></circle>
              <circle
                cx="443.97"
                cy="44.96"
                r="2.16"
                fill="url(#radial-gradient-62)"
              ></circle>
            </g>
            <g data-name="22">
              <circle
                cx="471.32"
                cy="39.97"
                r="17.51"
                fill="url(#radial-gradient-63)"
              ></circle>
              <circle
                cx="471.32"
                cy="39.97"
                r="2.16"
                fill="url(#radial-gradient-64)"
              ></circle>
            </g>
            <g data-name="21">
              <circle
                cx="491.26"
                cy="209.52"
                r="17.51"
                fill="url(#radial-gradient-65)"
              ></circle>
              <circle
                cx="491.26"
                cy="209.52"
                r="2.16"
                fill="url(#radial-gradient-66)"
              ></circle>
            </g>
            <g data-name="20">
              <circle
                cx="627.89"
                cy="184.08"
                r="17.51"
                fill="url(#radial-gradient-67)"
              ></circle>
              <circle
                cx="627.89"
                cy="184.08"
                r="2.16"
                fill="url(#radial-gradient-68)"
              ></circle>
            </g>
            <g data-name="19">
              <circle
                cx="731.28"
                cy="128.7"
                r="17.51"
                fill="url(#radial-gradient-69)"
              ></circle>
              <circle
                cx="731.28"
                cy="128.7"
                r="2.16"
                fill="url(#radial-gradient-70)"
              ></circle>
            </g>
            <g data-name="18">
              <circle
                cx="742.36"
                cy="101.62"
                r="17.51"
                fill="url(#radial-gradient-71)"
              ></circle>
              <circle
                cx="742.36"
                cy="101.62"
                r="2.16"
                fill="url(#radial-gradient-72)"
              ></circle>
            </g>
            <g data-name="17">
              <circle
                cx="666.04"
                cy="93"
                r="17.51"
                fill="url(#radial-gradient-73)"
              ></circle>
              <circle
                cx="666.04"
                cy="93"
                r="2.16"
                fill="url(#radial-gradient-74)"
              ></circle>
            </g>
            <g data-name="16">
              <circle
                cx="583.57"
                cy="123.16"
                r="17.51"
                fill="url(#radial-gradient-75)"
              ></circle>
              <circle
                cx="583.57"
                cy="123.16"
                r="2.16"
                fill="url(#radial-gradient-76)"
              ></circle>
            </g>
            <g data-name="15">
              <circle
                cx="650.04"
                cy="50.23"
                r="17.51"
                fill="url(#radial-gradient-77)"
              ></circle>
              <circle
                cx="650.04"
                cy="50.23"
                r="2.16"
                fill="url(#radial-gradient-78)"
              ></circle>
            </g>
            <g data-name="14">
              <circle
                cx="392.79"
                cy="129.52"
                r="17.51"
                fill="url(#radial-gradient-79)"
              ></circle>
              <circle
                cx="392.79"
                cy="129.52"
                r="2.16"
                fill="url(#radial-gradient-80)"
              ></circle>
            </g>
            <g data-name="13">
              <circle
                cx="557.11"
                cy="77.2"
                r="17.51"
                fill="url(#radial-gradient-81)"
              ></circle>
              <circle
                cx="557.11"
                cy="77.2"
                r="2.16"
                fill="url(#radial-gradient-82)"
              ></circle>
            </g>
            <g data-name="12">
              <circle
                cx="312.78"
                cy="117.62"
                r="17.51"
                fill="url(#radial-gradient-83)"
              ></circle>
              <circle
                cx="312.78"
                cy="117.62"
                r="2.16"
                fill="url(#radial-gradient-84)"
              ></circle>
            </g>
            <g data-name="11">
              <circle
                cx="342.73"
                cy="98.03"
                r="17.51"
                fill="url(#radial-gradient-85)"
              ></circle>
              <circle
                cx="342.73"
                cy="98.03"
                r="2.16"
                fill="url(#radial-gradient-86)"
              ></circle>
            </g>
            <g data-name="10">
              <circle
                cx="362.84"
                cy="65.61"
                r="17.51"
                fill="url(#radial-gradient-87)"
              ></circle>
              <circle
                cx="362.84"
                cy="65.61"
                r="2.16"
                fill="url(#radial-gradient-88)"
              ></circle>
            </g>
            <g data-name="9">
              <circle
                cx="227.85"
                cy="131.26"
                r="17.51"
                fill="url(#radial-gradient-89)"
              ></circle>
              <circle
                cx="227.85"
                cy="131.26"
                r="2.16"
                fill="url(#radial-gradient-90)"
              ></circle>
            </g>
            <g data-name="8">
              <circle
                cx="246.72"
                cy="181.32"
                r="17.51"
                fill="url(#radial-gradient-91)"
              ></circle>
              <circle
                cx="246.72"
                cy="181.32"
                r="2.16"
                fill="url(#radial-gradient-92)"
              ></circle>
            </g>
            <g data-name="7">
              <circle
                cx="128.97"
                cy="100.49"
                r="17.51"
                fill="url(#radial-gradient-93)"
              ></circle>
              <circle
                cx="128.97"
                cy="100.49"
                r="2.16"
                fill="url(#radial-gradient-94)"
              ></circle>
            </g>
            <g data-name="6">
              <circle
                cx="30.5"
                cy="163.26"
                r="17.51"
                fill="url(#radial-gradient-95)"
              ></circle>
              <circle
                cx="30.5"
                cy="163.26"
                r="2.16"
                fill="url(#radial-gradient-96)"
              ></circle>
            </g>
            <g data-name="5">
              <circle
                cx="214.62"
                cy="69.31"
                r="17.51"
                fill="url(#radial-gradient-97)"
              ></circle>
              <circle
                cx="214.62"
                cy="69.31"
                r="2.16"
                fill="url(#radial-gradient-98)"
              ></circle>
            </g>
            <g data-name="4">
              <circle
                cx="367.66"
                cy="214.76"
                r="17.51"
                fill="url(#radial-gradient-99)"
              ></circle>
              <circle
                cx="367.66"
                cy="214.76"
                r="2.16"
                fill="url(#radial-gradient-100)"
              ></circle>
            </g>
            <g data-name="3">
              <circle
                cx="416.28"
                cy="211.68"
                r="17.51"
                fill="url(#radial-gradient-101)"
              ></circle>
              <circle
                cx="416.28"
                cy="211.68"
                r="2.16"
                fill="url(#radial-gradient-102)"
              ></circle>
            </g>
            <g data-name="2">
              <circle
                cx="445.92"
                cy="211.98"
                r="17.51"
                fill="url(#radial-gradient-103)"
              ></circle>
              <circle
                cx="445.92"
                cy="211.98"
                r="2.16"
                fill="url(#radial-gradient-104)"
              ></circle>
            </g>
            <g data-name="1">
              <circle
                cx="133.07"
                cy="186.55"
                r="17.51"
                fill="url(#radial-gradient-105)"
              ></circle>
              <circle
                cx="133.07"
                cy="186.55"
                r="2.16"
                fill="url(#radial-gradient-106)"
              ></circle>
            </g>
          </motion.g>
        </g>
      </g>
    </motion.svg>
  );
}

export default Car;
