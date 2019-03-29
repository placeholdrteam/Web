import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../config/routes'
import { connect } from 'react-redux'
import AuthorizedLinks from './AuthorizedLinks'
import UnauthorizedLinks from './UnauthorizedLinks'

class Navbar extends React.Component {
  render() {
    const { isAuthorized } = this.props
    return (
        <nav>
          <div className="nav-wrapper container">
            <Link className="brand-logo" to={routes.root} > Placeholder</Link>
            { isAuthorized ? (
                <AuthorizedLinks/>
            ) : (
                <UnauthorizedLinks/>
            )}
          </div>
        </nav>
    )
  }
}

const mapStateToProps = (state, previousProps) => {
  return {
    isAuthorized: !!state.fb.auth.uid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)