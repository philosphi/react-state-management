import { Provider } from "react-redux";
import { TodoList } from "./components/TodoList";
import { store } from "./store/store";

export const RTKTodoApp = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
};
