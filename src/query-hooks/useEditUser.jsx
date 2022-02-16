import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const editUser = async (user) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  return response.data;
};

export default function useEditUser(user) {
  const queryClient = useQueryClient();

  return useMutation((user) => editUser(user), {
    onSuccess: (data) => queryClient.setQueryData(["users", 10], data),
  });
}
