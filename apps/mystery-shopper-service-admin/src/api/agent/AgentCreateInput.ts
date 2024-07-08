import { VerificationCreateNestedManyWithoutAgentsInput } from "./VerificationCreateNestedManyWithoutAgentsInput";
import { TaskCreateNestedManyWithoutAgentsInput } from "./TaskCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  name?: string | null;
  email?: string | null;
  verifications?: VerificationCreateNestedManyWithoutAgentsInput;
  tasks?: TaskCreateNestedManyWithoutAgentsInput;
};
