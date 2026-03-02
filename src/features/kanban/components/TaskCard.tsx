import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Tooltip } from "@mui/material";
import { Box, IconButton, Stack } from "@mui/material";
import { PriorityBadge } from "./TaskBadge";
import { PriorityLevelEnum, type Task } from "../types/types";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModalStore } from "../store/modalStore";
import { useDraggable } from "@dnd-kit/core";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";

export default function TaskCard({ task }: { task: Task }) {
  const {setNodeRef , listeners , attributes,transform} = useDraggable({
    id: task.id
  });

  const style ={
    transform: `translate3d(${transform?.x}px, ${transform?.y}px, 0)`,
    minWidth: 275, cursor: "pointer"
    ,
    zIndex:999

  }
  const {openEdit , openDelete} = useModalStore();
  const handelEdite = () => {

    console.log("d");
    
    openEdit(task);
  };

  const handelDelete = (task: Task) => {
    openDelete(task);
  }
  return (
    <Card variant="outlined"  ref={setNodeRef} sx={{...style}} >
      <CardContent>
<Stack direction={"row-reverse"} justifyContent={"space-between"}alignItems={"center"}>
    <Box
          {...attributes} {...listeners} 
          sx={{ cursor: "grab", display: "flex", justifyContent: "flex-end" }}
        >
          <DragIndicatorIcon sx={{ color: "grey.500" }} />
        </Box>

        <Typography
          gutterBottom
          variant="h5"
          fontWeight={"bold"}
          component="div"
        >
          {task?.title}
        </Typography>
</Stack>
        <Typography
          variant="body2"
          fontWeight={"bold"}
          sx={{ color: "text.secondary" }}
        >
          {task.description}
        </Typography>
      


        <Stack direction="row" mt={1}>
          <PriorityBadge level={task.priority as PriorityLevelEnum} />
        </Stack>
      </CardContent>
      <CardActions>
        <Box sx={{ display: "flex", gap: 1 , justifyContent: "flex-end", width: "100%"}}>
          <Tooltip title="Edit Task">
            <IconButton
              size="small"
              onClick={(e)=>
                {
                  e.stopPropagation();
                  
                  handelEdite();
                } }
              sx={{
                bgcolor: "action.hover",
                "&:hover": {
                  bgcolor: "primary.main",
                  color: "white",
                },
                transition: "all 0.2s ease",
              }}
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <Tooltip title="Delete Task">
            <IconButton
               onClick={(e) => {
            e.stopPropagation(); 
            handelDelete(task);
          }}
              size="small"
              sx={{
                bgcolor: "action.hover",
                "&:hover": {
                  bgcolor: "error.main",
                  color: "white",
                },
                transition: "all 0.2s ease",
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      </CardActions>
    </Card>
  );
}
