import { TaksRow } from "./TaskRow"

export const TaskTable =({tasks, toggleTask, showCompleted = false}) =>{
  
  
  const taksTableRowx = (doneValue) =>{
    return(
        
        tasks
        .filter(task=> task.done === doneValue)
        .map(task => (
        <TaksRow task={task} key={task.name} toggleTask={toggleTask} />
        ))
      
    )
  }  
  
  return(
        <table className="tabla justify-start m-auto lg:w-1/2 w-full content-center text-2xl mt-12 rounded">
        <thead className=''>
          <tr>
            <th className='text-black text-3xl text-left font-sans'>TASK</th>
          </tr>
        </thead>
        <tbody>
          {
          taksTableRowx(showCompleted)
        }
        </tbody>
      </table>
    )
}