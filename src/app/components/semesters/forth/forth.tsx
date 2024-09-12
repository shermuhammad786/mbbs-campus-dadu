import React from 'react'
import "./forth.css"
import SemesterCard from '../../semesterCard/semesterCard'
export default function Forth() {
    return (
        <div className="forth-semestersS-wrapper">
            <SemesterCard
                classImage="/Asset/computer-networks.jpg"
                day="Monday"
                time="10:00 AM - 11:00 AM"
                room="Room 7"
                className="Computer Networks"
                classDesc="Computer networks connect devices to share data and resources, enabling efficient communication and collaboration."
                img="/Asset/shoaib.png" teacher="Dr. Smith" />

            <SemesterCard
                classImage="/Asset/softwareRequirements.jpg"
                day="Monday"
                time="10:00 AM - 11:00 AM"
                room="Room 7"
                className="Software Requirement Engineering"
                classDesc="Software Requirement Engineering identifies, analyzes, and documents system requirements to guide development."
                img="/Asset/shoaib.png"
                teacher="Dr. Smith" />

            <SemesterCard
                classImage="/Asset/graphic-game-development.webp"
                day="Tuesday"
                time="10:00 AM - 11:00 AM"
                room="Room 7"
                className="Computer Graphic & Game Development"
                classDesc="Computer Graphics & Game Development focuses on creating visual content and interactive experiences through coding, design, and simulation."
                img="/Asset/shoaib.png"
                teacher="Sir Usman Birhmani" />

            <SemesterCard
                classImage="/Asset/social-media-marketing.webp"
                day="Monday"
                time="10:00 AM - 11:00 AM"
                room="Room 7"
                className="Intoduction to Socail Media Marketing"
                classDesc="Social Media Marketing leverages platforms like Facebook, Instagram, and Twitter to promote brands, engage audiences, and drive business growth."
                img="/Asset/shoaib.png"
                teacher="Dr. Smith" />

            <SemesterCard
                classImage="/Asset/Database.png"
                day="Monday"
                time="10:00 AM - 11:00 AM"
                room="Room 7"
                className="Database System (PR)"
                classDesc="A Database System manages, stores, and organizes data efficiently, allowing easy retrieval, manipulation, and security of information."
                img="/Asset/shoaib.png"
                teacher="Sir Shahid Khoso" />
            <SemesterCard
                classImage="/Asset/Database.png"
                day="Monday"
                time="10:00 AM - 11:00 AM"
                room="Room 7"
                className="Database System (TH)"
                classDesc="A Database System manages, stores, and organizes data efficiently, allowing easy retrieval, manipulation, and security of information."
                img="/Asset/shoaib.png"
                teacher="Sir Iqrar Jatoi" />
        </div>
    )
}
