import { SortOrder } from "../../util/SortOrder";

export type VerificationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  feedback?: SortOrder;
  approved?: SortOrder;
  agentId?: SortOrder;
  administratorId?: SortOrder;
};
