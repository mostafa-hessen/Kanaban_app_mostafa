import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useTheme } from "@mui/material/styles";
import { useModalStore } from "../store/modalStore";
import type { TaskStatusEnum } from "../types/types";

const AddTaskButton = ({ status }: { status: TaskStatusEnum }) => {
  const theme = useTheme();
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
        borderStyle: 'dashed', // خط متقطع
        borderColor: theme.palette.grey[500], // لون رمادي متوسط
        color: theme.palette.grey[700], // نص رمادي
        bgcolor: 'transparent',
        '&:hover': {
          bgcolor: 'rgba(0,0,0,0.04)',
          borderColor: theme.palette.grey[700], // عند hover الخط يصبح أغمق
        }
      }}
    >
      Add Task
    </Button>
  );
};

export default AddTaskButton;