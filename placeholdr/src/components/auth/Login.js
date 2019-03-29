import React from 'react'
import Navbar from '../layout/Navbar'
import { Link, Redirect } from 'react-router-dom'
import routes from '../../config/routes'
import { connect } from 'react-redux'
import { loginUser }from '../../store/actions/authActions'

class Login extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state)
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
              <h4>Login to your account</h4>
              <form onSubmit={this.handleSubmit} className="col s12">
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
                  <div className="input-field col m12">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        onChange={this.handleChange}
                        value={this.state.password}
                    />
                  </div>
                </div>
                <div className="row">
                  <button className="waves-effect waves-light btn right">Login
                    <i className="material-icons right">send</i>
                  </button>
                </div>
                <div className="row">
                  <small className="grey-text darken-3">Don't have an account? <Link to={routes.register}>Register here</Link>.</small>
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
    loginUser: (fields) => dispatch(loginUser(fields))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)