import {useState, useEffect} from 'react'
import Clock from '../components/clock'
import SignOut from '../auth/signOut'
import app from '../config/firebase'

export default function Dashboard() {
    const [desktopTime, setDesktopTime] = useState(0);
    const [mobileTime, setMobileTime] = useState(0);

    const saveTime = () => {
        // TODO save data to the backend
        return Promise.resolve();
    }

    useEffect(() => {
        let interval = null;
        Promise.resolve({
            desktop: 300,
            mobile: 100,
        }).then(({desktop, mobile}) => {
            setDesktopTime(desktop || 0);
            setMobileTime(mobile || 0);
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                interval = setInterval(() => {
                    setMobileTime(mobileTime => mobileTime + 1);
                }, 1000)
            } else {
                interval = setInterval(() => {
                    setMobileTime(desktopTime => desktopTime + 1);
                }, 1000)
            }
        })
        return () => clearInterval(interval);
    }, []);


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
        <div className='timer'>
            <div className='signout'>
                <SignOut doRequest={saveTime}/>
            </div>
            <div className='timeContainer'>
                <Clock time={desktopTime}/>
                <Clock time={mobileTime}/>
            </div>
        </div>
    )
}
