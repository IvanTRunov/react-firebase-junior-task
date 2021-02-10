import app from 'firebase/app'
import {useHistory} from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import 'firebase/auth'

export default function SignOut() {
    const history = useHistory();
    return (
        <div className='signout' >
            <button onClick={()=>{
                app.auth().signOut();
                history.push(ROUTES.SIGN_IN)}} 
                >Log out</button>
        </div>
    )
}
