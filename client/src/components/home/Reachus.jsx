import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Reachus() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="reachus__container w-full flex justify-center items-center mt-8 mb-16 md:mb-16 md:mt-4"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUp}
    >
      <div className="reachus__content w-11/12 md:w-11/12 flex flex-col justify-center items-center">
        <motion.div
          className="reachTop w-full flex flex-col justify-center items-center"
          variants={fadeUp}
        >
          <p className="text-lnight-800 text-center font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">
            We're here to meet your investment needs
          </p>
          <h3 className="text-white text-center font-bold text-4xl md:text-6xl">
            Reach us Today
          </h3>
        </motion.div>

        <div className="reachBottom text-lnight-800 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 mt-8 mb-16 md:mb-36 md:mt-36">
          <motion.div className="reach__left w-full" variants={fadeUp}>
            <div className="left__content w-full flex flex-col justify-center items-center">
              <form>
                <div className="form__content w-full flex flex-col">
                  <div className="name flex flex-col mb-4">
                    <label className="text-sm md:text-lg">
                      Enter Your Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full bg-lnight-800 text-lnight-200 font-semibold text-sm md:text-xl px-4 py-3 mt-2 md:mt-4 outline-none rounded-sm mb-4"
                    />
                  </div>
                  <div className="email flex flex-col mb-4">
                    <label className="text-sm md:text-lg" htmlFor="email">
                      Enter a Valid Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      placeholder="Enter a valid Email Address"
                      className="w-full bg-lnight-800 text-lnight-200 font-semibold text-sm md:text-xl px-4 py-3 mt-2 md:mt-4 outline-none rounded-sm mb-4"
                    />
                  </div>
                  <div className="message flex flex-col mb-4">
                    <label className="text-lg text-sm" htmlFor="message">
                      Leave us a Message
                    </label>
                    <textarea
                      cols="50"
                      rows="7"
                      name="message"
                      placeholder="Leave us a message"
                      className="w-full bg-lnight-800 text-lnight-200 font-semibold text-sm md:text-xl px-4 py-4 mt-2 md:mt-4 outline-none rounded-sm mb-4"
                    />
                  </div>
                  <button className="bg-bronze-700 py-4 rounded-sm text-sm md:text-xl font-semibold text-lnight-800 hover:bg-bronze-500 hover:text-lnight-900 transition-50 duration-300">
                    Submit Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          <motion.div className="reach__right" variants={fadeUp}>
            <div className="right__content h-full overflow-hidden">
              <img
                src="/assets/reachHome.jpeg"
                alt=""
                className="rounded-sm h-full hover:scale-110 transition-50 duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Reachus;
