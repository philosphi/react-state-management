import { useState, type ChangeEvent } from "react";
import { useTodos } from "../hooks/useTodos";

export const AddItem = () => {
  const { addTask } = useTodos();
  const [inputText, setInputText] = useState("");

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleTextChange} />
      <button
        type="submit"
        disabled={inputText.trim() === ""}
        onClick={() => {
          addTask(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
};
