import prisma from "@/lib/prisma";
import { notFound, redirect } from "next/navigation";

interface ProgramEditPageProps {
  params: {
    id: string;
  };
}

const ProgramEditPage = async ({ params: { id } }: ProgramEditPageProps) => {
  const program = await prisma.program.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  const editProgram = async (formData: FormData) => {
    // This needs to be a server action!
    "use server";

    // check the user's inputs and make sure they're valid
    const name = formData.get("name") as string;

    // create a new record in the database
    await prisma.program.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
      },
    });
    console.log(name);

    // Redirect the user back to the root route
    redirect("/");
  };

  if (!program) {
    return notFound();
  }

  return (
    <div>
      <div>Editing Program with name {program.name}</div>
      <form action={editProgram}>
        <h3 className="font-bold m-3">Edit the Program</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label className="w-12" htmlFor="name">
              Name
            </label>
            <input
              defaultValue={program.name}
              type="text"
              name="name"
              className="border rounded p-2 w-full"
            />
          </div>

          <button type="submit" className=" rounded p-2 bg-blue-200">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProgramEditPage;
