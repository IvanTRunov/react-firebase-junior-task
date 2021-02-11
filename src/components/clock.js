import timer from './Vector.svg'

export default function Clock({time}) {
    const getTime = () => {
        return new Date(time * 1000).toISOString().substr(11, 8)
    }
    return (
        <div className='mobile '>
            <h2>Desktop</h2>
            <div className='clock' >
                <img src={timer} width='80' alt='clock' />
            </div>
            <h2>{getTime()}</h2>
        </div>
    )
}
