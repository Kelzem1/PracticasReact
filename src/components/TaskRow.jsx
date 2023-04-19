export const TaksRow = ({task, toggleTask}) =>{
    return(
        <tr className='bg-gray-300 mt-2 flex rounded shadow innner'>
            <td className=' text-black text-lg font-semibold m-auto w-full px-2 py-1'>
                {task.name}
            </td>
            <div className="flex justify-end m-auto w-1/2 p-2">
                <input type="checkbox"
                className="accent-teal-700 w-7 h-6"
                checked={task.done}
                onChange={() => toggleTask(task)} />
            </div>
        </tr>
    )
}