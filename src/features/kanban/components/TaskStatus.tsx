import React, { use } from "react";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";

import { Box, Stack } from "@mui/material";
import theme from "../../../app/providers/theme/theme";
import { Circle } from "@mui/icons-material";
import { useTasksQuery } from "../hooks/useTask";
import type { TaskStatusEnum } from "../types/types";

function StautsHeader({ status  }: { status?: string }) {
  const {data }= useTasksQuery()
  const tasks = data?.tasks;
  const countByStatus = (status: TaskStatusEnum) =>
  tasks?.filter(task => task.column === status).length ;
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <Circle sx={{ color: theme.palette.status[status as keyof typeof theme.palette.status]?.text , fontSize: 15 }} />

      <Typography variant="h6" sx={{fontWeight:"bold"}}>{status}</Typography>

      <Stack spacing={3} direction="row">
        <Badge
          badgeContent={ countByStatus(status as TaskStatusEnum)} 
          overlap="circular"
          variant="standard"
          showZero
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: theme.palette.grey[300], // خلفية ديناميكية
            },
          }} 
        />
      </Stack>
    </Stack>
  );
}

export default StautsHeader;
