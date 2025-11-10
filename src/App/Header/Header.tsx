import './Header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import GithubIcon from '../../../public/icons/GithubIcon';
import LinkedInIcon from '../../../public/icons/LinkedInIcon';

function Header() {
  return <Navbar expand="lg" className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <Container>
      <Nav>
          <Nav.Link className="nav-link" target="_blank" href="https://github.com/NguyenElijah"><GithubIcon></GithubIcon></Nav.Link>
          <Nav.Link className="nav-link" target="_blank" href="https://www.linkedin.com/in/elijah-nguyen-106768178/"><LinkedInIcon></LinkedInIcon></Nav.Link>
      </Nav>
      <Navbar.Brand href="#">Elijah Nguyen</Navbar.Brand>
    </Container>
  </Navbar>
}

export default Header