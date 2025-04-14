import TypeIt from "typeit-react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='relative min-h-screen scroll-smooth' id='first'>
      {/* Hero Section - Unchanged */}
      <div className='relative pt-20 h-screen'>
        <video
          className='absolute top-0 left-0 w-full h-screen object-cover -z-10'
          autoPlay
          loop>
          <source src='/HomeVideo.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <audio
          className='absolute top-0 left-0 w-full h-screen object-cover -z-10'
          autoPlay>
          <source src='/ElectricSound.mp3' type='audio/mpeg' />
          Your browser does not support the audio tag.
        </audio>
        <img
          className='absolute right-6 bottom-6 h-40 w-40 rounded-full object-cover object-center md:h-80 md:w-80 lg:h-96 lg:w-96'
          src='/MyPhoto.jpg'
          alt='Personal Photo'
        />
        <div className='relative z-10 flex items-start justify-start px-4 pt-60'>
          <TypeIt
            className='text-l sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center text-gray-100'
            options={{
              cursor: false,
              loop: true,
            }}
            getBeforeInit={(instance) => {
              instance
                .type("Hi, I'm Mostafa Abd El-Rasheed")
                .pause(750)
                .delete(22)
                .pause(500)
                .type("a React Frontend Developer")
                .pause(750)
                .delete(26)
                .type("an Electrical Power Engineer");
              return instance;
            }}
          />
        </div>
      </div>

      <div className='about-us container mx-auto min-h-screen flex flex-col items-center justify-center py-8'>
        <Button className='cursor-default px-10 mb-6' size='lg'>
          about me
        </Button>
        <div className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 gap-8 md:gap-16'>
          <div className='md:w-1/2'>
            <p className='text-base md:text-lg'>
              It all started with a simple question: How does electricity power
              the world? As a kid, I was fascinated by the way lights turned on,
              motors spun, and devices came to life at the flick of a switch.
              That curiosity led me down a path of discovery, one wire, one
              circuit, and one experiment at a time.
              <Link to='/about'>
                <Button variant='text' className='text-blue-600 p-0'>
                  Read More
                </Button>
              </Link>
            </p>
          </div>
          <div className='md:w-1/2'>
            <img
              className='h-64 md:h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50'
              src='/about-us.jpg'
              alt='nature image'
            />
          </div>
        </div>
      </div>

      <div className='skills container mx-auto min-h-screen flex flex-col items-center justify-center py-8'>
        <Button className='cursor-default px-10 mb-6' size='lg'>
          Skills
        </Button>
        <div className='w-full max-w-4xl px-4'>
          <div className='mb-12'>
            <p className='text-lg font-semibold mb-4'>Using Now:</p>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
              {[
                { src: "/HTML5.svg", name: "HTML5" },
                { src: "/CSS3.svg", name: "CSS3" },
                { src: "/JS.svg", name: "JavaScript" },
                { src: "/react.svg", name: "React" },
                { src: "/Tailwind.png", name: "Tailwind CSS" },
                { src: "/bootstrap.svg", name: "Bootstrap" },
                { src: "/git.svg", name: "Git" },
                { src: "/figma.svg", name: "Figma" },
              ].map((skill) => (
                <li
                  key={skill.name}
                  className='flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-md'>
                  <img
                    src={skill.src}
                    alt={`${skill.name} icon`}
                    className='h-12 w-12 mb-2'
                  />
                  <span className='text-sm md:text-base'>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className='text-lg font-semibold mb-4'>Learning:</p>
            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6'>
              {[
                { src: "/Node.png", name: "Node.js" },
                { src: "/expreesjs.jpeg", name: "ExpressJS" },
                { src: "/Mongo.png", name: "MongoDB" },
              ].map((skill) => (
                <li
                  key={skill.name}
                  className='flex flex-col items-center p-4 rounded-lg hover:bg-gray-100 transition-all hover:shadow-md'>
                  <img
                    src={skill.src}
                    alt={`${skill.name} icon`}
                    className='h-12 w-12 mb-2'
                  />
                  <span className='text-sm md:text-base'>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
