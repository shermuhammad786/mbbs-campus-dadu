"use client"
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect } from 'react'

function OmdbApi() {
    useEffect(() => {

        const fetchDAta = async () => {
            const response = await fetch(`https://omdb-api-hazel.vercel.app/home`);
            const data = await response.json();
            console.log(data);
        }
        fetchDAta();
    })
    return (
        <div>
            this is omdb api pages
            <Link style={{color:"green"}} href={"/"}>go to home</Link>
        </div>
    )
}

export default OmdbApi