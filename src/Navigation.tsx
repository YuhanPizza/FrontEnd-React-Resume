import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { FaHome, FaUser, FaWrench, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
import { useTheme } from './ThemeContext';
  // Importing custom CSS

const Navigation = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar
      bg={isDarkMode ? 'dark' : 'light'}
      variant={isDarkMode ? 'dark' : 'light'}
      expand="lg"
      className={`custom-navbar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}
    >
      <Navbar.Brand href="/">My Resume</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
      <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
          <Nav.Link as={Link} to="/about"><FaUser /> About</Nav.Link>
          <Nav.Link as={Link} to="/skills"><FaWrench /> Skills</Nav.Link>
          <Nav.Link as={Link} to="/education"><FaGraduationCap /> Education</Nav.Link>
          <Nav.Link as={Link} to="/projects"><FaProjectDiagram/>Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav.Link onClick={toggleTheme}>Toggle Mode</Nav.Link>
    </Navbar>
  );
};

export default Navigation;