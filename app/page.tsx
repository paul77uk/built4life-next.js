import prisma from "@/lib/prisma";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { deleteProgram } from "@/actions";

export default async function Home() {
  const programs = await prisma.program.findMany();

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

    revalidatePath("/");
    // Redirect the user back to the root route
    // redirect("/");
  };

  const renderedPrograms = programs.map(({ id, name }) => {
    const deleteProgramAction = deleteProgram.bind(null, id);
    const editProgram = async (formData: FormData) => {
      // This needs to be a server action!
      "use server";

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

    // if (!program) {
    //   return notFound();
    // }
    return (
      <div key={id}>
        <Card className="w-full">
          <CardHeader className="p-3">
            <CardTitle className="flex justify-between items-center ">
              <Link href={`/programs/${id}`} key={id}>
                {name}
              </Link>

              <div className="flex gap-2">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={"secondary"} className="p-2">
                      <FiEdit size={20} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <form className="flex gap-2" action={editProgram}>
                      <Input
                        defaultValue={name}
                        type="text"
                        name="name"
                        required
                      />
                      <DialogClose asChild>
                        <Button type="submit">Edit</Button>
                      </DialogClose>
                    </form>
                  </DialogContent>
                </Dialog>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={"secondary"} className="p-2">
                      <RiDeleteBinLine size={20} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>
                      Are you sure you want to delete this program?
                    </DialogTitle>
                    <div className="flex gap-2">
                      <DialogClose asChild>
                        <Button variant={"secondary"}>Cancel</Button>
                      </DialogClose>
                      <form action={deleteProgramAction}>
                        <Button>Delete</Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <div className="flex my-2 justify-between items-center">
        <h1 className="text-xl font-bold">Programs</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>New</Button>
          </DialogTrigger>
          <DialogContent>
            <form className="flex gap-2" action={createProgram}>
              <Input type="text" name="name" required />
              <DialogClose asChild>
                <Button type="submit">Create</Button>
              </DialogClose>
            </form>
          </DialogContent>
        </Dialog>
        {/* <Button asChild>
          <Link href={"/programs/new"}>New</Link>
        </Button> */}
      </div>
      <div className="flex flex-col gap-2">{renderedPrograms}</div>

      {/* <Input type="text" placeholder="Name of your program" /> */}
    </div>
  );
}
