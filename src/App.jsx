import { Route, Routes, useLocation } from "react-router-dom";
import { NavBar } from "./Components/NavBar";
import { NotFound } from "./Components/NotFound";
import { Home } from "./Components/Home";
import { ContactUs } from "./Components/ContactUs";
import { About } from "./Components/About";
import { Services } from "./Components/Services";
import { Footer } from "./Components/Footer";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div>
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
