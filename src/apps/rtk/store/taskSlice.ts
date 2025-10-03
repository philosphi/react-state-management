import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { taskList } from "../../../data/mock";
import type { Task } from "../../../types/todo";

interface Tasks {
  tasks: Task[];
  filter: string;
}
const initialState: Tasks = {
  tasks: taskList,
  filter: "all",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.tasks.push({
        id: crypto.randomUUID(),
        text: action.payload,
        completed: false,
        createdAt: new Date(),
      });
    },
    editTask: (state, action: PayloadAction<{ id: string; text: string }>) => {
      const { id, text } = action.payload;
      const task = state.tasks.find((t) => t.id === id);
      if (task) {
        task.text = text;
      }
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
      }
    },
    showAll: (state) => {
      state.filter = "all";
    },
    showActive: (state) => {
      state.filter = "active";
    },
    showCompleted: (state) => {
      state.filter = "completed";
    },
  },
});

export const {
  addTask,
  editTask,
  toggleTask,
  deleteTask,
  showActive,
  showAll,
  showCompleted,
} = taskSlice.actions;

export default taskSlice.reducer;
