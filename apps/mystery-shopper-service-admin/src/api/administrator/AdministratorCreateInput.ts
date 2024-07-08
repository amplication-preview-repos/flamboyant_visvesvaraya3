import { VerificationCreateNestedManyWithoutAdministratorsInput } from "./VerificationCreateNestedManyWithoutAdministratorsInput";
import { TaskCreateNestedManyWithoutAdministratorsInput } from "./TaskCreateNestedManyWithoutAdministratorsInput";

export type AdministratorCreateInput = {
  name?: string | null;
  email?: string | null;
  verifications?: VerificationCreateNestedManyWithoutAdministratorsInput;
  tasks?: TaskCreateNestedManyWithoutAdministratorsInput;
};
