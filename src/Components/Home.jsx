import TypeIt from "typeit-react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className='relative min-h-screen scroll-smooth' id='first'>
      <div className='relative pt-20 h-screen'>
        <video
          className='absolute top-0 left-0 w-full h-screen object-cover -z-10'
          autoPlay
          loop
          muted>
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
                <Button>Read More</Button>
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
      <div className='Trainings container mx-auto min-h-screen flex flex-col items-center justify-center py-8 gap-5'>
        <Button className='cursor-default px-10 mb-6' size='lg'>
          Trainings
        </Button>
        <div className='w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
          {[
            {
              title: "Electrical Engineering Intern",
              company: "SolarTech Solutions",
              description:
                "Designed and tested solar panel circuits, improving energy efficiency by 10%. Collaborated with a team to integrate smart metering systems for real-time monitoring.",
            },
            {
              title: "React Frontend Developer",
              company: "Freelance Project",
              description:
                "Built a responsive portfolio website using React and Tailwind CSS, enhancing user experience with smooth animations and accessible design.",
            },
            {
              title: "Arduino Project Lead",
              company: "Cairo University",
              description:
                "Led a team to develop an autonomous vehicle prototype using Arduino, integrating sensors and motors for obstacle detection.",
            },
            {
              title: "Smart Metering Research Assistant",
              company: "Cairo University",
              description:
                "Researched IoT-based smart meters, developing prototypes to optimize energy consumption data for urban grids.",
            },
          ].map((exp, index) => (
            <div
              key={index}
              className='bg-gray-900 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all'>
              <h2 className='text-white text-xl font-semibold mb-2'>
                {exp.title}
              </h2>
              <p className='text-gray-300 text-sm mb-1'>{exp.company}</p>
              <p className='text-gray-400 text-sm mb-4'>{exp.description}</p>
              <Link
                to='/work-experience'
                aria-label={`Learn more about ${exp.title}`}>
                <Button className='bg-blue-600 hover:bg-blue-700'>
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>
        <Button className='bg-blue-600 hover:bg-blue-700' size='lg'>
          show more
        </Button>
      </div>
      <div className='portfolio min-h-screen bg-[#1A1A1A] py-8'>
        <div className='container mx-auto flex flex-col items-center justify-center  gap-5'>
          <Button className='cursor-default px-10 mb-6 border-4' size='lg'>
            Portfolio
          </Button>
          <img
            src='/Coming soon.jpg'
            alt=''
            className='h-96 w-full object-cover object-center rounded-3xl'
          />
        </div>
      </div>
    </div>
  );
};
