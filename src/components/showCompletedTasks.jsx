export const ShowCompletedTasks = ({
  isChecked,
  setShowCompleted,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm("Estas seguro?")) {
      cleanTasks();
    }
  };

  return (
    <div className="flex w-2/4 m-auto justify-end text-center mt-5 text-black font-bold space-x-5">
      <div className="py-2">
      

        <label onClick={handleDelete}>Show Done</label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setShowCompleted(e.target.checked)}
        ></input>
      </div>

      <button
        className="bg-white hover:bg-gray-100 text-black only:font-semibold py-2 px-3 border border-none rounded shadow-2xl"
        onClick={handleDelete}
      >
        Clear
      </button>
    </div>
  );
};
