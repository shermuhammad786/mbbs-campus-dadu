"use client";
import Footer from "@/app/components/footer/footer";
import Header from "@/app/components/header/header";
import Navbar from "@/app/components/navbar/page";
import Forth from "@/app/components/semesters/forth/forth";
import { CldImage } from 'next-cloudinary';

import './forth.css'
import { useState, ChangeEvent, useEffect } from "react";
import { uploadPDF } from "@/app/firebase/firebaseFunction";
import axios from "axios";
import { PRO_URL } from "@/app/envFiles/env";

export default function Home() {
    const [file, setFile] = useState<File | null>(null);
    const [downloadUrl, setDownloadUrl] = useState();
    const uploadFile = async () => {


        uploadPDF(file, file?.name, setDownloadUrl);



    }
    useEffect(() => {
        const fetchData = async () => {

            if (downloadUrl) {
                const addPdf = await axios.post(`${PRO_URL}/api/pdf`, {
                    user: "me",
                    pdf: downloadUrl
                })
                console.log(addPdf, " ===>>> added pdf");
            }
        }

        fetchData()

    }, [downloadUrl])

    return (
        <div>

            {/* <input type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => { setFile(e.target.files ? e.target.files[0] : null) }} accept=".pdf" />
            <button onClick={uploadFile}>upload</button> */}

            <Navbar />
            <Header />
            <div className="forth-semesters-wrapper">
            <Forth />
            </div>
            <Footer />
        </div>
    )
}