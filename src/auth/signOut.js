import app from 'firebase/app'
import {useHistory} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import 'firebase/auth'

export default function SignOut({doRequest}) {
    const history = useHistory();

    const fbSignOut = () => {
        app.auth().signOut();
        history.push(ROUTES.SIGN_IN)
    }

    const signOut = () => {
        if (doRequest) {
            doRequest().then(() => {
                fbSignOut()
            })
        } else {
            fbSignOut()
        }
    }

    return (
        <div className='signout' >
            <button onClick={signOut}>Log out</button>
        </div>
    )
}
