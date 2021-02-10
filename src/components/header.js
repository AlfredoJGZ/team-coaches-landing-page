import React from "react"
import Navbar from "./navbar"
import Hero from "./hero"
import Animation from "./animation"

function Header({ page }) {
  return (
    <header>
      <Navbar />
      <div className="container-xl d-flex flex-column align-items-center justify-content-md-between flex-md-row">
        <Hero page={page} />
        <Animation />
      </div>
    </header>
  )
}

export default Header
