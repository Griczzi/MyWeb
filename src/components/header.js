import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = () => (
  <header className="header_wrapper">
    <div className="nav_wrapper">
      <h4 style={{ marginTop: `-3px`,}}>
        PHOTOGRAPHER Grits Ilya 
      </h4>
      <ul className="main_list">
        <li className="link_header"><Link to="/" className="link_header"> Home </Link></li>
        <li><Link to="/gallery/" className="link_header"> Gallery </Link></li>
        <li><Link to="/about/" className="link_header"> About </Link></li>
      </ul>
    </div>
    
  </header>
)

export default Header
