import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import Image from '../components/image'
import SEO from '../components/seo'
import { graphql } from 'gatsby';

const BlogPage = ({ data }) => (
    <Layout>
        <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
        <h1>Welcome To Avengers</h1>
        <div>
            {
                data.allMarkdownRemark.edges.map(post => (

                    <div key={post.node.id}>
                        <br />
                        <h3>
                            <Link to={post.node.frontmatter.path}>{post.node.frontmatter.title}</Link>
                        </h3>


                    </div>
                )

                )
            }

        </div>

    </Layout>


)


export const pageQuery = graphql`
query BlogIndexQuery
{
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          path
          title
          date
        }
        excerpt
      }
    }
  }
}

`

export default BlogPage
