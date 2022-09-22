import * as React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery } from 'gatsby';

import Hero from '../components/Hero';
import About from '../components/About';
import Featured from '../components/Featured';
import Jobs from '../components/Jobs';
import Contact from '../components/Contact';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          description
          siteUrl
          title
          contact
        }
      }
    }
  `);

  return (
    <Layout>
      <Hero />
      <About />
      <Featured />
      <Jobs />
      <Contact />
    </Layout>
  );
}
