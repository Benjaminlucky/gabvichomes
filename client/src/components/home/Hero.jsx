import React, { useEffect } from "react";
import { subsidiaries } from "../../data";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="hero__section text-white"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeUpVariant}
    >
      <div className="heroContent py-12 md:py-30 px-10 flex flex-col justify-center items-center">
        <div className="top text-center flex flex-col justify-center items-center">
          <h1 className="text-3xl md:text-8xl md:leading-34 font-extrabold ">
            Building Legacies,
          </h1>
          <h1 className="text-3xl md:text-8xl md:leading-20 font-extrabold">
            One Home at a Time
          </h1>
          <h3 className="text-sm md:text-4xl md:pt-4 md:tracking-[2px] text-bronze-500 font-semibold">
            Premium Estate | Smart Investments | Lasting Value
          </h3>
          <p className="md:w-8/12 flex justify-center text-lnight-700 text-center text-lg md:py-4 leading-8">
            At Gabvic Homes, we build thriving communities and smart investment
            opportunities. Whether it's your dream home or a luxury estate, we
            make homeownership seamless and rewarding.
          </p>
        </div>
        <div className="bottom flex flex-col justify-center items-center mt-16">
          <div className="subTitle">
            <h3 className="w-full text-2xl md:text-3xl text-center text-bronze-500">
              Explore Our Subsidiaries
            </h3>
          </div>
          <div className="subsidiaries w-full md:w-10/12 justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-8">
            {subsidiaries.map((sub, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Link
                  to={sub.url}
                  className="subsidiaryCardLink flex flex-col justify-center items-center"
                >
                  <div className="subsidiaryCard">
                    <div className="subimage overflow-hidden rounded-sm border border-7">
                      <img
                        src={sub.image}
                        alt={sub.title}
                        className="h-64 rounded-sm object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  </div>
                  <div className="titles py-4 text-center">
                    <h3 className="text-lg md:text-2xl font-bold text-center text-lnight-700">
                      {sub.title}
                    </h3>
                    {sub.alafin && (
                      <p className="text-base md:text-xl text-bronze-500 font-semibold mt-1">
                        {sub.alafin}
                      </p>
                    )}
                    <p className="text-sm md:text-lg text-center text-bronze-500 font-semibold mt-2">
                      {sub.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
