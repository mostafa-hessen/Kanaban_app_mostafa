import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import { Stack, useTheme } from "@mui/material";
import { Circle } from "@mui/icons-material";
import { useTasksQuery } from "../hooks/useTask";
import type { TaskStatusEnum } from "../types/types";

function StautsHeader({ status  }: { status?: string }) {
  const theme = useTheme();
  const {data }= useTasksQuery()
  const tasks = data?.tasks;
  const countByStatus = (status: TaskStatusEnum) =>
  tasks?.filter(task => task.column === status).length ;
  
  const statusColor = theme.palette.status[status as TaskStatusEnum]?.text || theme.palette.text.primary;

  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
      <Circle sx={{ color: statusColor, fontSize: 12 }} />

      <Typography variant="subtitle1" sx={{fontWeight:"bold", textTransform: 'capitalize'}}>{status?.toLowerCase()}</Typography>

      <Stack spacing={3} direction="row">
        <Badge
          badgeContent={ countByStatus(status as TaskStatusEnum)} 
          overlap="circular"
          variant="standard"
          showZero
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
              color: 'inherit',
              fontSize: '0.75rem',
              height: '20px',
              minWidth: '20px'
            },
          }} 
        />
      </Stack>
    </Stack>
  );
}

export default StautsHeader;

