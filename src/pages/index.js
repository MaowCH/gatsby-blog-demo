import React from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"



const IndexPage = ({
  data: {
    site,
    allWordpressPost: { edges }

  },
}) => {



  const Posts = edges
    .filter(edge => !!edge.node.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)



  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
        <meta name="google-site-verification" content="OlW-RbCD-HdrD2obgV5_1LLCAhYwKqi9FT8_5tYJI-A" />
      </Helmet>
      <div className="banner-sponser">
        <amp-ad
          layout="responsive"
          width="728"
          height="90"
          type="adsense"
          data-ad-client="ca-pub-5249725178843606"
          data-ad-slot="0325136431">
      </amp-ad>
      </div>
      <h2>Blog Posts &darr;</h2>
      <div className="grids">
        {Posts}
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }

    allWordpressPost(limit:15,sort:{fields:[date], order:DESC}) {
      edges {
        node {
          id
          slug
          status
          template
          format
          title
          date(formatString:"MMMM DD,YYYY"),
          featured_media {
            localFile {
              childImageSharp {
                resolutions(width: 500, height: 200) {
                  src
                  width
                  height
                }
              }
            }
          }
          wordpress_id
        }
      }
    }
  }
`
