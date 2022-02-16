import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
};

export default function useUsers() {
  return useQuery("users", fetchUsers);
}
