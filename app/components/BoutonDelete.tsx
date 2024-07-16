"use client";
import React from "react";
import { deleteTodo } from "../actions/addTodo";

type Props = {
  id: string;
};

const BoutonDelete = ({ id }: Props) => {
  return (
    <button
      onClick={() => deleteTodo(id)}
      className="bg-red-500 text-white p-1 rounded-md"
    >
      Supprimer
    </button>
  );
};

export default BoutonDelete;
