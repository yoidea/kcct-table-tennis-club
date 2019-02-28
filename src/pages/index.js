import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import cover from "../images/cover.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-primary is-large" style={{
      background: `url(${cover})`,
      backgroundPosition: "center"
    }}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            神戸高専卓球部
          </h1>
          <h2 className="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
    <div className="container">
      <h2 className="title has-text-link" style={{marginTop: "1em"}}>更新</h2>


      <h2 className="title has-text-link" style={{marginTop: "1em"}}>活動日</h2>
      <iframe 
        src={`https://calendar.google.com/calendar/b/1/embed`}
        style={{
          borderWidth: "0",
          width: "100%",
          height: "600px"
        }}
        scrolling="no"
      />
      <h2 className="title has-text-link" style={{marginTop: "1em"}}>練習試合申し込み</h2>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSeovIfSjD6ffwQsR9j5CXFbgns9l_6By4Kuiz64ixlYqTqSJQ/viewform?embedded=true"
        style={{
          borderWidth: "0",
          width: "100%",
          height: "900px"
        }}
      />
    </div>
  </Layout>
)

export default IndexPage
