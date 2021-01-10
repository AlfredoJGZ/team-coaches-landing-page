import React, { useContext } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlasses, faProjectDiagram, faSms, faBlog} from '@fortawesome/free-solid-svg-icons'
import { ModalContext } from "./layout"


function MobileNav(){    
    const [showModal, setShowModal] = useContext(ModalContext)
    const show= "mobile-nav d-md-none bg-light rounded d-flex flex-column m-2"
    return(     
        <nav className={showModal === false ? show+ " hide" : show + " open-nav"}>
            <Link className="d-inline-block px-2 mt-5"to="/product">
                <FontAwesomeIcon icon={ faProjectDiagram } color="#a3c6fd"/>
                <span className="mx-2">Product</span>
            </Link>
            <Link className="d-inline-block px-2 mt-2"to="/solution/incubator">
                <FontAwesomeIcon icon={ faGlasses } color="#a3c6fd"/>
                <span className="mx-2">Solution</span>
            </Link>
            <nav className="d-flex flex-column px-4 mx-4">
                <Link>Incubator</Link>
                <Link>Accelerator</Link>
                <Link>Educator</Link>
            </nav>
            <Link className="d-inline-block px-2 mt-2"to="/blog">
                <FontAwesomeIcon icon={ faSms } color="#a3c6fd"/>
                <span className="mx-2">Blog</span>
            </Link>
            <Link className="d-inline-block px-2 mt-2"to="/letstalk">
                <FontAwesomeIcon icon={ faBlog } color="#a3c6fd"/>
                <span className="mx-2">Let's Talk</span>
            </Link>
        </nav>
    )
}

export default MobileNav
