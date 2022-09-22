import React from 'react';
import styled from 'styled-components';

const StyledHero = styled.section`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
`;

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2>Pablo Burns-Roa.</h2>;
  const three = <h3>Welcome to my portfolio.</h3>;
  const four = (
    <>
      <p>
        My motivation for this site is to showcase what I've learned so far and
        connect with others interested in software engineering.
      </p>
    </>
  );
  const five = (
    <a className="email-link" href="#" target="_blank">
      Please check out my latest project!
    </a>
  );

  const items = [one, two, three, four, five];
  return (
    <StyledHero>
      <>
        {items.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </>
    </StyledHero>
  );
};

export default Hero;
