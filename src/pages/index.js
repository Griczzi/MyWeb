import React from "react"
import Courusel from "../components/courusel"

import Layout from "../components/layout"
import "./index.css"

const IndexPage = () => (
    <Layout>
      <Courusel> 
        <div className='carusel_item carusel_item_one'>
          <div className='catusel_item_wrapper'>
          </div>
        </div>
        <div className='carusel_item carusel_item_two'>
        </div>
      </Courusel>
    </Layout>
)

export default IndexPage
