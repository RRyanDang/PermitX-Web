import ListBlobUI from "./ListBlobUI";


export default function Step4({analysis}){
    return (
        <div className='flex flex-col'>

            <div className='flex-1 pt-5'>
                <ListBlobUI analysis={analysis}/>

            </div>
        
        </div>
    )
};