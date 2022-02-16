import React from "react";
import useCreateUser from "../query-hooks/useCreateUser";
import useEditUser from "../query-hooks/useEditUser";

export default function CreateUser() {
  const mutation = useCreateUser();
  const mutationEdit = useEditUser();

  return (
    <>
      <button
        type="button"
        onClick={() => mutation.mutate({ name: "Luke Skywalker", age: 26 })}
      >
        Create User
      </button>
      <button
        type="button"
        onClick={() => mutationEdit.mutate({ name: "Luke Skywalker", age: 26 })}
      >
        Edit User
      </button>
    </>
  );
}
