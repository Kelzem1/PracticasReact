export const ShowCompletedTasks =({isChecked, setShowCompleted, cleanTasks}) =>{
       
    const handleDelete = () =>{
        if(window.confirm('Estas seguro?')) {
            cleanTasks()
        }
    }

    return(
        <div>
        <input type='checkbox'
        checked={isChecked} 
        onChange={(e)=> setShowCompleted(e.target.checked)}></input>
        
        <label onClick={handleDelete}>Done tasks</label>

        <button onClick={handleDelete}>
            Clear
        </button>

      </div>
    )
}