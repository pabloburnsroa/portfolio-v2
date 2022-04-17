import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/Layout';

export default function blog({ data }) {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.blogs.nodes.map((node) => (
          <article key={node.id}>
            <h2>
              <Link to={`/blogs/${node.slug}`}>{node.frontmatter.title}</Link>
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
    blogs: allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date
        }
        id
        slug
      }
    }
  }
`;
