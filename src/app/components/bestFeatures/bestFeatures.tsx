import React from 'react'
import './bestFeatures.css'
export default function BestFeatures() {
    return (
        <div className="best-features-container">
            <div className="best-features">
                <div className="best-features-wrapper">
                    <div className='best-features-heading'>

                        <div><h1>Best Features</h1></div>
                        <div><p>University of Sindh provides best learning environment to its students and researchers. Our mission is to make research and development, and innovation a strategic priority for the university</p></div>
                    </div>
                    <div className="best-feature-skill-container">
                        <div className='best-feature-skill'>
                            <div className='best-feature-skill-img'>
                                <img src="/Asset/skills.png" alt="" />
                            </div>
                            <div className='best-feature-skill-content'>
                                <h1>Skilled Teachers</h1>
                                <p>At our university, experienced and passionate teachers are dedicated to providing quality education, guiding students toward success in every step of their journey.</p>
                            </div>
                        </div>
                        <div className='best-feature-skill'>
                            <div className='best-feature-skill-img'>
                                <img src="/Asset/skills.png" alt="" />
                            </div>
                            <div className='best-feature-skill-content'>
                                <h1>Affordable Courses</h1>
                                <p>Our university provides top-notch education at affordable prices, making it accessible to students from all backgrounds, without compromising on quality.</p>
                            </div>
                        </div>
                        <div className='best-feature-skill'>
                            <div className='best-feature-skill-img'><img src="/Asset/skills.png" alt="" /></div>
                            <div className='best-feature-skill-content'>
                                <h1>Efficient & Flexible</h1>
                                <p>Our university offers efficient and flexible learning options, designed to fit your schedule and help you achieve your goals with ease.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="best-features-img">
                <img src="/Asset/damin.jpg" alt="" />
            </div>
        </div>
    )
}
