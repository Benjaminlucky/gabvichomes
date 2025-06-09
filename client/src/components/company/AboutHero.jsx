import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Abouthero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
      className="aboutHero__container w-full text-white"
    >
      <div className="aboutHero__wrapper w-full py-20 md:py-30">
        <div className="contentTop flex justify-center items-center">
          <h2 className="w-full md:w-8/12 md:leading-18 text-lg md:text-5xl font-bold text-center">
            To redefine real estate living through sustainable, smart, and
            customer-centric developments globally
          </h2>
        </div>
        <div className="contentBottom flex justify-center items-center mt-16 md:mt-36">
          <div className="cBWrap grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8">
            <div className="left">
              <div className="left__content">
                <img
                  src="/assets/companyHero.png"
                  alt="A model of Gabvic Homes development"
                  className="w-[600px] h-full object-cover"
                />
              </div>
            </div>
            <div className="right">
              <div className="leftContent">
                <h3 className="text-lg md:text-5xl text-center md:text-left hyphens-auto md:leading-18 font-semibold mb-4">
                  To be the leading real estate group delivering innovative
                  housing and investment solutions across continents.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Abouthero;
