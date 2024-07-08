import { Administrator as TAdministrator } from "../api/administrator/Administrator";

export const ADMINISTRATOR_TITLE_FIELD = "name";

export const AdministratorTitle = (record: TAdministrator): string => {
  return record.name?.toString() || String(record.id);
};
