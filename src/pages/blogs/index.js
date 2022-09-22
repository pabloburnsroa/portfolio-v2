import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

export default function blog({ data }) {
  const blogs = data.blogs.nodes;
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {blogs.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={node.slug}>{node.frontmatter.title}</Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
          </article>
        ))}
      </ul>
    </Layout>
  );
}

export const query = graphql`
  query BlogsPage {
    blogs: allMdx(filter: { fileAbsolutePath: { regex: "/blogs/" } }) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`;
