import Link from 'next/link';
import React from 'react'

export default function SemesterCard({ day, time, room, className, classDesc, img, teacher, classImage }: any) {
   
    return (
        <Link href={`/semesterLectures/forth/${className}`} key={className}>
            <div className="forth-semester-container">
                <div className="forth-semester-wrapper">
                    <div className="bg-image" style={{ backgroundImage: `url('${classImage}')` }}>
                        <div className='teacher'>
                            <img src={img} alt="" />
                            <h1>{teacher}</h1>
                        </div>
                    </div>
                    <div className='teacher-time'>
                        <div className="day">
                            <h1>Day</h1>
                            <p>{day}</p>
                        </div>
                        <div className="date">
                            <h1>Time</h1>
                            <p>{time}</p>
                        </div>
                        <div className="room">
                            <h1>Room No</h1>
                            <p>{room}</p>
                        </div>
                    </div>
                    <div className="classDesc">
                        <h1>{className}</h1>
                        <p>{classDesc}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}