import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const message = [
    "Full Stack Web Developer !", "IT Engineer !", "and a Tech Enthusiast!"
  ];

  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % message.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [message.length]);

  return (
    <section id='home' className='text-center mt-6 p-2 md:p-4 lg:p-8 text-wrap'>
      <h1 className="lg:text-6xl md:text-4xl text-2xl mb-4">
        Hi, I am 
        <span className="text-blue-500"> Amir Muhammad Juya</span>
      </h1>
      <div className="block mx-auto w-max">
        <div className="typed-out type1">
          <h2 className="lg:text-3xl md:text-2xl text-xl my-4 introduction">
            {message[currentMessageIndex]}
          </h2>
        </div>
      </div>

      <div className="mt-10">
        <Link to='https://drive.google.com/file/d/1VJJseYsfq1Lu0uZdTaqgFPocZj_0P1oF/view?usp=drive_link' target="_blank">
          <button type="submit" className="btn text-blue-500 text-lg font-bold border-2 border-blue-500 bg-white hover:bg-blue-500 hover:text-white px-6 md:px-12 lg:px-16 rounded hover:scale-110 duration-500 button-size">
            My CV
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;