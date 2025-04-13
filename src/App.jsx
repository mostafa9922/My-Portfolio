import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { NavBar } from "./Components/NavBar";
import { NotFound } from "./Components/NotFound";
import { Home } from "./Components/Home";
import { ContactUs } from "./Components/ContactUs";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Footer } from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <AnimatePresence>
        {scrollY > 500 && (
          <motion.div
            key='scrollButton'
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            transition={{ duration: 0.3 }}
            className='fixed bottom-4 right-4 z-50 bg-white text-xl p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out'>
            <a href='#first'>
              <FaArrowUp />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <NavBar isHome={isHome} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
