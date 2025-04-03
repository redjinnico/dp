import { GoArrowLeft } from "react-icons/go";
import cardImage from "../assets/images/card1.jpg";
import image1 from "../assets/function/1.png";
import image2 from "../assets/function/2.png";
import image3 from "../assets/function/3.png";
import image4 from "../assets/function/4.png";
import image5 from "../assets/function/5.png";
import image6 from "../assets/function/6.png";

import showcaseVideo from "../assets/videos/clone1.mp4";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
];

const Function = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleClick = (section) => {
    if (location.pathname === "/") {
      scroller.scrollTo(section, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <section className="px-6 md:px-64 pt-16 pb-10 z-0 bg-[#0a0908]">
      <div className="relative w-full rounded-xl overflow-hidden z-0">
        <iframe
          src="https://player.vimeo.com/video/1070711947?h=b6184a16de&amp;title=0&amp;byline=0&amp;portrait=0"
          className="md:h-[82vh] w-full  md:w-[100%] mt-10  "  width="540px" height="240px"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="KYA MAIN SUNDAR LAG RAHA HOON"
        ></iframe>
      </div>
      <div className="py-10 text-white text-[17px] leading-relaxed font-serif">
        <div className="flex flex-col md:justify-between items-start mb-8">
          <h1 className="text-2xl font-semibold">
            Title - <span className="italic font-normal">'चिट्ठी' (Letter)</span>
          </h1>
          <span className="mt-4 text-xs text-right md:text-base">-Writer, Director, Editor</span>
        </div>
        <div className="space-y-1 text-xs md:text-base">
          <div className="flex">
            <span className="w-24 text-sm">Genre</span>
            <span className="mr-2">:</span>
            <span>Psychological / Drama</span>
          </div>
          <div className="flex">
            <span className="w-24 text-sm">Language</span>
            <span className="mr-2">:</span>
            <span>Hindi</span>
          </div>
          <div className="flex">
            <span className="w-24 text-sm">Subline</span>
            <span className="mr-2">:</span>
            <span className="italic w-45 md:w-full">
              A tale of friendship, guilt, and a past that didn’t stay hidden.
            </span>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-start justify-between md:gap-10">
          <div>
            <h2 className="text-sm md:text-lg font-semibold mb-2 w-24 md:w-full">Logline</h2>

          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-xs md:text-base leading-relaxed">
              <span className="font-medium">Varsha</span> and her childhood friends dig out a time capsule,
              a strange letter by her hints at a long lost secret about a missing boy.
              As her memories blur, she spirals into doubt, was she involved,
              or is her mind playing tricks on her?
            </p>
            <div className="mt-12 md:mt-6 text-xs md:text-base leading-relaxed space-y-4">
              {/* <p>
                As my first short film, this project was truly an eye opener about how one must
                always be present in the moment and constantly create another.
              </p> */}
              <p className="">
                Developing an idea from scratch, humanising the characters, visualising another reality,
                it was a roller coaster experience. This three month long project definitely presented
                never ending challenges but ultimately taught me to appreciate the chance to bring my story to life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:space-y-12  mt-6 md:mt-12">
        <h3 className="text-sm md:text-2xl mb-10 font-semibold text-white" style={{ fontFamily: "BDO Grotesk" }}>PROCESS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 ">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              className="overflow-hidden rounded-md"
            >
              <img
                src={img}
                alt={`process-${index}`}
                className="w-full h-[250px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="my-10 border-[#ECDFCC]" />
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleClick("works")}
          className="cursor-pointer p-4 rounded-full border border-white text-white hover:bg-black text-md md:text-4xl transition"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => navigate("/mix-media")}
          className="cursor-pointer p-4 rounded-full rotate-180 border border-white text-white hover:bg-black text-md md:text-4xl transition"
        >
          <GoArrowLeft />
        </button>
      </div>
    </section>

  );
};

export default Function;
