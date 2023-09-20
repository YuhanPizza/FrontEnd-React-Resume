import React from "react";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";

const Home = () => {
  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{ marginBottom: '20px', marginTop: '20px' }}>
      <AboutMe />
    </div>
    <div style={{ marginBottom: '20px', marginTop: '850px' }}>
      <Skills />
    </div>
    <div >
      <Education />
    </div>
    <div style={{ marginBottom: '20px' }}>
      <Projects />
    </div>
  </div>
);
};

export default Home;