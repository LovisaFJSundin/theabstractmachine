import { withAssetPrefix } from 'gatsby-link';
import React, { Children, useState, useMemo , useEffect } from 'react'
import styled, { keyframes } from "styled-components";
import debounce from 'lodash.debounce';
import Stepper from "./stepper";

export default function SlideDeck({ title, children }) {

    // Store current index TODO: make props-dependent
    const [stepIndex, setStepIndex] = useState(0);

    const childArray = React.Children.toArray(children);

    const handleScroll = (e) => {

        if (e?.deltaY){
            
            // If the user scrolled upwards, decrement index
            if (e?.deltaY > 0) {
                setStepIndex(stepIndex > 1? stepIndex - 1: 0);
                //setLastScroll(scrollY);
                console.log(`It went back!: ${stepIndex}`);
            }else{
            // If scrolled downwards, increment index
                setStepIndex(stepIndex < childArray?.length-1 ? stepIndex + 1: childArray?.length-1);
                //setLastScroll(scrollY);
                console.log(`It went forward!: ${stepIndex}`);
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
          <Title>{title}.</Title>
          {Children.map(children, (child, i) => {
            console.log(`Rendering with child ${i}. Is it active?${i===stepIndex}`)
          return React.cloneElement(child, { key:i, active: (i===stepIndex) })
        })}
        <Stepper stepIndex={stepIndex} n={childArray.length || 0}></Stepper>
        </Wrapper>
    )
}

/*

*/

const Title = styled.h1`
  font-size: 24px;
  color: white;
  display: block;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  width: 500px;
  text-align: center;
  top: -1.5px;
  border: 1.5px solid #505050;
  font-family: "Old Type";
  font-weight: lighter;
  line-height: 24px;
  letter-spacing: 5px;
  background-color: #00000061;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

