import React, { useState } from "react"
import "./courusel.css"
import Arrow from "../images/my-icons-collection/svg/next.png"

const Courusel = ({ className, children }) => {
  const [pos, setPos] = useState(0);
  function handleLeft() {
    setPos(pos < children.length - 1 ? pos+1 : 0);
  }
  function handleRight() {
    setPos(pos > 0 ? pos-1 : children.length - 1);
  }
  return (
    <div className={ className + ' wrapper' } >
      <div className='content' style={{width: 100*children.length+'%', transform: `translateX(-${pos}00vw)`,}}>
        { children }
      </div>
        <button className="corusel_left" onClick={ handleLeft }> <img src={ Arrow } style={{ transform: `rotate(180deg)`, opacity: `50%`, }} className="arrow_left" /> </button>
        <button className="corusel_right" onClick={ handleRight }> <img src={ Arrow } style={{ opacity: `50%`, }} className="arrow_right" /> </button>
    </div>
  )
}
export default Courusel