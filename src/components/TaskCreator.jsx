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
    <div className="formu w-1/4 m-auto content-center">
        <form onSubmit={handleSubmit}>
        <input type='text'
        className="input text-black bold placeholder:italic placeholder:text-slate-400 block bg-white w-4/4 border border-slate-300 rounded py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" name="search"
        placeholder='Enter a new task'
        value={newTaksName}
        onChange={(e) => setNewTaksName(e.target.value)}>
        </input>
        <button className="flex m-auto mt-6 content-center bg-blue-800 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Save task</button>
        </form>
    </div>
    )
}