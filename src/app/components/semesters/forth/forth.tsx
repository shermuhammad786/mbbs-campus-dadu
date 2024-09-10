import React from 'react'
import "./forth.css"
export default function Forth() {
    return (
        <div className="forth-semester-container">
            <div className="forth-semester-wrapper">
                <div className="bg-image">
                    <div className='teacher'>
                        <img src="/Asset/shoaib.png" alt="" />
                        <h1>Shoaib</h1>
                    </div>
                </div>
                <div className='teacher-time'>
                    <div className="day">
                        <h1>Day</h1>
                        <p>Monday</p>
                    </div>
                    <div className="date">
                        <h1>Date</h1>
                        <p>8-10AM</p>
                    </div>
                    <div className="room">
                        <h1>Room No</h1>
                        <p>07</p>
                    </div>
                </div>
                <div className="classDesc">
                    <h1>Compter Networks</h1>
                    <p>Computer networks connect devices to share data and resources, enabling efficient communication and collaboration</p>
                </div>
            </div>
        </div>
    )
}
