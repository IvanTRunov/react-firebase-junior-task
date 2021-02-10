import {useState} from 'react'
import Clock from './clock'
import SignOut from '../auth/signOut'
import app from './firebase'

export default function Timer() {
    // const [timeDevice, setTimeDevice] = useState(null);
    // const writeUserData = (typeDevice, value) => {
    //     app.database().ref('/' + typeDevice).set({
    //         typeDevice: value
    //     });
    // }
    // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //     // some code..
    // };
    //  async function getCurrentTimer (typeDevice){
    //     const time = app.database().ref('/'+ typeDevice)
    //     await time.on('value', snapshot => {
    //         const currentTimer = snapshot.val()
    //         setTimeDevice(currentTimer)
    //     });
    // }
    // getCurrentTimer('timerDesktop');
    // console.log(timeDevice)
    return (
        <div className='timer' >
            <div className='signout' >
                <SignOut />
            </div>
            <div className='timeContainer' >
                <Clock />
                <Clock />
            </div>
        </div>
    )
}
