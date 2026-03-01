import { create } from 'zustand';
import { TaskStatusEnum, type Task } from '../types/types';

interface ModalStore {
  open: boolean;
  selectedTask: Task | null;
  column: TaskStatusEnum;
  selectedTaskId: number|string;
  openDeleteModal: boolean;

  
  openAdd: (column: TaskStatusEnum) => void;    
  openEdit: (task: Task) => void;       
  closeModal: () => void;    
  openDelete: (task: Task) => void;
  closeDelete: () => void;
  

}

export const useModalStore = create<ModalStore>((set) => ({
  open: false,
  selectedTask: null,
  column: TaskStatusEnum.ToDo, 
  selectedTaskId: "",
  openDeleteModal: false,

  openAdd: (column: TaskStatusEnum) => set({ open: true, selectedTask: null, column:column }),
  openEdit: (task) => set({ open: true, selectedTask: task, column: task.column }),
  closeModal: () => set({ open: false, selectedTask: null, selectedTaskId: "" }),

  
  openDelete: (task: Task) => set({ openDeleteModal: true, selectedTaskId: task.id }),
  closeDelete: () => set({ openDeleteModal: false, selectedTaskId: "" }),
  

}));