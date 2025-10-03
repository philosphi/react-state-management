import type { Task } from "../../../types/todo";
import { useAppSelector } from "../hooks/typedHooks";
import { selectFilteredTasks } from "../store/selectors";
import { AddItem } from "./AddItem";
import { FilterButtons } from "./FilterButtons";
import { TodoItem } from "./TodoItem";
export const TodoList = () => {
  const filteredTasks = useAppSelector(selectFilteredTasks);

  return (
    <>
      <FilterButtons />
      <div>
        {filteredTasks.map((task: Task) => (
          <div key={task.id}>
            <TodoItem task={task} />
          </div>
        ))}
        <AddItem />
      </div>
    </>
  );
};
