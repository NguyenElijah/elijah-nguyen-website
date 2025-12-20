import { useEffect, useState } from "react";
import { fetchStats, type TypingStat } from "./TypingStatsService";
import "./Typing.scss";

import ErrorIcon from "../../../assets/icons/ErrorIcon.svg?react";

function Typing() {
  const [data, setData] = useState<TypingStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>('');

  useEffect(() => {

    const loadTypingStats = async () => {
      try {
        const responseData = await fetchStats();
        setData(responseData);
        setLoading(false);
      }
      catch (err) {
        setError(`Error: ${err}`);
        setLoading(false);
      }
    }

    loadTypingStats();
  });

  if (error) {
    return (
      <>
        <h2 id="typing">Typing</h2>
        <hr />
        <div className="typing-stats-container">
          <div className="error-message">Error getting typing stats from MonkeyType.com</div>
          <ErrorIcon className="error-icon"/>
        </div>
      </>
    )
  }

  return (
    <>
      <h2 id="typing">Typing</h2>
      <hr />
      <div className="typing-stats-container">
        <div>MonkeyType Stats</div>
        {data.map((stat) => (
          <div className="category-container" key={stat.category}>{stat.category} seconds
            <div className="category-wpm-number">{stat.wpm}</div>
            <div className="category-wpm-label">WPM</div>
            <div className="category-rank">Rank: {stat.rank}/{stat.total}</div>
          </div>
        ))}
      </div>
    </>
  )

}

export default Typing