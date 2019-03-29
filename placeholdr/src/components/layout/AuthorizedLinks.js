import React from 'react'
import { connect } from 'react-redux'
import { logoutUser } from '../../store/actions/authActions'

class AuthorizedLinks extends React.Component {

  handleLogoutClicked = (event) => {
    event.preventDefault()
    this.props.logoutUser()
  }

  render() {
    return (
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">Authorized Links</a></li>
          <li><a href="#" onClick={this.handleLogoutClicked}>Logout</a></li>
        </ul>
    )
  }
}

const mapStateToProps = (state, previousProps) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizedLinks)