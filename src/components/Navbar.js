import { Link } from 'gatsby';
import React from 'react';
import Burger from './Burger';
import Menu from './Menu';
import styled from 'styled-components';
import useScrollDirection from '../hooks/useScrollDirection';
import { useEffect, useState } from 'react';
import { css } from 'styled-components';
import { Helmet } from 'react-helmet';

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: 100px;
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 1024px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  ${(props) =>
    props.scrollDirection === 'up' &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(0px);
      background-color: rgba(10, 25, 47, 0.85);
      box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
    `};
  ${(props) =>
    props.scrollDirection === 'down' &&
    !props.scrolledToTop &&
    css`
      height: 70px;
      transform: translateY(calc(70px * -1));
      box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
    `};
`;

const StyledNav = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  /* padding: 0px 15px; */

  .logo {
    padding: 15px;
  }

  .menu {
    padding: 15px;
    z-index: 10;
  }
`;

const StyledNavLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    /* ${({ theme }) => theme.mixins.flexBetween}; */
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    padding: 0px;
    margin: 0px;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);
      a {
        padding: 10px;
        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }
  .resume-button {
    /* ${({ theme }) => theme.mixins.smallButton}; */
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = ({ open, setOpen }) => {
  // invoke useScrollDirection hook
  const scrollDirection = useScrollDirection();

  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    // { name: 'Home', url: '/#' },
    { name: 'About', url: '/#about' },
    { name: 'Projects', url: '/#projects' },
    // { name: 'Blogs', url: '/#blogs' },
    { name: 'Contact', url: '/#contact' },
  ];
  const ResumeLink = (
    <a
      className="resume-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );
  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <div className="logo">LOGO</div>
        <StyledNavLinks>
          <ol>
            {navLinks &&
              navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url}>{name}</Link>
                </li>
              ))}
          </ol>
          <div>{ResumeLink}</div>
        </StyledNavLinks>
        <StyledMenu>
          <Helmet>
            <body className={open ? 'blur' : ''} />
          </Helmet>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </StyledMenu>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
