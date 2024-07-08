import { VerificationUpdateManyWithoutAgentsInput } from "./VerificationUpdateManyWithoutAgentsInput";
import { TaskUpdateManyWithoutAgentsInput } from "./TaskUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  name?: string | null;
  email?: string | null;
  verifications?: VerificationUpdateManyWithoutAgentsInput;
  tasks?: TaskUpdateManyWithoutAgentsInput;
};
