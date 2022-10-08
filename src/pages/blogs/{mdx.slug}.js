// import { graphql, useStaticQuery } from 'gatsby';
// import { MDXRenderer } from 'gatsby-plugin-mdx';
// import { GatsbyImage, getImage } from 'gatsby-plugin-image';
// import React from 'react';
// import Layout from '../../components/Layout';

// export default function BlogPost({ data }) {
//   const image = getImage(data.mdx.frontmatter.hero_image);
//   return (
//     <Layout pageTitle={data.mdx.frontmatter.title}>
//       <p>{data.mdx.frontmatter.date}</p>
//       <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
//       <MDXRenderer>{data.mdx.body}</MDXRenderer>
//     </Layout>
//   );
// }

// // export const query = graphql`
// //   query ($id: String) {
// //     mdx(id: { eq: $id }) {
// //       frontmatter {
// //         title
// //         date
// //         hero_image_alt
// //         hero_image {
// //           childImageSharp {
// //             gatsbyImageData(width: 200)
// //           }
// //         }
// //       }
// //       body
// //     }
// //   }
// // `;
