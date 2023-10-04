import React from "react";
import { useSelector } from "react-redux";

//Import useSelector and destructure your users, isLoading and error from your users state
const alluser = () => {
  
  const {users, isLoading, error }= useSelector((state) => state.users);

return (
  <div>
    <h1>All-Users</h1>
    { isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.firstName} {user.lastName}</li>
      ))}
    </ul>
     )}
  </div>
);
}

