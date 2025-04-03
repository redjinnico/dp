import { GoArrowLeft } from "react-icons/go";
import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/3.png";
import image4 from "../assets/images/4.png";
import image5 from "../assets/images/5.png";
import image6 from "../assets/images/6.png";
import image7 from "../assets/images/7.png";
import image8 from "../assets/images/8.png";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const MusicVideo = () => {
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
    <section className="px-6 md:px-64 pt-16 md:py-16 bg-[#0a0908] ">
      <div
        className="relative w-full rounded-xl overflow-hidden z-0  bg-[#0a0908]"
      >
        <iframe src="https://player.vimeo.com/video/1070709922?h=4d039c8dc0&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" className="md:h-[82vh] w-full  md:w-[100%] mt-10  "  width="540px" height="240px" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" title="KYA MAIN SUNDAR LAG RAHA HOON"></iframe>
      </div>  
      <div className="text-base leading-relaxed font-serif text-black mt-0 md:mt-10 text-white">
        <div className="font-[500] uppercase flex w-full gap-2 flex-col md:flex-row text-start md:items-center justify-start md:justify-between text-white">
          <div className="md:w-auto mt-6 md:mt-0 w-fit  text-sm md:text-2xl"> Song <span className="text-md">- KYA MAIN SUNDAR LAG RAHA HOON</span></div>
          <div className="hidden md:block md:w-auto w-fit text-right italic text-sm md:text-xl ">
            --Director, Editor, Mix Media Artist
          </div>
        </div>
        <p className="mt-12 md:mt-8 text-white text-xs md:text-base">Duration- 2 : 39 mins</p>
        <p className="mb-12 md:mb-0 mt-1 text-white text-xs md:text-base">Shot on- Canon Eos r50, Helios 58mm film lens</p>
        <div className="mt-6 text-white">
          <p className="text-xs md:text-base my-2 md:my-0">
          The music video is purely a combination and an attempt at mixing live action and mix medium, also first
          time using a film lens
          </p>
          <p className="text-xs md:text-base my-2 md:my-0">
          the very first step of the process was to sit with and pour my thoughts on the lyrics sheets, then developed a story, visualised it, , blocked, tested and shot it.
          </p>
          <p className="text-xs md:text-base my-2 md:my-0">
          Although music videos are perceived to be dependent mostly on the flow of music, I believe when we
          attach a piece of visual, we can defy it create multiple possibiliteis..
          </p>
        </div>
      </div>
      <div className="space-y-12 mt-14 md:mt-20 text-white">
        <h3 className=" text-sm md:text-2xl font-semibold" style={{ fontFamily: "BDO Grotesk" }}>PROCESS</h3>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-12 ">
          {images.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="overflow-hidden rounded-md"
            >
              <img
                src={img}
                alt={`process-${index}`}
                className="w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="my-10 border-white text-white" />
      <div className="flex justify-between items-center" >
        <button onClick={() => { handleClick('works') }} className="cursor-pointer p-4 rounded-full  border border-black text-white border-white hover:bg-black mb-10 text-md md:text-4xl hover:text-white transition">
          <GoArrowLeft />
        </button>
        <button onClick={()=>{navigate('/function')}} className="cursor-pointer p-4 rounded-full rotate-180  border border-black text-white border-white hover:bg-black mb-10 text-md md:text-4xl hover:text-white transition">
          <GoArrowLeft />
        </button>
      </div>
    </section>
  );
};

export default MusicVideo;
