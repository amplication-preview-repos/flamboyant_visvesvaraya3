import { VerificationUpdateManyWithoutAdministratorsInput } from "./VerificationUpdateManyWithoutAdministratorsInput";
import { TaskUpdateManyWithoutAdministratorsInput } from "./TaskUpdateManyWithoutAdministratorsInput";

export type AdministratorUpdateInput = {
  name?: string | null;
  email?: string | null;
  verifications?: VerificationUpdateManyWithoutAdministratorsInput;
  tasks?: TaskUpdateManyWithoutAdministratorsInput;
};
