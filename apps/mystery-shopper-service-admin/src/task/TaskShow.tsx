import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { TASK_TITLE_FIELD } from "./TaskTitle";
import { AGENT_TITLE_FIELD } from "../agent/AgentTitle";
import { ADMINISTRATOR_TITLE_FIELD } from "../administrator/AdministratorTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="title" source="title" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
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
        <ReferenceManyField
          reference="Checklist"
          target="taskId"
          label="Checklists"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="taskItem" source="taskItem" />
            <BooleanField label="completed" source="completed" />
            <ReferenceField label="Task" source="task.id" reference="Task">
              <TextField source={TASK_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
