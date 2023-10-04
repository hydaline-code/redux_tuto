import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/feature/usersSlice";

const AllUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Fetching users in useEffect..."); 
    dispatch(fetchUsers());
  }, [dispatch]);

  const { users, isLoading, error } = useSelector((state) => state.users);

  console.log("Users:", users); // Add this log
  console.log("isLoading:", isLoading); // Add this log
  console.log("Error:", error); // Add this log

  return (
    <div className="container">
      <h1>Users Information</h1>
      {isLoading ? (
        <p className="loading-message">Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error.message}</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name.first} {user.name.last}</li>
            
          ))}
        </ul>
      )}
      {users.map((user) => (
  <div key={user.id} className="user-card">
    <div className="user-info">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Age: {user.dob.age}</p>
      <p>Phone: {user.phone}</p>
      <p>Nationality: {user.nat}</p>
      <p>Location: {`${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
    </div>
  </div>
))}

    </div>
  );
};

export default AllUser;
