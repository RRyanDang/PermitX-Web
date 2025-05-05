// app router
// app/api/upload/route.js

import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from 'fs';

export const config={
    api:{
        bodyParser: false,
    },
};

// v1
// export default function POST(req){
//     const form = formidable({
//         uploadDir:'./public/upload',
//         keepExtensions:true,
//     });

//     return new Promise((resolve, reject) =>{
//         form.parse(req, (err, fields, files) =>{
//             if (err){
//                 reject(NextResponse.json({error: 'Error parsing file'}, {status: 500}));
//             }

//             const uploadFile = files.file[0];
//             const fileUrl = '/upload/${uploadFile.newFilename}';

//             resolve(NextResponse.json({
//                 message: 'File uploaded successfully',
//                 url: fileUrl,
//             }))
//         })
//     })
// }

// v2
// export async function POST(req){
//     const form = formidable({
//         uploadDir:"./public/upload",
//         keepExtensions:true,
//     })

//     return new Promise((resolve,reject) => {
//         form.parse(req, async(err, fields, files) =>{
//             if(err){
//                 console.error('Form parsing error: ', err)
//                 return reject(NextResponse.json({error: 'Error parsing form'}, {status: 500}))
//             }

//             const uploadedFile = files.file?.[0]

//             if(!uploadedFile){
//                 return reject(NextResponse.json({ error: 'No file uploaded' }, { status: 400 }));
//             }

//             const fileUrl = '/upload/${uploadedFile.newFilename}'

//             resolve(
//                 NextResponse.json({
//                     message: 'Uploaded successfully!',
//                     url: fileUrl,
//                 })
//             )
//         })
//     })
// }


// v3
export async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const form = formidable({ uploadDir: './public/upload', keepExtensions: true });
  
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error parsing the file' });
      }
  
      const uploadedFile = files.file?.[0];
      if (!uploadedFile) {
        return res.status(400).json({ error: 'No file uploaded' });
      }
  
      const fileUrl = `/uploads/${uploadedFile.newFilename}`;
      return res.status(200).json({ message: 'Upload successful', url: fileUrl });
    });
  }







// server={{
//   process:{
//     url: 'api/upload',
//     method: 'POST',
//     withCredentials: false,
//     headers:{},
//     onload:(response)=>{
//       const res = JSON.parse(response);
//       console.log('Uploaded file URL: ', res.url)
//       return res.url
//     },
//     onerror:(err) =>{
//       console.error('Upload error: ',err);
//       return 'Upload failed'
//     }
//   }
// }}




Likely not use, but put here just in case
// <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2 tracking-[-.01em]">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
    //           app/page.js
    //         </code>
    //         .
    //       </li>
    //       <li className="tracking-[-.01em]">
    //         Save and see your changes instantly.
    //       </li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>