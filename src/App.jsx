import './App.css'
import { useEffect, useState } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { Titu } from './components/Title'



function App() {

  const [taskItems, newTaskItems] = useState([])


// Añade nueva tarea a la lista y lanza una alerta si esa tarea ya existe
  function createTask(taskName) {
    if(!taskItems.find(task => task.name === taskName)){
      newTaskItems([...taskItems, {name: taskName, done: false}])
    }else{
      alert("Ya existe esta tarea")
    }
  }
//Guardara las nueva tareas en el localstorage
  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      newTaskItems(JSON.parse(data))
    }
  }, [])

//Guardara las nueva tareas en el localstor age
  useEffect( () =>{
    localStorage.setItem('tasks' , JSON.stringify(taskItems))
  }, [ taskItems ])


    return (
      <div className="App bg-gradient-to-r from-indigo-500 to-gray-950 text-cyan-600 w-4/4 h-screen content-center m-auto p-12">
        <Titu />
        <TaskCreator createNewTask={createTask}/>
        <table className="tabla content-center m-auto text-2xl bg-indigo-800 mt-10 rounded w-1/2 opacity-90">
          <thead className=''>
            <tr>
              <th className='text-gray-900'>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
            taskItems.map(task => (
              <tr className='bg-gray-900 m-5 flex rounded-lg' key={task.name}>
               <td className='p-2 text-indigo-200'>
                {task.name}
               </td>
              </tr>
            ))
          }
          </tbody>
        </table>
      </div>

  )
}

export default App
