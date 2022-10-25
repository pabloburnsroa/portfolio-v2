import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from './icons';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  min-height: 70px;
  padding: 15px;
  text-align: center;
`;

const StyledSocialLinks = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0px auto 10px;
    max-width: 270px;
    color: var(--light-slate);
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const StyledCredit = styled.div`
  color: var(--light-slate);
  font-size: 12px;
  line-height: 1;

  a {
    &:hover,
    &:focus {
      color: var(--green);
    }
  }

  .github-stats {
    margin-top: 10px;

    & > span {
      display: inline-flex;
      align-items: center;
      margin: 0px 7px;
    }

    svg {
      display: inline-block;
      margin-right: 5px;
      width: 14px;
      height: 14px;
    }
  }
`;

const socials = [
  { name: 'Github', url: 'https://github.com/pabloburnsroa' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/pabloabr/' },
  { name: 'Instagram', url: 'https://www.instagram.com/pablitoabr/' },
  { name: 'Twitter', url: 'https://twitter.com/pabloburnsroa' },
  { name: 'Codepen', url: 'https://codepen.io/pablo-abr' },
];

const Footer = () => {
  const [repoInfo, setRepoInfo] = useState({
    stars: null,
    forks: null,
  });
  useEffect(() => {
    // if (process.env.NODE_ENV !== 'production') {
    //   return;
    // }
    fetch('https://api.github.com/repos/pabloburnsroa/portfolio-v2')
      .then((response) => response.json())
      .then((data) => {
        const { forks_count, stargazers_count } = data;
        // console.log(data);
        setRepoInfo({
          stars: stargazers_count,
          forks: forks_count,
        });
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <StyledFooter>
      <StyledSocialLinks>
        <ul>
          {socials &&
            socials.map(({ url, name }, i) => (
              <li key={i}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>
      <StyledCredit>
        <a href="https://github.com/pabloburnsroa">
          <div>Built by Pablo Burns-Roa</div>
          {/* {repoInfo.stars && repoInfo.forks && ( */}
          <div className="github-stats">
            <span>
              <Icon name="Star" />
              <span>{repoInfo.stars}</span>
            </span>
            <span>
              <Icon name="Fork" />
              <span>{repoInfo.forks}</span>
            </span>
          </div>
          {/* )} */}
        </a>
      </StyledCredit>
    </StyledFooter>
  );
};

export default Footer;
