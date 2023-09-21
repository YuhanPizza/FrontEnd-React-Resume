import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav} from 'react-bootstrap';
import { FaHome, FaUser, FaWrench, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';
  // Importing custom CSS

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="custom-navbar">
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
    </Navbar>
  );
};

export default Navigation;