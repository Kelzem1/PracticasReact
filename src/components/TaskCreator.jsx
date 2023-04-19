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
    <div className="formu m-auto content-center">
        <form onSubmit={handleSubmit}>
        <input type='text'
        className="input text-black bold placeholder:italic placeholder:text-slate-400 m-auto content-center block box-border w-1/2 bg-white border border-slate-100 rounded py-2 pl-2 pr-3 shadow shadow-teal-700 focus:outline-none focus:border-gray-300 focus:ring-gray-200 focus:ring-1 sm:text-sm" name="search"
        placeholder='Enter a new task'
        value={newTaksName}
        onChange={(e) => setNewTaksName(e.target.value)}>
        </input>
        <button className="flex m-auto mt-3 content-center bg-teal-50 shadow-lg hover:bg-teal-600 text-black font-bold py-2 px-4 border-b-4 border-teal-700 hover:border-slate-300 rounded transition duration-75 ease-in-out hover:-translate-y-1 hover:scale-100">Add task</button>
        </form>
    </div>
    )
}