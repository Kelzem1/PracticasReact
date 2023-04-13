import './App.css'
import { useEffect, useState } from 'react'
import { TaskCreator } from './components/TaskCreator'
import { Titu } from './components/Title'
import { TaskTable } from './components/TaskTable'



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

  const toggleTask = (task) =>{
  newTaskItems(
    taskItems.map((t) => (t.name == task.name) ? {...t, done: !t.done}: t)
  )
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
      <div className="App bg-gradient-to-r from-indigo-500 to-gray-950 text-cyan-600 w-4/4 h-screen content-center m-auto p-12">
        <Titu />
        <TaskCreator createNewTask={createTask}/>
        <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
      </div>

  )
}

export default App
