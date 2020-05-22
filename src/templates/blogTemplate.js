import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import RecentPost from "../components/recent-post"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {



  const { site, wordpressPost,allWordpressPost } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site



  const Posts = allWordpressPost.edges
  .filter(edge => !!edge.node.date) // You can filter your posts based on some criteria
  .map(edge => <RecentPost key={edge.node.id} post={edge.node} />)


  return (
    <Layout>
      <Helmet>
        <title>{wordpressPost.title} | {siteMetadata.title}</title>
        <meta name="description" content={wordpressPost.metaDescription} />
        <meta name="og:image" content={wordpressPost.featured_media && wordpressPost.featured_media.localFile.childImageSharp.resolutions.src} />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="315" />
        <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
      </Helmet>
      <div className="blog-post-container">
        <div className="container-post">
          <article className="post">
            
              <div >
                <h1 className="post-title">{wordpressPost.title}</h1>
                <div className="post-meta">{wordpressPost.date}</div>
              </div>
      

            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: wordpressPost.content }}
            />
          </article>
          <div className="item-right">
          <div style="margin-bottom:20px">
          <amp-ad
              layout="responsive"
              width="300"
              height="250"
              type="adsense"
              data-ad-client="ca-pub-5249725178843606"
              data-ad-slot="5982218048">
          </amp-ad>
          </div>
          <div class="sticky"> {Posts} </div>
         


          </div>
        </div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query currentPostQuery($id: Int!) {
  wordpressPost(wordpress_id: { eq: $id }) {      
      title
      content
      date(formatString:"MMMM DD,YYYY"),
      featured_media{
        localFile{
            childImageSharp{
                resolutions(width: 600, height: 315) {
                    src
                    width
                    height
                }
            }
        }
    }

  }
  site {
      siteMetadata {
          title
      }
  }

  allWordpressPost(limit: 3,sort:{fields:[date], order:DESC}) {
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
