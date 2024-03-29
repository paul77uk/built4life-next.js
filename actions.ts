"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createProgram = async (formData: FormData) => {
  // check the user's inputs and make sure they're valid
  const name = formData.get("name") as string;

  // create a new record in the database
  await prisma.program.create({
    data: {
      name,
    },
  });

  revalidatePath("/");
  // Redirect the user back to the root route
  // redirect("/");
};

export const editProgram = async (id: number, formData: FormData) => {
  // check the user's inputs and make sure they're valid
  const name = formData.get("name") as string;

  // create a new record in the database
  await prisma.program.update({
    where: {
      id,
    },
    data: {
      name,
    },
  });

  revalidatePath("/");
  // Redirect the user back to the root route
  // redirect("/");
};

export const deleteProgram = async (id: number) => {
  await prisma.program.delete({
    where: {
      id,
    },
  });

  // refresh the cache on the homepage to show the updated list of programs
  revalidatePath("/");

  // redirect("/");
};
