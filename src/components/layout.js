/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { createContext, useEffect, useMemo, useState } from "react"
import Footer from "./footer"
import "../styles/bootstrap.min.css"
import "../styles/global.css"
import MobileNav from "./mobileNav"

export const MobileContext = createContext()

export const MobileProvider = props => {
  const [showMobile, setShowMobile] = useState(false)

  const value = useMemo(() => [showMobile, setShowMobile], [showMobile])

  return <MobileContext.Provider value={value} {...props} />
}

function Layout({ children }) {
  useEffect(() => {
    let viewportHeight = window.innerHeight
    let images = document.querySelectorAll(".feature-image")
    let imagesRect = []
    let i = 0
    for (let i = 0; i < images.length; i++) {
      imagesRect.push(images[i].getBoundingClientRect())
    }
    window.addEventListener(
      "scroll",
      () => {
        if (
          window.scrollY >=
          imagesRect[i].top + imagesRect[i].height - viewportHeight
        ) {
          images[i].classList.add("slide-in")
          if (i < imagesRect.length - 1) {
            i++
          }
        }
      },
      { passive: true }
    )
  })

  return (
    <MobileProvider>
      <div className="position-relative" style={{ overflowX: "hidden" }}>
        <main>{children}</main>
        <MobileNav />
        <Footer />
      </div>
    </MobileProvider>
  )
}

export default Layout
