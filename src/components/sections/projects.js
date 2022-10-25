import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { useState } from 'react';
import Project from '../Project';
import { useEffect } from 'react';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, 32px);
  }

  .projects-grid {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  .more-button {
    color: var(--green);
    background-color: transparent;
    border: 1px solid var(--green);
    border-radius: 4px;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    padding: 1.25rem 1.75rem;
    margin: 80px auto 0px;

    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/projects/" } }) {
        edges {
          node {
            frontmatter {
              date
              title
              external
              github
              stack
            }
            excerpt
          }
        }
      }
    }
  `);

  const allProjects = data.allMdx.edges.filter(({ node }) => node);
  const firstSix = allProjects.slice(0, 6);

  const [loadMore, setLoadMore] = useState(false);
  const projectsToDisplay = loadMore ? allProjects : firstSix;

  const handleLoadMore = () => {
    setLoadMore(!loadMore);
  };

  return (
    <StyledProjectsSection>
      <h2>Other Noteworthy Projects</h2>
      <Link className="inline-link" to="/archive">
        view the archive
      </Link>
      <ul className="projects-grid">
        {projectsToDisplay &&
          projectsToDisplay.map(({ node }, i) => (
            <Project key={i} project={node} />
          ))}
      </ul>
      <button onClick={handleLoadMore} className="more-button">
        Show {loadMore ? 'Less' : 'More'}
      </button>
    </StyledProjectsSection>
  );
};

export default Projects;
