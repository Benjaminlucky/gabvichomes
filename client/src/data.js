import { LuConstruction } from "react-icons/lu";
import { FaHandshake } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";

export const topNavLinks = [
  { name: "Home", path: "/" },
  { name: "Company", path: "/company" },
  { name: "Projects", path: "/projects" },
  { name: "Services", path: "/services" },
  // { name: "Reach Us", path: "/reach-us" },
];
export const bottomNavLinks = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms of Service", path: "/terms-of-service" },
  { name: "Contact Us", path: "/contact-us" },
  { name: "FAQ", path: "/faq" },
];
export const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Twitter", url: "https://www.twitter.com" },
  { name: "LinkedIn", url: "https://www.linkedin.com" },
  { name: "Instagram", url: "https://www.instagram.com" },
];

export const subsidiaries = [
  {
    title: "Gabvichomes & Properties Limited",
    description: "(Nigeria's leading real estate Developer)",
    image: "/assets/hilltopCastle.webp",
    url: "#",
  },
  {
    title: "Gabvic Homes LLC",
    description: "(International Real Estate & Investments)",
    image: "/assets/usallc.jpg",
    url: "https://www.gabvichomes.com",
  },
  {
    title: "(Àlààfin Lamidi Adeyemi III Court) ",
    alafin: "Àlààfin Imperial Court.",
    // description: "(The Emperor Sanctuary)",
    image: "/assets/obaAdeyemi.jpg",
    url: "https://www.gabvichomes.com",
  },
];

export const value = [
  {
    letter: "G",
    title: "Growth & Innovation",
    desc: "We embrace continuous improvement, leveraging innovation to drive progress in the real estate industry.",
  },
  {
    letter: "A",
    title: "Accountability & Integrity",
    desc: "We uphold transparency, honesty, and ethical practices in all our dealings, ensuring trust and reliability.",
  },
  {
    letter: "B",
    title: "Beneficial Partnerships",
    desc: "We foster strong relationships with clients, investors, and stakeholders to create value-driven opportunities.",
  },
  {
    letter: "V",
    title: "Visionary Excellence",
    desc: "We set high standards, striving for excellence in every project to deliver premium real estate solutions.",
  },
  {
    letter: "I",
    title: "Impact & Sustainability",
    desc: "We are committed to sustainable development that positively impacts communities and enhances quality of life.",
  },
  {
    letter: "C",
    title: "Customer-Centric Approach",
    desc: "Our clients remain our priority, and we tailor solutions to meet their unique needs, ensuring long-term satisfaction.",
  },
];

export const testimony = [
  {
    name: "Mrs Adeola O. ",
    location: "Lagos, Nigeria",
    desc: "GabvicHomes made owning land in Lagos a stress-free experience. From documentation to site location, everything was seamless. I highly recommend them to anyone looking to invest with peace of mind.",
    image: "/assets/MrsAdeolaOlabiy.jpeg",
  },
  {
    name: "Mrs Ayodele.",
    location: "London, UK",
    desc: "As a Nigerian living in the U.K., investing back home always felt risky—until I discovered GabvicHomes. Their professionalism, constant updates, and transparency gave me full confidence. Now I own a plot at Hilltop Castle Estate!",
    image: "/assets/MrsAyodele.jpeg",
  },
  {
    name: "Mr. Jamiu K.",
    location: "Abuja, Nigeria",
    desc: "What stood out for me was how knowledgeable and responsive their team was. They guided me through the entire process and delivered exactly as promised. GabvicHomes is the real deal.",
    image: "/assets/MrJamiuKolawole.jpeg",
  },
  {
    name: "Hon. Victor O.",
    location: "USA",
    desc: "Alaafin Imperial Court is one of the most unique real estate concepts I’ve seen—blending culture, class, and value. GabvicHomes is redefining real estate with vision and purpose.",
    image: "/assets/HonVictorOdigwe.jpeg",
  },
];

export const leadership = [
  {
    name: "Abiodun",
    position: " CEO / Managing Director",
    image: "/assets/abiodun.jpg",
    description:
      "Abiodun, a seasoned accountant from Epe, Lagos, brings extensive expertise in cost management, financial strategy, and budget optimization. His leadership, integrity, and strategic foresight have been pivotal in Gabvic Homes' growth. With a track record of success across multiple organizations, he continues to drive innovation and long-term success in the real estate sector.",
  },
  {
    name: "Joshua",
    position: "Executive Director",
    image: "/assets/joshua.jpg",
    description:
      "Joshua, a real estate broker with over a decade of experience, specializes in market analysis, sales strategy, and investment planning. A native of Ogbe Yagba West, Kogi State, he has held key leadership roles in marketing and operations, shaping Gabvic Homes’ business growth. His ability to forecast trends and implement effective sales strategies has been instrumental in the company’s success.",
  },
  {
    name: "Olalekan ",
    position: "Legal Partner",
    image: "/assets/olalekan.png",
    description:
      "A vast experienced legal practitioner and very result oriented in legal fields with effectiveness, efficiency and punctuality. He co-ordinates the briefs of the firm generally. He is very accessible and discharges obligations with great sense of responsibility.",
  },
];

export const nigeriaProjects = [
  {
    title: "Hilltop Castle Estate",
    description:
      "Hilltop Castle Estate is designed to be fully developed within 48 months from its launch, ensuring a well-planned, thriving community for investors and homeowners.",
    link: "#",
    image: "/assets/hilltopCastle.webp",
    location: "Epe, Lagos",
    status: "Still Selling",
  },
  {
    title: "Hilltop Castle Estate Bungalow Penthouse",
    description:
      "This project is designed to provide contemporary, comfortable, and spacious living spaces within a secure, rapidly growing community.",
    link: "#",
    image: "/assets/hilltopCastleBungalow2.jpg",
    location: "Epe, Lagos",
    status: "Still Selling",
  },
  {
    title: "Alaafin Imperial Court",
    description:
      "A tribute to the legacy of His Imperial Majesty, Kabiesi Oba Atanda Lamidi Olayiwola Adeyemi III (Alaafin of Oyo), honoring his dedication to preserving Yoruba culture and leadership.",
    link: "#",
    image: "/assets/obaAdeyemi.jpg",
    location: "Oyo, Nigeria",
    status: "Coming Soon",
  },
];

export const services = [
  {
    title: "Real Estate Development",
    subTitle: "Building Sustainable Communities for the Future",
    desc: "We design, plan, and construct residential and mixed-use estates with a focus on innovation, comfort, and long-term value. From concept to completion, our developments are crafted to meet evolving lifestyle and investment goals.",
    icon: LuConstruction,
  },
  {
    title: "Property Sales & Marketing",
    subTitle: "Connecting Buyers with Prime Opportunities",
    desc: "Our marketing and sales team ensures you have access to verified properties and the right audience. We use cutting-edge strategies and market insights to help you buy or sell with confidence and ease.",
    icon: FaHandshake,
  },
  {
    title: "Investment Consultation",
    subTitle: "Smart Property Investment Starts Here",
    desc: "Looking to grow your portfolio? We provide personalized guidance backed by real-time market data to help you invest wisely in high-yield properties both in Nigeria and abroad.",
    icon: BsBriefcaseFill,
  },
  {
    title: "Land Acquisition & Documentation",
    subTitle: "Securing Land with Confidence",
    desc: "We handle land sourcing, due diligence, and legal documentation with precision—ensuring all acquisitions are safe, transparent, and hassle-free. From title verification to transfer processing, we’ve got you covered.",
    icon: IoIosDocument,
  },
];
