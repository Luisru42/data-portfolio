import React from 'react';

function Skills() {
  const skills = [
    'Python', 'SQL', 'scikit-learn', 'Tableau', 'Power BI',
    'Git', 'AWS', 'Docker', 'TensorFlow', 'Excel'
  ];

  return (
    <section id="skills">
      <h3>Skills & Tools</h3>
      <ul className="skills-list">
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
}

export default Skills;