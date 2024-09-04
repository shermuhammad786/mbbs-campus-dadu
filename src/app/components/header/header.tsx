import React from 'react'
import "./header.css"
import HeaderCards from '../headerCards/headerCards'
export default function Header() {
    return (
        <div className='header-container'>
            <div className='header-image'>
                <h1 className='header-heading'>Welcome To The MBBS Campus Dadu</h1>

            </div>
            <div className='header-cards'>
                <HeaderCards heading={"Education Systom"} para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dignissimos fuga eos odio expedita soluta aut praesentium inventore maxime quis saepe, provident accusantium. Ratione doloremque, in fugiat tempore ipsam pariatur!"} />
                <HeaderCards heading={"Education Systom"} para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dignissimos fuga eos odio expedita soluta aut praesentium inventore maxime quis saepe, provident accusantium. Ratione doloremque, in fugiat tempore ipsam pariatur!"} />
                <HeaderCards heading={"Education Systom"} para={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt dignissimos fuga eos odio expedita soluta aut praesentium inventore maxime quis saepe, provident accusantium. Ratione doloremque, in fugiat tempore ipsam pariatur!"} />
            </div>
        </div>
    )
}
