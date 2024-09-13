"use client";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Navbar from "@/app/components/navbar/page";
import Forth from "@/app/components/semesters/forth/forth";
import { CldImage } from 'next-cloudinary';

import './forth.css'
import { useState, ChangeEvent } from "react";
import { uploadPDF } from "@/app/firebase/firebaseFunction";
export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const uploadFile = () => {

        if (file) {
            uploadPDF(file, file?.name)
            console.log(file, "==>>> file");
        }
    }
    return (
        <div>

            <input type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => { setFile(e.target.files ? e.target.files[0] : null) }} accept=".pdf" />
            <button onClick={uploadFile}>upload</button>

            {/* <Navbar />
            <Header />
            <div className="forth-semesters-wrapper">
            <Forth />
            </div>
            <Footer /> */}
        </div>
    )

}