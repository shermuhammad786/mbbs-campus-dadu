import React, { useEffect, useState } from 'react'
import "./lectureCard.css"
import axios from 'axios';
import Link from 'next/link';
import DisplayLecture from '@/app/displayLectures/[id]/page';
export default function LectureCard({ lectureNo, lecture, lectureDescription }: any) {


    return (
        <div className="container">
            <div className="card">
                <div className="face face1">
                    <div className="content">
                        <h3>Lecture {lectureNo}</h3>
                    </div>
                </div>
                <div className="face face2">
                    <div className="content">
                        <p>{lectureDescription}</p>
                        <Link href={`/displayLectures/${lecture}`} key={lecture}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}