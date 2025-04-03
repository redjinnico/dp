import { AnimatePresence, motion, useInView } from "framer-motion";
import herSectionVideo from "../assets/videos/Untitled_Artwork.gif";
import myImage from "../assets/images/myPhoto.jpg";
import Nnnn from "../assets/videos/Nnnn.gif";
import showcaseVideo from "../assets/videos/clone1.mp4";
import cardImage from "../assets/images/card1.jpg";
import { useEffect, useRef, useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { LuArrowUpRight } from "react-icons/lu";
import { FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaBehance } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ExperimentalNarrativeImage from "../assets/cover/Experimentalnarrative.jpeg";
import FictionFilmImage from "../assets/cover/Fictionfilm.jpeg";
import FilmPhotographyImage from "../assets/cover/filmphotography.png";
import MixMediaNarrativeImage from "../assets/cover/Mixmedianarrative.jpeg";
import ShowreelImage from "../assets/cover/Showreel1.png";
import ShowreelImage1 from "../assets/cover/showReel12.JPEG";
import Musicvideo from "../assets/cover/Musicvideo.jpeg";
import Resume from "../assets/RESUME.pdf";


export default function Home() {

    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "0px" });
    const [isHovered, setIsHovered] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const navigate = useNavigate();
    const handleTogglePlay = () => {
        const vid = videoRef.current;
        if (!vid) return;

        if (vid.paused) {
            vid.play();
            setIsPlaying(true);
        } else {
            vid.pause();
            setIsPlaying(false);
        }
    };


    const fullText = "Hi  I am  Divya And This  is  my  portfolio";
    const [displayedText, setDisplayedText] = useState("");
    const [index, setIndex] = useState(0);
    const [isTyping] = useState(true);

    useEffect(() => {
        if (!isTyping || index >= fullText.length) return;

        const isSmallScreen = window.innerWidth < 768;
        const delay = index === 0
            ? isSmallScreen ? 1000 : 3000
            : 80;

        const timeout = setTimeout(() => {
            setDisplayedText((prev) => prev + fullText.charAt(index));
            setIndex((prev) => prev + 1);
        }, delay);

        return () => clearTimeout(timeout);
    }, [index, isTyping, fullText]);




    return (<div className="p-6">
        <div id="home" className="w-full h-[calc(100vh-30px)] md:h-screen overflow-hidden flex flex-col md:flex-row items-center justify-center px-0 md:px-10 py-0 mb-0 md:mb-18 relative">
            <div className="w-full relative h-screen flex  justify-center ">
                <div className="flex w-full items-center justify-center mt-0 md:mt-60 flex-col  relative">
                    <motion.img
                        src={herSectionVideo}
                        initial={{ x: "-30vw", opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="hidden md:block h-[68vh] object-cover -mt-[373px]  mr-96"
                        alt=""
                    />

                    <motion.img
                        src={Nnnn}
                        initial={{ x: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                        // onAnimationComplete={() => setImagesAnimated(true)}
                        className="hidden md:block h-auto w-[280px] absolute left-1/2 -top-40 ml-10"
                        alt=""
                    />
                    <div className="flex flex-col md:hidden relative overflow-hidden  h-screen w-full  items-center  justify-center ">
                        <img src={Nnnn} className="max-w-full absolute w-[150px] object-cover  -mt-90  " alt="" />
                        <img src={herSectionVideo} className="h-[350px]  w-full" alt="" />
                    </div>

                    <div className="mt-1">
                    </div>
                </div>
                <div className="absolute bottom-18">
                    <div>&nbsp;</div>
                    <motion.h1
                        style={{ fontFamily: "FontFinal" }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, ease: "easeOut" }}
                        className="text-xl   md:text-[40px]  font-[400] text-[#181C14]  uppercase tracking-wide leading-snug text-center font-handwritten z-10"
                    >
                        {displayedText}
                    </motion.h1>
                </div>
            </div>
        </div>
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto overflow-hidden mt-10 rounded-xl shadow-2xl w-full max-w-[90%] "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setIsPlaying(false);
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                }
            }}
        >
            {!isPlaying && (<>
                <img src={ShowreelImage} className="w-full h-[200px] md:h-[calc(100vh-100px)] object-cover hidden md:block" alt="show reel" />
                <img src={ShowreelImage1} className="w-full h-[200px] md:h-[calc(100vh-100px)] object-cover  md:hidden" alt="show reel" />
            </>
            )}

            <video
                ref={videoRef}
                className={`w-full  md:h-[calc(100vh-100px)]  h-[200px] object-cover ${!isPlaying ? 'hidden' : ''}`}
                muted
                playsInline
            >
                <source src={showcaseVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <AnimatePresence>
                {isHovered && !isPlaying && (
                    <motion.div
                        className="absolute inset-0 bg-black/30 backdrop-blur-lg text-white flex flex-col justify-between p-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {/* Top Content */}
                        <div
                            // initial={{ opacity: 0 }}
                            // animate={{ opacity: 1 }}
                            // exit={{ opacity: 0 }}
                            // transition={{ duration: 0.3, ease: "easeOut" }}
                            className="text-left h-full flex flex-col justify-between"
                        >
                            {/* Top text animation */}
                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0 }}
                                className="flex flex-col w-full items-start"
                            >
                                <h1 className="text-2xl md:text-6xl font-bold leading-tight">
                                    SHOWREEL
                                </h1>
                                <h1 className="text-2xl md:text-6xl font-bold leading-tight">
                                    2025
                                </h1>
                            </motion.div>

                            {/* Bottom button animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                                className=" transform group-hover:translate-y-0 translate-y-2 "
                            >
                                <button onClick={handleTogglePlay} className="flex items-center gap-2 bg-white text-[#181C14] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                                    <FaPlay className="text-xl" />Play Video
                                </button>
                            </motion.div>
                        </div>

                        {/* <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                        >
                            <button
                                onClick={handleTogglePlay}
                                className="flex items-center gap-3 p-4 cursor-pointer bg-white text-[#181C14] rounded-full font-semibold hover:scale-105 transition shadow-lg text-lg"
                            >
                                {isPlaying ? (
                                    <>
                                        <FaPause className="text-xl" /> Play Video
                                    </>
                                ) : (
                                    <>
                                        <FaPlay className="text-xl" /> Play Video
                                    </>
                                )}
                            </button>
                        </motion.div> */}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
        <div id="works" className="grid grid-cols-1 overflow-hidden sm:grid-cols-2 gap-12 max-w-[90%] mx-auto my-12">

            {/* MUSIC VIDEO */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => navigate("/music-video")}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer  transition-transform duration-500 hover:scale-[1]"
            >
                <img
                    src={Musicvideo}
                    alt="MUSIC VIDEO"
                    className="w-full h-full object-cover transition-transform duration-300 h-[200px] md:h-[400px] group-hover:scale-105"
                />
                <h3 className="text-lg md:text-4xl font-semibold text-white absolute bottom-2 bg-black/50 px-2 md:hidden">MUSIC VIDEO</h3>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md text-white flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-3xl md:text-4xl font-semibold">MUSIC VIDEO</h3>
                    </div>
                    <div className="self-start transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 delay-100">
                        <button className="flex items-center gap-2 bg-white text-[#181C14] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                            View Work <FiArrowUpRight />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* FICTION */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => navigate("/function")}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer  transition-transform duration-500 hover:scale-[1]"
            >
                <img
                    src={FictionFilmImage}
                    alt="FICTION"
                    className="w-full h-full object-cover transition-transform duration-300 h-[200px] md:h-[400px] group-hover:scale-105"
                />
                <h3 className="text-lg md:text-4xl font-semibold text-white absolute bottom-2 bg-black/50 px-2 md:hidden">FICTION</h3>

                <div className="absolute inset-0 bg-black/40 backdrop-blur-md text-white flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-3xl md:text-4xl font-semibold">FICTION</h3>
                    </div>
                    <div className="self-start transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 delay-100">
                        <button className="flex items-center gap-2 bg-white text-[#181C14] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                            View Work <FiArrowUpRight />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* MIX MEDIA */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => navigate("/mix-media")}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer  transition-transform duration-500 hover:scale-[1]"
            >
                <img
                    src={MixMediaNarrativeImage}
                    alt="MIX MEDIA"
                    className="w-full h-full object-cover transition-transform duration-300 h-[200px] md:h-[400px] group-hover:scale-105"
                />
                <h3 className="text-lg md:text-4xl font-semibold text-white absolute bottom-8 bg-black/50 px-2 md:hidden">MIX MEDIA</h3>
                <p className="text-[13px] md:text-2xl mt-2 font-medium absolute bottom-2 text-white p-1 bg-black/50 px-2 md:hidden">STORYTELLING</p>


                <div className="absolute inset-0 bg-black/40 backdrop-blur-md text-white flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-3xl md:text-4xl font-semibold">MIX MEDIA</h3>
                        <p className="text-xl md:text-2xl mt-2 font-medium">STORYTELLING</p>
                    </div>
                    <div className="self-start transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 delay-100">
                        <button className="flex items-center gap-2 bg-white text-[#181C14] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                            View Work <FiArrowUpRight />
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* EXPERIMENTAL */}
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => navigate("/experimental")}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer  transition-transform duration-500 hover:scale-[1]"
            >
                <img
                    src={ExperimentalNarrativeImage}
                    alt="EXPERIMENTAL"
                    className="w-full h-full object-cover transition-transform duration-300 h-[200px] md:h-[400px] group-hover:scale-105"
                />
                <h3 className="text-lg md:text-4xl font-semibold text-white absolute bottom-8 bg-black/50 px-2 md:hidden">EXPERIMENTAL</h3>
                <p className="text-[13px] md:text-2xl mt-2 font-medium absolute bottom-2 text-white p-1 bg-black/50 px-2 md:hidden">NARRATIVE</p>
                <div className="absolute inset-0 bg-black/40 backdrop-blur-md text-white flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-3xl md:text-4xl font-semibold">EXPERIMENTAL</h3>
                        <p className="text-[13px] md:text-2xl mt-2 font-medium">NARRATIVE</p>
                    </div>
                    <div className="self-start transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 delay-100">
                        <button className="flex items-center gap-2 bg-white text-[#181C14] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                            View Work <FiArrowUpRight />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>


        <div className="max-w-[90%] mx-auto relative mt-12">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => navigate("/film-photography")}
                className="relative overflow-hidden rounded-xl shadow-lg group cursor-pointer h-[180px] md:h-[400px]  transition-transform duration-500 hover:scale-[1]"
            >
                <img
                    src={FilmPhotographyImage}
                    alt="FILM PHOTOGRAPHY"
                    className="w-full h-full object-cover transition-transform duration-300   group-hover:scale-105"
                />
                <h3 className="text-lg md:text-4xl font-semibold text-white absolute bottom-2 bg-black/50 px-2 md:hidden">FILM PHOTOGRAPHY</h3>

                <div className="absolute inset-0 bg-black/40 backdrop-blur-md text-white flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                        <h3 className="text-3xl md:text-4xl font-semibold">FILM PHOTOGRAPHY</h3>
                    </div>
                    <div className="self-start transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 delay-100">
                        <button className="flex items-center gap-2 bg-white text-[#181C14] px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
                            View Work <FiArrowUpRight />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
        <div className="mb-20 mt-18 md:mt-24 flex items-start flex-col w-full bg-white text-[#181C14] font-sans max-w-[90%] mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold mb-8 text-[#181C14] uppercase" id="about">
                About Me
            </motion.div>

            <div className="flex flex-col md:flex-row gap-10 items-start overflow-hidden">
                {/* Left - Image */}
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="w-full md:w-[40%] text-left"
                >
                    <img
                        src={myImage}
                        alt="Divya"
                        className="rounded-xl h-100 w-full object-cover aspect-square mb-6"
                    />
                    <h2 className="text-2xl font-bold text-[#181C14]">DIVYA BOOB</h2>
                </motion.div>

                {/* Right - Description */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: typeof window !== "undefined" && window.innerWidth < 768 ? -100 : 100, // left on mobile, right on desktop
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    onViewportEnter={() => {
                        console.log("Animation started!");
                    }}
                    className="w-full md:w-[60%] space-y-12 relative"
                >
                    <p className="text-base md:text-lg leading-relaxed">
                        Hi, I'm a 20-year-old film student with design background, currently completing my third year in Ahmedabad. I once read that you have to find something you love enough to take risks, ever since I am trying my best to push all boundaries, explore, learn and give back.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm md:text-base">
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: typeof window !== "undefined" && window.innerWidth < 768 ? -100 : 100, // left on mobile, right on desktop
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}>
                            <h4 className="font-bold mb-2">EXPERIENCES</h4>
                            <p className="italic">Camera Intern</p>
                            <p>Olleeve Films Design<br />(Jade Blue Commercial)</p>
                            <p className="mt-4">Students films:</p>
                            <div className="flex flex-col items-start gap-0">
                                <span><i>DOP</i></span>
                                <span><i>Co Director</i></span>
                                <span><i>Sound recordist</i></span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: typeof window !== "undefined" && window.innerWidth < 768 ? -100 : 100, // left on mobile, right on desktop
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}>
                            <h4 className="font-bold mb-2">HARD SKILLS</h4>
                            <div className="flex flex-col items-start gap-2 pr-2">
                                <span><i>DaVinci Resolve</i></span>
                                <span><i>Adobe</i> : Premiere Pro, Audition,<br /> After Effects, Illustrator, Photoshop</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: typeof window !== "undefined" && window.innerWidth < 768 ? -100 : 100, // left on mobile, right on desktop
                            }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}>
                            <h4 className="font-bold mb-2">AREA OF INTEREST</h4>
                            <div className="flex flex-col items-start ">
                                <span>Direction</span>
                                <span>Cinematography</span>
                                <span>Editing</span>
                                <span>Film Theory</span>
                                <span>Experimental Narrative</span>
                            </div>
                        </motion.div>
                    </div>

                    <hr className="mt-[1.6px] border-black" />
                    <div className="w-full pt-[12px]">
                        <a href={Resume} target="_blank">
                            <button
                                className="cursor-pointer bg-[#eeeeee] hover:bg-[#181C14] hover:text-white px-6 py-2 rounded-xl flex items-center gap-2 text-[#181C14] absolute -bottom-0 right-auto md:right-0 transition-all duration-300 group"
                            >
                                <span className="font-bold italic tracking-wide">RESUME</span>
                                <LuArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>

        <motion.footer
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="md:max-w-[90%] px-4 md:px-0 mx-auto pb-0 mb-0"
        >
            <div className="flex items-top mt-32 justify-between" id="contact">
                <div className="text-4xl md:text-[5rem] font-[900] md:leading-[5rem]">
                    LET'S CONNECT
                </div>
                <LuArrowUpRight className="text-6xl mt-8 md:mt-0 md:text-[6rem]" />
            </div>

            <hr className="mt-4 border-black" />

            <div className="flex  md:flex-wrap gap-8 md:gap-4 justify-center md:justify-between mt-8">
                <div className="cursor-pointer flex  w-full md:w-fit justify-between md:justify-start     md:flex-col gap-2 md:gap-4">
                    <a href="mailto:divyabub6@gmail.com">
                        <span className="flex items-center  gap-2 text-[#181C14] px-4 py-1.5 w-fit rounded-xl text-2xl md:text-xl transition-all duration-300 delay-100 hover:bg-[#181C14] hover:text-white">
                            <FiMail />  <span className="hidden md:block">  divyabub6@gmail.com </span>
                        </span>
                    </a>
                    <a href="https://www.behance.net/divyabub" target="_blank" rel="noopener noreferrer">
                        <span className="cursor-pointer flex  items-center gap-2 text-[#181C14] px-4 py-1.5 w-fit rounded-xl text-2xl md:text-xl transition-all duration-300 delay-150 hover:bg-[#181C14] hover:text-white">
                            <FaBehance /> <span className="hidden md:block"> Behance  </span>
                        </span>
                    </a>
                </div>
                <div className="cursor-pointer flex w-full md:w-fit   md:flex-col gap-2 md:gap-4 text-right justify-between  md:justify-end items-start md:items-end">
                    <a href="tel:+917774041130">
                        <span className="flex items-center gap-2 text-[#181C14] px-4 py-1.5 rounded-xl text-2xl md:text-xl transition-all duration-300 delay-100 hover:bg-[#181C14] hover:text-white">
                            <FiPhone />  <span className="hidden md:block">+91 7774041130   </span>
                        </span>
                    </a>
                    <a href="https://www.instagram.com/divya0_b?igsh=MTVucm1hZzdidXc1Zg==" target="_blank" rel="noopener noreferrer">
                        <span className="cursor-pointer flex items-center gap-2 text-[#181C14] px-4 py-1.5 rounded-xl text-2xl md:text-xl transition-all duration-300 delay-150 hover:bg-[#181C14] hover:text-white">
                            <FaInstagram /> <span className="hidden md:block"> Instagram  </span>
                        </span>
                    </a>
                </div>
            </div>

            <div className="text-center text-xs mt-8 tracking-wide flex w-full flex-col">
                <span>
                    ALL RIGHTS RESERVED <span className="text-lg align-middle">©</span>
                </span>
                <span
                    style={{ fontFamily: "FontFinal" }}
                    className="text-6xl h-[20px] text-center -mt-4 font-[400] text-black leading-snug uppercase"
                >
                    DB
                </span>
            </div>
        </motion.footer>
    </div >

    );
}
