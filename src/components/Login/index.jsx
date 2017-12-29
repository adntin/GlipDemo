import React, {Component} from 'react'

class Login extends Component {
  render() {
    return [
      <div key="username"><label htmlFor="username">Username<input type="text" id="username" /></label></div>,
      <div key="password"><label htmlFor="password">Password<input type="text" id="password" /></label></div>,
    ]
  }
}

export default Login
