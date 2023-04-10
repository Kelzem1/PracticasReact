import './App.css'
import { useEffect, useState } from 'react'
import { TaskCreator } from './components/TaskCreator'



function App() {

  const [taskItems, newTaskItems] = useState([])

  function createTask(taskName) {
    if(!taskItems.find(task => task.name === taskName)){
      newTaskItems([...taskItems, {name: taskName, done: false}])
    }else{
      alert("Ya existe esta tarea")
    }
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data) {
      newTaskItems(JSON.parse(data))
    }
  }, [])

//Guardara las nueva tareas
  useEffect( () =>{
    localStorage.setItem('tasks' , JSON.stringify(taskItems))
  }, [ taskItems ])


    return (
      <div className="App bg-cyan-950 text-cyan-600 w-4/4 h-screen content-center m-auto p-32">
        <TaskCreator createNewTask={createTask}/>
        <table className="tabla content-center m-auto text-xl">
          <thead>
            <tr>
              <th>Tasks</th>
            </tr>
          </thead>
          <tbody>
            {
            taskItems.map(task => (
              <tr key={task.name}>
               <td>
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
