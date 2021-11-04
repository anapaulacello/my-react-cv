import React, { useEffect, useState } from 'react'

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
            <h2>{clockState}</h2>
        </div>
    )
}

export default DigitalClock
