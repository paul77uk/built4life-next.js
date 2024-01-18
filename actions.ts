"use server";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export const editProgramAction = async (id: string, name: string) => {
  console.log("editProgram called");
};

export const deleteProgram = async (id: number) => {
  await prisma.program.delete({
    where: {
      id,
    },
  });

  redirect("/");
};
