
'use client';

import "bootstrap-icons/font/bootstrap-icons.css"

import dynamic from 'next/dynamic';
// const PDFView = dynamic(() => import('@/component/PDFView'), {ssr:false});
// const PDFView2 = dynamic(()=>import('@/component/PDFView2'),{
//   ssr:false
// })
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`
import AnalysisUI3 from '@/component/AnalysisUI3';

//import PDFView from '@/component/PDFView';

//import logo from './Images/logo.jpeg'
import { useState, useEffect } from 'react';

import Image from 'next/image';

// import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// import FilePond style
import 'filepond/dist/filepond.min.css';

// import all FilePond Plugin
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
//import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

//import Azure-related library
import ListBlobUI from '@/component/ListBlobUI';

// register the plugin
registerPlugin(
  FilePondPluginImageExifOrientation, 
  //FilePondPluginImagePreview,
  FilePondPluginFileValidateType);


const dummyAnalysis = `When quality counts but budget is a factor, the FP-30X is the sweet spot of Roland’s FP-X series. 
Balancing affordability with superior performance, this slim and stylish portable piano builds on 
the entry-level FP-10 with an enhanced sound engine, more powerful onboard speakers, and increased polyphony. 
Featuring Roland’s SuperNATURAL Piano technology and the same expressive 88-note PHA-4 Standard keyboard as 
the premium FP-60X, the FP-30X is the perfect home instrument for seasoned players. And with its easy-to-transport 
weight and Bluetooth connectivity for lessons and play-along audio, it’s an ideal choice for any pianist who wants 
to develop their skills or perform at small events.`

export default function Home() {
  const [file, setFile] = useState([]);
  const [blobList, setBlobList] = useState([])
  // const [isClient, setIsClient] = useState(false);

  // useEffect(() =>{
  //   setIsClient(true)
  // }, [])

  // if (!isClient) return null;

  useEffect(() => {
    fetch('/api/list_file')
    .then(res => res.json())
    .then(data => setBlobList(data));
  }, []);

  return (
    
    //the whole big container DIV
    <div className='flex flex-col h-screen'>
      {/* another whole big container (dont ask abt this) */}
      <div className='flex-1'>

        {/* header DIV */}
        <div className='flex justify-between gap-24 items-center pt-1 pr-7 pl-7 border-b'>
          
          {/* PermitX logo */}
          <Image 
          className='w-35 pb-3'
            src='/logo.jpeg' 
            alt='PermitX-Logo' 
            width={100}
            height={100}
          />

          {/* Icone placeholder */}
          <Image
          src='/user_icon.png'
          alt='default user icon'
          width={50}
          height={50}
          />
        </div>

        {/* Body part */}

        <div className='flex flex-1 flex-col items-center bg-[#fff4e7] font-bold p-5 text-[20px]'>
          <p>Get your construction's design analysis has never been easier.</p>
          <p>With PermitX AI-powered tool, simply upload your PDF/CAD, it will analyze and return back result</p>
        </div>

      
        
        {/* <div className="flex flex-1 flex-row justify-around">
          <div className="flex flex-col w-1/4 gap-5">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              1
            </div>
            <p>Upload your PDF/CAD file</p>
          </div>
          
          <div className="flex flex-col w-1/4 gap-5">
            <p>Specify location/type</p>
            
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              <p>2</p>
            </div>
          </div>
          
          <div className="flex flex-col w-1/4 gap-5">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              3
            </div>
            
            <p>Waiting for AI-analyzed result</p>
          </div>
          
          <div className="flex flex-col gap-5">
            <p>Download result as PDF</p>
            
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              4
            </div>
          </div>
        </div> */}

        <div className="flex justify-around items-start w-full mt-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
              1
            </div>
            <p className="text-center mt-2">Upload your PDF/CAD file</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
              2
            </div>
            <p className="text-center mt-2">Specify location/type</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
              3
            </div>
            <p className="text-center mt-2">Waiting for AI-analyzed result</p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
              4
            </div>
            <p className="text-center mt-2">Download result as PDF</p>
          </div>
        </div>


        {/* <div className="flex flex-1 flex-col mt-5 items-start justify-center w-1/2">

          <div className="flex items-start flex-row">
            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
              1
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Step One</h3>
              <p className="text-gray-600 text-center">
                Upload your PDF/CAD file 
              </p>
            </div>
          </div>

          <i class="bi bi-arrow-down"></i>
          
          <div className="flex items-start flex-row mb-8">
            <div className="flex items-center">
            
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                2
              </div>
             
              <div className="flex-1 w-px bg-gray-300"></div>
            </div>
           
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Step Two</h3>
              <p className="text-gray-600">
                Specify location 
              </p>
            </div>
          </div>

          <i class="bi bi-arrow-down"></i>

      
          <div className="flex items-start mb-8">
        
            <div className="flex flex-col items-center">
        
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                3
              </div>
      
              <div className="flex-1 w-px bg-gray-300"></div>
            </div>

            <div className="ml-4">
              <h3 className="text-lg font-semibold">Step Three</h3>
              <p className="text-gray-600">
                Waiting for result
              </p>
            </div>
          </div>

          <i class="bi bi-arrow-down"></i>

          
          <div className="flex items-start mb-8">
        
            <div className="flex flex-col items-center">
     
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                4
              </div>
        
              <div className="flex-1 w-px bg-gray-300"></div>
            </div>
     
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Step Four</h3>
              <p className="text-gray-600">
                Download result as PDF
              </p>
            </div>
          </div>
        </div> */}
        
        <div className="flex flex-1 flex-col items-center mt-5 mb-10">
          <a href='http://localhost:3000/permit-form'
          className="text border-1 rounded-lg p-3 hover:bg-[#cacaca] font-bold"
          >Get Started</a>
        </div>

        

        {/* Body */}
        {/* <div className='flex-1 pt-1'>
          <FilePond 
            files={file}
            allowReorder={true}
            allowMultiple={true}
            allowRemove={true}
            onupdatefiles={setFile}
            acceptedFileTypes={[
              //'application/octet-stream',
              'application/pdf',
              //'application/dwg',
              '.dwg',
              '.dxf',
              '.step',
              '.stp',
              '.igs',
              '.iges',
              '.stl'
            ]}
            //when file types are not native, customize it so FilePond recognizes and accepts them
            fileValidateTypeDetectType={(source, type) => new Promise((resolve, reject) =>{
              const fileName = source.name;
              if (fileName.toLowerCase().endsWith('.dwg') 
              || fileName.toLowerCase().endsWith('dxf')
              || fileName.toLowerCase().endsWith('stl')
              || fileName.toLowerCase().endsWith('step')
              || fileName.toLowerCase().endsWith('stp')
              || fileName.toLowerCase().endsWith('igs')
              || fileName.toLowerCase().endsWith('iges') ){

                //this is a very general MIME type, it's simply binary file
                type = 'application/octet-stream';
              }
              resolve(type)
            })}
            labelFileTypeNotAllowed="Only CAD & PDF files are allowed"
            //fileValidateTypeLabelExpectedTypes="Expects {allButLastType} or {lastType}"
            fileValidateTypeLabelExpectedTypes='.pdf, .dwg, .dxf, .stp, .stl, .step, .igs, .iges'
            server='/api/upload'
            name='file'
            labelIdle='Drag & Drop your PDF/CAD files or <span class="filepond--label-action">Browse</span>'
            labelFileLoading='Loading'
          />
        </div> */}

        {/* <div className='flex flex-1 flex-col items-center'>
          <ListBlobUI analysis={dummyAnalysis}/>
          
        </div> */}

      </div>
    </div>

    //HEADER
    //1. LOGO
    //2. A line underneath the logo
    //3. A bunch of options such as upload, view...

    //BODY
    //Show all uploaded files
  );
}


