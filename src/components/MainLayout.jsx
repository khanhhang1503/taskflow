import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F4F6FA] text-gray-800 font-sans">
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
