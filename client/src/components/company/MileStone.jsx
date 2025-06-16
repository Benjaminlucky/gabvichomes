import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function MileStone() {
  const items = [
    {
      year: "2019",
      title: "Launch of Hilltop Castle Estate",
      desc: `Located in Imokun Community, Shiraye Road, Poka-Eredo, Epe L.G.A, Lagos, Hilltop Castle Estate is a prime real estate development launched on July 20, 2019. Covering a total of 6 acres, the estate is divided into 600 sqm plots.`,
    },
    {
      year: "2021",
      title: "Expansion into Hilltop Bungalow Penthouse",
      desc: `An extension of Hilltop Castle Estate, the Bungalow Penthouse project, launched on October 22, 2021, offers modern residential units in the same prime location—Imokun Community, Shiraye Road, Poka-Eredo, Epe. This development spans 6 acres, with plots measuring 600 sqm each.`,
    },
    {
      year: "2022",
      title: "Alaafin Imperial Court",
      desc: `Alaafin Imperial Court is an exclusive, secure estate proposed to be located within Oyo Alafin Metropolis in oyo state, featuring 32 architecturally distinct homes. Designed for those who appreciate royalty, serenity, and prestige, this estate offers a luxurious living experience inspired by Yoruba heritage.`,
    },
    {
      year: "2025",
      title: "Entry into the US Market with GabvicHomes LLC",
      desc: null,
    },
  ];

  return (
    <div className="bg-[#0b0b17] text-white py-8 md:py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-lg text-gray-400">
          Our Evolution and Track Record
        </h2>
        <h1 className="text-center text-4xl font-bold mb-12">Our Journey</h1>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-bronze-500 z-0"></div>

          <div className="relative pl-10 space-y-16 z-10">
            {items.map((item, idx) => {
              const itemRef = useRef(null);
              const inView = useInView(itemRef, { once: true, amount: 0.2 });

              return (
                <motion.div
                  ref={itemRef}
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: idx * 0.2,
                  }}
                  className="relative"
                >
                  <div className="absolute left-[-2.1rem] top-0 w-6 h-6 bg-[#0b0b17] bg-bronze-500 rounded-full z-10"></div>
                  <div>
                    <h3 className="text-xl font-bold">{item.year}</h3>
                    <h4 className="text-lg font-semibold mt-1">{item.title}</h4>
                    {item.desc && (
                      <>
                        <p className="text-sm text-gray-300 mt-1 text-justify hyphens-auto">
                          {item.desc}
                        </p>
                        <button className="mt-3 px-4 py-2 bg-bronze-500 text-white rounded hover:bg-bronze-700 transition">
                          Read more
                        </button>
                      </>
                    )}
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

export default MileStone;
