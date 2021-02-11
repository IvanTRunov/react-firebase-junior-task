import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'

export default function NotFound() {
    return (
        <div className='notFound' >
            <div className='error' >
                <h1>error 404</h1>
                <h3>Page is not found</h3>
                <Link to={ROUTES.SIGN_IN}>
                    ...back no Login
            </Link>
            </div>
        </div>
    )
}
