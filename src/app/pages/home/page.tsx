import AboutUniversity from '@/app/components/aboutUniversity/aboutUniversity'
import Courses from '@/app/components/courses/courses'
import Header from '@/app/components/header/header'
import Navbar from '@/app/components/navbar/page'
import React from 'react'

export default function page() {
    return (
        <div>
            <Navbar />
            <Header />
            <AboutUniversity />
            <Courses />
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br />
        </div>
    )
}
