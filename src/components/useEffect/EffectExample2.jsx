import { useEffect, useState } from "react";

const EffectExample2 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);
  
  return (
    <div>
      <h1>useEffect</h1>
      <p>Example 1: Data Fetching</p>
      <div>
        <ul>
            <h1>Users</h1>
          {users.map((user) => (
            <h3 key={user.id}>{user.name}</h3>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EffectExample2;
