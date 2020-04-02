import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ margin: `0 auto`, maxWidth: 1920, position: `relative`}}>
        <main>{children}</main>
        <Footer />
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}



export default Layout
