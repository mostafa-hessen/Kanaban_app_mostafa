export enum PriorityLevelEnum {
  High = "HIGH",
  Medium = "MEDIUM",
  Low = "LOW",
}

export enum TaskStatusEnum {
  ToDo = "TO DO",
  InProgress = "IN PROGRESS",
  InReview = "IN REVIEW",
  Done = "DONE",
}

export interface Task {
  id: string;
  title: string;
  description: string;
  priority?: PriorityLevelEnum;
  column: TaskStatusEnum;
}

export type Filter = {
  column?: TaskStatusEnum;
  title?: string;
  
  _page?: number;
  _per_page?: number;
};

export type TasksResponse = {
  tasks: Task[];
  total: number;
};
