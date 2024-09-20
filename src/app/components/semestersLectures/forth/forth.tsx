import React, { useEffect, useState } from 'react'
import "./forth.css"
import LectureCard from '../../lectureCard/lectureCard'
import axios from 'axios'
export default function Forth() {
    const [data, setData]: any = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("http://localhost:3421/api/pdf");
            console.log(response.data);
            setData(response.data)
        }
        fetchData()
    }, [])
    console.log(data ,"==>> data");
    return (
        <div className="forth-semestersS-wrapper">
            {
                data.map((element: any, index: number) => (
                    <LectureCard
                        key={index} // Always use a key when mapping JSX elements
                        lectureNo={(index + 1).toString()}
                        lecture={element.pdf}
                        lectureDescription="This is the lecture description"
                    />
                ))
            }
        </div>
    )
}
