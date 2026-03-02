import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getTasks } from "../api/TaskApi";
import type { Filter } from "../types/types";
import { useSearchStore } from "../store/searchStore";

export const useTasksQuery = (filters?: Filter) => {
  const { search } = useSearchStore();

  const combinedFilters = {
    ...filters,
    
    ...(search ? { title: search } : {}),
  };

  return useQuery({
    queryKey: ["tasks", filters, search],
    queryFn: () => getTasks(combinedFilters),
    placeholderData: keepPreviousData,
  });
};
