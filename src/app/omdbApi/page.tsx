import axios from 'axios';
import React from 'react'

function OmdbApi() {
    const fetchDAta = async () => {
        const response = await axios.get(`https://omdb-api-hazel.vercel.app/home`);
        console.log(response.data);
    }
    fetchDAta();
    return (
        <div>
            this is omdb api pages
        </div>
    )
}

export default OmdbApi