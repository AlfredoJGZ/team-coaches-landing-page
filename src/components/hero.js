import React from "react"
import { Link } from "gatsby"

function Hero({ page }){ 
  
  let title, description; 

  switch (page) {
    case "home":
      title = "All your inovation in one place"
      description = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, arcu a."
      break
    case "product":
      title = "Tools to save you time"
      description = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, arcu a."
      break
    default: title = "defect title"
  }
    
  return(
    <div>
      <h1 className="mb-md-4 fw-bolder my-4 text-light">{title}</h1>
      <p className="mt-md-2 text-light">{description}</p>
      <Link className="d-inline-block px-2 py-1 rounded position-relative border-light" to="/letstalk">
        Let's Talk
        <div className="a-hover"/>
      </Link>
    </div>
  )
}

export default Hero
