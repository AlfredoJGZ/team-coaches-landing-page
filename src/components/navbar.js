import React, { useContext } from "react"
import { Link } from "gatsby"
import logo from "../images/logo-h@4x-min.png"
import { MobileContext } from "./layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

function Navbar() {
  const [showMobile, setShowMobile] = useContext(MobileContext)

  return (
    <div className="bg-light position-fixed w-100" style={{ zIndex: 2 }}>
      <div className="d-flex py-2 bg-light justify-content-between align-items-center container-xl">
        <Link to="/">
          <img style={{ height: "2rem" }} src={logo} alt="Team Coaches Logo" />
        </Link>
        <button
          className="d-md-none rounded px-2 text-dark text-right"
          onClick={() => setShowMobile(!showMobile)}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
        <nav className="navbar d-none d-md-flex col-6 col-xl-4 justify-content-between">
          <Link
            className="d-inline-block px-3 py-1 rounded-pill position-relative"
            to="/product"
            activeClassName="active"
          >
            Product
          </Link>
          <Link
            className="d-inline-block px-3 py-1 rounded-pill position-relative"
            to="/solution"
            activeClassName="active"
          >
            Solution
          </Link>
          <Link
            className="d-inline-block px-3 py-1 rounded-pill position-relative"
            to="/blog"
            activeClassName="active"
          >
            Blog
          </Link>
          <Link
            className="d-inline-block px-3 py-1 rounded-pill position-relative"
            to="/letstalk"
            activeClassName="active"
          >
            Let's Talk
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
