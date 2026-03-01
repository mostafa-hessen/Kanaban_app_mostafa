import { styled, type Theme } from "@mui/material/styles";
import  { PriorityLevelEnum } from "../types/types";
import Typography from '@mui/material/Typography'

const priorityColors = (theme: Theme, level: PriorityLevelEnum) => {

  switch (level) {
    case PriorityLevelEnum.High:
      return {
        bg: theme.palette.priority[PriorityLevelEnum.High].bg, // خلفية خفيفة
        text: theme.palette.priority[PriorityLevelEnum.High].text, // نص قوي
      };
    case PriorityLevelEnum.Medium:
      return {
        bg: theme.palette.priority[PriorityLevelEnum.Medium].bg,
        text: theme.palette.priority[PriorityLevelEnum.Medium].text,
      };
    case PriorityLevelEnum.Low:
      return {
        bg: theme.palette.priority[PriorityLevelEnum.Low].bg,
        text: theme.palette.priority[PriorityLevelEnum.Low].text,
      };
    default:
      return {
        bg: theme.palette.grey[200],
        text: theme.palette.grey[700],
      };
  }
};

  const StyledBadge = styled("div")<{ level: PriorityLevelEnum }>(({ theme, level }) => {
  const colors = priorityColors(theme, level);
  return {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "4px 10px",
    borderRadius: 6,
    fontSize: 13,
    fontWeight: 500,
    color: colors.text,
    backgroundColor: colors.bg,
    textTransform: "capitalize",
  };
});

export const PriorityBadge = ({ level }: { level: PriorityLevelEnum }) => {
  return (
    <StyledBadge level={level}>
      <Typography variant="caption" fontWeight={"bold"} >{level}</Typography>
    </StyledBadge>
  );
};