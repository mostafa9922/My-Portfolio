import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { NotFound } from "./Components/NotFound";
import { Home } from "./Components/Home";
import { ContactUs } from "./Components/ContactUs";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Footer } from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
      <div className='fixed bottom-4 right-4 z-50 bg-white text-xl p-2 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out'>
        <a href='#first'>
          <FaArrowUp />
        </a>
      </div>
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
