import './Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import GithubIcon from '../../assets/icons/GithubIcon.svg?react';
import LinkedInIcon from '../../assets/icons/LinkedInIcon.svg?react';

function Header() {
  return <Navbar expand="lg" className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <Container>
      <Nav>
          <Nav.Link className="nav-link" target="_blank" href="https://github.com/NguyenElijah"><GithubIcon /></Nav.Link>
          <Nav.Link className="nav-link" target="_blank" href="https://www.linkedin.com/in/elijah-nguyen-106768178/"><LinkedInIcon /></Nav.Link>
      </Nav>
      <Navbar.Brand href="#">Elijah Nguyen</Navbar.Brand>
    </Container>
  </Navbar>
}

export default Header