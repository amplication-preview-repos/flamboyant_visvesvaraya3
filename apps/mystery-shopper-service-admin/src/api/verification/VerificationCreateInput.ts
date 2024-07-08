import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AdministratorWhereUniqueInput } from "../administrator/AdministratorWhereUniqueInput";

export type VerificationCreateInput = {
  feedback?: string | null;
  approved?: boolean | null;
  agent?: AgentWhereUniqueInput | null;
  administrator?: AdministratorWhereUniqueInput | null;
};