import { Typography, Card, CardBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='w-full bg-white p-8'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between'>
        <Card shadow={false} className='bg-[#FAFAFA] px-10'>
          <CardBody>
            <img src='/FooterLogo.png' alt='logo' className='w-40' />
          </CardBody>
        </Card>
        <ul className='flex flex-wrap items-center gap-y-2 gap-x-8'>
          <li>
            <Typography
              as={Link}
              to='/about'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'>
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to='/services'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'>
              Services
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to='/contact-us'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'>
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className='my-8 border-blue-gray-50' />
      <Typography color='blue-gray' className='text-center font-normal'>
        &copy; {currentYear} Mostafa Abd El-Rasheed
      </Typography>
      <div className='social-Links flex gap-4 text-blue-gray-900 justify-center '>
        <Typography
          as={Link}
          to='https://www.facebook.com/profile.php?id=100010375247419&mibextid=hIlR13'
          className='opacity-80 transition-opacity hover:opacity-100'>
          <FaFacebook />
        </Typography>
        <Typography
          as={Link}
          to='https://www.instagram.com/11mostafa01?igsh=MWJpZGk2cGpwYms0Zw=='
          className='opacity-80 transition-opacity hover:opacity-100'>
          <FaSquareInstagram />
        </Typography>
        <Typography
          as={Link}
          to='https://www.linkedin.com/in/mostafa-abd-elrasheed/'
          className='opacity-80 transition-opacity hover:opacity-100'>
          <FaLinkedin />
        </Typography>
        <Typography
          as={Link}
          to='https://github.com/mostafa9922'
          className='opacity-80 transition-opacity hover:opacity-100'>
          <FaGithub />
        </Typography>
      </div>
    </footer>
  );
}
