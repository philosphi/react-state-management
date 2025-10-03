import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import type { Task } from "../../types/todo";

interface TodoItemProps {
  task: Task;
  handleToggleTask: (id: string) => void;
  handleDeleteTask: (id: string) => void;
  handleEditTask: (id: string, text: string) => void;
}

export const TodoItem = ({
  task,
  handleToggleTask,
  handleDeleteTask,
  handleEditTask,
}: TodoItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      handleEditTask(task.id, inputText);
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
        onChange={() => handleToggleTask(task.id)}
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
        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
      )}
    </div>
  );
};
