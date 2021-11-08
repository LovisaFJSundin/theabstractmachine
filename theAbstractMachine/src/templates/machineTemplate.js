import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components";
import { graphql, Link } from "gatsby"
import Image from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const MachineTemplate = ({ data }) => {

    const { mdx:{frontmatter: {title, category, subtitle, tags, description}, body}, 
    allFile: {edges: images}} = data;

    console.log(`ImageDict is: ${images}`)

    return (
        <Layout>
            <MDXRenderer imageDict={images}>{body}</MDXRenderer>
        </Layout>
    )
}


const ConceptEntry = styled.h2`
    color: #505050;
    font-family: "USIS 1949";
    font-size: extralarge;
    display: block;
`

//TODO: only retrieve images based on folder with slug name!!!
export const query = graphql`
    query GetSingleConcept($slug: String) {
        mdx(frontmatter: { slug: { eq: $slug }}) {
            frontmatter {
                category
                slug
                title
                subtitle
                tags
                description
            }
            body
        }
        allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
            edges {
              node {
                id
                childImageSharp {
                  fluid {
                    tracedSVG
                    src
                  }
                }
              }
            }
          }
    }
`

export default MachineTemplate
