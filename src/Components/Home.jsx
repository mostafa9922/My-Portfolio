import TypeIt from "typeit-react";


export const Home = () => {
  return (
    <div className='relative min-h-screen scroll-smooth' id='first'>
      <div className='relative pt-20'>
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
          autoPlay
          loop>
          <source src='/ElectricSound.mp3' type='audio/mpeg' />
          Your browser does not support the audio tag.
        </audio>
        <img
          className='absolute right-6 bottom-28 h-40 w-40 rounded-full object-cover object-center md:h-80 md:w-80 lg:h-96 lg:w-96'
          src='/MyPhoto.jpg'
          alt='Personal Photo'
        />

        <div className='relative z-10 flex items-start justify-start h-screen px-4 pt-60'>
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
      
    </div>
  );
};
