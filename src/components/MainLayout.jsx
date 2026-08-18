import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#F4F6FA] text-gray-800 font-sans">
      {/* Header xuất hiện trên tất cả các trang */}
      <Header />

      {/* Nội dung trang con (Dashboard, My Tasks, Projects,...) sẽ chui vào đây */}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
