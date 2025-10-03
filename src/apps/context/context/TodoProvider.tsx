import { useCallback, useMemo, useState } from "react";
import { taskList } from "../../../data/mock";
import type { Filter, Task } from "../../../types/todo";
import { TodoContext, type TodoContextType } from "./TodoContext";
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>(taskList);
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = useCallback((text: string) => {
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  }, []);

  const toggleTask = useCallback((id: Task["id"]) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            completed: !t.completed,
          };
        } else {
          return t;
        }
      })
    );
  }, []);

  const deleteTask = useCallback((id: Task["id"]) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const editTask = useCallback((id: Task["id"], text: string) => {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id === id) {
          return {
            ...t,
            text,
          };
        } else {
          return t;
        }
      })
    );
  }, []);

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "active":
        return tasks.filter((t) => !t.completed);
      case "completed":
        return tasks.filter((t) => t.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  const showActive = useCallback(() => setFilter("active"), []);
  const showAll = useCallback(() => setFilter("all"), []);
  const showCompleted = useCallback(() => setFilter("completed"), []);

  const todoProviderValue: TodoContextType = {
    tasks,
    filter,
    showActive,
    showAll,
    showCompleted,
    editTask,
    toggleTask,
    addTask,
    deleteTask,
    filteredTasks,
  };

  return (
    <TodoContext.Provider value={todoProviderValue}>
      {children}
    </TodoContext.Provider>
  );
};
