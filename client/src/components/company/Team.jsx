import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { leadership } from "../../data";

function Team() {
  return (
    <div className="team__wrapper w-full flex justify-center items-center mt-8 mb-24 md:mb-36 md:mt-24">
      <div className="teamContent w-full">
        <div className="team__tiltle text-white flex flex-col items-center mb-8">
          <span className="text-gray-400 py-1">
            Visionaries Behind Gabvic Homes
          </span>
          <h3 className="text-5xl font-bold">Leadership</h3>
        </div>

        <div className="teamDetails w-full mt-16 md:mt-24">
          <div className="details__content w-full gap-4 grid grid-cols-1 md:grid-cols-2">
            {leadership.map((team, index) => {
              const cardRef = useRef(null);
              const isInView = useInView(cardRef, { once: true, amount: 0.2 });

              return (
                <motion.div
                  ref={cardRef}
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  className="team flex flex-col p-4 md:p-6 md:flex-row bg-white"
                >
                  <div className="left flex justify-center items-center">
                    <div className="leftContent flex justify-center items-center">
                      <img
                        src={team.image}
                        alt={team.name}
                        className="w-700 h-96 object-cover"
                      />
                    </div>
                  </div>

                  <div className="right px-4">
                    <div className="top flex flex-col text-left md:text-left gap-1 pt-8 pb-2">
                      <h4 className="font-bold text-xl md:text-lg text-gray-800">
                        {team.name}
                      </h4>
                      <h4 className="text-gray-600 font-semibold">
                        {team.position}
                      </h4>
                    </div>
                    <div className="bottom text-gray-700 text-justify hyphens-auto">
                      <p>{team.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
