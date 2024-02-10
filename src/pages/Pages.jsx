import React, { useState } from "react";
import Home from "./Home";
import Services from "./Services";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
const Pages = () => {
  const location = useLocation();
  const [check, setCheck] = useState(true);

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => {
        setCheck(false);
      }}
    >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home check={check} />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Pages;
