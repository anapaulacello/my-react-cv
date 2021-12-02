import React, { useEffect, useState } from 'react'
import "./DigitalClock.css"

function DigitalClock() {
    const [clockState,setClockState]=useState();
    useEffect(()=>{
        setInterval(()=>{
            const date=new Date();
            setClockState(date.toLocaleTimeString());
        })
    },[]);
    return (
        <div>
            <h2 className="digitalClock_title">{clockState}</h2>
        </div>
    )
}

export default DigitalClock
