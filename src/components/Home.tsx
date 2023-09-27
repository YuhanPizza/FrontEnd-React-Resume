import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import {useTheme} from '../ThemeContext';

const Home = () => {
  const {isDarkMode} = useTheme();
  console.log('Home component re-rendered. isDarkMode:', isDarkMode);

  const containerStyles:React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: isDarkMode ? '#fff' : '#333', // Adjust text color based on theme
    backgroundColor: isDarkMode ? 'darkolivegreen' : '#333',
  };

  return (
    <div style={containerStyles}>
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