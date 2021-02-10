import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import app from '../components/firebase';


export default function SignUp() {
    const history = useHistory();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();

        app.auth().createUserWithEmailAndPassword(email, password);
        history.push(ROUTES.SIGN_IN)
            .catch(err => {
                alert(err)
            })

    }

    return (
        <div className='container' >
            <div className='loginForm' >
                <h2>Register</h2>
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        name="firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        placeholder="...firstName"
                        required
                    />
                    <input
                        name="lastName"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        placeholder="...lastName"
                        required
                    />
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
                        Sign up
                </button>

                </form>
                <div className='link' >
                    <p>Already registered? </p>
                    <Link to={ROUTES.SIGN_IN} ><span> Log in</span></Link>
                </div>
            </div>
        </div>
    )
}
