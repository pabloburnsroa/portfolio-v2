import React from 'react';
import styled from 'styled-components';

const StyledSideElement = styled.div`
  position: fixed;
  bottom: 0;
  left: ${(props) => (props.orientation === 'left' ? '40px' : 'auto')};
  right: ${(props) => (props.orientation === 'left' ? 'auto' : '40px')};

  @media (max-width: 1024px) {
    left: ${(props) => (props.orientation === 'left' ? '20px' : 'auto')};
    right: ${(props) => (props.orientation === 'left' ? 'auto' : '20px')};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SideElement = ({ children, orientation }) => {
  return (
    <StyledSideElement orientation={orientation}>{children}</StyledSideElement>
  );
};

export default SideElement;
