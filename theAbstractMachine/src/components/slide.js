import React, {useState } from 'react'
import BackgroundImage from 'gatsby-background-image';
import styled, { keyframes } from "styled-components";

const Slide = (props) => {

    const  { imagePaths, paragraphs, imageDict, active, slug}= props; //
    const [isActive, setIsActive] = useState(active);

    // For each requested image filename...
    const images = imagePaths.map((name, ix)=> {
      // Find the corresponding fluid entries whose path includes that filename
      let targetImageDict = imageDict.filter((val,i)=>{
        let path = val.node.childImageSharp.fluid.src.split("/").pop();
        return path.includes(name);
      })
      // ... and append it to a new list
      return targetImageDict[0].node.childImageSharp.fluid;
    }) || [];

    

    return (
      <>
        <Step
        style={{position:"absolute"}}
        Tag="section"
        preserveStackingContext={true}
        fluid={images} >
        </Step>
        <BoxContainer>
        {
                paragraphs.map((p,i)=> {
                   return <TextBox key={i}>{p}</TextBox>
                })
            }
        </BoxContainer>
        </>
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
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    opacity: 0.5;
`
//      background-image: url(${props => props.url});

const BoxContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 500px;
  top: 100px;
  left: 100px;
`

const TextBox = styled.p`
    margin-bottom: 40px;
    max-width: max-content;
    background-color: white;
    padding: 10px;
    color: black;
    font-family:  "Classroom";
    font-size: 1.5rem;
    border-color: black;
    border-width: 4px;
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
