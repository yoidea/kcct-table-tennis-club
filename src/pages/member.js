import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const picture = `https://3.bp.blogspot.com/-LJkn2jnakWg/Wc8f2HUdW-I/AAAAAAABHIo/DgCqHC9NkBU49PyPynrAd18aWYwS4jvFQCLcBGAs/s400/pose_mesen_uekara_man.png`

const Member = () => (
  <Layout>
    <SEO title="現役生" />
    <div className="container">
      <h2 className="title has-text-link" style={{marginTop: "1em"}}>現役生</h2>
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

export default Member
