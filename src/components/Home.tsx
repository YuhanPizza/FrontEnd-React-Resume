import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";

const Home = () => {
    return (
      <div>
        <AboutMe />
        <Skills />
        <Education />
        <Projects />
      </div>
    );
  };

export default Home;