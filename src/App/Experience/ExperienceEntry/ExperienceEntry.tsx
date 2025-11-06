import './ExperienceEntry.scss';
import type Experience from "../Experience";

interface ExperienceEntryProps {
  experience: Experience[]
}

function ExperienceEntry({ experience }: ExperienceEntryProps)  {

  return <>
    <ul className="experience-container">
      {experience.map((exp) => (
        <div className="experience" key={exp.Title}>
          <div>
            <div className="experience-location">{exp.Location}: {exp.Duration}</div>
            <div className="experience-title">{exp.Title}</div>
            <ul className="experience-description">
              {exp.Description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="experience-logo">{exp.Logo}</div>
        </div>
      ))}
    </ul>

  </>
}

export default ExperienceEntry;