import React from 'react'
import "./forth.css"
import SemesterCard from '../../semesterCard/semesterCard'
import Link from 'next/link';
export default function Forth() {
    const teacherDetails: any = [
        {
            classImage: "/Asset/computer-networks.jpg",
            day: "Monday",
            time: "10:00 AM - 11:00 AM",
            room: "Room 7",
            className: "Computer Networks",
            classDesc: "Computer networks connect devices to share data and resources, enabling efficient communication and collaboration.",
            img: "/Asset/shoaib.png",
            teacher: "Dr. Smith",
        },
        {
            classImage: "/Asset/softwareRequirements.jpg",
            day: "Monday",
            time: "10:00 AM - 11:00 AM",
            room: "Room 7",
            className: "Software Requirement Engineering",
            classDesc: "Software Requirement Engineering identifies, analyzes, and documents system requirements to guide development.",
            img: "/Asset/shoaib.png",
            teacher: "Dr. Smith",
        },
        {
            classImage: "/Asset/graphic-game-development.webp",
            day: "Tuesday",
            time: "10:00 AM - 11:00 AM",
            room: "Room 7",
            className: "Computer Graphic & Game Development",
            classDesc: "Computer Graphics & Game Development focuses on creating visual content and interactive experiences through coding, design, and simulation.",
            img: "/Asset/shoaib.png",
            teacher: "Sir Usman Birhmani",
        },
        {
            classImage: "/Asset/social-media-marketing.webp",
            day: "Monday",
            time: "10:00 AM - 11:00 AM",
            room: "Room 7",
            className: "Intoduction to Social Media Marketing",
            classDesc: "Social Media Marketing leverages platforms like Facebook, Instagram, and Twitter to promote brands, engage audiences, and drive business growth.",
            img: "/Asset/shoaib.png",
            teacher: "Dr. Smith",
        },
        {
            classImage: "/Asset/Database.png",
            day: "Monday",
            time: "10:00 AM - 11:00 AM",
            room: "Room 7",
            className: "Database System (PR)",
            classDesc: "A Database System manages, stores, and organizes data efficiently, allowing easy retrieval, manipulation, and security of information.",
            img: "/Asset/shoaib.png",
            teacher: "Sir Shahid Khoso",
        },
        {
            classImage: "/Asset/Database.png",
            day: "Monday",
            time: "10:00 AM - 11:00 AM",
            room: "Room 7",
            className: "Database System (TH)",
            classDesc: "A Database System manages, stores, and organizes data efficiently, allowing easy retrieval, manipulation, and security of information.",
            img: "/Asset/shoaib.png",
            teacher: "Sir Iqrar Jatoi",
        },
    ];
    return (
        <div className="forth-semestersS-wrapper">
            {
                teacherDetails.map((teacher: any, index: number) => (
                    <SemesterCard
                        key={index}
                        classImage={teacher.classImage}
                        day={teacher.day}
                        time={teacher.time}
                        room={teacher.room}
                        className={teacher.className}
                        classDesc={teacher.classDesc}
                        img={teacher.img} teacher={teacher.teacher}
                    />
                ))
            }
        </div>
    )
}
