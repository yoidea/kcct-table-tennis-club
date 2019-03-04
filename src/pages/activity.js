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
                <p className="title is-size-4">2019-03-14　練習試合</p>
                <div className="content">
                  <p>〇〇高等学校と練習試合を行いました。結果は…</p>
                  <a className="button">続きを読む</a>
                </div>
              </article>
              <article className="tile is-child notification is-light">
                <p className="title is-size-4">2019-03-15　練習試合</p>
                <div className="content">
                  <p>〇〇高等学校と練習試合を行いました。結果は…</p>
                  <a className="button">続きを読む</a>
                </div>
              </article>
              <article className="tile is-child notification is-light">
                <p className="title is-size-4">2019-03-16　練習試合</p>
                <div className="content">
                  <p>〇〇高等学校と練習試合を行いました。結果は…</p>
                  <a className="button">続きを読む</a>
                </div>
              </article>
              <article className="tile is-child notification is-light">
                <p className="title is-size-4">2019-03-17　練習試合</p>
                <div className="content">
                  <p>〇〇高等学校と練習試合を行いました。結果は…</p>
                  <a className="button">続きを読む</a>
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
