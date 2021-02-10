import timer from './Vector.svg'

export default function Clock({ props }) {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    return (
        <div className='mobile '>
            <h2>Desktop</h2>
            <div className='clock' >
                <img src={timer} width='80' alt='clock' />
            </div>
            <h2>{`${hours}:${minutes}`}</h2>
        </div>
    )
}
