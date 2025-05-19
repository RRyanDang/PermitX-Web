
'use client';

//import logo from './Images/logo.jpeg'
import { useState, useRef } from 'react';

// import React FilePond
import { FilePond, registerPlugin } from 'react-filepond';

// import FilePond style
import 'filepond/dist/filepond.min.css';

// import all FilePond plugins
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// register the plugins
registerPlugin(
  FilePondPluginImageExifOrientation, 
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType);

import ListBlobUI from './ListBlobUI';

export default function Step1() {
  const [file, setFile] = useState([]);
  const pondRef = useRef(null)

  const isDuplicate = (newFile, existingFiles) =>{
    return existingFiles.some(fileItem => {
      const existing = fileItem.file;
      return (
        existing.name === newFile.name &&
        existing.size === newFile.size &&
        existing.lastModified === newFile.lastModified
      )
    })
  }
  function doSomething(){
    console.log('A file has been added.')
  }

  return (
    <div className='flex flex-col'>

      <div className='flex-1 pt-5'>
        <FilePond 
          ref = {pondRef}
          allowImagePreview={true}
          files={file}
          allowReorder={true}
          allowMultiple={true}
          allowRemove={true}
          onupdatefiles={setFile}
          onaddfile={(err, fileItem) =>{
            if (err) return;

            const newFile = fileItem.file;
            const currentFiles = pondRef.current.getFiles().filter(f => f.id !== fileItem.id);

            if (isDuplicate(newFile, currentFiles)) {
              pondRef.current.removeFile(fileItem.id);
              alert('Duplicate file detected.')
            }
          }}
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
          fileValidateTypeLabelExpectedTypes='.pdf, .dwg, .dxf, .stp, .stl, .step, .igs, .iges'
          server='/api/upload'
          name='file'
          labelIdle='Drag & Drop your PDF/CAD files or <span class="filepond--label-action">Browse</span>'
          labelFileLoading='Loading'
          oninit={doSomething}
        />
        <ListBlobUI analysis={'dskdls'}/>
      </div>
    </div>
  );
}


