import { createSelector } from "@reduxjs/toolkit";
import type { Task } from "../../../types/todo";
import type { RootState } from "./store";

export const selectTasks = (state: RootState) => state.tasks.tasks;
export const selectFilter = (state: RootState) => state.tasks.filter;

export const selectFilteredTasks = createSelector(
  [selectTasks, selectFilter],
  (tasks, filter) => {
    switch (filter) {
      case "active":
        return tasks.filter((t: Task) => !t.completed);
      case "completed":
        return tasks.filter((t: Task) => t.completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskStats = createSelector(
  [selectTasks],
  (tasks: Task[]) => ({
    total: tasks.length,
    completed: tasks.filter((t: Task) => t.completed).length,
    active: tasks.filter((t) => !t.completed).length,
  })
);
