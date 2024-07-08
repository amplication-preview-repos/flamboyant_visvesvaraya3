import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AgentTitle } from "../agent/AgentTitle";
import { AdministratorTitle } from "../administrator/AdministratorTitle";

export const VerificationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="feedback" multiline source="feedback" />
        <BooleanInput label="approved" source="approved" />
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
