import React, { useEffect, useState } from 'react'

function IndianTime() {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000)
    }, [])
    return (
        <div className='indian-time'>
            <h2>IndianTime</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    )
}

export default IndianTime
