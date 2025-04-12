import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList({ isHome, onLinkClick }) {
  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About Us" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  return (
    <ul
      className={`my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center p-5 lg:p-0 lg:gap-6 bg-white rounded-xl lg:bg-transparent ${
        isHome ? "text-black lg:text-white" : "text-black"
      }`}>
      {links.map(({ to, label }) => (
        <Typography
          key={to}
          as='li'
          variant='medium'
          className='p-1 font-medium'>
          <Link
            to={to}
            onClick={onLinkClick} // 💡 Close nav on link click
            className='flex items-center hover:text-blue-500 transition-colors'>
            {label}
          </Link>
        </Typography>
      ))}
    </ul>
  );
}

export function NavBar({ isHome }) {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) setOpenNav(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const closeNav = () => setOpenNav(false);

  return (
    <Navbar
      className={
        isHome
          ? "absolute text-gray-100 top-0 left-0 w-full mx-auto max-w-screen-4xl px-6 rounded-none border-none bg-transparent z-50 backdrop-blur-none backdrop-filter-none shadow-none"
          : "w-full mx-auto max-w-screen-4xl px-6 py-3 rounded-none border-none text-black"
      }>
      <div className='flex items-center justify-between'>
        <Typography
          as={Link}
          to='/'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5'>
          <img
            className='h-16 w-24 rounded-lg object-cover object-center'
            src='/HeaderLogo.jpg'
            alt='Header Logo'
          />
        </Typography>
        <div className='hidden lg:block'>
          <NavList isHome={isHome} />
        </div>
        <IconButton
          variant='text'
          className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
          ripple={false}
          onClick={() => setOpenNav(!openNav)}>
          {openNav ? (
            <XMarkIcon className='h-6 w-6' strokeWidth={2} />
          ) : (
            <Bars3Icon className='h-6 w-6' strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList isHome={isHome} onLinkClick={closeNav} />{" "}
        {/* Pass the closer */}
      </Collapse>
    </Navbar>
  );
}
