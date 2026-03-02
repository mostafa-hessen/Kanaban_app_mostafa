import {
  Box,
  CircularProgress,
  LinearProgress,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import TaskCard from "./TaskCard";
import StautsHeader from "./TaskStatus";
import { TaskStatusEnum } from "../types/types";
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
  const { data, isLoading, error,isFetching } = useTasksQuery({ 
    column: status, 
    _page: page, 
    _per_page: limit, 
  });
  
  const tasks = data?.tasks;

  const totalTasks = data?.total || 0; 
  const totalPages = Math.ceil(totalTasks / limit);


  
  if (isLoading) return <CircularProgress />;
  if (error) return <Typography>Something went wrong!</Typography>;
  return (
    
    <Paper
      sx={{
        p: 2,
        bgcolor: 'background.paper',
        borderRadius: 2,
        minHeight: "100vh",
        border: '1px solid',
        borderColor: 'divider'
      }}
      elevation={0}
      ref={setNodeRef}
    >
      <StautsHeader status={status} />
      <Stack spacing={2} direction="row" justifyContent="center" sx={{ mt: 2 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={(_, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
        />
      </Stack>

      <Box sx={{ height: 4, my: 1 }}>
        {isFetching && <LinearProgress sx={{ borderRadius: 2 }} />}
      </Box>

      <Stack
        spacing={2}
        sx={{
          my: 2,
          opacity: isFetching ? 0.6 : 1,
          transition: "opacity 0.3s ease-in-out",
        }}
      >
        {tasks?.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </Stack>

      <Stack>
        <AddTaskButton status={status} />
      </Stack>

    
    </Paper>
  );
}

export default TaskColumn;
