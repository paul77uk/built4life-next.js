import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { FiEdit } from "react-icons/fi";
import { deleteProgram, editProgram } from "@/actions";
import { Input } from "./ui/input";
import { RiDeleteBinLine } from "react-icons/ri";
import { EditDialog } from "./EditDialog";
import { DeleteDialog } from "./DeleteDialog";

interface ProgramCardProps {
  id: number;
  name: string;
}

export const ProgramCard = ({ id, name }: ProgramCardProps) => {
  const editProgramAction = editProgram.bind(null, id);
  const deleteProgramAction = deleteProgram.bind(null, id);

  return (
    <Card className="w-full" key={id}>
      <CardHeader className="p-3">
        <CardTitle className="flex justify-between items-center ">
          <Link href={`/programs/${id}`} key={id}>
            {name}
          </Link>

          <div className="flex gap-2">

            <EditDialog id={id} name={name} />

            <DeleteDialog id={id} />

          </div>
        </CardTitle>
      </CardHeader>
    </Card>
  );
};
