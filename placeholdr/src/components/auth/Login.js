import React from 'react'
import Navbar from '../layout/Navbar'
import { Link } from 'react-router-dom'
import routes from '../../config/routes'

class Login extends React.Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    })
  }

  render() {
    return (
        <div>
          <Navbar/>
          <h1>Login</h1>
        </div>
    )
  }
}

export default Login