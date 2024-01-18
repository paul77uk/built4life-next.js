import prisma from "@/lib/prisma";
import Link from "next/link";
import { notFound } from "next/navigation";
import { deleteProgram } from "@/actions";

interface ProgramShowPageProps {
  params: {
    id: string;
  };
}

const ProgramShowPage = async ({ params: { id } }: ProgramShowPageProps) => {
  // wait 2 seconds
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // can use findFirst or findUnique
  const program = await prisma.program.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!program) {
    notFound();
  }

  const deleteProgramAction = deleteProgram.bind(null, parseInt(id));

  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{program.name}</h1>
        <div className="flex gap-4">
          <Link href={`/programs/${id}/edit`} className="p-2 border rounded">
            Edit
          </Link>
          <form action={deleteProgramAction}>
            <button className="p-2 border rounded">Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ProgramShowPage;
