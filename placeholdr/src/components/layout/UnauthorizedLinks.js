import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../../config/routes'

class UnauthorizedLinks extends React.Component {
  render() {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to={routes.login}>Login</NavLink></li>
          <li><NavLink to={routes.register}>Register</NavLink></li>
        </ul>
    )
  }
}

export default UnauthorizedLinks