import { Snackbar, Alert } from "@mui/material";
import { useNotificationStore } from "../store/notificationsStore";


export default function Notification() {
  const { notification, closeNotification } = useNotificationStore();

  return (
    <Snackbar
      open={notification.open}
      autoHideDuration={3000} // يختفي بعد 3 ثواني
      onClose={closeNotification}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert onClose={closeNotification} severity={notification.severity} sx={{ width: "100%" }}>
        {notification.message}
      </Alert>
    </Snackbar>
  );
}