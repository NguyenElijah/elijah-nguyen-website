import './Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import GithubIcon from '../../assets/icons/GithubIcon.svg?react';
import LinkedInIcon from '../../assets/icons/LinkedInIcon.svg?react';
import { NavDropdown } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';


function Header() {
  const location = useLocation();
  console.log(location)
  
  return <Navbar sticky="top" expand="lg" className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <Container>
      <Nav>
        <Nav.Link className="nav-link" target="_blank" href="https://github.com/NguyenElijah"><GithubIcon /></Nav.Link>
        <Nav.Link className="nav-link" target="_blank" href="https://www.linkedin.com/in/elijah-nguyen-106768178/"><LinkedInIcon /></Nav.Link>
      </Nav>
      <NavDropdown title="Elijah Nguyen" className="navbar-dropdown">
        <NavDropdown.Item href="/#experience">
          Experience
        </NavDropdown.Item>
        <NavDropdown.Item href="/#skills">
          Skills
        </NavDropdown.Item>
        <NavDropdown.Item href="/#contact">
          Contact
        </NavDropdown.Item>
        <NavDropdown.Divider />
        {(location.pathname == "/") ? (
          <NavDropdown.Item href="/Hobbies">
            Hobbies
          </NavDropdown.Item>) : (
          <NavDropdown.Item href="/">
            Home
          </NavDropdown.Item>
          )
        }
        
      </NavDropdown>
    </Container>
  </Navbar>
}

export default Header
