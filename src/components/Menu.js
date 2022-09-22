import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledMenu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }

  ol a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 3px 20px 20px;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;
const Menu = ({ open }) => {
  const navLinks = [
    { name: 'Home', url: '/#' },
    { name: 'About', url: '/#about' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Blogs', url: '/#blogs' },
  ];
  const resume = (
    <a
      className="resume-button"
      href="#"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );
  return (
    <StyledMenu open={open}>
      <ol>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <li key={i}>
              <Link to={url}>{name}</Link>
            </li>
          ))}
      </ol>
    </StyledMenu>
  );
};

export default Menu;
