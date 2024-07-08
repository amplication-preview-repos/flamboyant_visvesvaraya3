import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ChecklistCreateInput = {
  taskItem?: string | null;
  completed?: boolean | null;
  task?: TaskWhereUniqueInput | null;
};
