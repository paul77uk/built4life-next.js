import { RiDeleteBinLine } from "react-icons/ri";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { deleteProgram } from "@/actions";

interface DeleteDialogProps {
  id: number;
}

export const DeleteDialog = ({ id }: DeleteDialogProps) => {
  const deleteProgramAction = deleteProgram.bind(null, id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"secondary"} className="p-2">
          <RiDeleteBinLine size={20} />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Are you sure you want to delete this program?</DialogTitle>
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
  );
};
