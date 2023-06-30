import axios from "axios";
import { Todo } from "../types";

const todoApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

type GetTodosParams = {
  page?: number;
  limit?: number;
};

export const getTodos = (params?: GetTodosParams) =>
  todoApi
    .get<Todo[]>("/todos", {
      params: {
        _page: params?.page,
        _limit: params?.limit,
      },
    })
    .then((res) => res.data);
