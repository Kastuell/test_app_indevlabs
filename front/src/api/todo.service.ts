import { TodoT } from "../shared/todo.types";
import { inst } from "./axios";

const TODO_URL = "todo";

export const todoService = {
  async getAll() {
    const res = await inst.get<TodoT[]>(TODO_URL);
    return res.data;
  },
  async create(todo: Pick<TodoT, "value">) {
    const res = await inst.post<TodoT>(TODO_URL, todo);
    return res.data;
  },
  async toggleStatus(id: number) {
    const res = await inst.put<TodoT>(TODO_URL + "/" + id);
    return res.data;
  },
  async delete(id: number) {
    const res = await inst.delete<TodoT>(TODO_URL + "/" + id);
    return res.data;
  },
};
