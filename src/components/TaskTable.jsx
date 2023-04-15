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
        <table className="tabla content-center m-auto text-2xl  mt-10 rounded w-1/2 opacity-90">
        <thead className=''>
          <tr>
            <th className='text-indigo-200 text-3xl'>Tasks</th>
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