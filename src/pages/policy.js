import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import face from "../images/policy.jpg"

const Policy = () => (
  <Layout>
    <SEO title="理念・方針" />
    <div className="container">
      <h1 className="title has-text-centered has-text-link" style={{marginTop: "1em"}}>
        理念・方針
      </h1>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-7">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child is-grey notification">
                <p className="title is-size-4">『社会で活躍できる人間へと成長すること』</p>
                <div className="content">
                  <figure className="image">
                    <img src={face} />
                  </figure>
                  <p>
                    高専生は企業から非常に人気が高く、毎年、神戸高専から、たくさんの学生が、大手優良企業に就職していきます。神戸高専卓球部は、『部活動=社会人になる為の準備期間』と、とらえて、5年間という長い時間をかけて、社会人としての必要なスキルを身に付ける為に、活動しています。
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-link">
            <div className="content">
              <p className="title is-size-4">５年間で身につけるスキル</p>
              <div className="content is-size-5">
                <ol>
                  <li>
                    目標設定能力5年(長期)1年(中期)1ヶ月(短期)、それぞれ目標を設定する能力
                  </li>
                  <li>
                    グリッド能力目標に対して、120％で取組み、結果が出るまで、やり抜く力
                  </li>
                  <li>
                    コミュニケーション能力１～5年生までの5年間を通して、幅をもった仲間と関わり、多様な価値観を身に付ける
                  </li>
                  <li>
                    自己管理能力→学業と部活動の両方で結果を出すことで、質の高い自己管理能力を身に付ける
                  </li>
                  <li>
                    忍耐力(体力、集中力)
                  </li>
                </ol>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </Layout>
)

export default Policy

