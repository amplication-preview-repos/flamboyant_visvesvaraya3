import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { AgentTitle } from "../agent/AgentTitle";
import { AdministratorTitle } from "../administrator/AdministratorTitle";

export const VerificationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
