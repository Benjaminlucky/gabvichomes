import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { services } from "../../data";

function ServicesIntro() {
  const topRef = useRef(null);
  const isTopInView = useInView(topRef, { once: true, amount: 0.3 });

  return (
    <section className="w-full py-20 bg-gray-900 text-white">
      <div className="w-11/12 md:w-10/12 mx-auto text-center">
        {/* Top Section */}
        <motion.div
          ref={topRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isTopInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-11/12 md:w-7/12 mx-auto mb-12 py-12 md:py-26"
        >
          <h3 className="text-xl md:text-6xl font-bold mb-4">
            Tailored Real Estate Solutions to Meet Your Every Need
          </h3>
          <p className="text-base md:text-lg text-gray-300">
            At Gabvic Homes, we offer a comprehensive suite of services designed
            to make property ownership, investment, and development seamless and
            rewarding.
          </p>
        </motion.div>

        {/* Bottom Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const cardRef = useRef(null);
            const isCardInView = useInView(cardRef, {
              once: true,
              amount: 0.2,
            });

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 50 }}
                animate={isCardInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="bg-gray-800 p-6 rounded-xl shadow-md flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                <div className="mb-4 text-primary text-4xl">
                  {React.createElement(service.icon)}
                </div>
                <h4 className="text-xl font-semibold mb-1">{service.title}</h4>
                <h5 className="text-md text-bronze-300 mb-2">
                  {service.subTitle}
                </h5>
                <p className="text-sm text-gray-300">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesIntro;
