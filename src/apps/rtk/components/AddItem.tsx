import { useState, type ChangeEvent } from "react";
import { useAppDispatch } from "../hooks/typedHooks";
import { addTask } from "../store/taskSlice";

export const AddItem = () => {
  const dispatch = useAppDispatch();
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
          dispatch(addTask(inputText));
          setInputText("");
        }}
      >
        Add
      </button>
    </div>
  );
};
