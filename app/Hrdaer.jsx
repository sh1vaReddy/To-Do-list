import React, { useState } from 'react';

const Header = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  

  let renderTask = <li className='flex justify-center'>No Task Available</li>;

  if (taskList.length > 0) {
    renderTask = taskList.map((taskItem, index) => (
      <li className="py-2" key={index}>
        <h1>{taskItem}</h1>
        <button className='bg-red-400 text-white px-4 py-2 rounded-sm font-bold' onClick={() => handleDelete(index)}>Delete</button>
      </li>
    ));
  }

  return (
    <>
      <p className="mt-7 text-5xl text-center font-bold">To Do List</p>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mt-10">
          <input
            type="text"
            className="border border-gray-300 px-4 py-2 rounded-md"
            placeholder="Enter your task here"
            value={task}
            onChange={handleChange}
          />
          <button className="border border-black rounded-md px-4 py-2 ml-4">
            Add Task
          </button>
        </div>
      </form>
      <div className="flex justify-center my-4 font-bold gap-6 ">
      <ul className="bg-white shadow-md rounded-lg p-2 w-96 ">
        {renderTask}
      </ul>
    </div>
    </>
  );
};

export default Header;
