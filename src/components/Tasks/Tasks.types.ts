import type { Dispatch } from "react";

export type TasksProps = {
  tasks: string[];
  setTasks: Dispatch<string[]>;
};
