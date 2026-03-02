import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useModalStore } from "../store/modalStore";
import type { TaskStatusEnum } from "../types/types";

const AddTaskButton = ({ status }: { status: TaskStatusEnum }) => {
  const { openAdd } = useModalStore();
  const handleClick = () => {
   
    openAdd(status); // فتح المودال مع تمرير الحالة
  }

  return (
    <Button
      variant="outlined"
      onClick={()=>handleClick()}
      startIcon={<AddIcon />}
      sx={{
        borderStyle: 'dashed',
        borderColor: 'divider',
        color: 'text.secondary',
        bgcolor: 'transparent',
        '&:hover': {
          bgcolor: 'action.hover',
          borderColor: 'text.primary',
          color: 'text.primary',
        }
      }}
    >
      Add Task
    </Button>
  );
};

export default AddTaskButton;