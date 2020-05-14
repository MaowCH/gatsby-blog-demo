const _ = require(`lodash`)
const Promise = require(`bluebird`)
const path = require(`path`)
const slash = require(`slash`)

const postsQuery = `
{
  allWordpressPost {
    edges {
      node {
        id  
        slug
        status
        template
        format
        title
        date
        featured_media{
            localFile{
                childImageSharp{
                    resolutions(width:500, height: 200){
                        src
                        width
                        height
                    }
                }
            }
        }
      }
    }
  }
}
`


exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;


  return new Promise((resolve, reject) => {

  graphql(postsQuery)
  .then(result => {
      if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
      }
      const postTemplate = path.resolve(`src/templates/blogTemplate.js`)

      _.each(result.data.allWordpressPost.edges, edge => {
          createPage({
              path: `/post/${edge.node.slug}/`,
              component: slash(postTemplate),
              context: {
                  id: edge.node.id,
              },
          });
      });
      resolve();
  });

});

};