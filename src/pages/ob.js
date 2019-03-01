import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const picture = `https://2.bp.blogspot.com/-PbQfaT4hfpo/UxbLaywOLFI/AAAAAAAAd9s/ihzglX6ZVYQ/s400/hanataba_man.png`

const OB = () => (
  <Layout>
    <SEO title="OB紹介" />
    <div className="container">
      <h2 className="title has-text-link" style={{marginTop: "1em"}}>OB紹介</h2>
      <div class="columns">
        <div class="column">
          <h3 className="title is-size-4">田中太郎</h3>
          <figure className="image is-square">
            <img src={picture} />
          </figure>
        </div>
        <div class="column">
          <h3 className="title is-size-4">田中太郎</h3>
          <figure className="image is-square">
            <img src={picture} />
          </figure>
        </div>
        <div class="column">
          <h3 className="title is-size-4">田中太郎</h3>
          <figure className="image is-square">
            <img src={picture} />
          </figure>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h3 className="title is-size-4">田中太郎</h3>
          <figure className="image is-square">
            <img src={picture} />
          </figure>
        </div>
        <div class="column">
          <h3 className="title is-size-4">田中太郎</h3>
          <figure className="image is-square">
            <img src={picture} />
          </figure>
        </div>
        <div class="column">
          <h3 className="title is-size-4">田中太郎</h3>
          <figure className="image is-square">
            <img src={picture} />
          </figure>
        </div>
      </div>
    </div>
  </Layout>
)

export default OB
