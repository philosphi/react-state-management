import { useAppDispatch, useAppSelector } from "../hooks/typedHooks";
import { showActive, showAll, showCompleted } from "../store/taskSlice";

export const FilterButtons = () => {
  const dispatch = useAppDispatch();
  const { filter } = useAppSelector((state) => state.tasks);

  const buttons = [
    {
      key: "all",
      label: "All",
      action: showAll,
      active: filter === "all",
    },
    {
      key: "active",
      label: "Active",
      action: showActive,
      active: filter === "active",
    },
    {
      key: "completed",
      label: "Completed",
      action: showCompleted,
      active: filter === "completed",
    },
  ];

  return (
    <div>
      {buttons.map(({ key, label, action, active }) => (
        <button
          key={key}
          style={{ fontWeight: active ? "bold" : "normal" }}
          onClick={() => dispatch(action())}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
