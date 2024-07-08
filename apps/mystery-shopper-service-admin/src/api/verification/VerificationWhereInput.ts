import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AdministratorWhereUniqueInput } from "../administrator/AdministratorWhereUniqueInput";

export type VerificationWhereInput = {
  id?: StringFilter;
  feedback?: StringNullableFilter;
  approved?: BooleanNullableFilter;
  agent?: AgentWhereUniqueInput;
  administrator?: AdministratorWhereUniqueInput;
};
