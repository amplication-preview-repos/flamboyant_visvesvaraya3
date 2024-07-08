import { Checklist } from "../checklist/Checklist";
import { Agent } from "../agent/Agent";
import { Administrator } from "../administrator/Administrator";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  status?: "Option1" | null;
  checklists?: Array<Checklist>;
  agent?: Agent | null;
  administrator?: Administrator | null;
};
