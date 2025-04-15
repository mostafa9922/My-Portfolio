import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaSquareInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { to: "/about", label: "About Me" },
    { to: "/services", label: "Services" },
    { to: "/contact-us", label: "Contact Us" },
  ];

  const socials = [
    {
      to: "https://www.facebook.com/profile.php?id=100010375247419&mibextid=hIlR13",
      icon: <FaFacebook />,
    },
    {
      to: "https://www.instagram.com/11mostafa01?igsh=MWJpZGk2cGpwYms0Zw==",
      icon: <FaSquareInstagram />,
    },
    {
      to: "https://www.linkedin.com/in/mostafa-abd-elrasheed/",
      icon: <FaLinkedin />,
    },
    { to: "https://github.com/mostafa9922", icon: <FaGithub /> },
  ];

  return (
    <footer className='bg-white dark:bg-gray-900 px-6 py-12 md:py-16'>
      <div className='container mx-auto flex flex-col items-center gap-8 md:flex-row md:justify-between'>
        <img src='/FooterLogo.png' alt='logo' className='h-16 w-auto md:h-20' />
        <ul className='flex flex-wrap justify-center gap-8 md:gap-12'>
          {links.map(({ to, label }) => (
            <li key={to}>
              <Typography
                as={Link}
                to={to}
                color='blue-gray'
                className='text-base font-semibold transition-colors hover:text-indigo-500 dark:text-gray-200 dark:hover:text-indigo-400 md:text-lg'>
                {label}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
      <hr className='my-8 border-gray-200 dark:border-gray-700' />
      <div className='flex flex-col items-center gap-6'>
        <Typography
          color='blue-gray'
          className='text-base font-medium dark:text-gray-200 md:text-lg'>
          © {currentYear} Mostafa Abd El-Rasheed
        </Typography>
        <div className='flex gap-6'>
          {socials.map(({ to, icon }, index) => (
            <Typography
              key={index}
              as={Link}
              to={to}
              className='text-2xl opacity-80 transition-opacity hover:opacity-100 text-gray-700 dark:text-gray-200 md:text-3xl'>
              {icon}
            </Typography>
          ))}
        </div>
      </div>
    </footer>
  );
}
