import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { PRO_URL } from '../envFiles/env'

export default function Lecture() {
    const [lecture, setLecture] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${PRO_URL}/api/pdf`)
            console.log(response.data);
        }
        fetchData()

    })
    return (
        <div className='lecture-container'>
            <div className='lecture-wrapper'>
                <h1 className="lectureName">First Lecture</h1>
                <embed src={""} type="" />
            </div>
        </div>
    )
}
