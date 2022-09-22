import React, { useState } from 'react';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import styled from 'styled-components';
import { Navbar, Footer } from '../components';

const LayoutContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LayoutContent>
          <Navbar open={open} setOpen={setOpen} />
          <main id="content">{children}</main>
          <Footer />
        </LayoutContent>
      </ThemeProvider>
    </>
  );
};

export default Layout;
