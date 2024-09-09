import React from 'react'
import "./footer.css"
export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-wrapper'>
                <div className='footer-content about'>
                    <h1>About Us</h1>
                    <p>The University of Sindh, Campus Dadu, is a hub of academic excellence in the region. With a focus on quality education and research, it empowers students to thrive in their chosen fields. The campus offers a supportive environment and modern facilities, preparing students for successful careers. Join us at the heart of learning in Dadu</p>
                </div>
                <div className='footer-content links'>
                    <h1>Our Links</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Courses</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className='footer-content'>
                    <h1>Contact Us</h1>
                    <ul>
                        <li>+9231234567890</li>
                        <li>example@gamil.com</li>
                        <li>University of Sindh Campus Dadu</li>
                    </ul>
                </div>
            </div>
            <div className='copyRight'>
                <img src="/Asset/usindh-logo.png" alt="" />
                <h1>Copyright © MBBS Campus Dadu 2024 . All rights reserved.</h1>
            </div>
        </div>
    )
}
