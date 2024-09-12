import { NextResponse } from 'next/server';
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false, // Disable body parsing for file upload
    },
};

export async function POST(req: any) {
    return new Promise((resolve, reject) => {
        const form = new formidable.IncomingForm();

        form.parse(req, async (err, fields, files) => {
            if (err) {
                return resolve(
                    NextResponse.json({ error: 'Error parsing file' }, { status: 500 })
                );
            }

            const file: any = files.file;

            // Stream the PDF to Cloudinary
            const uploadStream: any = cloudinary.uploader.upload_stream(
                { resource_type: 'raw' }, // for non-image files
                (error: any, result: any) => {
                    if (error) {
                        return resolve(
                            NextResponse.json({ error: 'Upload failed' }, { status: 500 })
                        );
                    }

                    return resolve(
                        NextResponse.json({ url: result.secure_url }, { status: 200 })
                    );
                }
            );

            fs.createReadStream(file.filepath).pipe(uploadStream);
        });
    });
}
