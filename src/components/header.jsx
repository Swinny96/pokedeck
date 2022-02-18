import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "../images/favicon.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#ef5350`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `.8rem .5rem`,
        display: 'flex',
        gap: '30px',
      }}
    >
      <img src={logo} alt={siteTitle} style={{ height: '44px', maxWidth: '44px', margin: '0'}} />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
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
