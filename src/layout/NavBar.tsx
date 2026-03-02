import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

import { useTasksQuery } from "../features/kanban/hooks/useTask";
import { Badge } from "@mui/material";
import { useSearchStore } from "../features/kanban/store/searchStore";
import { useDebounce } from "use-debounce";
import { Search, SearchIconWrapper, StyledInputBase } from "../features/kanban/components/TaskSearchStyle";
import { useThemeStore } from "../shared/store/theme";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from "@mui/material/styles";

export default function NavBar() {
  const { setSearch } = useSearchStore();
  const { mode, toggleColorMode } = useThemeStore();
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 500);

  useEffect(() => {
    setSearch(debouncedValue);
  }, [debouncedValue, setSearch]);

  const { data } = useTasksQuery();
  const tasks = data?.tasks;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
        position="static" 
        color="default" 
        elevation={0} 
        sx={{ 
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper'
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <GridViewIcon />
          </IconButton>

          <Stack>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }, fontWeight: 700 }}
            >
              Mostafa Kanban App
            </Typography>
           
            <Stack spacing={2} direction="row"  alignItems={"center"}>
               <Typography sx={{fontWeight:"bold", mt: 0.5}} variant="caption" color="text.secondary">
              Tasks
              </Typography>

              <Badge
                badgeContent={tasks?.length===0?0:tasks?.length }
                overlap="circular"
                variant="standard"
                showZero
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800],
                    color: 'inherit',
                  },
                }} 
              />
            </Stack>
          </Stack>

          <Box sx={{ flexGrow: 1 }} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

