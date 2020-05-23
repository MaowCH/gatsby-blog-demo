import React from "react"
import { Link } from "gatsby"


const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={'/post/' +post.wordpress_id}>
    {post.featured_media && post.featured_media.localFile.childImageSharp.resolutions &&
                        <div className="post-thumbnail2" style={{backgroundImage: `url(${post.featured_media && post.featured_media.localFile.childImageSharp.resolutions.src})`}}>
                        </div>
                    }
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={'/post/' +post.wordpress_id} className="post-link" dangerouslySetInnerHTML={{ __html: post.title }}>

        </Link>
      </h2>
      <div className="post-meta">{post.date}</div>
    </header>
  </article>
)
export default PostLink
