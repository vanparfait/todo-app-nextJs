import React from "react";
import { prisma } from "../libs/prisma";
import BoutonDelete from "./BoutonDelete";

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
          className="flex gap-3 items-center justify-between p-2 border-b border-gray-300"
        >
          <div>
            <input type="checkbox" name={todo.titre} id="todo" />
            <label htmlFor={todo.titre}>{todo.titre}</label>
          </div>
          <div>
            <BoutonDelete id={todo.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToDoList;
