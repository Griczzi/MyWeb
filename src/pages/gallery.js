import React from "react"
import Layout from "../components/layout"
import { Gallery } from "gatsby-theme-gallery";
import "./gallery.css"

export default () => (
    <Layout>
        <div className="wrapper_gallery">
            <h1 className="title_gallery">Моё порфолио</h1>
            <Gallery />
        </div>
    </Layout>
);