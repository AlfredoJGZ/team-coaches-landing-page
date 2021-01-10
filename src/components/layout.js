/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { createContext, useEffect, useMemo, useState } from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import "../styles/bootstrap.min.css"
import "../styles/global.css"

export const ModalContext = createContext()

export const ModalProvider = props => {
  const [showModal, setShowModal] = useState(false)

  const value = useMemo(() => [showModal, setShowModal], [showModal])

  return <ModalContext.Provider value={value} {...props} />
}



function Layout({ children }){

  useEffect(()=>{
    let viewportHeight = window.innerHeight
    let images = document.querySelectorAll('.feature-image')
    let imagesRect = []
    let i = 0;
    for(let i = 0; i < images.length; i++){
      imagesRect.push(images[i].getBoundingClientRect())
    }
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= (imagesRect[i].top + imagesRect[i].height) - viewportHeight){
        images[i].classList.add('open-nav')        
        if(i < imagesRect.length - 1){
          i++
        }
      }
    }, { passive: true })
  })

  return(    
    <ModalProvider>
        <div>
          <main>{children}</main>
        </div>
      <Footer />
    </ModalProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
