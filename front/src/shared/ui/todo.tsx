import { Trash2 } from "lucide-react";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import useToggleStatus from "../../hooks/useToggleStatus";
import { TodoT } from "../todo.types";

interface ITodo {
  todo: TodoT;
}
export const Todo = ({ todo }: ITodo) => {
  const { id, isCompleted, value } = todo;

  const { mutate: toggle } = useToggleStatus();

  const { mutate: remove } = useDeleteTodo();

  const handleToggle = () => {
    toggle(id);
  };

  const handleRemove = () => {
    remove(id);
  };

  return (
    <div className="border-primary border text-left p-3 rounded-md">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <h3 className="font-black text-xl">Todo: #{id}</h3>
          <Trash2
            onClick={handleRemove}
            className="text-red-500 cursor-pointer hover:text-red-800 duration-300"
          />
        </div>
        <span className="font-black text-xl">
          status:{" "}
          {isCompleted ? (
            <span className="text-green-500">Completed</span>
          ) : (
            <span
              className="text-gray-500 hover:cursor-pointer hover:underline"
              onClick={handleToggle}
            >
              Uncompleted
            </span>
          )}
        </span>
      </div>
      <p>{value}</p>
    </div>
  );
};
