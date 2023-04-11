import './App.css'
import { useEffect, useState } from 'react'
import { TaskCreator } from './components/TaskCreator'



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
      <div className="App bg-cyan-900 text-cyan-600 w-4/4 h-screen content-center m-auto p-32">
        <TaskCreator createNewTask={createTask}/>
        <table className="tabla content-center m-auto text-2xl">
          <thead>
            <tr>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
            taskItems.map(task => (
              <tr className='bg-cyan-100 m-5 flex rounded' key={task.name}>
               <td className='p-2'>
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
