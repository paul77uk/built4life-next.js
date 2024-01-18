import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const ProgramCreatePage = () => {
  const createProgram = async (formData: FormData) => {
    // This needs to be a server action!
    "use server";

    // check the user's inputs and make sure they're valid
    const name = formData.get("name") as string;

    // create a new record in the database
    await prisma.program.create({
      data: {
        name,
      },
    });
    console.log(name);

    revalidatePath("/");
    // Redirect the user back to the root route
    redirect("/");
  };

  return (
    <form action={createProgram}>
      <h3 className="font-bold m-3">Create a Program</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            required
            className="border rounded p-2 w-full"
            id="name"
          />
        </div>

        <button type="submit" className=" rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
};
export default ProgramCreatePage;
