import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const createUser = async (user) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    user
  );
  return response.data;
};

export default function useCreateUser(user) {
  const queryClient = useQueryClient();

  return useMutation((user) => createUser(user), {
    onSuccess: () => queryClient.invalidateQueries("users"),
  });
}
