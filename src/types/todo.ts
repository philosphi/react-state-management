export interface Task {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export type Filter = "all" | "active" | "completed";
