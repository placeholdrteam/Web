import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './config/routes'
import Root from './components/Root'
import Registration from './components/auth/Registration'
import Login from './components/auth/Login'

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.root} component={Root}/>
            <Route exact path={routes.register} component={Registration}/>
            <Route exact path={routes.login} component={Login}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App