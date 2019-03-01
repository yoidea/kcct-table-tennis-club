import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Activity = () => (
  <Layout>
    <SEO title="活動報告" />
    <div className="container">
      <h1 className="title has-text-centered has-text-link" style={{marginTop: "1em"}}>
        活動報告
      </h1>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-12">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-light">
                <p className="title is-size-4">2019-02-14　優勝した。</p>
                <div className="content">
                  <figure className="image is-128x128">
                    <img src="https://3.bp.blogspot.com/-LJkn2jnakWg/Wc8f2HUdW-I/AAAAAAABHIo/DgCqHC9NkBU49PyPynrAd18aWYwS4jvFQCLcBGAs/s800/pose_mesen_uekara_man.png" />
                  </figure>
                </div>
              </article>
              <article className="tile is-child notification is-light">
                <p className="title is-size-4">2019-02-15　優勝した。</p>
                <div className="content">
                  <figure className="image is-128x128">
                    <img src="https://3.bp.blogspot.com/-LJkn2jnakWg/Wc8f2HUdW-I/AAAAAAABHIo/DgCqHC9NkBU49PyPynrAd18aWYwS4jvFQCLcBGAs/s800/pose_mesen_uekara_man.png" />
                  </figure>
                </div>
              </article>
              <article className="tile is-child notification is-light">
                <p className="title is-size-4">2019-02-16　優勝した。</p>
                <div className="content">
                  <figure className="image is-128x128">
                    <img src="https://3.bp.blogspot.com/-LJkn2jnakWg/Wc8f2HUdW-I/AAAAAAABHIo/DgCqHC9NkBU49PyPynrAd18aWYwS4jvFQCLcBGAs/s800/pose_mesen_uekara_man.png" />
                  </figure>
                </div>
              </article>
              <article className="tile is-child notification is-light">
                <p className="title is-size-4">2019-02-17　優勝した。</p>
                <div className="content">
                  <figure className="image is-128x128">
                    <img src="https://3.bp.blogspot.com/-LJkn2jnakWg/Wc8f2HUdW-I/AAAAAAABHIo/DgCqHC9NkBU49PyPynrAd18aWYwS4jvFQCLcBGAs/s800/pose_mesen_uekara_man.png" />
                  </figure>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Activity
