import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api/TaskApi";
import type { Filter, Task, TaskStatusEnum } from "../types/types";

export const useTasksQuery = (filters?:Filter) => {
  return useQuery({
    queryKey: ["tasks", filters],
    queryFn: () => getTasks(filters),
  
  });
};
