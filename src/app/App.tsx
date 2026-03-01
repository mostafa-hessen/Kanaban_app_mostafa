// import { Task } from '@mui/icons-material'
import React from "react";
import TaskCard from "../features/kanban/components/TaskCard";
import TaskBoard from "../features/kanban/components/TaskBoard";
import Providers from "./providers/provider";
import NavBar from "../layout/NavBar";

function App() {
  return (
    <Providers>
      <NavBar />
      <TaskBoard />
    </Providers>
  );
}

export default App;
