import { TodoList } from "./components/TodoList";
import { TodoProvider } from "./context/TodoProvider";

export const ContextTodoApp = () => {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
};
