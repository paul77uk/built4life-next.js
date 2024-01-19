import { FiEdit } from "react-icons/fi";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { editProgram } from "@/actions";

interface EditDialogProps {
  id: number;
  name: string;
}

export const EditDialog = ({ id, name }: EditDialogProps) => {
  const editProgramAction = editProgram.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="p-2">
          <FiEdit size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form className="flex gap-2" action={editProgramAction}>
          <Input defaultValue={name} type="text" name="name" required />
          <DialogClose asChild>
            <Button type="submit">Edit</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};
