import { useState } from 'react'
import { Link, withRouter, useHistory } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import app from '../components/firebase'

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        app.auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                const user = res.user.uid;
                setEmail('');
                setPassword('');
                if (user) {
                    history.push(ROUTES.TIMER)
                } else {
                    history.push(ROUTES.SIGN_IN)
                }
            })
            .catch(err => {
                setEmail('');
                setPassword('');
                alert(err)
            })

    }
    
    return (
        <div className='container'>
            <div className='loginForm' >
                <h2>Login</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="...email"
                        required
                    />
                    <input
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="...password"
                        required
                    />
                    <button type="submit">
                        Login
                </button>
                </form>
                <div className='link' >
                    <p>Don’t have an account yet? </p>
                    <Link to={ROUTES.REGISTER} ><span> Register</span></Link>
                </div>
            </div>
        </div>
    )
}
export default withRouter(SignIn)