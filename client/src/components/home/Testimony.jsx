import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { testimony } from "../../data";

function Testimony() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <motion.div
      className="testimony__container w-full flex justify-center items-center mt-8 mb-16 md:mb-16 md:mt-16"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <div className="testimony__wrapper w-11/12 md:w-full flex justify-center items-center">
        <div className="testimony__content w-full flex flex-col justify-center items-center">
          <div className="top">
            <p className="text-lnight-800 text-lg  md:text-2xl text-center font-semibold pb-2">
              What our Clients' are saying
            </p>
            <h1 className="text-white text-3xl md:text-6xl text-center font-bold">
              Testimonials
            </h1>
          </div>
          <div className="bottom w-full flex justify-center items-center mt-12 md:mt-24">
            <div className="testimony w-11/12 md:w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8 md:gap-14">
              {testimony.map((item, index) => (
                <motion.div
                  key={index}
                  className="testimony__card rounded-sm bg-lnight-700 justify-center"
                  custom={index}
                  initial="hidden"
                  animate={controls}
                  variants={cardVariants}
                >
                  <div className="card__content w-full flex flex-col justify-center items-center py-8 px-6">
                    <img
                      src={item.image}
                      alt="testimony"
                      className=" object-cover w-24 h-24 rounded-full mb-6"
                    />
                    <p className="cardText text-center hyphens-auto">
                      {item.desc}
                    </p>
                    <div className="card__name flex justify-center items-center gap-2 mt-6">
                      <h1 className="font-bold text-lg text-night-800">
                        {item.name}
                      </h1>
                      <p className="font-semibold">{item.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimony;
