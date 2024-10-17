import { Component } from 'react'
import Cookies from 'js-cookie'
import { Redirect, withRouter } from 'react-router-dom'

class Login extends Component {
  state = { isLogin: Cookies.get('isLoggedIn') === 'true' }

  onLogin = () => {
    this.setState({ isLogin: true })
    Cookies.set('isLoggedIn', 'true')
    this.props.history.replace('/')  
  }

  render() {
    if (this.state.isLogin) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Please Login</h1>
        <button onClick={this.onLogin}>Login with Sample Credits</button>
      </div>
    )
  }
}

export default withRouter(Login) 