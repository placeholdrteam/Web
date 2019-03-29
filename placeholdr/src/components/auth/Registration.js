import React from 'react'
import Navbar from '../layout/Navbar'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/authActions'
import { Link, Redirect } from "react-router-dom";
import routes from "../../config/routes";

class Registration extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.createUser(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    const { isAuthorized } = this.props
    return (
      isAuthorized ? (
        <Redirect to={routes.root}/>
      ) : (
        <div>
            <Navbar/>
            <div className="container">
              <div className="row card-panel">
                <h4>Register for a new account</h4>
                <form onSubmit={this.handleSubmit} className="col s12">
                  <div className="row">
                    <div className="input-field col m6">
                      <input
                          type="text"
                          id="firstName"
                          placeholder="First Name"
                          onChange={this.handleChange}
                          value={this.state.firstName}
                      />
                    </div>
                    <div className="input-field col m6">
                      <input
                          type="text"
                          id="lastName"
                          placeholder="Last Name"
                          onChange={this.handleChange}
                          value={this.state.lastName}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col m12">
                      <input
                          type="email"
                          id="email"
                          placeholder="you@domain.com"
                          onChange={this.handleChange}
                          value={this.state.email}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col m6">
                      <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          onChange={this.handleChange}
                          value={this.state.password}
                      />
                    </div>
                    <div className="input-field col m6">
                      <input
                          type="password"
                          id="passwordConfirmation"
                          placeholder="Confirm Password"
                          onChange={this.handleChange}
                          value={this.state.passwordConfirmation}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <button className="waves-effect waves-light btn right">Register
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                  <div className="row">
                    <small className="grey-text darken-3">Already have an account? <Link to={routes.login}>Login here</Link>.</small>
                  </div>
                </form>
              </div>
            </div>
          </div>
      )
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
    createUser: (fields) => dispatch(createUser(fields)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)