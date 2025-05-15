import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Intro() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const fadeVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="intro__container text-white px-4 md:py-8"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeVariant}
    >
      <div className="introContent grid grid-cols-1 md:grid-cols-2 gap-12 w-full h-full items-center">
        <motion.div className="left" variants={fadeVariant}>
          <div className="subTitle mb-4">
            <p className="text-justify leading-relaxed text-lnight-700 text-[12px] md:text-xl">
              Gabvic Homes is a global real estate and investment group with
              operations in Nigeria and the USA. Through our subsidiaries, we
              deliver premium housing, smart property investments, and business
              ventures that drive sustainable growth.
            </p>
          </div>
          <div className="mainContent">
            <h3 className="hyphens-auto text-[20px] md:text-left md:text-4xl md:leading-[50px] font-semibold">
              Renowned for innovation, integrity, and value-driven solutions, we
              make homeownership and real estate investing simple, strategic,
              and rewarding.
            </h3>
          </div>
        </motion.div>
        <motion.div className="right" variants={imageVariant}>
          <div className="imageContainer w-full overflow-hidden rounded-xl shadow-lg">
            <img
              src="/assets/intro.jpeg"
              alt="A model of one of the development of Gabvic Homes Limited"
              className="w-full h-auto object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Intro;
