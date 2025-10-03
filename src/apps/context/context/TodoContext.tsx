import { createContext } from "react";
import type { Filter, Task } from "../../../types/todo";

export type TodoContextType = {
  tasks: Task[];
  filter: Filter;
  showAll: () => void;
  showCompleted: () => void;
  showActive: () => void;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
  editTask: (id: string, text: string) => void;
  addTask: (text: string) => void;
  filteredTasks: Task[];
};
export const TodoContext = createContext<TodoContextType | undefined>(
  undefined
);
