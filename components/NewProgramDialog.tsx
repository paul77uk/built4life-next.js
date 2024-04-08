import { createProgram } from "@/actions/actions";
import { Button } from "./ui/button";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";

export const NewProgramDialog = () => {
  const createProgramAction = createProgram.bind(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>New</Button>
      </DialogTrigger>
      <DialogContent>
        <form className="flex gap-2" action={createProgramAction}>
          <Input type="text" name="name" required />

          <DialogClose asChild>
            <Button type="submit">Create</Button>
          </DialogClose>
        </form>
      </DialogContent>
    </Dialog>
  );
};
