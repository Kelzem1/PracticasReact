import { useState } from "react"



export const TaskCreator = ( {createNewTask} ) =>{
    const [ newTaksName, setNewTaksName] = useState('')


    //Funcionalidad para el input y el boton
    const handleSubmit = (e) =>{
        e.preventDefault()
        createNewTask(newTaksName)
        localStorage.setItem('task', newTaksName)
        setNewTaksName('')
    }
    return(
    <div className="formu bg-slate-500 w-1/4 m-auto content-center">
    /* Boton enter */
        <form onSubmit={handleSubmit}>
        <input type='text'
        className="input text-black bold"
        placeholder='Enter a new task'
        value={newTaksName}
        onChange={(e) => setNewTaksName(e.target.value)}>
        </input>
        <button>Save task</button>
        </form>
    </div>
    )
}