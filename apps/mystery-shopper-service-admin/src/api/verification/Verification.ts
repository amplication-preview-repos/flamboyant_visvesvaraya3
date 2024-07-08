import { Agent } from "../agent/Agent";
import { Administrator } from "../administrator/Administrator";

export type Verification = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  feedback: string | null;
  approved: boolean | null;
  agent?: Agent | null;
  administrator?: Administrator | null;
};
