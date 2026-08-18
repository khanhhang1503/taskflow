import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import Projects from "./pages/Projects";
import CalendarPage from "./pages/CalendarPage";
import AiInsights from "./pages/AiInsights";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="my-tasks" element={<MyTasks />} />
        <Route path="projects" element={<Projects />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="ai-insights" element={<AiInsights />} />
      </Route>
    </Routes>
  );
}
