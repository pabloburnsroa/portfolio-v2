import * as React from 'react';
import Layout from '../components/Layout';
import { StaticImage } from 'gatsby-plugin-image';
import '../styles/global.css';
import * as styles from '../styles/home.module.css';
import { graphql, useStaticQuery } from 'gatsby';

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

  console.log(data);

  const { title, description } = data.site.siteMetadata;

  return (
    <Layout pageTitle="Portfolio">
      <section className={styles.header}>
        <div>
          <h1>Welcome to my Personal Portfolio</h1>
          <p>
            Site Metadata: {title} | {description}
          </p>
          <p>
            My motivation for this site is to showcase what I've learned and
            connect with others interested in software engineering.
          </p>
          <StaticImage
            alt="man avatar"
            src="../images/man.png"
            className="mainImage"
            width={250}
            height={250}
          />
        </div>
        <img
          src="/banner.png"
          alt="index banner"
          style={{ maxWidth: '100%' }}
        />
      </section>
    </Layout>
  );
}
