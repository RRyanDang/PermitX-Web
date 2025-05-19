import {Document, Page, Text, StyleSheet} from '@react-pdf/renderer';

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

function AnalysisDownload({analysis}){
    return(
        <Document>
            <Page size='A4' style={styles.page}>
                <Text style={styles.heading}>Analysis Report</Text>
                <Text style={styles.paragraph}>{analysis}</Text>
            </Page>
        </Document>
    )
}

export default AnalysisDownload;