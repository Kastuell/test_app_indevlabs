import { useQuery } from "@tanstack/react-query";
import { todoService } from "../api/todo.service";

function useGetTodos() {
  const { isPending, error, data } = useQuery({
    queryKey: ["todos"],
    queryFn: () => todoService.getAll(),
  });
  return { isPending, error, data };
}

export default useGetTodos;
