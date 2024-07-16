//"use client";
import React from "react";
import { useFormStatus } from "react-dom";
const BoutonSubmit = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white rounded p-2 disabled:bg-gray-300 disabled:text-gray-500"
      disabled={pending}
    >
      {pending ? "En cours..." : "Ajouter"}
    </button>
  );
};

export default BoutonSubmit;
