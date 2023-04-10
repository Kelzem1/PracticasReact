import './App.css'
import { useState } from 'react'
import { TaskCreator } from './components/TaskCreator'



function App() {

  const [taskItems, newTaskItems] = useState([
    { name: 'mi primer tarea', done: false},
    { name: 'mi segunda tarea', done: false},
    { name: 'mi tercera tarea', done: false},
  ])

  function createTask(taskName) {
    if(!taskItems.find(task => task.name === taskName))
      newTaskItems([...taskItems, {name: taskName, done: false}])
  } 
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
