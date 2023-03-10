import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = (props) => {
  const [user, setUser] = useState(true);

  const userState = () => (user ? setUser(false) : setUser(true));

  return (
    <UserContext.Provider value={{ user, userState }}>
      {props.children}
    </UserContext.Provider>
  );
};


export default UserProvider