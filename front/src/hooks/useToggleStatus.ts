import { useMutation } from "@tanstack/react-query";
import { todoService } from "../api/todo.service";
import { queryClient } from "../main";

function useToggleStatus() {
  const { isPending, error, mutate } = useMutation({
    mutationFn: (id: number) => todoService.toggleStatus(id),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
  return { isPending, error, mutate };
}

export default useToggleStatus;
