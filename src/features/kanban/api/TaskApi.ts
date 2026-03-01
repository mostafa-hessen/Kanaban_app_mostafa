import { api } from '../../../shared/lib/api';
import type { Filter, Task, TaskStatusEnum } from '../types/types';
import type { TasksResponse } from '../types/types';


// export const getTasks = async (filters?:Filter): Promise<Task[]> => {
//   const { data } = await api.get('/tasks', { params: filters });
//   return data;
// };



export const getTasks = async (filters?: Filter): Promise<TasksResponse> => {
  const response = await api.get<Task[]>('/tasks', { params: filters });
  const total = parseInt(response.headers['x-total-count'] || '0', 10); // العدد الكلي للمهام
  return { tasks: response.data, total };
};

export const createTask = async (task: Omit<Task, 'id'>): Promise<Task> => {
  const { data } = await api.post('/tasks', task);
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

export const deleteTask = async (id: number|string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};