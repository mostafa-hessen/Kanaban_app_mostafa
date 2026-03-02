import { Box, Grid, Stack } from "@mui/material";
import TaskColumn from "./TaskColumn";
import { TaskStatusEnum } from "../types/types";
import TaskModal from "./TaskFormModal";
import DeleteConfirmModal from "./TaskDeletModal";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useUpdateTask } from "../hooks/useTaskMutaion";

function TaskBoard() {
  const { mutate: update } = useUpdateTask();

  const handelDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
   console.log(active.id);
    console.log(over);
    if (!over) return; // لو ماعملش دراج علي منطقه معينه خلاص متعملش حاجه  بحيث اكون كمصطفي مطمن اني مش هعمل update الا لما يكون في drop علي منطقه تانيه

    if (active.id === over.id) return; // هتا بتاكد لو المستخدم شغل دماغه وعمل دراج في نفس المكان 😂

 
    
    update({
      id: active.id as string | number,
      updatedFields: {
        column: over.id as TaskStatusEnum,
      },
    });
  };
  return (
    <DndContext onDragEnd={handelDragEnd}>
      <Stack 
       
        sx={{ 
          m: 3, 
          pb: 2  ,
          overflowX: "auto",
          
        }}
      >
        <Box sx={{ flexGrow: 1, minWidth: { xs: "800px", md: "100%" } }}>
          <Grid container spacing={3}>
            {Object.values(TaskStatusEnum).map((status) => (
              <Grid size={{ xs: 12, md: 6 , lg:3 }} key={status}>
                <TaskColumn status={status} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <TaskModal />
        <DeleteConfirmModal />
      </Stack>
    </DndContext>
  );
}

export default TaskBoard;
