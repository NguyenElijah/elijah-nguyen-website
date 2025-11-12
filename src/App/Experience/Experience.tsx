import './Experience.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ExperienceEntry from './ExperienceEntry/ExperienceEntry';
import type { ReactElement } from 'react';

import RenaissanceLearning from '../../assets/icons/RenaissanceLearning.svg?react';
import UnivesityOfMinnesota from '../../assets/icons/UniversityOfMinnesotaIcon.svg?react';


function Experience() {
  return <>
    <h2>Experience</h2>
    <hr></hr>
    <Tabs
      defaultActiveKey="work"
      className="mb-3 experience-tabs"
      fill
      variant="pills"
    >
      <Tab eventKey="work" title="Professional Experience">
        <ExperienceEntry experience={WorkExperience} />
      </Tab>
      <Tab eventKey="education" title="Education">
        <ExperienceEntry experience={Education} />
      </Tab>
    </Tabs>
  </>
}

export default Experience

interface Experience {
  Location: string,
  Title: string,
  Duration: string,
  Logo: ReactElement,
  Description: string[],
  Link: string
}

export const WorkExperience: Experience[] = [
  {
    Location: 'Renaissance Learning',
    Title: 'Software Engineer',
    Duration: '2022 - Present',
    Logo: <RenaissanceLearning width="300px" />,
    Description: [
      'Developed new Angular application from the ground up for educators to better monitor student progress',
      'Built databases aggregating student practice data, assessment data and PII from multiple sources in Snowflake, Postgres and DynamoDB',
      'Created and maintained continuous deployment pipelines with Concourse',
      'Provided observability and alerts on application performance and costs using Grafana and New Relic'
    ],
    Link: 'https://www.renaissance.com/'
  }
];

export const Education: Experience[] = [
  {
    Location: 'University of Minnesota Twin Cities',
    Title: 'Bachelor of Computer Engineering',
    Duration: '2016 - 2020',
    Logo: <UnivesityOfMinnesota />,
    Description: [
    ],
    Link: 'https://twin-cities.umn.edu/'
  } 
]