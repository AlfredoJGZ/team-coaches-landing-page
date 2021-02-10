import React, { useContext } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { MobileContext } from "./layout"
import logo from "../images/logo-h@4x-min.png"

function MobileNav() {
  const [showMobile, setShowMobile] = useContext(MobileContext)

  return (
    <div
      className={`mobile-nav py-2 d-md-none bg-light container-xl${
        showMobile ? " slide-in" : " hide"
      }`}
    >
      <div>
        <nav className="d-flex flex-column align-items-end">
          <button
            className="d-md-none rounded px-2 text-dark"
            onClick={() => setShowMobile(!showMobile)}
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
          <Link className="d-inline-block px-2 mt-4" to="/product">
            Product
          </Link>
          <Link className="d-inline-block px-2 mt-4" to="/solution/incubator">
            Solution
          </Link>
          <Link className="text-secondary px-4 mt-2">Incubator</Link>
          <Link className="text-secondary px-4 mt-2">Accelerator</Link>
          <Link className="text-secondary px-4 mt-2">Educator</Link>
          <Link className="d-inline-block px-2 mt-4" to="/blog">
            Blog
          </Link>
          <Link className="d-inline-block px-2 mt-4" to="/letstalk">
            Let's Talk
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
