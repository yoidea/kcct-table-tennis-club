import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "bulma"

const Header = ({ siteTitle }) => (
  <header className="navbar is-link" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" href="https://bulma.io">神戸高専卓球部</Link>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <Link to="/place/" className="navbar-item">活動場所</Link>
          <Link to="/policy/" className="navbar-item">理念・方針</Link>
          <Link to="/member/" className="navbar-item">現役生</Link>
          <Link to="/activity/" className="navbar-item">活動報告</Link>
          <Link to="/ob/" className="navbar-item">OB紹介</Link>
          <Link to="/supporter/" className="navbar-item">六神会</Link>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
