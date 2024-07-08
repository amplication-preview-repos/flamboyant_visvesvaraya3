import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { VerificationListRelationFilter } from "../verification/VerificationListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
  verifications?: VerificationListRelationFilter;
  tasks?: TaskListRelationFilter;
};
