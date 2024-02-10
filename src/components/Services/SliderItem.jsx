import "../../styles/SliderItem.css";
import Line from "../Services/Line";
import { motion } from "framer-motion";
const SliderItem = (props) => {
  const slideItem = {
    init: {
      opacity: 0,
    },
    anime: {
      opacity: 1,
      transition: {},
    },
    exit: {},
  };
  const head = {
    init: {
      opacity: 0,
      x: "10%",
    },
    anime: {
      opacity: 1,
      x: "0",
      transition: {
        duration: 1,
        opacity: {
          duration: 2,
        },
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 1,
      },
    },
  };
  const img = {
    init: {
      opacity: 0,
    },
    anime: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeIn",
      },
    },
  };
  const features = props.features.map((feature) => {
    return <motion.li variants={head}>{feature.item}</motion.li>;
  });
  return (
    <motion.div
      variants={slideItem}
      initial="init"
      whileInView="anime"
      exit="exit"
      className="slide-item_content"
    >
      <Line />
      <div className="slide-title">
        <motion.h3 variants={head}>{props.title}</motion.h3>
        <motion.p variants={head}>{props.desc}</motion.p>
      </div>
      <div className="features">
        <motion.h4 variants={head}>ویژیگی ها</motion.h4>
        <ul className="features-list">{features}</ul>
      </div>
      <motion.img variants={img} src={props.img} alt="" />
    </motion.div>
  );
};

export default SliderItem;
