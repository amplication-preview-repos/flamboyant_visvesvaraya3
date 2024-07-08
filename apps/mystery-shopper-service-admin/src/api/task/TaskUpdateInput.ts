import { ChecklistUpdateManyWithoutTasksInput } from "./ChecklistUpdateManyWithoutTasksInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AdministratorWhereUniqueInput } from "../administrator/AdministratorWhereUniqueInput";

export type TaskUpdateInput = {
  title?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  checklists?: ChecklistUpdateManyWithoutTasksInput;
  agent?: AgentWhereUniqueInput | null;
  administrator?: AdministratorWhereUniqueInput | null;
};
