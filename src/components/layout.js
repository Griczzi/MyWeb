import React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header style={{position: `fixed`, top: 0}} />
      <div className="layout_wrapper">
        <main>{children}</main>
      </div>
    </>
  )
}



export default Layout
