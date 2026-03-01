import { create } from 'zustand';



type Notification = {
  open: boolean;
  message: string;
  severity?: "error" | "success" | "info" | "warning";
};

type NotificationStore = {
  notification: Notification;
  showNotification: (message: string, severity?: Notification["severity"]) => void;
  closeNotification: () => void;
};

export const useNotificationStore = create<NotificationStore>((set) => ({
  notification: { open: false, message: "", severity: "info" },
  showNotification: (message, severity = "info") =>
    set({ notification: { open: true, message, severity } }),
  closeNotification: () =>
    set((state) => ({ notification: { ...state.notification, open: false } })),
}));