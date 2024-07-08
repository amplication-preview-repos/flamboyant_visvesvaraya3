import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type ChecklistUpdateInput = {
  taskItem?: string | null;
  completed?: boolean | null;
  task?: TaskWhereUniqueInput | null;
};
