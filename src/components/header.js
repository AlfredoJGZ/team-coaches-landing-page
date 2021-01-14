import React from "react"
import Navbar from "./navbar"
import Hero from "./hero" 
import HeroImage from "./heroImage" 
import MobileNav from "./mobileNav"
import headerBackground from "../images/header.png"

function Header({ page }){ 
  return(
    <header>
      <Navbar />
      <div style={{zIndex: 1}} className="container-xl d-flex h-100 flex-column align-items-center justify-content-md-between flex-md-row position-relative">
        <Hero page={page} />
        <HeroImage page={page} />
      </div>
      <img src={headerBackground} className="header-background" />
      <MobileNav />
    </header>
  )
}

export default Header
