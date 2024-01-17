import prisma from "@/lib/prisma";

export default async function Home() {
  const programs = await prisma.program.findMany();

  const renderedPrograms = programs.map((program) => (
    <div key={program.id}>{program.name}</div>
  ));

  return renderedPrograms
}
