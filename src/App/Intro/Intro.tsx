import './Intro.scss';
import Headshot from './Headshot/Headshot';
import Button from 'react-bootstrap/Button';

function Intro() {
  const openResume = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.open("https://drive.google.com/file/d/1zzkuW1oN6B_-HZcE_H0ffxzy7a9DCFuQ/view", "_blank");
  }

  return <>
    <div className="intro-container">
      <div className="intro-text">
        <h1 className="intro-name">Elijah Nguyen</h1>
        <div className="intro-description">
          <h2 className="intro-title">Full Stack Software Engineer</h2>
          <div className="intro-fact">Based in the Minneapolis, MN metro area with 4 years of professional experience developing front-end web applications, databases, web APIs and CD pipelines for enterprise applications</div>
        </div>
        <Button className="resume-button" variant="dark" href="#" target="_blank" size="lg" onClick={openResume}>Download Resume</Button>
      </div>
      <Headshot />
    </div>
  </>
}

export default Intro