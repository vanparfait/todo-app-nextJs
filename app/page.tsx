import FormTodo from "./components/FormTodo";
import ToDoList from "./components/ToDoList";

export default function Home() {
  return (
    <main className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-96  bg-white p-3 shadow-md rounded-md min-h-80">
        <h1 className="text-lg font-bold text-center mb-6 underline">
          TODO-APP
        </h1>
        <FormTodo />

        <ToDoList />
      </div>
    </main>
  );
}
