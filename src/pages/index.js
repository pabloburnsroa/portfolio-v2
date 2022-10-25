import * as React from 'react';
import Layout from '../components/Layout';

import Hero from '../components/sections/hero';
import About from '../components/sections/about';
import Featured from '../components/sections/featured';
import Jobs from '../components/sections/jobs';
import Contact from '../components/sections/contact';
import styled from 'styled-components';
import Projects from '../components/sections/projects';

const StyledMainContainer = styled.main`
  counter-reset: section;
  padding: 0px 150px;

  @media (max-width: 1024px) {
    padding: 0px 100px;
  }

  @media (max-width: 768px) {
    padding: 0px 50px;
  }

  @media (max-width: 425px) {
    padding: 0px 25px;
  }
`;

export default function IndexPage() {
  return (
    <Layout>
      <StyledMainContainer>
        <Hero />
        <About />
        {/* <Jobs /> */}
        <Featured />
        <Projects />
        <Contact />
      </StyledMainContainer>
    </Layout>
  );
}
