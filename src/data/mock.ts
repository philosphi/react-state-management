import type { Task } from "../types/todo";

export const taskList: Task[] = [
  {
    id: crypto.randomUUID(),
    text: "meal prep",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "clean pool",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "sweep house",
    completed: false,
    createdAt: new Date(),
  },
  {
    id: crypto.randomUUID(),
    text: "check on car",
    completed: true,
    createdAt: new Date(),
  },
];
