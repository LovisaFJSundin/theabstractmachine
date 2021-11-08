import React, {useState } from 'react'
import BackgroundImage from 'gatsby-background-image';
import styled, { keyframes } from "styled-components";

const Slide = (props) => {

    const  { imagePaths, paragraphs, imageDict, active, slug}= props; //
    const [isActive, setIsActive] = useState(active);

    console.log( `HIYA ${JSON.stringify(imageDict)}` );

    const images = imageDict.filter((val,i)=> {
      //let src = val.node.childImageSharp.fluid.src;
      return true//(src.includes(slug));
    }) || [];

    return (
        <Step
        Tag="section"
        fluid={images[0].node.childImageSharp.fluid} >
            {
                paragraphs.map((p,i)=> {
                   return <TextBox key={i}>{p}</TextBox>
                })
            }
        </Step>
    )
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

// TODO: optimize 
const Step = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
`
//  


const TextBox = styled.p`
    max-width: 400px;
    background-color: white;
    padding: 10px;
    color: black;
    font-family:  "Classroom";
    font-size: 1.5rem;
    position: absolute;
    top: 100px;
    left: 100px;
    border-color: black;
    border-width: 6px;
    border-style: solid;
    border-radius: 11% 7% 24% 2% / 3% 1% 5% 15%;
    box-shadow: rgb(0 0 0) 0px 30px 60px -30px, rgb(36 32 27 / 95%) 0px -2px 6px 0px inset;

    & ::selection{
        background: #918e86;
        text-decoration: inherit;
    }

    & ::-moz-selection{
        background: #918e86;
        text-decoration: inherit;
    }

    u{
        & ::selection{
            background: #918e86;
            text-decoration: inherit;
        }
    
        & ::-moz-selection{
            background: #918e86;
            text-decoration: inherit;
        }       
    }
`

export default Slide
