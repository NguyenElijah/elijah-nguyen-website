import './Header.css'
import GithubIcon from '../../../public/icons/GithubIcon';
import LinkedInIcon from '../../../public/icons/LinkedInIcon';

function Header() {
  return <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="https://github.com/NguyenElijah"><GithubIcon></GithubIcon></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/elijah-nguyen-106768178/"><LinkedInIcon></LinkedInIcon></a>
          </li>
        </ul>
      </div>
      <a className="navbar-brand" href="#">Elijah Nguyen</a>
    </div>
  </nav>
}

export default Header