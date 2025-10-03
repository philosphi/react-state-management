import { useTodos } from "../hooks/useTodos";

export const FilterButtons = () => {
  const { filter, showActive, showAll, showCompleted } = useTodos();

  const buttons = [
    { key: "all", label: "All", action: showAll, active: filter === "all" },
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
          onClick={action}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
