import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";

const Home = () => {
  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <AboutMe />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Skills />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Education />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <Projects />
      </div>
    </div>
  );
};

export default Home;