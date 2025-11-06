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
    <Tabs
      defaultActiveKey="work"
      className="md3 skibidi"
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
  Description: string[]
}

export const WorkExperience: Experience[] = [
  {
    Location: 'Renaissance Learning',
    Title: 'Software Engineer',
    Duration: '2022 - Present',
    Logo: <RenaissanceLearning width="300px" />,
    Description: [
      'Built and maintained Angular applications for students and educators hosted on AWS',
      'Ensured web applications met L10N and A11Y standards',
      'Managed customer PII data in Snowflake and PostgresSQL',
      'Built pipelines in concourse for continuous development',
    ]
  }
];

export const Education: Experience[] = [
  {
    Location: 'University of Minnesota - Twin Cities',
    Title: 'Bachelor\'s of Computer Engineering',
    Duration: 'Class of 2020',
    Logo: <UnivesityOfMinnesota width="300px" />,
    Description: []
  } 
]