import './ExperienceEntry.scss';
import type Experience from "../Experience";

interface ExperienceEntryProps {
  experience: Experience[]
}

function ExperienceEntry({ experience }: ExperienceEntryProps)  {
  return <>
    <ul className="experience-container">
      {experience.map((exp, index) => (
        <div className={`experience ${index % 2 == 1 ? 'experience-alt' : ''}`} key={exp.Title}>
          <div className="experience-text">
            <div className="experience-location">{exp.Location}: {exp.Duration}</div>
            <div className="experience-title">{exp.Title}</div>
            <ul className="experience-description">
              {exp.Description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
          <a href={exp.Link} className="experience-logo" target="_blank">{exp.Logo}</a>
        </div>
      ))}
    </ul>

  </>
}

export default ExperienceEntry;