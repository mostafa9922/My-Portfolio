import React, { useState, memo } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const Icon = memo(({ id, open }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={2}
    stroke='currentColor'
    className={`h-5 w-5 transition-transform duration-300 ${
      id === open ? "rotate-180" : ""
    }`}
    aria-hidden='true'>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M19.5 8.25l-7.5 7.5-7.5-7.5'
    />
  </svg>
));

const educationData = [
  {
    title: "Bachelor's Degree in Electrical Engineering",
    description:
      "Pursuing a Bachelor's degree in Electrical Power Engineering at Cairo University, specializing in energy systems, circuit design, and renewable energy solutions.",
    year: "2023 - Present",
    grade: "Very Good",
    logo: "/Cairo-logo.jpeg",
  },
  {
    title: "Diploma in Embedded Systems",
    description:
      "Completed a diploma in Embedded Systems, mastering microcontroller programming, Arduino projects, and real-time system design.",
    year: "2022",
    grade: "90%",
    logo: "/AMIT.png",
  },
  {
    title: "High School Secondary Education",
    description:
      "Graduated with honors from [High School Name], excelling in Physics, Mathematics, and Computer Science, laying a strong foundation for engineering.",
    year: "2020",
    grade: "Honors",
    logo: "/school.png",
  },
];

const aboutMeText = `
  It all started with a simple question: How does electricity power the world? As a kid, I was fascinated by the way lights turned on, motors spun, and devices came to life at the flick of a switch. That curiosity led me down a path of discovery—one wire, one circuit, one experiment at a time.

  Now, as a second-year Electrical Power Engineering student at Cairo University, I’m diving deeper into energy systems, control mechanisms, and innovative solutions like renewable energy. Projects involving autonomous vehicles, smart metering, and sustainable energy excite me the most.

  My curiosity extends beyond hardware. Through a front-end development course, I’m learning how code shapes user experiences, much like circuits power machines. From crafting intuitive interfaces to integrating hardware with software, I’m eager to bridge both worlds.

  At heart, I’m a problem solver who loves building and experimenting—whether it’s Arduino projects, embedded systems, or tackling challenges like harnessing energy from unconventional sources. I thrive on collaboration, learning, and turning ideas into reality.

  This is just the beginning. Let’s innovate, create, and power the future together.
`.trim();

export const About = () => {
  const [open, setOpen] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const handleDownloadCV = () => {
    const cvUrl = "/Mostafa-Abd-El-Rasheed-Resume.pdf"; 
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Mostafa Abd El-Rasheed_CV.pdf";
    link.click();
  };

  const truncatedText = aboutMeText.split("\n").slice(0, 2).join("\n");

  return (
    <section
      className='min-h-screen bg-gradient-to-b from-gray-50 to-blue-100 py-12 px-4'
      aria-labelledby='about-heading'>
      <div className='container mx-auto max-w-6xl'>
        {/* About Me Section */}
        <div className='flex flex-col items-center py-12'>
          <h1
            id='about-heading'
            className='text-4xl md:text-5xl font-bold text-gray-800 mb-6 animate-fade-in text-center'>
            About Me
          </h1>
          <div className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-8 gap-8 bg-white rounded-2xl shadow-lg p-8 transition-all duration-300'>
            <div className='md:w-1/2'>
              <div className='text-gray-700 text-base md:text-lg leading-relaxed mb-6'>
                {(isExpanded ? aboutMeText : truncatedText).split("\n").map(
                  (paragraph, index) =>
                    paragraph.trim() && (
                      <p
                        key={index}
                        className='mb-4 transition-opacity duration-300'>
                        {paragraph.trim()}
                      </p>
                    )
                )}
                {isExpanded && (
                  <div className='mt-4 space-y-2'>
                    <p>
                      <strong>Slogan:</strong> "We Don't Follow, We Lead"
                    </p>
                    <p>
                      <strong>Quote:</strong> "My grades do not reflect my
                      skills"
                    </p>
                  </div>
                )}
              </div>
              <div className='flex gap-4'>
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className='bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md'
                  aria-expanded={isExpanded}>
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
                <Button
                  onClick={handleDownloadCV}
                  className='bg-gray-600 hover:bg-gray-700 transition-all duration-300 shadow-md'>
                  Download My CV
                </Button>
              </div>
            </div>
            <div className='md:w-1/2'>
              <img
                className='h-64 md:h-96 w-full rounded-lg object-cover object-center shadow-xl transition-transform duration-300 hover:scale-105'
                src='/about-us.jpg'
                alt='Profile portrait'
                loading='lazy'
                onError={(e) =>
                  (e.target.src = "https://via.placeholder.com/400")
                }
              />
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className='max-w-4xl py-12 mx-auto'>
          <h2 className='text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 animate-fade-in'>
            Education
          </h2>
          <div className='space-y-4'>
            {educationData.map((edu, index) => {
              const id = index + 1;
              return (
                <Accordion
                  key={edu.title} // Use unique title for key
                  open={open === id}
                  icon={<Icon id={id} open={open} />}
                  className='border rounded-lg shadow-md bg-white hover:shadow-lg transition-all duration-300'>
                  <AccordionHeader
                    onClick={() => handleOpen(id)}
                    className={`text-left font-semibold text-base md:text-lg flex justify-between items-center px-6 py-4 ${
                      open === id ? "text-blue-600" : "text-gray-800"
                    } hover:bg-blue-50 transition-colors duration-200`}
                    aria-controls={`accordion-body-${id}`}
                    id={`accordion-header-${id}`}>
                    {edu.title}
                  </AccordionHeader>
                  <AccordionBody
                    id={`accordion-body-${id}`}
                    className='px-6 pt-0 pb-4 text-gray-600'>
                    <div className='flex items-start gap-4'>
                      {edu.logo && (
                        <img
                          src={edu.logo}
                          alt={`${edu.title} logo`}
                          className='h-12 w-12 rounded-full object-contain'
                          loading='lazy'
                          onError={(e) =>
                            (e.target.src = "https://via.placeholder.com/48")
                          }
                        />
                      )}
                      <div>
                        <p className='mb-2'>{edu.description}</p>
                        <p className='text-sm text-gray-500'>
                          <strong>Year:</strong> {edu.year}
                        </p>
                        <p className='text-sm text-gray-500'>
                          <strong>Grade:</strong> {edu.grade}
                        </p>
                      </div>
                    </div>
                  </AccordionBody>
                </Accordion>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
