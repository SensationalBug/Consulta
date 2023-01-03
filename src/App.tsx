import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ProSidebarProvider } from "react-pro-sidebar";

import UserProvider from "./context/userContext";
import { LoginPage } from "./components/LoginPage";

const App = () => {
  return (
    <UserProvider>
      <ProSidebarProvider>
        <div className="App">
          <LoginPage />
        </div>
      </ProSidebarProvider>
    </UserProvider>
  );
};

export default App;
