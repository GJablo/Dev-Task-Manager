import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea} from "./ui/textarea";
import { Button } from "./ui/button";
import { useState } from "react";

export default function TaskDialog({ onSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Task</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New Task</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Task description"
          className={"mt-2"}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <DialogFooter className={"mt-4"}>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleCreate}>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
