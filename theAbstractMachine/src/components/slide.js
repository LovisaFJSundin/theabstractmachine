import React, {useState } from 'react'
import BackgroundImage from 'gatsby-background-image';
import styled, { keyframes, css } from "styled-components";

const Slide = (props) => {

    const  { imagePaths, paragraphs, imageDict, active, key}= props; //
    //const [isActive] = useState(active);
    console.log(`Is active? ${active}`)

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

    console.log(`Component re-running! ${active}`)

    const stepStyles = {
      position: "absolute"
    }
//,        opacity: active? 1 : 0.1,         
    return (
      <>
        <Step
        active={active}
        key={active ? 'active': 'inactive'}
        style={stepStyles}
        Tag="section"
        preserveStackingContext={true}
        fluid={images} >
        </Step>
        <BoxContainer  active={active}>
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
    filter: blur(5px) opacity(10%);
  }
  100% {
    filter: 1;
  }
`

const fadeOut = keyframes`
  0% {
    filter: 1;
  }
  100% {
    filter: blur(5px) opacity(10%); 
  }
`

// TODO: optimize 
const Step = styled(BackgroundImage)`
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    animation: ${ props => props.active ? css`1.5s ${fadeIn} ease-in forwards` : css`1.5s ${fadeOut} ease-out forwards`};
`
//      background-image: url(${props => props.url}); opacity: active ?

const BoxContainer = styled.div((props)=> ({
  position: "absolute",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  maxWidth: "500px",
  top: "100px",
  left: "100px",
  display: props.active ? "visible":"none"
}))


const TextBox = styled.p`
    margin-bottom: 40px;
    max-width: max-content;
    background-color: white;
    padding: 0px;
    color: black;
    font-family:  "Classroom";
    font-size: 1rem;
    border-color: white;
    border-width: 4px;
    border-style: solid;
    border-radius: 21% 17% 24% 2% / 3% 1% 5% 15%;

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
//    box-shadow: rgb(0 0 0) 0px 30px 60px -30px, rgb(36 32 27 / 95%) 0px -2px 6px 0px inset;

export default Slide
