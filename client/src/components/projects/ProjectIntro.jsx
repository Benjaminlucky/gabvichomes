import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { nigeriaProjects } from "../../data";

function ProjectIntro() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, amount: 0.4 });

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-11/12 md:w-6/12 text-center"
      >
        <h3 className="text-2xl md:text-6xl font-semibold py-8 md:leading-[4.3rem] text-white mb-4">
          Our Projects — Transforming Spaces, Building Futures
        </h3>
        <p className="text-white mb-2 md:mb-8">
          Explore our growing portfolio of estates and developments across
          Nigeria and the USA. Each project is thoughtfully designed to blend
          modern living, prime locations, and smart investment opportunities.
        </p>
      </motion.div>

      <div className="projects w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 md:mt-24 gap-6">
        {nigeriaProjects.map((project, index) => {
          const cardRef = useRef(null);
          const isCardInView = useInView(cardRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              ref={cardRef}
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isCardInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="project-card mb-6 text-left"
            >
              <div className="top relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="absolute bottom-0 left-0 w-full flex justify-between items-center px-4 py-2 rounded-t-lg text-white text-sm">
                  <span className="font-medium bg-night-500 py-2 px-4 rounded-sm">
                    {project.location}
                  </span>
                  <span className="font-medium bg-bronze-500 py-2 px-4 rounded-sm">
                    {project.status}
                  </span>
                </div>
              </div>
              <div className="bottom mt-4 text-white">
                <h4 className="text-xl md:text-2xl text-center font-semibold">
                  {project.title}
                </h4>
                <p className="text-sm text-center text-gray-500">
                  {project.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default ProjectIntro;
