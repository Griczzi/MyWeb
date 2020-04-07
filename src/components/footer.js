import React from "react"
import Instagram from "../images/my-icons-collection/svg/001-instagram.png"
import Vk from "../images/my-icons-collection/svg/vk.png"
import Facebook from "../images/my-icons-collection/svg/002-facebook.png"
import "./footer.css"

const Footer = () => (
    <footer className='footer_wrapper'>
       <a href="https://www.instagram.com/grits.ilia/"><img src={Instagram} style={{height: `20px`}} /></a>
       <a href="https://vk.com/gricphoto"><img src={Vk} style={{height: `20px`}} /></a>
       <a href="https://www.facebook.com/"><img src={Facebook} style={{height: `20px`}} /></a>
    </footer>

)

export default Footer