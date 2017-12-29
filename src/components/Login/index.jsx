import React, {Component} from 'react'

class Login extends Component {
  render() {
    return [
      <div key="username"><label htmlFor="username">Username</label><input type="text" id="username" /></div>,
      <div key="password"><label htmlFor="password">Password</label><input type="text" id="password" /></div>
    ]
  }
}

export default Login