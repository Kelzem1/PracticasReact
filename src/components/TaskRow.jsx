export const TaksRow = ({task, toggleTask}) =>{
    return(
        <tr className='bg-gray-900 m-5 flex rounded-lg'>
            <td className='p-2 text-indigo-200'>
              {task.name}
              <input type="checkbox"
              className="static right-5"
              checked={task.done}
              onChange={() => toggleTask(task)} />
            </td>
        </tr>
    )
}