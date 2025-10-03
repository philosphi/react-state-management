import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import type { Task } from "../../../types/todo";
import { useTodos } from "../hooks/useTodos";

interface TodoItemProps {
  task: Task;
}

export const TodoItem = ({ task }: TodoItemProps) => {
  const { editTask, toggleTask, deleteTask } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      editTask(task.id, inputText);
      setIsEditing(false);
    }
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleCancel = () => {
    setInputText(task.text);
    setIsEditing(false);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          onChange={handleTextChange}
          onKeyDown={handleKeyDown}
          value={inputText}
        ></input>
      ) : (
        <span onClick={() => setIsEditing(true)}>{task.text}</span>
      )}
      {isEditing ? (
        <button onClick={() => handleCancel()}>Cancel</button>
      ) : (
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      )}
    </div>
  );
};
