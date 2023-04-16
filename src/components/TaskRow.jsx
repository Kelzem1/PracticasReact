export const TaksRow = ({task, toggleTask}) =>{
    return(
        <tr className='bg-gray-200 mt-2 flex rounded shadow-2xl'>
            <td className=' text-black text-lg font-semibold m-auto w-full px-2 py-1'>
                {task.name}
            </td>
            <div className="flex justify-end m-auto w-1/2 p-2">
                <input type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task)} />
            </div>
        </tr>
    )
}