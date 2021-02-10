import React from "react"
import { Link } from "gatsby"

function Hero({ page }) {
  let title, description

  switch (page) {
    case "home":
      title = "All your inovation in one place"
      description =
        "Team Coaches helps accelerators, incubators and enterprises to manage their innovation programs in the most efficient way."
      break
    case "product":
      title = "Tools to save you time"
      description =
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vulputate, arcu a."
      break
    default:
      title = "defect title"
  }

  return (
    <div className="hero mt-5 mt-md-0 col-md-4">
      <h1 className="mb-md-4 fw-bolder my-4 text-dark">{title}</h1>
      <p className="mt-md-2 text-dark">{description}</p>
      <Link
        className="d-inline-block px-3 py-1 rounded-pill position-relative"
        to="/letstalk"
        activeClassName="active"
      >
        Let's Talk
      </Link>
    </div>
  )
}

export default Hero
