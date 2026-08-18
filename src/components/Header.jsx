import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Search,
  Bell,
  Settings,
  ChevronRight,
  Menu,
  X,
  PencilLine,
  LogOut,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useTasks } from "../hooks/useTasks";

const navItems = [
  { to: "/", label: "Tổng quan", end: true },
  { to: "/my-tasks", label: "Công việc" },
  { to: "/projects", label: "Dự án" },
  { to: "/calendar", label: "Lịch" },
  { to: "/ai-insights", label: "Trợ lý AI" },
];

function navLinkClass({ isActive }) {
  return isActive
    ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
    : "hover:text-gray-900 transition-colors pb-1";
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();
  const { searchQuery, setSearchQuery } = useTasks();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login", { replace: true });
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 min-w-0">
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-md shadow-blue-500/30">
              <PencilLine className="w-4.5 h-4.5" />
            </div>
            <span className="font-bold text-xl text-gray-900 tracking-tight">
              TaskFlow
            </span>
          </NavLink>

          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-500">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden md:flex items-center">
            <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-500 cursor-pointer">
              <span>Tất cả</span>
              <ChevronRight className="w-3 h-3 rotate-90" />
            </div>
            <input
              type="text"
              placeholder="Tìm công việc, dự án"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="bg-gray-50 border border-gray-200 rounded-full pr-8 py-1.5 text-xs w-52 xl:w-64 focus:outline-none focus:border-blue-500 transition-all -ml-6 pl-14"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute right-3 pointer-events-none" />
          </div>

          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 relative">
            <Bell className="w-4 h-4" />
          </button>
          <button className="hidden sm:flex p-2 hover:bg-gray-100 rounded-full text-gray-500">
            <Settings className="w-4 h-4" />
          </button>

          <div className="hidden xl:flex flex-col items-end leading-tight">
            <span className="text-xs font-semibold text-gray-800">
              {currentUser?.name || "Người dùng TaskFlow"}
            </span>
            <span className="text-[10px] text-gray-400">
              {currentUser?.email}
            </span>
          </div>

          <img
            src={currentUser?.avatar || "https://i.pravatar.cc/100?img=33"}
            alt={currentUser?.name || "Ảnh đại diện"}
            className="w-8 h-8 rounded-full object-cover border border-gray-200 cursor-pointer"
          />

          <button
            className="hidden sm:flex p-2 hover:bg-red-50 rounded-full text-gray-500 hover:text-red-600 transition-colors"
            onClick={handleLogout}
            aria-label="Đăng xuất"
          >
            <LogOut className="w-4 h-4" />
          </button>

          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full text-gray-600"
            onClick={() => setIsMenuOpen((value) => !value)}
            aria-label="Mở menu điều hướng"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 px-4 sm:px-6 py-3 space-y-3 bg-white">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Tìm công việc, dự án"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-all"
            />
          </div>

          <nav className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 text-sm font-medium text-gray-600">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-gray-900 text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="w-full flex items-center justify-center gap-2 rounded-xl bg-red-50 px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-100 transition-colors"
            onClick={handleLogout}
          >
            <LogOut className="w-4 h-4" />
            <span>Đăng xuất</span>
          </button>
        </div>
      )}
    </header>
  );
}
