import React from 'react'
import BackgroundImage from 'gatsby-background-image';
import styled, { keyframes } from "styled-components";

const AnimationStep = (props) => {

    const {active, imagePaths, paragraphs} = props;
    const [isActive, setIsActive] = useState(active);

    return (
        <Step url={imagePaths[0]}>
            {
                paragraphs.map((p,i)=> {
                    <TextBox>{p}</TextBox>
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
const Step = styled.section`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.url});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
`

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

export default AnimationStep
