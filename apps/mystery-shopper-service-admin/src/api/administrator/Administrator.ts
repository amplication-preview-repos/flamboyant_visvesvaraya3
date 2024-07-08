import { Verification } from "../verification/Verification";
import { Task } from "../task/Task";

export type Administrator = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  email: string | null;
  verifications?: Array<Verification>;
  tasks?: Array<Task>;
};
