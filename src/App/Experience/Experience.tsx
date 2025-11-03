

function Experience() {
  return <>
    <h2>Experience</h2>
    <ul>
      {WorkExperience.map((exp) => (
        <li>
          <span>{exp.Company}: {exp.JobTitle} {exp.Duration}</span>
          <ul>
            {exp.Description.map((desc) => (
              <li>{desc}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </>
}

export default Experience

interface Experience {
  Company: String,
  JobTitle: String,
  Duration: String,
  Logo: String,
  Description: String[]
}

export const WorkExperience: Experience[] = [
  {
    Company: 'Renaissance Learning',
    JobTitle: 'Software Engineer',
    Duration: '2022 - Present',
    Logo: '',
    Description: [
      'Built and maintained Angular applications for students and educators hosted on AWS',
      'Ensured web applications met L10N and A11Y standards',
      'Managed customer PII data in Snowflake and PostgresSQL',
      'Built pipelines in concourse for continuous development',
    ]
  }
];