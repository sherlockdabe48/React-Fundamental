import axios from "axios";
import { useQuery } from "react-query";

const fetchUser = async (userId) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

export default function useUser(userId) {
  return useQuery(["users", userId], () => fetchUser(userId));
}
