import React from "react";

const ToDoList = () => {
  return (
    <div className="flex flex-col gap-3 mt-5">
      <div className="flex gap-3 items-center p-2 border-b border-gray-300">
        <input type="radio" name="todo" id="todo" />
        <label htmlFor="todo">Faire le menage</label>
      </div>
      <div className="flex gap-3 items-center p-2 border-b border-gray-300">
        <input type="radio" name="todo" id="todo" />
        <label htmlFor="todo">Faire le menage</label>
      </div>
      <div className="flex gap-3 items-center p-2 border-b border-gray-300">
        <input type="radio" name="todo" id="todo" />
        <label htmlFor="todo">Faire le menage</label>
      </div>
    </div>
  );
};

export default ToDoList;
