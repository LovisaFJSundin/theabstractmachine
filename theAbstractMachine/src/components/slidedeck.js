import { withAssetPrefix } from 'gatsby-link';
import React, { Children, useState, useMemo , useEffect } from 'react'
import styled, { keyframes } from "styled-components";
import SSLencryption_01 from "./img/SSLencryption_01.png"
import SSLencryption_02 from "./img/SSLencryption_02.png"
import SSLencryption_03 from "./img/SSLencryption_03.png"
import SSLencryption_04 from "./img/SSLencryption_04.png"
import debounce from 'lodash.debounce';
import Stepper from "./stepper";

export default function SlideDeck({ title, children }) {

    // Store current index TODO: make props-dependent
    const [stepIndex, setStepIndex] = useState(0);
    /* Storing last scroll position for comparison's sake 
    to deduce direction */
    //const [lastScroll, setLastScroll] = useState(window.scrollY);
    const childArray = React.Children.toArray(children);

    console.log(`CHILDREN: ${childArray}`)

    const handleScroll = (e) => {

        //let scrollY = window.scrollY;

        if (e?.deltaY){
            
            // If the user scrolled upwards, decrement index
            if (e?.deltaY > 0) {
                setStepIndex(stepIndex > 1? stepIndex - 1: 0);
                //setLastScroll(scrollY);
                console.log("It went back!");
            }else{
            // If scrolled downwards, increment index
                setStepIndex(stepIndex < childArray?.length-1 ? stepIndex + 1: childArray?.length-1);
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
          <Title>{title}</Title>
          {Children.map(children, (child, i) => {
          return React.cloneElement(child, { active: (i==stepIndex) })
        })}
        <Stepper n={childArray.length || 0}></Stepper>
        </Wrapper>
    )
}

/*

*/

const Title = styled.h1`
  font-size: 46px;
  color: white;
  display: block;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 500px;
  text-align: center;
  padding: 2px;
  top: -2px;
  border: 3px solid #505050;
  font-family: "Zembood";
  font-weight: lighter;
  line-height: 44px;
  letter-spacing: 5px;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

