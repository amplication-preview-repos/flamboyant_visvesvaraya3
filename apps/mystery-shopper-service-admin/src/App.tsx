import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdministratorList } from "./administrator/AdministratorList";
import { AdministratorCreate } from "./administrator/AdministratorCreate";
import { AdministratorEdit } from "./administrator/AdministratorEdit";
import { AdministratorShow } from "./administrator/AdministratorShow";
import { VerificationList } from "./verification/VerificationList";
import { VerificationCreate } from "./verification/VerificationCreate";
import { VerificationEdit } from "./verification/VerificationEdit";
import { VerificationShow } from "./verification/VerificationShow";
import { AgentList } from "./agent/AgentList";
import { AgentCreate } from "./agent/AgentCreate";
import { AgentEdit } from "./agent/AgentEdit";
import { AgentShow } from "./agent/AgentShow";
import { TaskList } from "./task/TaskList";
import { TaskCreate } from "./task/TaskCreate";
import { TaskEdit } from "./task/TaskEdit";
import { TaskShow } from "./task/TaskShow";
import { ChecklistList } from "./checklist/ChecklistList";
import { ChecklistCreate } from "./checklist/ChecklistCreate";
import { ChecklistEdit } from "./checklist/ChecklistEdit";
import { ChecklistShow } from "./checklist/ChecklistShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MysteryShopperService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Administrator"
          list={AdministratorList}
          edit={AdministratorEdit}
          create={AdministratorCreate}
          show={AdministratorShow}
        />
        <Resource
          name="Verification"
          list={VerificationList}
          edit={VerificationEdit}
          create={VerificationCreate}
          show={VerificationShow}
        />
        <Resource
          name="Agent"
          list={AgentList}
          edit={AgentEdit}
          create={AgentCreate}
          show={AgentShow}
        />
        <Resource
          name="Task"
          list={TaskList}
          edit={TaskEdit}
          create={TaskCreate}
          show={TaskShow}
        />
        <Resource
          name="Checklist"
          list={ChecklistList}
          edit={ChecklistEdit}
          create={ChecklistCreate}
          show={ChecklistShow}
        />
      </Admin>
    </div>
  );
};

export default App;
