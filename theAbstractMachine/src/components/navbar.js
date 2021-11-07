import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
//import * as styles  from "./navbar.module.css"

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 1em 0px;
`

const StyledLink = styled(props => <Link {...props} />)`
  padding: 0px 20px 6px 20px;
  font-family: "USIS 1949";
  color: #505050;
  text-transform: uppercase;
  font-size: large;
  letter-spacing: 0.2em;
  text-decoration: none;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 95%;
    transform: scaleX(0);
    height: 2px;
    top: 2;
    bottom: 0;
    left: 0;
    background-color: white;
    transform-origin: bottom right;
    transition: transform 0.4s ease-out;
  }
  &:hover {
    color: white;
  }
  &:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

//text-shadow: 0 0 0px #fff, 0 0 10px #fff, 0 0 0px #fff;

const MainLink = styled(StyledLink)`
  font-weight: bold;
`

const Navbar = () => {
  return (
    <NavWrapper>

          <StyledLink to="/"  >Home</StyledLink>

          <StyledLink to="/the-machine" >The Machine</StyledLink>

          <StyledLink to="/algorithms" >Algorithms</StyledLink>

          <StyledLink to="/machine-intelligence" >Machine Intelligence</StyledLink>

          <StyledLink to="/about"  >About</StyledLink>

          <StyledLink to="/contact"  >Contact</StyledLink>

    </NavWrapper>
  )
}

export default Navbar
