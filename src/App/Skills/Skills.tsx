import './Skills.scss';
import type { ReactElement } from 'react';
import { Tooltip } from 'react-tooltip';

import AngularIcon from '../../assets/icons/skills/AngularIcon.svg?react';
import CSharpIcon from '../../assets/icons/skills/CSharpIcon.svg?react';
import DotNetIcon from '../../assets/icons/skills/DotNetIcon.svg?react';
import PythonIcon from '../../assets/icons/skills/PythonIcon.svg?react';
import AWSIcon from '../../assets/icons/skills/AWSIcon.svg?react';
import SnowflakeIcon from '../../assets/icons/skills/SnowflakeIcon.svg?react';
import PostgresIcon from '../../assets/icons/skills/PostgresIcon.svg?react';
import HasuraIcon from '../../assets/icons/skills/HasuraIcon.svg?react';
import TypescriptIcon from '../../assets/icons/skills/TypescriptIcon.svg?react';
import JavascriptIcon from '../../assets/icons/skills/JavascriptIcon.svg?react';
import NewRelicIcon from '../../assets/icons/skills/NewRelicIcon.svg?react';
import GrafanaIcon from '../../assets/icons/skills/GrafanaIcon.svg?react';
import SQLIcon from '../../assets/icons/skills/SQLIcon.svg?react';
import ReactIcon from '../../assets/icons/skills/ReactIcon.svg?react';
import NodeJsIcon from '../../assets/icons/skills/NodeJsIcon.svg?react';
import LaunchDarklyIcon from '../../assets/icons/skills/LaunchDarklyIcon.svg?react';
import TerraformIcon from '../../assets/icons/skills/TerraformIcon.svg?react';
import DBTIcon from '../../assets/icons/skills/DBTIcon.svg?react';
import ConcourseIcon from '../../assets/icons/skills/ConcourseIcon.svg?react';
import DockerIcon from '../../assets/icons/skills/DockerIcon.svg?react';

function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <hr></hr>
      <ul className="grid-container">
        {skills.map((skill) => (
          <li className="grid-item" data-tooltip-id="skill-tooltip" data-tooltip-content={skill.Tooltip} data-tooltip-place="top" data-tooltip-delay-hide={25}>
            <a className="grid-link" href={skill.Link} target="_blank">
              <div className="skill-icon">{skill.Icon}</div>
            </a>
          </li>
        ))}
      </ul>
      <Tooltip id="skill-tooltip" className="skill-tooltip arrow"/>
    </>
  )
}

export default Skills

interface Skill {
  Tooltip: string,
  Icon: ReactElement,
  Link: string
}

export const skills: Skill[] = [
  {
    Tooltip: 'Angular',
    Icon: <AngularIcon />,
    Link: 'https://angular.dev'
  },
  {
    Tooltip: 'React',
    Icon: <ReactIcon />,
    Link: 'https://react.dev/'
  },
  {
    Tooltip: 'NodeJs',
    Icon: <NodeJsIcon />,
    Link: 'https://nodejs.org/en'
  },
  {
    Tooltip: 'TypeScript',
    Icon: <TypescriptIcon />,
    Link: 'https://www.typescriptlang.org/'
  },
  {
    Tooltip: 'JavaScript',
    Icon: <JavascriptIcon />,
    Link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    Tooltip: '.NET',
    Icon: <DotNetIcon />,
    Link: 'https://dotnet.microsoft.com/en-us/'
  },
  {
    Tooltip: 'C#',
    Icon: <CSharpIcon />,
    Link: 'https://dotnet.microsoft.com/en-us/languages/csharp'
  },
  {
    Tooltip: 'Python',
    Icon: <PythonIcon />,
    Link: 'https://www.python.org'
  },
  {
    Tooltip: 'Terraform',
    Icon: <TerraformIcon />,
    Link: 'https://developer.hashicorp.com/terraform'
  },
  {
    Tooltip: 'Amazon Web Services',
    Icon: <AWSIcon />,
    Link: 'https://aws.amazon.com/'
  },
  {
    Tooltip: 'Snowflake',
    Icon: <SnowflakeIcon />,
    Link: 'https://www.snowflake.com/en/'
  },
  {
    Tooltip: 'Postgres',
    Icon: <PostgresIcon />,
    Link: 'https://www.postgresql.org/'
  },
  {
    Tooltip: 'Hasura',
    Icon: <HasuraIcon />,
    Link: 'https://hasura.io/'
  },
  {
    Tooltip: 'SQL',
    Icon: <SQLIcon />,
    Link: 'https://www.w3schools.com/sql/'
  },
  {
    Tooltip: 'DBT Cloud',
    Icon: <DBTIcon />,
    Link: 'https://docs.getdbt.com/'
  },
  {
    Tooltip: 'New Relic',
    Icon: <NewRelicIcon />,
    Link: 'https://newrelic.com/'
  },
  {
    Tooltip: 'Grafana',
    Icon: <GrafanaIcon />,
    Link: 'https://grafana.com/'
  },
  {
    Tooltip: 'LaunchDarkly',
    Icon: <LaunchDarklyIcon />,
    Link: 'https://launchdarkly.com/'
  },
  {
    Tooltip: 'Concourse',
    Icon: <ConcourseIcon />,
    Link: 'https://concourse-ci.org/'
  },
  {
    Tooltip: 'Docker',
    Icon: <DockerIcon />,
    Link: 'https://www.docker.com/'
  }
];