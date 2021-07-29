import React from 'react'
import Layout from '../components/layout'
import {Link, useStaticQuery, graphql} from "gatsby"

const BlogPage = () =>{
    const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark{
          edges{
            node{
              frontmatter{
                title
                date
                description
              }
              fields{
                slug
              }
            }
          }
        }
      }
    `)
    return (
        <div>
            <Layout>
            <h1>My Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge)=>{
                    return(
                        <li>
                            <Link to = {`${edge.node.fields.slug}`}>
                              <h3>{edge.node.frontmatter.title}</h3>
                              <p>{edge.node.frontmatter.description}</p>
                              <p>posted on {edge.node.frontmatter.date}</p>
                            </Link>
                            
                        </li>
                    )
                })}
            </ol>
            </Layout>
        </div>
    )
}

export default BlogPage