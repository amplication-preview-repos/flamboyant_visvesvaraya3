import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ChecklistListRelationFilter } from "../checklist/ChecklistListRelationFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AdministratorWhereUniqueInput } from "../administrator/AdministratorWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  checklists?: ChecklistListRelationFilter;
  agent?: AgentWhereUniqueInput;
  administrator?: AdministratorWhereUniqueInput;
};
