import prisma from "@/lib/prisma";
import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

export default async function Home() {
  noStore();
  const programs = await prisma.program.findMany();

  const renderedPrograms = programs.map((program) => (
    <Link
      href={`/programs/${program.id}`}
      key={program.id}
      className="flex justify-between items-center p-2 border rounded"
    >
      <div>{program.name}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl font-bold">Programs</h1>
        <Link href={"/programs/new"} className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedPrograms}</div>
    </div>
  );
}
