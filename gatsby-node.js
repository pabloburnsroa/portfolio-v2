// const path = require('path');
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions;
//   const projectTemplate = path.resolve(`src/templates/ProjectDetails.js`);
//   const result = await graphql(`
//     query {
//       allMdx(filter: { fileAbsolutePath: { regex: "/projects/" } }) {
//         nodes {
//           slug
//         }
//       }
//     }
//   `);
//   const projects = result.data.allMdx.nodes;
//   projects.forEach((node) => {
//     createPage({
//       path: `/${node.slug}/`,
//       component: projectTemplate,
//       context: {
//         slug: node.slug,
//       },
//     });
//   });
// };
