import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Logo from "../images/my-icons-collection/svg/logo.png"

const Header = () => (
  <header className="header_wrapper">
    <div className="nav_wrapper">
      <div style={{ marginTop: `-6px`,}}>
        <img src={Logo} style={{height: `25px`}} />
      </div>
      <ul className="main_list">
        <li><Link to="/" className="link_header"> Главная </Link></li>
        <li><Link to="/gallery/" className="link_header"> Галерея </Link></li>
        <li><Link to="/about/" className="link_header"> Обо мне </Link></li>
      </ul>
    </div>
    
  </header>
)

export default Header
