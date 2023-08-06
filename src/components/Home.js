import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Test from "./Test";


const Home = () => {
  return (
    <div name="home" className="w-full h-screen  bg-[#0a192f]">
      <div className="max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, i am </p>
        <h1 className="text-4xl sm:text-6xl font bold text-white">
          Avijit Dutta
        </h1>
        <h2 className="text-2xl sm:text-6xl font bold text-[#8892b0]">
          <Test/>
        </h2>
          
        <p className="text-[#8892b0] max-w-[700px] py-3">
        Hi,i am passonate MERN stack web Developer.
              I love to build websites that pleasing to interact and work on.
              I'm looking for a opportunity to show my skills.
        </p>
        <div>
          
          <button className="text-white  px-6  py-3 border-2 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600" >
            <a href="resume.pdf" download='resume.pdf'>Resume</a><HiArrowNarrowRight className="ml-3"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
