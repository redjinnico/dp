import { GoArrowLeft } from "react-icons/go";
import bw01_14 from "../assets/film/1.jpg";
import bw01_18 from "../assets/film/2.jpg";
import bw01_21 from "../assets/film/3.jpg";
import bw01_25 from "../assets/film/4.jpg";
import cnr01_06 from "../assets/film/5.png";
import cnr01_12 from "../assets/film/6.jpg";
import cnr01_25 from "../assets/film/7.jpg";
import cnr02_03 from "../assets/film/8.jpg";
import cnr02_14 from "../assets/film/9.jpg";
import cnr02_15 from "../assets/film/10.jpg";
import cnr02_21 from "../assets/film/11.jpg";
import cnr02_29 from "../assets/film/12.png";
import showcaseVideo from "../assets/videos/clone1.mp4";
import { useLocation, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  bw01_14,
  bw01_18,
  bw01_21,
  bw01_25,
  cnr01_06,
  cnr01_12,
  cnr01_25,
  cnr02_03,
  cnr02_14,
  cnr02_15,
  cnr02_21,
  cnr02_29,
];


const FilmPhotography = () => {
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
    <section className="px-6 md:px-32 pt-16 pb-10 md:py-16 bg-white  ">
      <div className="space-y-12 mt-12">
        <h3 className="text-2xl font-semibold text-[#181C14]" style={{ fontFamily: "BDO Grotesk" }}>Film Photography</h3>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-12 ">
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
                className="w-full h-auto md:h-[380px] object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="my-10 border-black" />
      <div className="flex justify-between items-center">
        <button
          onClick={() => handleClick("works")}
          className="cursor-pointer p-4 rounded-full border border-border text-black hover:bg-black  hover:text-white text-md md:text-4xl transition"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => handleClick("works")}
          className="cursor-pointer p-4 rounded-full rotate-180 border border-border text-black hover:bg-black  hover:text-white text-md md:text-4xl transition"
        >
          <GoArrowLeft />
        </button>
      </div>
    </section>
  );
};

export default FilmPhotography;
