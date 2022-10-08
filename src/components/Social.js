import React from 'react';
import styled from 'styled-components';
import { Icon } from './icons';
import SideElement from './Side';

const socials = [
  { name: 'GitHub', url: 'https://github.com/pabloburnsroa' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/pabloabr/' },
  { name: 'Instagram', url: 'https://www.instagram.com/pablitoabr/' },
  { name: 'Twitter', url: 'https://twitter.com/pabloburnsroa' },
  { name: 'Codepen', url: 'https://codepen.io/pablo-abr' },
];

const StyledSocials = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  align-items: center;
  list-style: none;

  

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-2px);
      }
    }
  }

  li a svg {
    width: 20px;
    height: 20px;
  }

  
`;

const Social = () => {
  return (
    <SideElement orientation="left">
      <StyledSocials>
        {socials &&
          socials.map(({ url, name }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
      </StyledSocials>
    </SideElement>
  );
};

export default Social;
