export const TaksRow = ({task, toggleTask}) =>{
    return(
        <tr className='bg-gray-400 mt-5 flex rounded-lg shadow-xl'>
            <td className='p-1 text-slate-700'>
                {task.name}
                
                <input type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task)} />
            </td>
            
              
              
            
        </tr>
    )
}