import { createTheme, type PaletteMode } from "@mui/material/styles";
import {
  PriorityLevelEnum,
  TaskStatusEnum,
} from "../../../features/kanban/types/types";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      background: {
        default: mode === "light" ? "#f5f7f9" : "#0a0b0bff",
        paper: mode === "light" ? "#ffffff" : "#1b1c1dff",
      },
      priority: {
        [PriorityLevelEnum.High]: {
          bg: mode === "light" ? "#fce4ec" : "rgba(244, 67, 54, 0.15)",
          text: mode === "light" ? "#d32f2f" : "#f44336",
        },
        [PriorityLevelEnum.Medium]: {
          bg: mode === "light" ? "#fff3e0" : "rgba(255, 152, 0, 0.15)",
          text: mode === "light" ? "#ed6c02" : "#ffa726",
        },
        [PriorityLevelEnum.Low]: {
          bg: mode === "light" ? "#f1f1f1" : "rgba(113, 112, 112, 0.15)",
          text: mode === "light" ? "#717070" : "#bdbdbd",
        },
      },
      status: {
        [TaskStatusEnum.Done]: { bg: "#4caf50", text: "#4caf50" },
        [TaskStatusEnum.InProgress]: { bg: "#2196f3", text: "#2196f3" },
        [TaskStatusEnum.InReview]: { bg: "#ffeb3b", text: "#ffeb3b" },
        [TaskStatusEnum.ToDo]: { bg: "#717070", text: "#717070" },
      },
    },
    typography: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            transition:
              "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          },
        },
      },
    },
  });

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
