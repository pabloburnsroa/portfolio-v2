import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';
import Layout from '../components/Layout';
import { Icon } from '../components/icons';
import styled from 'styled-components';

const StyledTableContainer = styled.div`
  margin: 90px -20px;
  table {
    width: 100%;

    tbody tr {
      margin: 10px;
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      svg {
        width: 20px;
        height: 20px;
      }
    }

    td {
      &.title {
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: 20px;
        line-height: 1.25;
      }

      &.stack {
        .separator {
          margin: 0px 5px;
        }
      }

      &.links {
        div {
          display: flex;
          align-items: center;

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const Archive = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/content/projects/" } }
        sort: { order: DESC, fields: frontmatter___date }
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              external
              github
              stack
            }
          }
        }
      }
    }
  `);

  const projects = data.allMdx.edges.filter(({ node }) => node);
  return (
    <Layout>
      <main>
        <header>
          <h1 className="big-heading">Archive</h1>
          <p className="sub-title">A list of projects I've worked on</p>
        </header>
        <StyledTableContainer>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Title</th>
                <th className="hide-on-mobile">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects &&
                projects.map(({ node }, i) => {
                  const { date, title, external, github, stack } =
                    node.frontmatter;

                  return (
                    <tr key={i}>
                      <td className="overline date">{`${new Date(
                        date
                      ).getFullYear()}`}</td>
                      <td className="title">{title}</td>
                      <td className="stack hide-on-mobile">
                        {stack.length &&
                          stack.map((item, i) => (
                            <span key={i}>
                              {item}
                              {''}
                              {i !== stack.length - 1 && (
                                <span className="separator">&middot;</span>
                              )}
                            </span>
                          ))}
                      </td>
                      <td className="links">
                        <div>
                          {github && (
                            <a href={github} aria-label="GitHub Link">
                              <Icon name="GitHub" />
                            </a>
                          )}
                          {external && (
                            <a
                              href={external}
                              aria-label="External Link"
                              className="external"
                            >
                              <Icon name="External" />
                            </a>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </StyledTableContainer>
      </main>
    </Layout>
  );
};

export default Archive;
