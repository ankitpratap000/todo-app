import React, { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);  // Store users
  const [loading, setLoading] = useState(true);  // Loading state

  // Function to fetch users
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);  // Store users in state
    } catch (error) {
      console.error("Error fetching users:", error);
    }
    setLoading(false);
  };

  // Fetch users when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>👥 User List</h2>
      {loading ? <p>Loading...</p> : (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> ({user.email})
            </li>
          ))}
        </ul>
      )}
      <button onClick={fetchUsers}>🔄 Refresh Users</button>
    </div>
  );
}

export default Users;
