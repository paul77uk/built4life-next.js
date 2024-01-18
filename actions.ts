"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// export const editProgramAction = async (id: string, name: string) => {
//   console.log("editProgram called");
// };

export const deleteProgram = async (id: number) => {
  await prisma.program.delete({
    where: {
      id,
    },
  });

  // refresh the cache on the homepage to show the updated list of programs
  revalidatePath("/");

  redirect("/");
};
