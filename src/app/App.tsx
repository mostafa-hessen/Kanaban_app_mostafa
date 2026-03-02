
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
