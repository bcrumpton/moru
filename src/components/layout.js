/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { graphql } from 'gatsby'
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built by Brannon Crumpton
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout