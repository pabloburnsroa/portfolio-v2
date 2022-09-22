import { Link } from 'gatsby';
import React from 'react';
import Burger from './Burger';
import Menu from './Menu';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100px;
`;

const StyledNav = styled.nav`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
  width: 100%;
  padding: 0px 15px;

  .logo {
    padding: 15px;
  }

  .menu {
    padding: 15px;
    z-index: 10;
  }
`;

const Navbar = ({ open, setOpen }) => {
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Projects', url: '/projects' },
    { name: 'Blogs', url: '/blogs' },
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
    <StyledHeader>
      <StyledNav>
        <div className="menu">
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <div className="logo">LOGO</div>

        {/* <nav className={styles.nav}>
        <ul className={styles.menu}>
        {navLinks &&
          navLinks.map(({ url, name }, i) => (
            <li key={i}>
            <Link to={url}>{name}</Link>
            </li>
            ))}
            </ul>
          </nav> */}
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
