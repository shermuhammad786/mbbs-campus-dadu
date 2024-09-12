// "use client";
// import { useState } from 'react';

// export default function UploadPDF() {
//     const [file, setFile] = useState(null);
//     const [uploadStatus, setUploadStatus] = useState('');

//     const handleFileChange = (event: any) => {
//         setFile(event.target.files[0]);
//     };

//     const handleUpload = async (event: any) => {
//         event.preventDefault();
//         setUploadStatus('Uploading...');

//         const formData = new FormData();
//         formData.append('file', "./lec_3.pdf");

//         const response = await fetch('/api/upload', {
//             method: 'POST',
//             body: formData,
//         });
//         console.log(response ," =>>> response");
//         const data = await response?.json();
//         if (response.ok) {
//             setUploadStatus(`Upload successful: ${data.url}`);
//         } else {
//             setUploadStatus(`Upload failed: ${data.error}`);
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleUpload}>
//                 <input type="file" onChange={handleFileChange} accept=".pdf" />
//                 <button type="submit">Upload PDF</button>
//             </form>
//             {uploadStatus && <p>{uploadStatus}</p>}
//         </div>
//     );
// }












"use client";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Navbar from "@/app/components/navbar/page";
import Forth from "@/app/components/semesters/forth/forth";
import { CldImage } from 'next-cloudinary';

import './forth.css'
import { useState } from "react";
export default function Home() {

    return (
        <div>

            <Navbar />
            <Header />
            <div className="forth-semesters-wrapper">
            <Forth />
            </div>
            <Footer />
        </div>
    )
}
