import prisma from "@/lib/prisma";
import { NewProgramDialog } from "@/components/NewProgramDialog";
import { ProgramCard } from "@/components/ProgramCard";

// export const dynamic = "force-dynamic";

export default async function Home() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  const programs = await prisma.program.findMany({
    where: {
      userId: "a1c1d3a7-15cc-457d-b6d7-6a96fe398114",
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return (
    <div>
      <div className="flex my-2 justify-between items-center px-1">
        <h1 className="text-xl font-bold my-4">Programs</h1>
        <NewProgramDialog />
      </div>
      <div className="flex flex-col gap-2">
        {programs.map(({ id, name }) => (
          <ProgramCard key={id} id={id} name={name} />
        ))}
      </div>
    </div>
  );
}
