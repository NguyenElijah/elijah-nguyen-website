import './Experience.scss'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ExperienceEntry from './ExperienceEntry/ExperienceEntry';
import type { ReactElement } from 'react';

import RenaissanceLearning from '../../assets/icons/RenaissanceLearning.svg?react';
import UnivesityOfMinnesota from '../../assets/icons/UniversityOfMinnesotaIcon.svg?react';
import OpenInNewTabIcon from '../../assets/icons/OpenInNewTabIcon.svg?react';

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
  Description: ReactElement[],
  Link: string
}

export const WorkExperience: Experience[] = [
  {
    Location: 'Renaissance Learning',
    Title: 'Software Engineer II',
    Duration: '2024 - Present',
    Logo: <RenaissanceLearning width="300px" />,
    Description: [
      <>Developed new Angular <a href="https://www.renaissance.com/renaissance-next/renaissance-next-for-teachers/" target="_blank">web application<OpenInNewTabIcon /></a> from the ground up for educators to better monitor student progress and assign practice</>,
      <>Migrated customer reads from Snowflake to RDS Postgres, driving down read costs by &gt;70% and read latency by &gt;90%</>,
      <>Created and maintained continuous deployment pipelines with Concourse</>,
      <>Provided observability and alerts on application performance and costs using Grafana and New Relic</>
    ],
    Link: 'https://www.renaissance.com/'
  },
  {
    Location: 'Renaissance Learning',
    Title: 'Software Engineer I',
    Duration: '2022 - 2024',
    Logo: <RenaissanceLearning width="300px" />,
    Description: [
      <>Improved resiliency and error handling of existing Student Homepage, decreasing error rate and improving p99 response times</>,
      <>Partook in mass L10N and I18N effort of existing Angular and .NET applications in order to expand to the global market</>,
    ],
    Link: 'https://www.renaissance.com/'
  }
];

export const Education: Experience[] = [
  {
    Location: 'University of Minnesota Twin Cities',
    Title: 'Bachelor of Computer Engineering',
    Duration: '2016 - 2020',
    Logo: <UnivesityOfMinnesota width="176px" />,
    Description: [
    ],
    Link: 'https://twin-cities.umn.edu/'
  }
]