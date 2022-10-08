import React from 'react';
import styled from 'styled-components';
import SideElement from './Side';

const StyledEmail = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;

    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.1em;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`;

const Email = () => {
  return (
    <SideElement orientation="right">
      <StyledEmail>
        <a href={`mailto:pabloburnsroa@googlemail.com`}>
          pabloburnsroa@googlemail.com
        </a>
      </StyledEmail>
    </SideElement>
  );
};

export default Email;
