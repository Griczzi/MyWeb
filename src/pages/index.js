import React from "react"
import Courusel from "../components/courusel"

import Layout from "../components/layout"
import "./index.css"

const IndexPage = () => (
    <Layout>
      <Courusel style={{}}> 
        <div className='carusel_item carusel_item_one'>
          {/* <div className='carusel_item_overlay'> */}
            <div className='catusel_item_wrapper'>
              <h1>Свадебная фотосьемка</h1>
              <p>Действует скидка до лета % </p>
            </div>
          {/* </div> */}
        </div>
        <div className='carusel_item carusel_item_two'>
          <h1> Love Story</h1>
          <p>Действует скидка до лета % </p>
        </div>
      </Courusel>
    </Layout>
)

export default IndexPage
