import { SortOrder } from "../../util/SortOrder";

export type ChecklistOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  taskItem?: SortOrder;
  completed?: SortOrder;
  taskId?: SortOrder;
};
