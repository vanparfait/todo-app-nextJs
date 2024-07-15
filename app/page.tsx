import Image from "next/image";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-96  bg-white p-3 shadow-md rounded-md min-h-80">
        <h1 className="text-lg font-bold text-center mb-6 underline">
          TODO-APP
        </h1>
        <form action="" className="flex gap-3 items-center">
          {/* <label htmlFor="todo" className="text-sm">
              Ajouter une tache
            </label> */}
          <input
            id="todo"
            type="text"
            name="todo"
            className="border border-gray-300 p-2"
          />

          <button type="submit" className="bg-blue-500 text-white rounded p-2">
            Ajouter
          </button>
        </form>
        <ToDoList />
      </div>
    </main>
  );
}
