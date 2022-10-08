import React from 'react';
import styled from 'styled-components';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0px auto 100px;
  text-align: center;

  @media (max-width: 768px) {
    margin: 0px auto 50px;
  }

  .overline {
    display: block;
    margin-bottom: 20px;
    color: var(--green);
    font-size: 16px;
    font-weight: 400;

    &:before {
      bottom: 0px;
      font-size: 14px;
    }

    &:after {
      display: none;
    }
  }

  .title {
    font-weight: 600;
    font-size: clamp(40px, 5vw, 60px);
  }

  .email-link {
    color: var(--green);
    border-radius: 4px;
    background-color: transparent;
    border: 1px solid var(--green);
    padding: 1.25rem 1.75rem;
    margin-top: 50px;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
  }
`;

const Contact = () => {
  return (
    <StyledContactSection id="contact">
      <h2 className="numbered-heading overline"> What's Next?</h2>
      <h2 className="title">Get In Touch</h2>
      <p>
        I’m currently looking for any new opportunities - my inbox is always
        open. Whether you have a question or just want to say hi, I’ll try my
        best to get back to you asap!
      </p>
      <a
        className="email-link"
        href="mailto:pabloburnsroa@googlemail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </StyledContactSection>
  );
};

export default Contact;
