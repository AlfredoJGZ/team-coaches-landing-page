import React from "react"
import pistaLogo from "../images/pista8-logo.png"

function Customers() {
  return (
    <section className="bg-light py-2 py-md-4">
      <div className="customers d-flex align-items-center flex-column flex-md-row justify-content-md-between my-4 container-xl col-8 col-md-9">
        <img className="col-10 col-md-3" alt="Pista8 Logo" src={pistaLogo} />
        <img
          className="col-10 col-md-3 mt-4 mt-md-0"
          alt="Pista8 Logo"
          src={pistaLogo}
        />
        <img
          className="col-10 col-md-3 mt-4 mt-md-0"
          alt="Pista8 Logo"
          src={pistaLogo}
        />
      </div>
    </section>
  )
}

export default Customers
