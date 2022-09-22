import React from 'react';
import styled from 'styled-components';

const StyledAboutSection = styled.section``;

const StyledText = styled.div`
  display: block;

  .skills-list {
    display: grid;
    grid: ;
  }
`;

const About = () => {
  const skills = ['JavaScript (ES6)', 'React', 'Node.js', 'Express', 'MongoDB'];
  return (
    <StyledAboutSection>
      <h2>About Me.</h2>
      <StyledText>
        <div>
          <p>
            Hello! My name is Pablo and I enjoy building things using various
            technologies. My interest in using code started back in 2019 when I
            learnt basic R and Python for data analytic purposes.
          </p>
          <p>
            Moving forward to today and I am looking for software engineering
            roles. My main focus is building web apps using a mobile-first
            approach.
          </p>
          <p>
            Here are a few of the technologies I have been working with
            recently:
          </p>
        </div>
        <ul className="skills-list">
          {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
        </ul>
      </StyledText>
    </StyledAboutSection>
  );
};

export default About;
