import React from 'react'
import styled, { keyframes } from "styled-components";

const Stepper = ({n}) => {
    console.log(`Nr of steps in stepper is ${n}`)
    return (

        <StepperWrapper>
        {
            [...Array(n)].map((e, i) => <NumberStep key={i+1}>{i+1}</NumberStep>)
        }            
        </StepperWrapper>
    )
}

const NumberStep = styled.div`
    border-radius: 50%;
    border: 2px solid #505050;
    background-color: black;
    font-family: "USIS 1949";
    color: #505050;
    font-size: 26px;
    height: 36px;
    width: 36px;
    text-align: center;
    font-weight: bold;

`
//TODO: Refactor this styling so that it is more configurable
//TODO: Add animation (i.e. make the pseudoelement per node so that you can make them white)
//https://stackoverflow.com/questions/63131332/how-to-calculate-distance-javascript-between-elements-inside-a-flex-container-us
//https://stackoverflow.com/questions/19642308/creating-css3-circles-connected-by-lines 
const StepperWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    position: absolute;
    bottom: 0; 
    padding: 20px 15%;

    & ::before{
        content: '';
        position: absolute;
        top: 50%;

        width: 68%;
        height: 2px;
        background: #505050;
        z-index: -1;        
    }
`

export default Stepper
