import React from "react";
import AddUser from "./Components/User/AddUser";
import UsersList from "./Components/User/UsersList";

function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
