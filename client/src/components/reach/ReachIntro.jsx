import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserCircle, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";

function ReachIntro() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="w-full mx-auto px-6 py-24 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="w-11/12 md:w-7/12 mx-auto text-center mb-12 pt-8 md:py-30"
      >
        <h3 className="text-2xl md:text-6xl font-bold text-white">
          Let’s Connect — We’re Here to Help
        </h3>
        <p className="text-lg mt-4 md:text-xl text-gray-300 mx-auto">
          Whether you have questions, need property advice, or want to schedule
          a visit, our team is just a message away.
        </p>
      </motion.div>

      <div className="w-11/12 md:w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h4 className="md:text-3xl font-bold text-white">
              Our Office Location
            </h4>
            <p className="mt-1 text-gray-300">
              Gabvichomes & Properties Limited
            </p>
            <p className="text-gray-300">NO. 3, Admiralty Lane, Eti-Osa</p>
            <p className="text-gray-300">L.G.A, Lagos State, Nigeria</p>
          </div>

          <div className="py-5">
            <h4 className="md:text-3xl font-bold text-white">
              Call or Email Us Directly
            </h4>
            <p className="md:text-2xl text-gray-300">
              Talk to a Qualified Realtor
            </p>
            <div className="mt-2">
              <p className="font-medium text-gray-300">Phone Numbers:</p>
              <p className="text-gray-300">Nigeria: +234 XXX XXXXX</p>
              <p className="text-gray-300">USA: +1 XXX XXXX</p>
            </div>
            <div className="mt-4">
              <p className="font-medium text-white">Email:</p>
              <p className="text-gray-300">General: info@gabvichomes.com</p>
              <p className="text-gray-300">Sales: sales@gabvichomes.com</p>
            </div>
          </div>

          <div>
            <h4 className="md:text-3xl font-bold text-white">Follow Us</h4>
            <p className="md:text-2xl text-gray-300">
              Stay updated with our latest news and listings
            </p>
            <motion.div
              className="flex flex-col gap-2 mt-4"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {[
                {
                  href: "https://facebook.com/gabvichomes",
                  icon: <FaFacebook className="text-bronze-900" />,
                  label: "facebook.com/gabvichomes",
                },
                {
                  href: "https://instagram.com/gabvic_homes",
                  icon: <AiFillInstagram className="text-bronze-900" />,
                  label: "@gabvic_homes",
                },
                {
                  href: "https://linkedin.com/gabvichomesltd",
                  icon: <IoLogoLinkedin className="text-bronze-900" />,
                  label: "Gabvic Homes Ltd",
                },
                {
                  href: "https://x.com/gabvicOfficial",
                  icon: <FaXTwitter className="text-bronze-900" />,
                  label: "@GabvicOfficial",
                },
              ].map(({ href, icon, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  className="flex items-center text-xl gap-2 text-white hover:underline"
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {icon} {label}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-white p-6 md:p-8 rounded-xl shadow-xl"
        >
          <div className="py-4">
            <h3 className="text-4xl font-bold text-bronze-900">Get in Touch</h3>
            <p className="text-xl text-bronze-500 mb-6">
              You can reach us anytime
            </p>
          </div>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center border border-gray-300 rounded-sm px-3 py-2 gap-2">
                <FaUserCircle className="text-gray-300 text-xl" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none w-full font-semibold text-gray-500"
                />
              </div>
              <div className="flex items-center border border-gray-300 rounded-sm px-3 py-2 gap-2">
                <FaUserCircle className="text-gray-300 text-xl" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none w-full"
                />
              </div>
            </div>
            <div className="flex items-center border border-gray-300 rounded-sm px-3 py-2 gap-2">
              <MdEmail className="text-gray-300 text-xl" />
              <input
                type="email"
                placeholder="Your Email"
                className="outline-none w-full"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-sm px-3 py-2 gap-2">
              <IoMdCall className="text-gray-300 text-xl" />
              <input
                type="tel"
                placeholder="Your Mobile Number"
                className="outline-none w-full"
              />
            </div>
            <div>
              <textarea
                placeholder="How can we help?"
                rows="4"
                className="w-full border border-gray-300 rounded-sm px-4 py-2 outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-bronze-700 text-xl font-bold text-white px-6 py-2 md:py-4 rounded-sm hover:bg-bronze-900 transition"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default ReachIntro;
