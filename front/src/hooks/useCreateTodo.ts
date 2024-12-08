import { useMutation } from "@tanstack/react-query";
import { todoService } from "../api/todo.service";
import { queryClient } from "../main";
import { TodoT } from "../shared/todo.types";

function useCreateTodo() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: (todo: Pick<TodoT, "value">) => todoService.create(todo),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return { isPending, error, mutate };
}

export default useCreateTodo;
