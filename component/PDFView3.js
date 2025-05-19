'use client'
import { useState } from 'react';
import { Document, Page } from 'react-pdf';

import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

import { PDFViewer } from '@react-pdf/renderer';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css'

function PDFView3({file}) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const goToPrev = () => setPageNumber((prev) => Math.max(prev-1,1))
  const goToNext = () => setPageNumber((prev)=>Math.min(prev+1, numPages))

  return (
    <div className='flex flex-col items-center' >
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} 
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={300}
        />
      </Document>

      <div className='flex flex-row items-center gap-7'>
        <button 
                onClick={goToPrev}
                disabled={pageNumber <= 1}
                className=''
        >
            Prev
        </button>

        <p>Page {pageNumber} of {numPages}</p>

        <button
                onClick={goToNext}
                disabled={pageNumber >= numPages}
        >
            Next 
        </button>
      </div>
    </div>
  );
}

export default PDFView3;