import React from "react"
import Header from "./header"


const Layout = ({ children }) => {
  return (
    <>
      <Header style={{position: `fixed`, top: 0}} />
      <div style={{ margin: `0 auto`, maxWidth: 1920, position: `relative`}}>
        <main>{children}</main>
      </div>
    </>
  )
}



export default Layout
