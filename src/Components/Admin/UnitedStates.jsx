import React from 'react'
import { useState,  } from 'react'
import { useEffect } from 'react'

function UnitedStates() {
    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(timer);
    }, [])


    return (
        <>
            <div className='USA-time'>
                <h2>UnitedStates </h2>
                <p>{time.toLocaleTimeString("en-US", { timeZone: "America/New_York" })}</p>
            </div>
        </>
    )
}

export default UnitedStates
