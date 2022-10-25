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
  padding: 0;

  @media (max-width: 425px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }

  h1 {
    margin: 0px 0px 30px 4px;
    color: var(--green);
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;
  }

  h2 {
    margin: 0px;
    font-size: clamp(40px, 8vw, 80px);
  }

  h3 {
    font-size: clamp(40px, 8vw, 80px);
    margin: 0px;
    margin-top: 10px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;

    &:last-child,
    &:last-of-type {
      margin: 30px 0 0;
    }
  }

  .email-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: 5px;
    padding: 1.25rem 1.75rem;
    font-size: 14px;
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    margin-top: 50px;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
  }
`;

const Hero = () => {
  const one = <h1>Hi, my name is</h1>;
  const two = <h2>Pablo Burns-Roa.</h2>;
  const three = <h3>Welcome to my portfolio.</h3>;
  const four = (
    <>
      <p>
        I'm a self-taught software engineer, with a current focus on building
        applications using React.
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
