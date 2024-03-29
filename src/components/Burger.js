import React from 'react';
import styled from 'styled-components';

const StyledBurger = styled.button`
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>
      open ? theme.primaryLight : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.15s linear;

    position: relative;
    transform-origin: 1px;
    z-index: 10;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = ({ open, setOpen }) => {
  const toggleMenu = () => {
    setOpen(!open);
  };
  return (
    <StyledBurger open={open} onClick={toggleMenu}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default Burger;
