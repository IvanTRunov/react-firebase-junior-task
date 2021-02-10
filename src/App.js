import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './auth/auth'
import NotFound from './components/notFound'
import PrivateRoute from './components/privateRoute'
import SignIn from './auth/signIn'
import SignOut from './auth/signOut'
import SignUp from './auth/signUp'
import Timer from './components/timer'
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path={ROUTES.TIMER} component={Timer} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.SIGN_OUT} component={SignOut} />
          <Route exact path={ROUTES.REGISTER} component={SignUp} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

