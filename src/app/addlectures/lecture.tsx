import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Lecture() {
    const [lecture, setLecture] = useState("")
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3421/api/pdf")
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
