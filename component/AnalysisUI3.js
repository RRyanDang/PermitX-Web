// 'use client';

// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { Document } from 'react-pdf';

// // import DowloadAnalysis dynamically
// import dynamic from 'next/dynamic';
// const PDFDownloadAnalysis = dynamic(() => import('../component/AnalysisDownloadButton.js'), {
//   ssr: false,
// })

// // const PDFView2 = dynamic(()=>import('../component/PDFView2.js'),{
// //     ssr:false
// // });

// const PDFView3 = dynamic(()=>import('../component/PDFView3.js'),{
//     ssr:false
// });

// const MAX_LENGTH = 400;

// function AnalysisUI3({analysis, data}){
//     const [isExpanded, setIsExpanded] = useState(false)
//     // const [files, setFiles] = useState([])

//     // Truncate text if not expanded
//     const displayText = isExpanded ? analysis : `${analysis.slice(0, MAX_LENGTH)}...`;

//     // useEffect(()=>{
//     //     fetch('/api/list_file')
//     //     .then(res => res.json())
//     //     .then(data => setFiles(data))
//     //     .catch((err)=>console.error('Failed to load blobList',err))
//     // }, [])
    
//     return(
//         <div className='border-t-2 border-solid gap-7 m-5 align-middle max-w-180 min-w-100'>
//             <div className='flex flex-row p-2 font-bold'>
//                 <p className='w-10 truncate'>{data.id}</p>
//                 <p className='w-78 truncate pl-3'>{data.name.substring(5)}</p>
//                 {/* <p className='w-80 truncate'>{data.contentType}</p> */}
//                 {/* <p className='w-30 truncate'>{data.date.substring(0,10)}</p> */}
//             </div>
//             <div className="flex flex-row justify-start">
//                 <div>
//                     {/* {files.map((file) =>(
//                         <div key={file.name}>
//                             <h3>{file.name}</h3>
//                             <PDFView3 file={file.url} />
//                         </div>
//                     ))} */}
//                     <div key = {data.name}>
//                         <PDFView3 file={data.url} />
//                     </div>
//                 </div>
//                 <div className="w-1/2 pl-3">
//                     <p className='mr-2'> {displayText} </p>
//                     <button onClick={() => setIsExpanded(!isExpanded)}
//                         className='font-bold mr-3 cursor-pointer'
//                     >
//                         {isExpanded ? 'Show less' : 'Show full'}
//                     </button>
//                     <PDFDownloadAnalysis analysis={analysis} />
                    
//                 </div>
//             </div>
//         </div>
        
//     );
// }
// export default AnalysisUI3;







'use client';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { Document } from 'react-pdf';

// import DowloadAnalysis dynamically
import dynamic from 'next/dynamic';
const PDFDownloadAnalysis = dynamic(() => import('../component/AnalysisDownloadButton.js'), {
  ssr: false,
})

// const PDFView2 = dynamic(()=>import('../component/PDFView2.js'),{
//     ssr:false
// });

const PDFView3 = dynamic(()=>import('../component/PDFView3.js'),{
    ssr:false
});

const MAX_LENGTH = 400;

function AnalysisUI3({analysis, data}){
    const [isExpanded, setIsExpanded] = useState(false)
    // const [files, setFiles] = useState([])

    // Truncate text if not expanded
    const displayText = isExpanded ? analysis : `${analysis.slice(0, MAX_LENGTH)}...`;

    // useEffect(()=>{
    //     fetch('/api/list_file')
    //     .then(res => res.json())
    //     .then(data => setFiles(data))
    //     .catch((err)=>console.error('Failed to load blobList',err))
    // }, [])
    
    return(
        <div className='border-t-2 border-solid gap-7 m-5 align-middle max-w-180 min-w-100'>
            <div className='flex flex-row p-2 font-bold'>
                <p className='w-10 truncate'>{data.id}</p>
                <p className='w-78 truncate pl-3'>{data.name.substring(19)}</p>
                {/* <p className='w-80 truncate'>{data.contentType}</p> */}
                {/* <p className='w-30 truncate'>{data.date.substring(0,10)}</p> */}
            </div>
            <div className="flex flex-col justify-start">
                
                <div key = {data.id}>
                    <PDFView3 file={data.url} />
                </div>
                
                <div className=" pl-3">
                    <p className='mr-2'> {displayText} </p>
                    <button onClick={() => setIsExpanded(!isExpanded)}
                        className='font-bold mr-3 cursor-pointer'
                    >
                        {isExpanded ? 'Show less' : 'Show full'}
                    </button>
                    <PDFDownloadAnalysis analysis={analysis} />
                    
                </div>
            </div>
        </div>
        
    );
}
export default AnalysisUI3;


