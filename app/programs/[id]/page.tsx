import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

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

  return <div>{program.name}</div>;
};
export default ProgramShowPage;
