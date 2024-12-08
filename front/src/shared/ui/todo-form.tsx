import { useState } from "react";
import useCreateTodo from "../../hooks/useCreateTodo";

export const TodoForm = () => {
  const [value, setValue] = useState<string>("");

  const { mutate } = useCreateTodo();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ value });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="border border-primary rounded-md w-min mx-auto p-4 mt-20"
    >
      <h2 className="text-3xl">TODO form</h2>
      <div className="flex mt-10">
        <input
          className="bg-transparent border border-primary text-2xl border-r-0 focus:outline-none"
          value={value}
          type="text"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="bg-third p-2 border border-primary border-l-0" type="submit">
          Add todo
        </button>
      </div>
    </form>
  );
};
