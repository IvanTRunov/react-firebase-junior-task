import { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../auth/auth'
import * as ROUTES from '../constants/routes'

export default function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={routeProps =>
                currentUser ? (
                    <Component {...routeProps} />
                ) : (
                        <Redirect to={ROUTES.SIGN_IN} />
                    )
            }
        />
    )
}
