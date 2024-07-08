import { Task } from "../task/Task";

export type Checklist = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  taskItem: string | null;
  completed: boolean | null;
  task?: Task | null;
};
