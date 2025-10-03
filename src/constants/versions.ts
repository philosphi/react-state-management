import { type JSX } from "react";
import { ContextTodoApp } from "../apps/context/ContextTodoApp";
import { TodoList } from "../apps/local/TodoList";
import { RTKTodoApp } from "../apps/rtk/RTKTodoApp";

type VersionValue = {
  display: string;
  component: () => JSX.Element;
};

export type VersionKey = "local" | "context" | "rtk";

export const versionMap: Record<VersionKey, VersionValue> = {
  local: { display: "Local State", component: TodoList },
  context: { display: "Context API", component: ContextTodoApp },
  rtk: { display: "Redux Tool Kit", component: RTKTodoApp },
};

export const versions = Object.keys(versionMap) as VersionKey[];
