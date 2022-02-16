import React from "react";
import useUser from "../query-hooks/useUser";

export default function User({ selectedUser }) {
  const user = useUser(selectedUser);
  return (
    <div>
      {user.isLoading && selectedUser && <p>Loading User...</p>}
      {user.isError && <p>Could not load User...</p>}
      {user.isSuccess && (
        <div>
          <p>{user.data.name}</p>
          {/* <p>{user.data.email}</p> */}
        </div>
      )}
    </div>
  );
}
