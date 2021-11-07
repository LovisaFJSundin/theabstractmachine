import React from "react"
import styled from 'styled-components'

const FootWrapper = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em 0px;
  font-family: "USIS 1949";
  font-size: small;
  color: #505050;
`

export default function Footer() {
  return <FootWrapper>
    <p>
      &copy; {new Date().getFullYear()} Lovisa Sundin. All rights reserved.
      </p>
      </FootWrapper>
}