import React from "react";
import Car from "../components/Car/Car";
import { motion } from "framer-motion";
import "../styles/Home.css";
import Light from "../components/Car/Light";
const Home = (props) => {
  const Hero = {
    init: {
      opacity: 0,
    },
    anime: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 3,
      },
    },
  };
  return (
    <div className="home">
      <motion.div
        variants={Hero}
        initial="init"
        animate="anime"
        exit="exit"
        className="home-title"
      >
        <div className="home-title_head">
          <h3>صاعقه</h3>
          <h2>نوآوری</h2>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد موجود در ارائه راهکارها
        </p>
        <div className="btn-home">
          <button className="btn btn-1">
            <svg width="100%" height="50px">
              <rect
                x="0"
                y="0"
                rx="30"
                ry="30"
                width="100%"
                height="100%"
              ></rect>
            </svg>
            ادامه
          </button>
        </div>
      </motion.div>
      <motion.div className="banner">
        <Car check={props.check} />
        <Light />
      </motion.div>
    </div>
  );
};

export default Home;
