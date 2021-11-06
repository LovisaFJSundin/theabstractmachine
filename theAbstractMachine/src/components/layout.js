import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
//import background from "./background.jpg"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </>
  )
}
