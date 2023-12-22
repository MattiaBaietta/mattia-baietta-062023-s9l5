import React from "react";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import logo from "./assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark">
      <BootstrapNavbar.Brand>
        <img src={logo} alt="Logo" style={{ width: "100px", height: "55px" }} />
      </BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="navbarSupportedContent" />
      <BootstrapNavbar.Collapse id="navbarSupportedContent">
        <Nav className="mr-auto">
          <Nav.Link className="font-weight-bold" href="#">
            Home
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="#">
            TV Shows
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="#">
            Movies
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="#">
            Recently Added
          </Nav.Link>
          <Nav.Link className="font-weight-bold" href="#">
            My List
          </Nav.Link>
        </Nav>
        <i className="fa fa-search icons"></i>
        <div id="kids">KIDS</div>
        <FontAwesomeIcon style={{ color: "white" }} icon={faBell} />
        <FontAwesomeIcon style={{ color: "white" }} icon={faUser} />
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
 



{/*




import { Nav } from "react-bootstrap"
import logo from "./assets/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"




const Navbar = () =>{
    return(
        <Nav classNameName="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: "#221f1f"}}>
        <a className="navbar-brand" >
          <img src={logo} style={{width: "100px", height: "55px"}} />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
  
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link font-weight-bold" >Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
              <a className="nav-link font-weight-bold" >TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" >Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" >Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link font-weight-bold" >My List</a>
            </li>
          </ul>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <FontAwesomeIcon style={{ color: 'white' }} icon={faBell} />
          <FontAwesomeIcon style={{ color: 'white' }} icon={faUser} />
        </div>
      </Nav>
    )
}

export default Navbar*/}