import { useState } from "react"



export const TaskCreator = () =>{
    const [ newTaksName, setNewTaksName] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        localStorage.setItem('task', newTaksName)
        setNewTaksName('')
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type='text'
        placeholder='Enter a new task'
        value={newTaksName}
        onChange={(e) => setNewTaksName(e.target.value)}>
        </input>
        <button>Save task</button>
      </form>
    )
}