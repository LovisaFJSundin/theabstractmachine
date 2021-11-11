import React from "react"
import Layout from "../components/layout"
import styled, { keyframes, css } from "styled-components";

export default function Home() {
  return (
  <Layout>

    <TitleWrapper>
      <MainTitle>The Abstract Machine.</MainTitle>
      <SubTitle>Computer Science's Most Beautiful Concepts. <Visualised>Visualised.</Visualised></SubTitle>
    </TitleWrapper>

  </Layout>
  )
}




const TitleWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const MainTitle = styled.h1`
    color: white;
    font-family: "Copystruct";
    font-size: 3rem;
    display: block;
    font-weight: normal;
`
const underWrite = keyframes`
  from {
    transform: scaleX(0);
    transform-origin: bottom left;
    width: 0%;
  }
  to {
    transform: scaleX(1);
    transform-origin: bottom left;
    width: 95%;
  }
`

const Visualised = styled.span`
  font-style: italic;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    top: 2;
    bottom: 0;
    left: 0;
    background-color: white;    
    animation: ${underWrite} 0.6s ease-in 2s 1 forwards;
  }
`
// 1s forward
const SubTitle = styled.h2`
    color: white;
    font-family: "USIS 1949";
    font-size: 1.2em;
    font-weight: normal;
    
`