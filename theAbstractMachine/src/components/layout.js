import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"
//import background from "./background.jpg"
import "../css/global.css"
import "./layout.css"

export default function Layout({ children }) {
  return (
    <div className="bodyWrapper">
      <Navbar />
      <main>{children}</main>
      <Footer/>
    </div>
  )
}
