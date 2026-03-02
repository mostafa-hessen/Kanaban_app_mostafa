import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Stack,
  MenuItem,
} from "@mui/material";
import { useModalStore } from "../store/modalStore";
import {
  useCreateTask,
  useUpdateTask,
} from "../hooks/useTaskMutaion";
import { PriorityLevelEnum } from "../types/types";
import { useNotificationStore } from "../../../shared/store/notificationsStore";

const TaskModal = () => {
  const { open, selectedTask, column, closeModal } = useModalStore();
  const showNotification = useNotificationStore((state) => state.showNotification);

  const { mutate: createTask } = useCreateTask();
  const { mutate: updateTask } = useUpdateTask();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState<PriorityLevelEnum>(
    PriorityLevelEnum.Low,
  );

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setDescription(selectedTask.description);
      setPriority(
        (selectedTask.priority as PriorityLevelEnum) || PriorityLevelEnum.Low,
      );
    } else {
      setTitle("");
      setDescription("");
    }
  }, [selectedTask, open]);

 const handleSubmit = () => {
  if (!title.trim()) {
    showNotification("Title is required", "error");
    return;
  }
  if (!description.trim()) {
    showNotification("Description is required", "error");
    return;
  }

  if (selectedTask) {
    updateTask({
      id: selectedTask.id,
      updatedFields: { title, description, priority },
    });
    showNotification("Task updated successfully", "success");
  } else {
    createTask({ title, description, priority, column: column });
    showNotification("Task added successfully", "success");
  }

  closeModal();
};

  return (
    <Dialog open={open} onClose={closeModal} fullWidth maxWidth="sm">
      <DialogTitle>{selectedTask ? "Edit Task" : "Add Task"}</DialogTitle>
      <DialogContent>
        <Stack spacing={3} sx={{ mt: 1 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            multiline
            rows={3}
          />
          <TextField
            select
            label="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value as PriorityLevelEnum)}
            fullWidth
          >
            {Object.values(PriorityLevelEnum).map((level) => (
              <MenuItem key={level} value={level}>
                {level}
              </MenuItem>
            ))}
          </TextField>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal}>Cancel</Button>
        <Button variant="contained" onClick={handleSubmit}>
          {selectedTask ? "Update" : "Add"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default TaskModal;
