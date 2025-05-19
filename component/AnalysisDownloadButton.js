'use client';

import React from 'react'

import { PDFDownloadLink, StyleSheet } from '@react-pdf/renderer'

import AnalysisDownload from './AnalysisDownload';

// const style = StyleSheet.create({
//     page: {padding:30},
//     text: {fontSize: 14}
// });

const styles = StyleSheet.create({
    page: {
      padding: 30,
      fontFamily: 'Helvetica',
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 12,
    },
    paragraph: {
      fontSize: 12,
      lineHeight: 1.5,
      textAlign: 'justify',
    },
  });

const AnalysisDownloadButton = ({analysis}) =>{

    return (
        <PDFDownloadLink document={<AnalysisDownload analysis={analysis} />}
            fileName='analysis_download.pdf'
            className='text-blue-500 pt-5 cursor-pointer hover:text-blue-700'
        >
            {({loading}) => (loading ? 'Preparing document...' : 'Download PDF')}
        </PDFDownloadLink> 
    )
}

export default AnalysisDownloadButton;
