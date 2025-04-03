import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const timeoutRef = useRef(null);
  const [themeActive,setThemeActive] = useState(false); 

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const showNavbar = () => {
      setVisible(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
      }, 3000);
    };

    window.addEventListener("mousemove", showNavbar);
    return () => {
      window.removeEventListener("mousemove", showNavbar);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const path = location.pathname.split('/')[1];
    const themedPaths = ['function', 'experimental','mix-media', 'music-video'];
    if (themedPaths.includes(path)) {
      setThemeActive(true);
    } else {
      setThemeActive(false);
    }
    const scrollTo = location.state?.scrollTo;
    if (location.pathname === "/" && scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
    }
  }, [location]);

  const menuItems = ["home", "works", "about", "contact"];

  const hasScrolledRef = useRef(false); 

  useEffect(() => {
    if (location.state?.scrollTo && !hasScrolledRef.current) {
      hasScrolledRef.current = true;
      scroller.scrollTo(location.state.scrollTo, {
        duration: 500,
        smooth: true,
        offset: -80,
      });
      navigate(location.pathname, { replace: true, state: null });
    }
  }, [location, navigate]);

  const handleClick = (section) => {
    setMenuOpen(false);
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
  const closeSidebar = () => setMenuOpen(false);

  return (
    <>
      <motion.div
        style={{ fontFamily: "FontFinal" }}
        onClick={() => navigate('/')}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        className={`cursor-pointer z-[999999] text-4xl md:text-5xl font-[400] absolute top-8 left-8 ${themeActive ? 'text-white' : ' text-[#181C14]'} uppercase glitchy-text`}
      >
        DB
      </motion.div>

      <motion.div 
       style={{ fontFamily: "FontFinal" }}
      //  onClick={() => navigate('/')}
       initial={{ opacity: 0, y: -50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
      className="fixed top-4.5 md:top-5 right-5 z-50">
        <button
          onClick={() => setMenuOpen(true)}
          className="p-4 cursor-pointer bg-transparent"
        >
          <CiMenuBurger className={` text-2xl md:text-3xl ${themeActive ? 'text-white' : ' text-[#181C14]'}   `} />
        </button>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSidebar}
            />
            <motion.div
              className="fixed top-0 right-0 w-38 md:w-64 h-full bg-white text-black z-50 shadow-xl px-6 py-4 flex flex-col gap-4"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-end absolute top-4 right-4">
                <button onClick={closeSidebar}>
                  <RxCross1 className="text-md md:text-2xl hover:text-red-500 transition" />
                </button>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                {menuItems.map((section) => (
                  <div
                    key={section}
                    onClick={() => handleClick(section)}
                    className="cursor-pointer px-3 py-2 rounded-md transition duration-200 hover:bg-black hover:text-white"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
