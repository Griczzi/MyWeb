import React from "react"
import Instagram from "../images/my-icons-collection/svg/001-instagram.png"
import Vk from "../images/my-icons-collection/svg/vk.png"
import Facebook from "../images/my-icons-collection/svg/002-facebook.png"
import "./footer.css"

const Footer = () => (
    <footer className='footer_wrapper'>
       <a href="#"><img src={Instagram}/></a>
       <a href="https://vk.com/gricphoto"><img src={Vk}/></a>
       <a href="#"><img src={Facebook}/></a>
    </footer>

)

export default Footer