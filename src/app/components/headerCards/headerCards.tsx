import React from 'react'
import "./headerCards.css"
export default function HeaderCards({ heading, para }: any) {
    return (
        <div className='card'>
            <div className='card-image'>
                <img src="/Asset/education-services.png" alt="" />
            </div>
            <div>
                <h1 className='card-heading'>{heading}</h1>
                <p className='card-para'>{para}</p>
            </div>
        </div>
    )
}
