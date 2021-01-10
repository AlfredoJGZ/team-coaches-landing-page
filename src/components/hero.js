import React from "react"

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
      <h1 className="mb-md-4">{title}</h1>
      <p className="mt-md-2">{description}</p>
    </div>
  )
}

export default Hero
