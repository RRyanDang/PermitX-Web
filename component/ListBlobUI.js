import { useState, useEffect } from "react";
import AnalysisUI2 from "./AnalysisUI2";
import AnalysisUI3 from "./AnalysisUI3"


export default function ListBlobUI({analysis}){
    const [blobList, setBlobList] = useState([])

    // useEffect(() => {
    //     fetch('/api/list_file')
    //     .then(res => {
    //         console.log('1. From ListBlobUI.sj: Reponse status:',res.status)
    //         res.json()
    //     })
    //     .then(data => {
    //         console.log('2. From ListBlobUI.sj:Received blobList:',data)
    //         setBlobList(data)
    //     })
    //     .catch(error=>{
    //         console.log('3. From ListBlobUI.sj:Error fetch blob',error);
    //     })
    // }, []);

    useEffect(() => {
        fetch('/api/list_file')
            .then(async res => {
                console.log('Response status:', res.status);
                const text = await res.text();  // read raw response
                console.log('Raw response text:', text);

                try {
                    const json = JSON.parse(text);
                    //console.log('Parsed JSON:', json);
                    setBlobList(json);
                    console.log('Put in BlobList')
                    
                } catch (e) {
                    console.error('Failed to parse JSON:', e);
                }
            })
            .catch(error => {
                console.error('Error fetching blobList:', error);
        });
    }, []);


    return (
        <div>

            {blobList[1]?.name && <p>{blobList[1].name}</p>}

            {/* Render list only when data is ready */}
            {blobList.length > 0 && blobList.map(file => (
                <div key={file.id}>
                    <AnalysisUI3 analysis={analysis} data={file} />
                </div>
            ))}
            
            {/* {blobList.map(file =>{
                return(
                    <div key={file.id}>
                        
                        <AnalysisUI3 analysis={analysis} data={file} />
                    </div>
                )
                
            })} */}
        </div>
    );
}



