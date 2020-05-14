import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={'/post/' +post.slug}>
    {post.featured_media && post.featured_media.localFile.childImageSharp.resolutions &&
                        <div>
                            <Img resolutions={post.featured_media.localFile.childImageSharp.resolutions} />
                        </div>
                    }
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={'/post/' +post.slug} className="post-link">
          {post.title}
        </Link>
      </h2>
      <div className="post-meta">{post.date}</div>
    </header>
  </article>
)
export default PostLink
