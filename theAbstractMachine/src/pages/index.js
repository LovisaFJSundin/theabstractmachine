import React from "react"
import Layout from "../components/layout"
import styled, { keyframes } from "styled-components";

export default function Home() {
  return (
  <Layout>

    <TitleWrapper>
      <MainTitle>The Abstract Machine.</MainTitle>
      <SubTitle>Computer Science's Most Beautiful Concepts. <i>Visualised.</i></SubTitle>
    </TitleWrapper>

  </Layout>
  )
}

const Typewriter = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 24em;
  }
`

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
    font-size: 4rem;
    display: block;
    font-weight: normal;
`

const SubTitle = styled.h2`
    color: white;
    font-family: "USIS 1949";
    font-size: 1.5em;
    font-weight: normal;
`