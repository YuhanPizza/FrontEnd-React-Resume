import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";

const Home = () => {
  return (
    <div style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
    <div style={{ marginTop: '20px' }}>
      <AboutMe />
    </div>
    <div style={{ marginTop: '800px' }}>
      <Skills />
    </div>
    <div style={{ marginTop: '-300px' }}>
      <Education />
    </div>
    <div style={{ marginTop: '-50px' }}>
      <Projects />
    </div>
  </div>
);
};

export default Home;