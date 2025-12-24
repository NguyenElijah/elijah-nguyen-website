import { useEffect, useState } from "react";
import { fetchStats, type TypingStat } from "./TypingStatsService";
import { Figure, Spinner } from "react-bootstrap";

import ErrorIcon from "../../../assets/icons/ErrorIcon.svg?react";
import MonkeyTypeIcon from "../../../assets/icons/MonkeyTypeIcon.svg?react";
import OpenInNewTabIcon from "../../../assets/icons/OpenInNewTabIcon.svg?react";

// TODO: Replace this placeholder image with the actual picture of the keyboard
import keyboardPic from "../../../assets/images/keyboard.jpg";

import "./Typing.scss";


function Typing() {
  const [data, setData] = useState<TypingStat[]>([]);
  const [isLoaded, setLoaded] = useState(false);
  const [error, setError] = useState<String>('');

  useEffect(() => {

    const loadTypingStats = async () => {
      try {
        const responseData = await fetchStats();
        setData(responseData);
        setLoaded(true);
      }
      catch (err) {
        setError(`Error: ${err}`);
        setLoaded(true);
      }
    }

    loadTypingStats();
  }, []);

  const loadingTemplate = 
    <>
      <Spinner animation="border" className="loading-spinner" variant="secondary" />
    </>;

  const errorTemplate = 
    <>
      <div className="error-container">
        <div className="error-message">Error getting typing stats from MonkeyType.com</div>
        <ErrorIcon className="error-icon"/>
      </div>
    </>;
  
  const statsTemplate =
    <>
      {data.map((stat, index) => (
        <div className={index == 0 ? "category-container-first category-container" : "category-container"} key={stat.category}>
          <div className="category-label">{stat.category} seconds</div>
          <div className="category-wpm-number">{stat.wpm}</div>
          <div className="category-wpm-label">WPM</div>
          <div className="category-rank">Rank: {stat.rank} / {stat.total}</div>
        </div>
      ))}
    </>;

const getTemplate = () => {
  if (!isLoaded) {
    return loadingTemplate;
  }

  if (error) {
    return errorTemplate;
  }

  return statsTemplate;
}

  return (
    <>
      <h2 id="typing">Typing</h2>
      <hr className="header-linebreak"/>
      <div className="typing-summary-container">
        <p className="typing-summary">I have an interest in mechanical keyboards and I type relatively fast. I prefer clicky switches over linear and tactile. After a decade of using
          blue switches, I switched to <a className="kailh-switch-link" href="https://www.kailh.net/products/kailh-white-owl-switch-set" target="_blank">Kailh White Owl Box switches<OpenInNewTabIcon width="15px" /></a>. 
          They use a click bar instead of a click jacket, so they click on both the downstroke and the upstroke! My current goal is to eventually reach 200 wpm for 15 seconds.
        </p>
        <Figure className="keyboard-figure">
          <Figure.Image
            width={600}
            alt="picture-of-keyboard"
            src={keyboardPic}
            className="keyboard-picture"
          />
          <Figure.Caption>Current Keyboard. Keychron Q5 with Kailh White Owl Box switches and PBT Keycaps</Figure.Caption>
        </Figure>
      </div>
      <div className="typing-stats-container">
      <h3>Typing Stats</h3>
        <div className="typing-stats">
            {getTemplate()}
        </div>
        <div className="monkeytype-container">
          <span className="monkeytype-text">Stats obtained courtesy of</span>
          <a className="monkeytype-link" href="https://monkeytype.com/profile/AizenTyper" target="_blank">
            <MonkeyTypeIcon className="monkeytype-icon" />monkeytype<OpenInNewTabIcon width="15px" />
          </a>
        </div>
      </div>
    </>
  )
}

export default Typing