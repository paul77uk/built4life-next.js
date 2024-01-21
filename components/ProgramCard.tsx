import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { EditDialog } from "./EditDialog";
import { DeleteDialog } from "./DeleteDialog";

interface ProgramCardProps {
  id: number;
  name: string;
}

export const ProgramCard = ({ id, name }: ProgramCardProps) => {
  return (
    <Card className="w-full" key={id}>
      <CardHeader className="p-3">
        <CardTitle className="flex justify-between items-center ">
          <Link href={`/programs/${id}`} key={id}>
            {name}
          </Link>

          <div className="flex gap-1">
            <EditDialog id={id} name={name} />

            <DeleteDialog id={id} />
          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
