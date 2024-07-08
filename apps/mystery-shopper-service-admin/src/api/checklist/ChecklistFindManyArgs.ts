import { ChecklistWhereInput } from "./ChecklistWhereInput";
import { ChecklistOrderByInput } from "./ChecklistOrderByInput";

export type ChecklistFindManyArgs = {
  where?: ChecklistWhereInput;
  orderBy?: Array<ChecklistOrderByInput>;
  skip?: number;
  take?: number;
};
