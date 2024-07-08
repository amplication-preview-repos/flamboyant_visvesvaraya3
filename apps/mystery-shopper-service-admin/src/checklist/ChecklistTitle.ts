import { Checklist as TChecklist } from "../api/checklist/Checklist";

export const CHECKLIST_TITLE_FIELD = "taskItem";

export const ChecklistTitle = (record: TChecklist): string => {
  return record.taskItem?.toString() || String(record.id);
};
