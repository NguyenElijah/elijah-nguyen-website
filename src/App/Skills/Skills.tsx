
function Skills() {
  return (
    <>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li ><span>{skill.SkillName}</span></li>
        ))}
      </ul>
    </>
  )
}

export default Skills

interface Skill {
  SkillName: String,
  Icon: String,
  Link: String
}

export const skills: Skill[] = [
  {
    SkillName: 'Angular',
    Icon: '',
    Link: ''
  },
  {
    SkillName: '.NET',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'C#',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Python',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'AWS',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Snowflake',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Postgres',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Hasura',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'TypeScript',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'New Relic',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Grafana',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'SQL',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'React',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Node.JS',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'LaunchDarkly',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Terraform',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'DBT Cloud',
    Icon: '',
    Link: ''
  },
  {
    SkillName: 'Concourse',
    Icon: '',
    Link: ''
  },
];