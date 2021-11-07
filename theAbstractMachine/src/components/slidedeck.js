import { withAssetPrefix } from 'gatsby-link';
import React, { useState, useMemo , useEffect } from 'react'
import styled, { keyframes } from "styled-components";
import SSLencryption_01 from "./img/SSLencryption_01.png"
import SSLencryption_02 from "./img/SSLencryption_02.png"
import SSLencryption_03 from "./img/SSLencryption_03.png"
import SSLencryption_04 from "./img/SSLencryption_04.png"
import debounce from 'lodash.debounce';
import Stepper from "./stepper";


export default function SlideDeck() {

    const images = [
        SSLencryption_01,
        SSLencryption_02,
        SSLencryption_03,
        SSLencryption_04
    ]

    // Store current index TODO: make props-dependent
    const [stepIndex, setStepIndex] = useState(0);
    /* Storing last scroll position for comparison's sake 
    to deduce direction */
    //const [lastScroll, setLastScroll] = useState(window.scrollY);


    const handleScroll = (e) => {
        console.log(`E equals ${typeof(e)}`);
        //let scrollY = window.scrollY;

        if (e?.deltaY){
            
            // If the user scrolled upwards, decrement index
            if (e?.deltaY > 0) {
                setStepIndex(stepIndex > 1? stepIndex - 1: 0);
                //setLastScroll(scrollY);
                console.log("It went back!");
            }else{
            // If scrolled downwards, increment index
                setStepIndex(stepIndex < images.length-1 ? stepIndex + 1: images.length-1);
                //setLastScroll(scrollY);
                console.log("It went forward!");
            }
        }
        //e.preventDefault();

    }


    const debouncedChangeHandler = useMemo(
        () => debounce(handleScroll, 100)
      , [stepIndex]);

    useEffect(() => {
        //console.log("HI THERE");
        //handleOnRender();

        window.addEventListener("wheel", debouncedChangeHandler );

        return () => {
          // clean up the event handler when the component unmounts
          //clearInterval(timer);
          window.removeEventListener("wheel", debouncedChangeHandler );
          debouncedChangeHandler.cancel();
        };
      });



    return (
        <Wrapper >
        { images.map((imgName, i)=> ( 
        i==stepIndex && <Step url={imgName}></Step> 
        )) }
        <Stepper n={images.length}></Stepper>
        </Wrapper>
    )
}

/*

*/
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
const PlaceHolder = styled.h1`
    animation: 5s ${fadeIn} ease-out;
    color: white; 
    fontSize: 50px;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
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