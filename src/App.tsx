import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UserProvider from "./context/userContext";
import { LoginPage } from "./components/LoginPage";

const App = () => {
  return (
    <UserProvider>
      <div className="App">
        <LoginPage />
      </div>
    </UserProvider>
  );
};

export default App;

