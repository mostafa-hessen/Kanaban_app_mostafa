import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    priority: {
      [PriorityLevelEnum.High]: { bg: "#ff163948", text: "#f44336" },
      [PriorityLevelEnum.Medium]: { bg: "#fff3e0", text: "#ff9800" },
      [PriorityLevelEnum.Low]: { bg: "#f1f1f1", text: "#717070" },
    },
    status: {
      [TaskStatusEnum.Done]: { bg: "#e8f5e9", text: "#4caf50" },
      [TaskStatusEnum.InProgress]: { bg: "#e3f2fd", text: "#2196f3" },
      [TaskStatusEnum.InReview]: { bg: "#fffde7", text: "#ffeb3b" },
      [TaskStatusEnum.ToDo]: { bg: "#f1f1f1", text: "#717070" },
    },

  },

typography: {
  fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
}
});

export default theme;

import "@mui/material/styles";
import {
  PriorityLevelEnum,
  TaskStatusEnum,
} from "../../../features/kanban/types/types";

declare module "@mui/material/styles" {
  interface Palette {
    priority: Record<PriorityLevelEnum, { bg: string; text: string }>;
    status: Record<TaskStatusEnum, { bg: string; text: string }>;
  }

  interface PaletteOptions {
    priority?: Partial<Record<PriorityLevelEnum, { bg: string; text: string }>>;
    status?: Partial<Record<TaskStatusEnum, { bg: string; text: string }>>;
  }
}
