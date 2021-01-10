import React from "react"
import pistaLogo from "../images/pista8-logo.png" 

function Customers(){
    return(
        <div className="customers d-flex align-items-center flex-column flex-md-row justify-content-md-between my-4 position-relative container-xl">
            <img alt="Pista8 Logo" src={pistaLogo} />
            <img className="mt-4 mt-md-0" alt="Pista8 Logo" src={pistaLogo} />
            <img className="mt-4 mt-md-0" alt="Pista8 Logo" src={pistaLogo} />
        </div>
    )
}

export default Customers