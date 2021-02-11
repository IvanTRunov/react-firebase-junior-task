import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './auth/auth'
import NotFound from './containers/notFound'
import PrivateRoute from './components/privateRoute'
import SignIn from './auth/signIn'
import SignUp from './auth/signUp'
import Dashboard from './containers/dashboard'
import * as ROUTES from './constants/routes'

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute exact path={ROUTES.TIMER} component={Dashboard} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.REGISTER} component={SignUp} />
          <Route path='*' component={NotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  )
}

