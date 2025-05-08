import React, { useEffect } from "react";
import { value } from "../../data";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Value() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <motion.div
      className="value__container w-full flex justify-center"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={sectionVariants}
    >
      <div className="value__content">
        <div className="titleTop">
          <div className="subTitle text-center text-lnight-800 text-2xl font-semibold pb-2">
            <p>Why Choose us</p>
          </div>
          <div className="title text-center text-3xl md:text-6xl text-white font-bold">
            <h3>Our Core Values</h3>
          </div>
        </div>
        <div className="values w-10/12 md:w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-14 mt-12 md:mt-24 text-white">
          {value.map((item, index) => (
            <motion.div
              key={index}
              className="value__card w-full md:w-full flex flex-col justify-center"
              custom={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
            >
              <div className="title w-full md:w-full bg-lnight-500 flex items-center mb-4">
                <div className="titleLetter bg-lnight-200 px-6 py-4 text-2xl font-bold">
                  {item.letter}
                </div>
                <div className="title bg-lnight-500 px-2 py-4 text-md md:text-2xl font-bold">
                  {item.title}
                </div>
              </div>
              <div className="desc text-gray-500 text-justify hyphens-auto md:text-left font-semibold">
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Value;
