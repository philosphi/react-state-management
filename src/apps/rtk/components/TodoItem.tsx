import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import type { Task } from "../../../types/todo";
import { useAppDispatch } from "../hooks/typedHooks";
import { deleteTask, editTask, toggleTask } from "../store/taskSlice";

interface TodoItemProps {
  task: Task;
}

export const TodoItem = ({ task }: TodoItemProps) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(task.text);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      dispatch(editTask({ id: task.id, text: inputText }));
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
        onChange={() => dispatch(toggleTask(task.id))}
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
        <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
      )}
    </div>
  );
};
