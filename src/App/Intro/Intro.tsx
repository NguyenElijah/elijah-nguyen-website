import './Intro.scss';
import Headshot from './Headshot/Headshot';
import Button from 'react-bootstrap/Button';

function Intro() {
  const openResume = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.open("https://drive.google.com/file/d/1azhVNOiefmoHfhcJs7odcRpg5q3v4egu/view", "_blank");
  }

  return <>
    <div className="intro-container">
      <div className="intro-text">
        <h1 className="intro-name">Elijah Nguyen</h1>
        <div className="intro-description">
          <h2 className="intro-title">Full Stack Software Engineer</h2>
          <ul>
            <li className="intro-fact">Based in the Minneapolis, MN metro area</li>
            <li className="intro-fact">4 years of professional experience developing front-end web applications, databases, web APIs, CD pipelines for enterprise applications</li>
          </ul>
        </div>
        <Button className="resume-button" variant="dark" href="#" target="_blank" size="lg" onClick={openResume}>Download Resume</Button>
      </div>
      <Headshot />
    </div>
  </>
}

export default Intro