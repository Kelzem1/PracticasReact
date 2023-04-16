export const ShowCompletedTasks =({isChecked, setShowCompleted, cleanTasks}) =>{
       
    const handleDelete = () =>{
        if(window.confirm('Estas seguro?')) {
            cleanTasks()
        }
    }

    return(
        <div className="flex w-1/2 m-auto content-center text-center mt-7">
        <div className="w-1/2 text-center space-x-2">
        <input type='checkbox'
        checked={isChecked} 
        onChange={(e)=> setShowCompleted(e.target.checked)}></input>
        
        <label onClick={handleDelete}>Done tasks</label>
        </div>

        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-3 border border-gray-400 rounded shadow" onClick={handleDelete}>
            Clear
        </button>

      </div>
    )
}