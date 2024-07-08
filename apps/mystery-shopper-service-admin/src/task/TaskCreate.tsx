import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
} from "react-admin";

import { ChecklistTitle } from "../checklist/ChecklistTitle";
import { AgentTitle } from "../agent/AgentTitle";
import { AdministratorTitle } from "../administrator/AdministratorTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="title" source="title" />
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceArrayInput
          source="checklists"
          reference="Checklist"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ChecklistTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="agent.id" reference="Agent" label="Agent">
          <SelectInput optionText={AgentTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="administrator.id"
          reference="Administrator"
          label="Administrator"
        >
          <SelectInput optionText={AdministratorTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
