import { useState, type ChangeEvent } from "react";

interface AddItemProps {
  handleAddTask: (text: string) => void;
}

export const AddItem = ({ handleAddTask }: AddItemProps) => {
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
          handleAddTask(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
};
