import useGetTodos from "../../hooks/useGetTodos";
import { Todo } from "./todo";

export const TodoList = () => {
  const { data, isPending, error } = useGetTodos();

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Something went wrong...</div>;

  return (
    <div className="border border-primary rounded-md mx-auto p-4 mt-10 text-center">
      <h2 className="text-bold text-4xl">TODO list</h2>
      {data?.length == 0 && <div className="mt-10">No tasks to display</div>}
      <div className="grid grid-cols-3 gap-3 mt-8">
        {data?.map((item) => (
          <Todo key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
};
