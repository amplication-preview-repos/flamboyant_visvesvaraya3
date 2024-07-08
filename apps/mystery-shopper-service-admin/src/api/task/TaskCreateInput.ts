import { ChecklistCreateNestedManyWithoutTasksInput } from "./ChecklistCreateNestedManyWithoutTasksInput";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AdministratorWhereUniqueInput } from "../administrator/AdministratorWhereUniqueInput";

export type TaskCreateInput = {
  title?: string | null;
  description?: string | null;
  status?: "Option1" | null;
  checklists?: ChecklistCreateNestedManyWithoutTasksInput;
  agent?: AgentWhereUniqueInput | null;
  administrator?: AdministratorWhereUniqueInput | null;
};
