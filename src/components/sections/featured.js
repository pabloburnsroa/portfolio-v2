import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import styled from 'styled-components';
import { Icon } from '../icons/index';

const StyledProjectsGrid = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  a {
    position: relative;
    z-index: 1;
  }
`;

const StyledProject = styled.li`
  position: relative;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  &:nth-of-type(2n + 1) {
    .project-content {
      grid-column: 7 / -1;
      text-align: right;

      @media (max-width: 768px) {
        grid-column: 1 /-1;
        text-align: left;
      }
    }
    .project-tech-list {
      -webkit-box-pack: end;
      justify-content: flex-end;

      @media (max-width: 768px) {
        justify-content: flex-start;
      }
    }
    .project-links {
      justify-content: flex-end;
      margin-left: 0px;
      margin-right: -10px;

      @media (max-width: 768px) {
        margin-left: -10px;
        margin-right: 0;
        justify-content: flex-start;
      }
    }
    .project-image {
      grid-column: 1 / 8;
      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
  }

  &:not(:last-of-type) {
    margin-bottom: 75px;
  }

  .project-content {
    position: relative;
    grid-area: 1 / 1 / -1 / 7;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100%;
      grid-column: 1 / -1;
      padding: 40px 40px 30px;
    }
  }

  .project-overline {
    margin: 10px 0;
    color: var(--green);
    font-weight: 400;
  }

  .project-title {
    color: var(--lightest-slate);
    font-size: clamp(24px, 5vw, 28px);
    a {
      z-index: 2;
    }
  }

  .project-description {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    z-index: 2;
    padding: 25px;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    color: var(--light-slate);
    font-size: 18px;

    @media (max-width: 768px) {
      padding: 20px 0px;
      background-color: transparent;
      box-shadow: none;
    }
  }

  .project-tech-list {
    display: flex;
    flex-wrap: wrap;
    margin: 25px 0 10px;
    padding: 0px;
    list-style: none;

    li {
      margin: 0px 20px 5px 0px;
      color: var(--light-slate);
      font-size: 13px;
      white-space: nowrap;

      @media (max-width: 768px) {
        margin: 0px 10px 5px 0px;
      }
    }
    @media (max-width: 768px) {
      margin: 10px 0px;
    }
  }

  .project-links {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 10px;
    margin-left: -10px;
    color: var(--lightest-slate);
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }

  .project-image {
    grid-column: 6 / -1;
    grid-row: 1 / -1;
    position: relative;
    z-index: 1;

    @media (max-width: 768px) {
      grid-column: 1 / -1;
      height: 100%;
      opacity: 0.25;
    }
    a {
      width: 100%;
      height: 100%;
      background-color: var(--green);
      border-radius: var(--border-radius);
      vertical-align: middle;
      &:hover,
      &:focus {
        background: transparent;
        outline: 0;
        &:before,
        .img {
          background: transparent;
          filter: none;
        }
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 3;
        transition: var(--transition);
        background-color: var(--navy);
        mix-blend-mode: screen;
      }
    }
    .img {
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1) brightness(90%);
      @media (max-width: 768px) {
        object-fit: cover;
        width: auto;
        height: 100%;
        filter: grayscale(100%) contrast(1) brightness(50%);
      }
    }
  }
`;

const Featured = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/content/featured/" } }) {
        edges {
          node {
            frontmatter {
              title
              date
              external
              github
              tech_skills
              description
              cover {
                childImageSharp {
                  gatsbyImageData(
                    width: 700
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `);

  const featuredProjects = data.allMdx.edges.filter(({ node }) => node);

  return (
    <section id="projects">
      <h2 className="numbered-heading">Some Things I’ve Built</h2>
      <StyledProjectsGrid>
        {featuredProjects &&
          featuredProjects.map(({ node }, i) => {
            const { frontmatter } = node;
            const {
              date,
              external,
              github,
              title,
              tech_skills,
              cover,
              description,
            } = frontmatter;
            const image = getImage(cover);
            return (
              <StyledProject key={i}>
                <div className="project-content">
                  <div>
                    <p className="project-overline">Featured Project</p>

                    <h3 className="project-title">
                      <a href={external}>{title}</a>
                    </h3>

                    <div className="project-description">
                      <p>{description}</p>
                    </div>

                    {tech_skills.length && (
                      <ul className="project-tech-list">
                        {tech_skills.map((tech, i) => (
                          <li key={i}>{tech}</li>
                        ))}
                      </ul>
                    )}

                    <div className="project-links">
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
                  </div>
                </div>

                <div className="project-image">
                  <a href={external ? external : github ? github : '#'}>
                    <GatsbyImage image={image} alt={title} className="img" />
                  </a>
                </div>
              </StyledProject>
            );
          })}
      </StyledProjectsGrid>
    </section>
  );
};

export default Featured;
