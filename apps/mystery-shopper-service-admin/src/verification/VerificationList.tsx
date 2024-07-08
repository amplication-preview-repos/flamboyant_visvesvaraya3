import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { ADMINISTRATOR_TITLE_FIELD } from "../administrator/AdministratorTitle";

export const VerificationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Verifications"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="feedback" source="feedback" />
        <BooleanField label="approved" source="approved" />
        <ReferenceField label="Agent" source="agent.id" reference="Agent">
          <TextField source={AGENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Administrator"
          source="administrator.id"
          reference="Administrator"
        >
          <TextField source={ADMINISTRATOR_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
