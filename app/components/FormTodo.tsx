"use client";
import React, { useRef } from "react";
import { addTodo } from "../actions/addTodo";
import BoutonSubmit from "./BoutonSubmit";

const FormTodo = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="flex gap-3 items-center"
      action={(data) => {
        //async
        addTodo(data);
        formRef.current?.reset();
      }}
      ref={formRef}
    >
      {/* <label htmlFor="todo" className="text-sm">
              Ajouter une tache
            </label> */}
      <input
        id="todo"
        type="text"
        name="toDoItem"
        required
        className="border border-gray-300 p-2"
      />

      <BoutonSubmit />
    </form>
  );
};

export default FormTodo;
