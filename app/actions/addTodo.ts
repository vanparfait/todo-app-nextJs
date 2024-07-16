"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../libs/prisma";

export const addTodo = async (formData: FormData) => {
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

export const deleteTodo = async (id: string) => {
  await prisma.toDo.delete({
    where: {
      id,
    },
  });
  revalidatePath("/");
};
