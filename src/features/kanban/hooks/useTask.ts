import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getTasks } from "../api/TaskApi";
import type { Filter } from "../types/types";

export const useTasksQuery = (filters?: Filter) => {
  return useQuery({
    queryKey: ["tasks", filters],
    queryFn: () => getTasks(filters),
    placeholderData: keepPreviousData, // يحافظ على الداتا القديمة لحد ما الجديدة تيجي (بيمنع الـ flicker)
  });
};
