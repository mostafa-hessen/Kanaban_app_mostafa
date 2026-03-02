import { api } from "../../../shared/lib/api";
import type { Filter, Task } from "../types/types";
import type { TasksResponse } from "../types/types";

// ملاحظه حصل هنا معايا مشكلها  بسبب الاصدارات المختلفه من json server
// بقي بيستخدم _per_page بدل من _limit
export const getTasks = async (filters?: Filter): Promise<TasksResponse> => {
  const response = await api.get("/tasks", {
    params: {
      ...(filters?.column ? { column: filters.column } : {}),
      ...(filters?.title ? { title_like: filters.title } : {}), // ✅
      _page: filters?._page ?? 1,
      _limit: filters?._per_page ?? 10, // ✅ v0.17 بيستخدم _limit مش _per_page
    },
  });
  const res = response.data;

  // json-server v1: { data: Task[], items: number, pages: number ... }
  if (
    res &&
    typeof res === "object" &&
    "data" in res &&
    Array.isArray(res.data)
  ) {
    return {
      tasks: res.data,
      total: res.items ?? 0,
    };
  }

  const total = parseInt(response.headers["x-total-count"] || "0", 10);
  return {
    tasks: Array.isArray(res) ? res : [],
    total,
  };
};

export const createTask = async (task: Omit<Task, "id">): Promise<Task> => {
  const { data } = await api.post("/tasks", task);
  return data;
};

export const updateTask = async ({
  id,
  updatedFields,
}: {
  id: string | number;
  updatedFields: Partial<Task>;
}): Promise<Task> => {
  const { data } = await api.patch(`/tasks/${id}`, updatedFields);
  return data;
};

export const deleteTask = async (id: number | string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};
