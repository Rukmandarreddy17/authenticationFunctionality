import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const isLogin = Cookies.get('isLoggedIn') === 'true'

  if (!isLogin) {
    return <Redirect to="/login" />
  }

  return <Route {...props} />
}

export default ProtectedRoute
