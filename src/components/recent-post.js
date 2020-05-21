import React from "react"
import { Link } from "gatsby"
import Img from 'gatsby-image'

const RecentPost = ({ post }) => (
  <article className="card-recent-post">
    <Link to={'/post/' +post.wordpress_id}>
    {post.featured_media && post.featured_media.localFile.childImageSharp.resolutions &&
                        <div className="recent-post-thumbnail" style={{backgroundImage: `url(${post.featured_media && post.featured_media.localFile.childImageSharp.resolutions.src})`}}>
                        </div>
                    }

    </Link>
    <header>
      <h2 className="recent-post-title">
        <Link to={'/post/' +post.wordpress_id} className="post-link">
          {post.title}
        </Link>
      </h2>
      <div className="post-meta">{post.date}</div>
    </header>
  </article>
)
export default RecentPost
