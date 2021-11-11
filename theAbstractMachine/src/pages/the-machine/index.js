import React from 'react'
import Layout from "../../components/layout"
import { graphql, Link } from 'gatsby'
import styled from "styled-components";
//import Image from "gatsby-plugin-image"

const TheMachine = ({data}) => {
    const {allMdx:{nodes:concepts}} = data;
    console.log(`POSTS are ${concepts}`);
    return (
        <Layout>
            <Wrapper>
              <p> his programmable spinrock, or Babbage his..., the </p>
              <p> Today, when computer scientists speak of containers, of ports, protocols, interfaces, partitions and contexts, they can no longer see them, only imagine them in the privacy of their mind's eye.</p> 
              <p>Gone is the clangor, the clatter of interlocking , crank-driven. Ghostly notions... entities that can be inferred from wisely chosen questions, or broadcast through error, ... Abstractions conjured from bit patterns that to the naked eye appear as wholly featureless, motionless semiconductor arrays. </p>
                {
                    concepts.map((it,i)=>{
                        return <StyledLink to={`/the-machine/${it.frontmatter.slug}`} >{it.frontmatter.title}</StyledLink>
                    })
                }
            </Wrapper>
        </Layout>
    )
}


const ConceptEntry = styled.h2`
    color: #505050;
    font-family: "USIS 1949";
    font-size: extralarge;
    display: block;
`

const StyledLink = styled(props => <Link {...props} />)`
    color: #505050;
    padding: 0px 20px 6px 20px;
    font-family: "USIS 1949";
    font-size: extralarge;

    & :hover{
        color: white;
    }
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          category
          description
          slug
          subtitle
          tags
          title
        }
      }
    }
  }
`

export default TheMachine
