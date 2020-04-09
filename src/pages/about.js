import React from "react"
import Layout from "../components/layout"
import "./about.css"
import Iam from "../images/iam.jpg"
import Form from "../components/form"
import Footer from "../components/footer"

export default () => (
  <Layout>
    <div className="wrapper_first">
      <div className="about_wrapper">
        <h1 className="about_text_h1">Обо мне</h1>
        <article className="atricle_item_wrapper">
          <img src={ Iam }></img>
          <div className="text">
            <h2>Фотограф на Вашу свадьбу!</h2>
            <p>Если вы ищите фотографа на свадьбу или на другое важное событие в вашей жизни, я буду рад стать вашим фотографом и предложить свои услуги. Моя работа-это гарантия, что у вас останутся красивые, качественные и трогательные фотографии. Все самые важные эмоции торжества останутся с вами на долгую память.</p>
            <Form />
          </div>
        </article>
        <Footer />
      </div>
    </div>
    
  </Layout>
)

