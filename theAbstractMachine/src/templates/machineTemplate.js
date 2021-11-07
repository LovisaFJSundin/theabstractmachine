import React from 'react'
import Layout from '../components/layout'
import styled from "styled-components";
import { graphql, Link } from "gatsby"
import Image from "gatsby-plugin-image"
import { MDXRenderer } from 'gatsby-plugin-mdx'

const MachineTemplate = ({ data }) => {

    const { mdx:{frontmatter: {title, category, subtitle, tags, description}, body}} = data;

    return (
        <Layout>
            <ConceptEntry>{title}</ConceptEntry>
        </Layout>
    )
}


const ConceptEntry = styled.h2`
    color: #505050;
    font-family: "USIS 1949";
    font-size: extralarge;
    display: block;
`

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
    }
`

export default MachineTemplate
