'use client'
import React, { useState } from 'react'
import "./assignment.css"
import axios from 'axios'
import { DEV_URL, PRO_URL } from '../envFiles/env'
function Assignment() {
    const [student, setStudent] = useState({})
    const [std, setStd] = useState([])
    const createStudent = async () => {
        const students = await axios.post(`${PRO_URL}/api/student`, student)
        console.log(students, "stedent created");
    }
    const getStudents = async () => {
        const students = await axios.get(`${PRO_URL}/api/student`)
        if (students.status === 200) {
            setStd(students.data)
        }
        console.log(students, "stedent getted");
    }
    return (
        <div className='assignment-container'>
            <h1>ASSIGNMENT BY SHER MUHAMMAD</h1>
            <div className='assignment-wrapper'>
                <input type="text" placeholder='Enter Your First Name' onChange={(e) => setStudent({ ...student, firstname: e.target.value })} />
                <input type="text" placeholder='Enter Your Last Name' onChange={(e) => setStudent({ ...student, lastname: e.target.value })} />
                <input type="text" placeholder='Enter Your Roll Number' onChange={(e) => setStudent({ ...student, rollNo: e.target.value })} />
                <input type="email" placeholder='Enter Your Email' onChange={(e) => setStudent({ ...student, email: e.target.value })} />
                <input type="number" placeholder='Enter Your Phone Number' onChange={(e) => setStudent({ ...student, phoneNumber: e.target.value })} />
                <button onClick={createStudent}>Create Student</button>
            </div>
            <div className='show-students-container'>
                <button onClick={getStudents}>show students</button>
                <div className="show-student-wrapp flex-col">
                    <div className='flex justify-between items-center show-student-heading'>
                        <h1>First Name</h1>
                        <h1>Last Name</h1>
                        <h1>Email</h1>
                        <h1>Roll Number</h1>
                    </div>

                    {
                        std && std.map((stud: any) => (

                            <div className='flex width-full justify-between border-1 border-black'>
                                <h1>{stud.firstname}</h1>
                                <h1>{stud.lastname}</h1>
                                <h1>{stud.email}</h1>
                                <h1>{stud.rollNo}</h1>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Assignment