//import Image from "next/image";

'use client';
import { useState } from 'react';

// import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// import FilePond style
import 'filepond/dist/filepond.min.css';


import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";


// register the plugin
registerPlugin(
  FilePondPluginImageExifOrientation, 
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType);


export default function Home() {
  const [file, setFile] = useState([]);

  return (
    
    //the whole big container DIV
    <div className='flex flex-col h-screen'>
      {/* another whole big container (dont ask abt this) */}
      <div className='flex-1'>

        {/* header DIV */}
        <div className='flex justify-around gap-24 items-center pt-5 pr-7 pl-7 pb-7'>
          <h1 className="flex-1 flex-row text-5xl font-bold text-orange-300">PERMITX</h1>
          
          <div className="flex items-center gap-10">
            <p>View</p>
            <p>Download</p>
          </div>
        </div>


        {/* Body */}
        <div className='flex-1 pt-1'>
          <FilePond 
            files={file}
            allowReorder={true}
            allowMultiple={true}
            onupdatefiles={setFile}
            // acceptedFileTypes={[
            //   '.dwg',
            //   '.dxf',
            //   '.step',
            //   '.stp'
            // ]}
            // labelFileTypeNotAllowed="Only CAD files are allowed"
            // fileValidateTypeLabelExpectedTypes="Expects {allButLastType} or {lastType}"
            server='/api/upload'
            name='file'
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
          />
        </div>
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
