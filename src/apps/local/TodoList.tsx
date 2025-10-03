import { useState } from "react";
import { taskList } from "../../data/mock";
import type { Filter, Task } from "../../types/todo";
import { AddItem } from "./AddItem";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>(taskList);
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = (text: string) => {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: new Date(),
      },
    ]);
  };

  const toggleTask = (id: Task["id"]) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
            }
          : t
      )
    );
  };

  const deleteTask = (id: Task["id"]) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id: Task["id"], text: string) => {
    setTasks(
      tasks.map((t) => {
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
  };

  const getFilteredTasks = () => {
    switch (filter) {
      case "active": {
        return tasks.filter((t) => !t.completed);
      }
      case "completed": {
        return tasks.filter((t) => t.completed);
      }
      default: {
        return tasks;
      }
    }
  };

  return (
    <>
      <div>
        <button
          style={{ fontWeight: filter === "all" ? "bold" : "normal" }}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          style={{ fontWeight: filter === "active" ? "bold" : "normal" }}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          style={{ fontWeight: filter === "completed" ? "bold" : "normal" }}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>
      <div>
        {getFilteredTasks().map((task) => (
          <div key={task.id}>
            <TodoItem
              task={task}
              handleToggleTask={toggleTask}
              handleDeleteTask={deleteTask}
              handleEditTask={editTask}
            />
          </div>
        ))}
        <AddItem handleAddTask={addTask} />
      </div>
    </>
  );
};
