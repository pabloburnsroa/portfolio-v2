import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledMenu = styled.aside`
  /* display: none; */
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter}
    background: ${({ theme }) => theme.primaryLight};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: fixed;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: min(75vw, 400px);
    height: 100vh;
    visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    transform: ${(props) =>
      props.open ? 'translateX(0vw)' : 'translateX(100vw)'};
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween}
    width: 100%;
    flex-direction: column;
    text-align: center;
  }

  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
    }

    a {
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
  }
`;

const Menu = ({ open, setOpen }) => {
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
      <nav>
        <ol>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link to={url} onClick={() => setOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
        </ol>
      </nav>
    </StyledMenu>
  );
};

export default Menu;
