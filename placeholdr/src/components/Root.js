import React from 'react'
import Navbar from './layout/Navbar'

class Root extends React.Component {
  render() {
    return (
        <div>
          <Navbar/>
          <h1>Root of App</h1>
        </div>
    )
  }
}

export default Root