import * as React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const StyledAboutSection = styled.section`
  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 50px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0px;
    gap: 1px 5px;

    li {
      position: relative;
      padding-left: 20px;
      font-size: 13px;
      margin-bottom: 10px;

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }
`;

const About = () => {
  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'TypeScript',
    'MongoDB',
    'Python',
  ];
  return (
    <StyledAboutSection id="about">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <StyledText>
          <p>
            Hello! My name is Pablo and I enjoy building things using various
            technologies. My interest in using code started back in 2019 when I
            learnt basic R and Python for data analytic purposes.
          </p>
          <p>
            Moving forward to today and I am currently open for new
            opportunities within the web dev space.
          </p>
          <p>
            My current focus is expanding my portfolio - building web apps using
            a mobile-first approach and practicing DSA.
          </p>
          <p>
            Here are a few of the technologies I have been working with
            recently:
          </p>
          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <StaticImage
            className="img"
            src="../../images/test.jpg"
            width={500}
            height={500}
            quality={95}
            formats={['AUTO', 'WEBP', 'AVIF']}
            alt="test"
          />
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
