// import React from 'react'

// import BackgroundSlider from 'gatsby-image-background-slider'

// const Layout = ({ children }) => (
//   <>
//     <main>{children}</main>
//     <BackgroundSlider 
//       query={useStaticQuery(graphql`
//         query {
//           backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
//             nodes {
//               relativePath
//               childImageSharp {
//                 fluid (maxWidth: 4000, quality: 100){
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       `)}
//       initDelay={2} // delay before the first transition (if left at 0, the first image will be skipped initially)
//       transition={4} // transition duration between images
//       duration={8} // how long an image is shown
//       // specify images to include (and their order) according to `relativePath`
//       images={["bg1.jpg", "bg2.jpg",]} 

//       // pass down standard element props
//       style={{
//         transform: "rotate(-2deg) scale(.9)",
//       }}
//     >
//     {/* Captions in sync with background images*/}
//     <div>Woof</div>
//       <div>Meow</div>
//       <>{/* Giraffes don't talk; [they aren't real](https://chivomengro.com/2017/10/23/the-truth-comes-out-giraffes-are-a-hoax/) */}</>
//       <a href="https://en.wikipedia.org/wiki/Tasmanian_devil#Conservation_status">
//         I could use a hand
//       </a>
//       <div>I need to find better hobbies</div>
//     </BackgroundSlider>
//   </>
// )
import React, { useState } from "react"

import "./courusel.css"

const Courusel = ({ className, children }) => {
  const [pos, setPos] = useState(0);
  function handleLeft() {
    setPos(pos < children.length - 1 ? pos+1 : 0);
  }
  function handleRight() {
    setPos(pos > 0 ? pos-1 : children.length - 1);
  }
  return (
    <div className={ className + ' wrapper' }>
      <div className='content' style={{width: 100*children.length+'%', transform: `translateX(-${pos}00vw)`,}}>
        { children }
      </div>
        <button className="corusel_left" onClick={ handleLeft }>&laquo;</button>
        <button className="corusel_right" onClick={ handleRight }>&raquo;</button>
    </div>
  )
}
export default Courusel