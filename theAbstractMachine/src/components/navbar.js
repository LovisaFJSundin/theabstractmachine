import React from "react"
import { Link } from "gatsby"
//import styled from 'styled-components'
import styles  from "./navbar.module.css"


const Navbar = () => {
  return (
    <nav className={styles.rapper}>
      <div className={styles.listBar} >

          <Link to="/the-machine" className={styles.navLink} >The Machine</Link>

          <Link to="/algorithms" className={styles.navLink} >Algorithms</Link>

          <Link to="/machine-intelligence" className={styles.navLink} >Machine Intelligence</Link>
        </div>
      <div className={styles.listBar}>

          <Link to="/about" className={styles.navLink} >About</Link>

          <Link to="/contact" className={styles.navLink} >Contact</Link>

      </div>
    </nav>
  )
}

export default Navbar
