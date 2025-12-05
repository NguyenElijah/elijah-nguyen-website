import './ExperienceEntry.scss';
import type Experience from "../Experience";
import OpenInNewTabIcon from "../../../assets/icons/OpenInNewTabIcon.svg?react";

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
              {exp.Description.map((desc, index) => (
                <li className="experience-description-entry" key={index}>{desc}</li>
              ))}
            </ul>
          </div>
          <div className="experience-logo-container">
            <a href={exp.Link} className="experience-logo" target="_blank">
              {exp.Logo}
              <div className="new-tab-icon" >
                <OpenInNewTabIcon />
              </div>             
            </a>
          </div>
        </div>
      ))}
    </ul>

  </>
}

export default ExperienceEntry;