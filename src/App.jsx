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

//Guardara las nueva tareas en el localstorage
  useEffect( () =>{
    localStorage.setItem('tasks' , JSON.stringify(taskItems))
  }, [ taskItems ])


    return (
      <div className="App bg-gradient-to-r from-sky-500 to-indigo-500 text-cyan-600 w-4/4 h-screen content-center m-auto p-32">
        <Titu />
        <TaskCreator createNewTask={createTask}/>
        <table className="tabla content-center m-auto text-2xl bg-blue-400 mt-20 rounded w-1/2 opacity-70">
          <thead className=''>
            <tr>
              <th className='text-blue-900'>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
            taskItems.map(task => (
              <tr className='bg-cyan-200 m-5 flex rounded-tr-lg' key={task.name}>
               <td className='p-2 text-blue-900'>
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
