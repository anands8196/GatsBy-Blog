import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/layout'

export default function Template({ data }) {
    const post = data.markdownRemark

    return (
        <Layout>
            <div>
                <Link to="/blog">Go Back</Link>
                <hr />
                <h1>{post.frontmatter.title}</h1>
                <h4>
                    Posted on {post.frontmatter.date}
                </h4>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
        </Layout>
    )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title        
        date
      }
    }
  }
`