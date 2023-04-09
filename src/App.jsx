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
    newTaskItems([...taskItems, {name: taskName, done: false}])
  }
    return (
      <div className="App bg-slate-900 text-white object-center">
        <TaskCreator createNewTask={createTask}/>
        <table>
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
