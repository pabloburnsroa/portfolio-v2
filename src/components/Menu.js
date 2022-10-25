import React, { useRef } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useOnClickOutside from '../hooks/useOnClickOutside';

const StyledMenu = styled.aside`
  /* display: none; */
  display: none;

  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter}
    background: ${({ theme }) => theme.primaryDark};
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
      font-size: clamp(14px, 4vw, 16px);
    }

    a {
      /* text-transform: uppercase; */
      padding: 3px 20px 20px;
      /* font-weight: bold; */
      /* letter-spacing: 0.5rem; */
      color: ${({ theme }) => theme.primaryLight};
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        text-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
  }

  .resume-link {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: var(--border-radius);
    font-size: var(--fz-sm);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 18px 50px;
    margin: 10% auto 0px;
    width: max-content;
  }
`;

const Menu = ({ open, setOpen }) => {
  const navLinks = [
    { name: 'Home', url: '/#' },
    { name: 'About', url: '/#about' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Blogs', url: '/#blogs' },
  ];

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setOpen(false));
  return (
    <StyledMenu open={open} ref={wrapperRef} aria-hidden={!open}>
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
        <a href="/resume.pdf" class="resume-link">
          Resume
        </a>
      </nav>
    </StyledMenu>
  );
};

export default Menu;
