import React from "react";
import { FaUserCircle, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

function ReachIntro() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 text-gray-800">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-blue-700">
          Let’s Connect — We’re Here to Help
        </h3>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Whether you have questions, need property advice, or want to schedule
          a visit, our team is just a message away.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-10">
          <div>
            <h4 className="text-xl font-semibold text-blue-600">
              Our Office Location
            </h4>
            <p className="mt-2">Gabvichomes & Properties Limited</p>
            <p>NO. 3, Admiralty Lane, Eti-Osa</p>
            <p>L.G.A, Lagos State, Nigeria</p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-600">
              Call or Email Us Directly
            </h4>
            <p className="mt-2 text-sm text-gray-500">
              Talk to a Qualified Realtor
            </p>
            <div className="mt-2">
              <p className="font-medium">Phone Numbers:</p>
              <p>Nigeria: +234 XXX XXXXX</p>
              <p>USA: +1 XXX XXXX</p>
            </div>
            <div className="mt-2">
              <p className="font-medium">Email:</p>
              <p>General: info@gabvichomes.com</p>
              <p>Sales: sales@gabvichomes.com</p>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-blue-600">Follow Us</h4>
            <p className="mt-2 text-sm text-gray-500">
              Stay updated with our latest news and listings
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="https://facebook.com/gabvichomes"
                className="flex items-center gap-2 text-blue-700 hover:underline"
              >
                <FaFacebook /> facebook.com/gabvichomes
              </a>
              <a
                href="https://instagram.com/gabvic_homes"
                className="flex items-center gap-2 text-pink-500 hover:underline"
              >
                <AiFillInstagram /> @gabvic_homes
              </a>
              <a
                href="https://linkedin.com/gabvichomesltd"
                className="flex items-center gap-2 text-blue-500 hover:underline"
              >
                <IoLogoLinkedin /> Gabvic Homes Ltd
              </a>
              <a
                href="https://x.com/gabvicOfficial"
                className="flex items-center gap-2 text-black hover:underline"
              >
                <FaXTwitter /> @GabvicOfficial
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4">
            Get in Touch
          </h3>
          <p className="text-sm text-gray-500 mb-6">You can reach us anytime</p>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center border rounded-md px-3 py-2 gap-2">
                <FaUserCircle className="text-gray-500" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="outline-none w-full"
                />
              </div>
              <div className="flex items-center border rounded-md px-3 py-2 gap-2">
                <FaUserCircle className="text-gray-500" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="outline-none w-full"
                />
              </div>
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
              <MdEmail className="text-gray-500" />
              <input
                type="email"
                placeholder="Your Email"
                className="outline-none w-full"
              />
            </div>

            <div className="flex items-center border rounded-md px-3 py-2 gap-2">
              <IoMdCall className="text-gray-500" />
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
                className="w-full border rounded-md px-4 py-2 outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ReachIntro;
