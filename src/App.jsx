import './App.css'
import { useState } from 'react'
import { TaskCreator } from './components/TaskCreator'



function App() {

  const [taskItems, newTaskItems] = useState([
    { name: 'mi primer tarea', done: false},
    { name: 'mi segunda tarea', done: false},
    { name: 'mi tercera tarea', done: false},
  ])
    return (
      <div className="App bg-slate-900 text-white object-center">
        <TaskCreator />
        {
          taskItems.map(task => (
            <div>
            {task.name}
            </div>
          ))
        }
      </div>

  )
}

export default App
