

export default function Step2(){
    return (
        <div>
            <form className="flex flex-col mt-5 gap-3">
                <label>MUNICIPALITY</label>
                <input type='text' 
                placeholder="State/Province" 
                className="border-2 border-gray-200 border-solid rounded-3xl pl-3"></input>
                <input type='text' 
                placeholder="City"
                className="border-2 border-gray-200 border-solid rounded-3xl pl-3"></input>

                <label>PROJECT TYPE</label>
                <input type='text' 
                placeholder="Residential"
                className="border-2 border-gray-200 border-solid rounded-3xl pl-3"></input>

                <label>CATEGORY</label>
                <input type='text' 
                placeholder="Interior ALteration"
                className="border-2 border-gray-200 border-solid rounded-3xl pl-3"></input>

                <label>ADDRESS</label>
                <input type='text' 
                placeholder="Address Look Up"
                className="border-2 border-gray-200 border-solid rounded-3xl pl-3"></input>

            </form>
        </div>
    )
}
