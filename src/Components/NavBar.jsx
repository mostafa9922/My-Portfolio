import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function NavList() {
  return (
    <ul className='my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-gray-100 lg'>
      <Typography as='li' variant='small' className='p-1 font-medium'>
        <Link
          to='/'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Home
        </Link>
      </Typography>
      <Typography as='li' variant='small' className='p-1 font-medium'>
        <Link
          to='/services'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Services
        </Link>
      </Typography>
      <Typography as='li' variant='small' className='p-1 font-medium'>
        <Link
          to='/about'
          className='flex items-center hover:text-blue-500 transition-colors'>
          About Us
        </Link>
      </Typography>
      <Typography as='li' variant='small' className='p-1 font-medium'>
        <Link
          to='/contact-us'
          className='flex items-center hover:text-blue-500 transition-colors'>
          Contact Us
        </Link>
      </Typography>
    </ul>
  );
}

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () => {
    if (window.innerWidth >= 960) setOpenNav(false);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Navbar className='fixed text-gray-100 top-0 left-0 w-full mx-auto max-w-screen-4xl px-6 py-3 rounded-none border-none bg-transparent z-50 backdrop-blur-none backdrop-filter-none shadow-none'>
      <div className='flex items-center justify-between'>
        <Typography
          as={Link}
          to='/'
          variant='h6'
          className='mr-4 cursor-pointer py-1.5'>
          Mostafa Abd El-Rasheed
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
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
        <NavList />
      </Collapse>
    </Navbar>
  );
}
