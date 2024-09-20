"use client"
import { DEV_URL, POR_URL } from "@/app/envFiles/env";
import "./uplaodFile.css"
import { uploadPDF } from '@/app/firebase/firebaseFunction';
import axios from 'axios';
import React, { ChangeEvent, useEffect, useState } from 'react'

function upload() {
    
    console.log(DEV_URL);
    const [file, setFile] = useState<File | null>(null);
    const [downloadUrl, setDownloadUrl] = useState();
    const [description, setDescription] = useState("");
    const [className, setClassName] = useState("");
    const uploadFile = async () => {


        uploadPDF(file, file?.name, setDownloadUrl);



    }
    useEffect(() => {
        const fetchData = async () => {

            if (downloadUrl) {
                const addPdf = await axios.post(`${POR_URL}/api/pdf`, {
                    subject: className,
                    pdf: downloadUrl,
                    desc: description
                })
                console.log(addPdf, " ===>>> added pdf");
            }
        }

        fetchData()

    }, [downloadUrl])
    return (
        <div className='w-full flex justify-evenly items-center flex-col uploadFile'>
            <input type="file" onChange={(e: ChangeEvent<HTMLInputElement>) => { setFile(e.target.files ? e.target.files[0] : null) }} accept=".pdf" />
            <textarea onChange={(e) => setDescription(e.target.value)} placeholder="description" cols={4} rows={4} ></textarea>
            <select onChange={(e) => setClassName(e.target.value)}>
                <option value="Computer Networks">Computer Networks</option>
                <option value="Software Requirement Engineering">Software Requirement Engineering</option>
                <option value="Computer Graphic & Game Development">Computer Graphic & Game Development</option>
                <option value="Intoduction to Social Media Marketing">Intoduction to Social Media Marketing</option>
                <option value="Database System (PR)">Database System (PR)</option>
                <option value="Database System (TH)">Database System (TH)</option>
            </select>
            <button onClick={uploadFile}>upload</button>
        </div>
    )
}

export default upload