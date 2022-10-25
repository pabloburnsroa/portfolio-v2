import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Navbar, Footer } from '../components';
import { GlobalStyle, theme } from '../styles';
import { Social } from '../components';
import Email from './Email';

const LayoutStyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div id="root">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <LayoutStyledContent>
          <Navbar open={open} setOpen={setOpen} />
          <Social />
          <Email />

          <div id="content">
            {children}

            <Footer />
          </div>
        </LayoutStyledContent>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
