import { revalidatePath } from "next/cache";
import ToDoList from "./components/ToDoList";
import { prisma } from "./libs/prisma";

export default function Home() {
  const addTodo = async (formData: FormData) => {
    "use server";
    const todo = formData.get("toDoItem");
    await prisma.toDo.create({
      data: {
        titre: todo as string,
        status: "A faire",
      },
    });
    revalidatePath("/");
    console.log("toDo Ajoute");
  };

  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-96  bg-white p-3 shadow-md rounded-md min-h-80">
        <h1 className="text-lg font-bold text-center mb-6 underline">
          TODO-APP
        </h1>
        <form className="flex gap-3 items-center" action={addTodo}>
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

          <button type="submit" className="bg-blue-500 text-white rounded p-2">
            Ajouter
          </button>
        </form>
        <ToDoList />
      </div>
    </main>
  );
}
