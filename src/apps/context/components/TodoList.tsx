import { useTodos } from "../hooks/useTodos";
import { AddItem } from "./AddItem";
import { FilterButtons } from "./FilterButtons";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { filteredTasks } = useTodos();

  return (
    <>
      <FilterButtons />
      <div>
        {filteredTasks.map((task) => (
          <div key={task.id}>
            <TodoItem task={task} />
          </div>
        ))}
        <AddItem />
      </div>
    </>
  );
};
