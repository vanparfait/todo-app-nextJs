import React from "react";
import { prisma } from "../libs/prisma";

const ToDoList = async () => {
  const todos = await prisma.toDo.findMany({
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <div className="flex flex-col gap-3 mt-5">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex gap-3 items-center p-2 border-b border-gray-300"
        >
          <input type="checkbox" name="todo" id="todo" />
          <label htmlFor="todo">{todo.titre}</label>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
