import TypeIt from "typeit-react";

export const Home = () => {
  return (
    <div>
      <TypeIt
        className='text-3xl font-bold text-center text-gray-800 dark:text-white'
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
  );
};
