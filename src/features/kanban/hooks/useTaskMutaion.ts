import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, updateTask, deleteTask } from "../api/TaskApi";


export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
            },
  });
};

export const useDeleteTask = () => {
  const queryClient = useQueryClient();
    return useMutation({
        
    mutationFn: (id: number|string) => deleteTask(id),
    onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["tasks"] });
            },
  });
};

