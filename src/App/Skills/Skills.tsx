import './Skills.scss';
import type { ReactElement } from 'react';
import AngularIcon from '../../../public/icons/skills/AngularIcon.svg?react';
import CSharpIcon from '../../../public/icons/skills/CSharpIcon.svg?react';
import DotNetIcon from '../../../public/icons/skills/DotNetIcon.svg?react';
import PythonIcon from '../../../public/icons/skills/PythonIcon.svg?react';
import AWSIcon from '../../../public/icons/skills/AWSIcon.svg?react';
import SnowflakeIcon from '../../../public/icons/skills/SnowflakeIcon.svg?react';
import PostgresIcon from '../../../public/icons/skills/PostgresIcon.svg?react';
import HasuraIcon from '../../../public/icons/skills/HasuraIcon.svg?react';
import TypescriptIcon from '../../../public/icons/skills/TypescriptIcon.svg?react';
import JavascriptIcon from '../../../public/icons/skills/JavascriptIcon.svg?react';
import NewRelicIcon from '../../../public/icons/skills/NewRelicIcon.svg?react';
import GrafanaIcon from '../../../public/icons/skills/GrafanaIcon.svg?react';
import SQLIcon from '../../../public/icons/skills/SQLIcon.svg?react';
import ReactIcon from '../../../public/icons/skills/ReactIcon.svg?react';
import NodeJsIcon from '../../../public/icons/skills/NodeJsIcon.svg?react';
import LaunchDarklyIcon from '../../../public/icons/skills/LaunchDarklyIcon.svg?react';
import TerraformIcon from '../../../public/icons/skills/TerraformIcon.svg?react';
import DBTIcon from '../../../public/icons/skills/DBTIcon.svg?react';
import ConcourseIcon from '../../../public/icons/skills/ConcourseIcon.svg?react';
import DockerIcon from '../../../public/icons/skills/DockerIcon.svg?react';

function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <ul className="grid-container">
        {skills.map((skill) => (
          <li className="grid-item"><a className="grid-link" href={skill.Link} target="_blank"><div>{skill.Icon}</div></a></li>
        ))}
      </ul>
    </>
  )
}

export default Skills

interface Skill {
  Icon: ReactElement,
  Link: string
}

export const skills: Skill[] = [
  {
    Icon: <AngularIcon />,
    Link: 'https://angular.dev'
  },
    {
    Icon: <ReactIcon />,
    Link: 'https://react.dev/'
  },
  {
    Icon: <NodeJsIcon />,
    Link: 'https://nodejs.org/en'
  },
  {
    Icon: <TypescriptIcon />,
    Link: 'https://www.typescriptlang.org/'
  },
  {
    Icon: <JavascriptIcon />,
    Link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  {
    Icon: <DotNetIcon />,
    Link: 'https://dotnet.microsoft.com/en-us/'
  },
  {
    Icon: <CSharpIcon />,
    Link: 'https://dotnet.microsoft.com/en-us/languages/csharp'
  },
  {
    Icon: <PythonIcon />,
    Link: 'https://www.python.org'
  },
  {
    Icon: <TerraformIcon />,
    Link: 'https://developer.hashicorp.com/terraform'
  },
  {
    Icon: <AWSIcon />,
    Link: 'https://aws.amazon.com/'
  },
  {
    Icon: <SnowflakeIcon />,
    Link: 'https://www.snowflake.com/en/'
  },
  {
    Icon: <PostgresIcon />,
    Link: 'https://www.postgresql.org/'
  },
  {
    Icon: <HasuraIcon />,
    Link: 'https://hasura.io/'
  },
  {
    Icon: <SQLIcon />,
    Link: 'https://www.w3schools.com/sql/'
  },
  {
    Icon: <DBTIcon />,
    Link: 'https://docs.getdbt.com/'
  },
  {
    Icon: <NewRelicIcon />,
    Link: 'https://newrelic.com/'
  },
  {
    Icon: <GrafanaIcon />,
    Link: 'https://grafana.com/'
  },
  {
    Icon: <LaunchDarklyIcon />,
    Link: 'https://launchdarkly.com/'
  },
  {
    Icon: <ConcourseIcon />,
    Link: 'https://concourse-ci.org/'
  },
  {
    Icon: <DockerIcon />,
    Link: 'https://www.docker.com/'
  }
];