import React, { useEffect, useState } from 'react'
import "./forth.css"
import axios from 'axios'
import LectureCard from '../../lectureCard/lectureCard';
import { useParams } from 'next/navigation';
export default function Forth() {
    const [data, setData]: any = useState([]);
    const { subject }: any = useParams();
    console.log(subject);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`http://localhost:3421/api/pdf/subject/${subject.toLowerCase()}`);
            setData(response.data)
        }
        fetchData()
    }, [])
    return (
        <div className="forth-semestersS-wrapper">
            {
                data.map((element: any, index: number) => (
                    <LectureCard
                        key={index}
                        lectureNo={(index + 1).toString()}
                        lecture={element._id}
                        lectureDescription={element.desc}
                    />
                ))
            }
        </div>
    )
}
