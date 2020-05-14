import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, wordpressPost } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
console.log(wordpressPost)


  return (
    <Layout>
      <Helmet>
        <title>{wordpressPost.title} | {siteMetadata.title}</title>
        <meta name="description" content={wordpressPost.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          

    
            <div className="post-thumbnail" style={{backgroundImage: `url(${wordpressPost.featured_media && wordpressPost.featured_media.localFile.childImageSharp.resolutions.src})`}}>
              <h1 className="post-title">{wordpressPost.title}</h1>
              <div className="post-meta">{wordpressPost.date}</div>
            </div>
     

          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: wordpressPost.content }}
          />
        </article>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
query currentPostQuery($id: String!) {
  wordpressPost(id: { eq: $id }) {
      title
      content
      date(formatString:"MMMM DD,YYYY"),
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
  site {
      siteMetadata {
          title
      }
  }
}
`
