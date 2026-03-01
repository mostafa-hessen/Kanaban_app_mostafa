import {
  Dialog, DialogTitle, DialogContent,
  DialogActions, Button, Typography
} from '@mui/material';
import { useModalStore } from '../store/modalStore';
import { useDeleteTask } from '../hooks/useTaskMutaion';
import { useNotificationStore } from '../../../shared/store/notificationsStore';

const DeleteConfirmModal = () => {
  const { openDeleteModal,  closeDelete, selectedTaskId } = useModalStore();
  const { mutate: deleteTask, isPending: isDeleting } = useDeleteTask();
  const showNotification = useNotificationStore((state) => state.showNotification);


  const handleConfirm = () => {
    
    if (selectedTaskId) {
      deleteTask(selectedTaskId, {
        onSuccess: () => {  
            closeDelete()
            showNotification("Task deleted successfully", "success");
        },  
      });
    }
  };

  return (
    <Dialog open={openDeleteModal} onClose={closeDelete} maxWidth="xs" fullWidth>
      <DialogTitle fontWeight="bold">Delete Task</DialogTitle>

      <DialogContent>
        <Typography>
          هل أنت متأكد إنك عايز تحذف التاسك دي
        </Typography>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={closeDelete} color="inherit">
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleConfirm}
          disabled={isDeleting}
        >
          {isDeleting ? 'Deleting...' : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteConfirmModal;