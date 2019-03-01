import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import picture from "../images/gym.jpg"
import picture2 from "../images/gym2.jpg"

const Place = () => (
  <Layout>
    <SEO title="活動場所" />
    <div className="container">
      <h2 className="title has-text-link has-text-centered" style={{marginTop: "1em"}}>活動場所</h2>
      <div class="columns">
        <div class="column">
          <h3 className="title is-size-4">体育館</h3>
          <img src={picture} />
        </div>
        <div class="column">
          <h3 className="title is-size-4">トレーニングジム</h3>
          <img src={picture2} />
        </div>
      </div>
      
      <h2 className="title has-text-link has-text-centered" style={{marginTop: "1em"}}>アクセス</h2>
      <iframe
        src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.036254531385!2d135.06619997421615!3d34.679034449742645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008137cb7c0d11%3A0x8b1d0fbe6103faef!2z56We5oi45biC56uL5bel5qWt6auY562J5bCC6ZaA5a2m5qCh!5e0!3m2!1sja!2sjp!4v1551444940900`}
        style={{
          borderWidth: "0",
          width: "100%",
          height: "600px"
        }} />
    </div>
  </Layout>
)

export default Place
