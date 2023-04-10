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
      <div className="App bg-slate-900 text-white w-1/4 content-center m-auto mt-12">
        <TaskCreator createNewTask={createTask}/>
        <table className="tabla content-center m-auto p-5">
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
