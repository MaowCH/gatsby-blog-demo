import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <HeroHeader />
      <div className="two-grids -contact">
        <div className="post-thumbnail3" style={{backgroundImage: `url('/assets/3626737.jpg')`, marginBottom: 0}}>
          <h1 >ยังติดต่อเราไม่ได้</h1>
          <p>ก็แค่เว็บ Blog เว็บหนึ่งที่ผมอยากจะทำมันขึ้นมา </p>
        </div>
        
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`