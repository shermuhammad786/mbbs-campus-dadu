"use client"
import axios from 'axios'
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

function DisplayLecture() {
    const [data, setData] = useState("");
    const router = useParams();
    const { id } = router

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3421/api/pdf/${id}`)
            setData(response.data.pdf)
        }
        fetchData()
    })
    return (
        <div style={{ width: "100%", height: "100vh" }}>
            <embed width={100 + "%"} height={100 + "%"} src={data} type="application/pdf" />
        </div>
    )
}

export default DisplayLecture