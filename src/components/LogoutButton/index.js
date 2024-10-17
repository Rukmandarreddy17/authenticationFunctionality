import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const onLogout = () => {
    Cookies.set('isLoggedIn', false)

    props.history.replace('/login')
  }

  return (
    <div>
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default withRouter(LogoutButton)
