import {
  Button,
  CircularProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TaskCard from "./TaskCard";
import StautsHeader from "./TaskStatus";
import { TaskStatusEnum } from "../types/types";
import theme from "../../../app/providers/theme/theme";
import AddTaskButton from "./TaskButton";
import { useTasksQuery } from "../hooks/useTask";
import { useDroppable } from "@dnd-kit/core";
import Pagination from "@mui/material/Pagination";
import { useState } from "react";

function TaskColumn({ status }: { status: TaskStatusEnum }) {
  const { setNodeRef } = useDroppable({
    id: status,
  });
  
  const limit = 10;
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useTasksQuery({ column: status , _page:page, _limit:limit});
  
  const tasks = data?.tasks;

  const totalTasks = tasks?.length || 0; 
  const totalPages = Math.ceil(totalTasks / limit);


  
  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Something went wrong!</Typography>;
  return (
    
    <Paper
      sx={{
        p: 2,
        bgcolor: theme.palette.grey[200],
        borderRadius: theme.shape.borderRadius,
        minHeight: "100vh",
      }}
      elevation={0}
      ref={setNodeRef}
    >
        {
        console.log(tasks)
        // console.log(data)
        }
      <StautsHeader status={status} />
      <Stack spacing={2} sx={{ my: 2 }}>
      
        {/* {tasks &&
          tasks?.filter((task) => task?.column === status)
            ?.map((task) => <TaskCard key={task.id} task={task} />)} */}
      </Stack>

      <Stack>
        <AddTaskButton status={status} />
      </Stack>

    <Stack spacing={2} direction="row" justifyContent="center" sx={{ mt: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
        />
      </Stack>
    </Paper>
  );
}

export default TaskColumn;
