import { TaksRow } from "./TaskRow"

export const TaskTable =({tasks, toggleTask}) =>{
    return(
        <table className="tabla content-center m-auto text-2xl bg-indigo-800 mt-10 rounded w-1/2 opacity-90">
        <thead className=''>
          <tr>
            <th className='text-gray-900'>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {
          tasks.map(task => (
          <TaksRow task={task} key={task.name} toggleTask={toggleTask} />
          ))
        }
        </tbody>
      </table>
    )
}