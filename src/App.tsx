import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Navigation from './Navigation';
import Home from './components/Home';

const App = () =>{
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects/>}/>
      </Routes>
    </Router>
  )
}

export default App;