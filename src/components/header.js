import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import MoruLogo from "../images/moru-logo-white-outline.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        textAlign: `center`
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img className="moru-logo" src={MoruLogo} alt="Band logo" />
      </Link>
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
