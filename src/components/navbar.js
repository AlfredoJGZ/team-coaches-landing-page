import React, { useContext } from "react"
import { Link } from "gatsby"
import Logo from "../images/team-coaches-logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { ModalContext } from "./layout"

function Navbar(){
  const [_showModal, setShowModal] = useContext(ModalContext)

  return(
    <div style={{zIndex:100}} className="d-flex py-2 justify-content-between align-items-center container-xl position-relative">
      <Link to="/">
        <img style={{height: "2rem"}} src={Logo} alt="Team Coaches Logo"/>
      </Link>
      <button className='d-md-none rounded px-2'
        onClick={()=>{setShowModal(!_showModal)}}>
        <FontAwesomeIcon icon={ faBars } />
      </button>
      <nav className="navbar d-none d-md-flex col-4 justify-content-between">
        <Link className="d-inline-block px-2 py-1 rounded position-relative" to="/product" activeClassName="active">
          Product
          <div className="a-hover"/>
        </Link>
        <Link className="d-inline-block px-2 py-1 rounded position-relative" to="/solution">
          Solution
          <div className="a-hover"/>
          <div className="position-absolute solution-dropdown px-2 py-1 rounded d-flex">
            <div className="dropdown-image"> 
            </div>
            <div className="d-flex flex-column justify-content-between mx-2">
              <Link to="solution/incubator">Incubator</Link>
              <Link to="solution/accelerator">Accelerator</Link>
              <Link to="solution/educator">Educator</Link>
            </div>
          </div>
        </Link>
        <Link className="d-inline-block px-2 py-1 rounded position-relative" to="/blog">
          Blog
          <div className="a-hover"/>
        </Link>
        <Link className="d-inline-block px-2 py-1 rounded position-relative" to="/letstalk">
          Let's Talk
          <div className="a-hover"/>
        </Link>
      </nav>
    </div>
  )
}

export default Navbar