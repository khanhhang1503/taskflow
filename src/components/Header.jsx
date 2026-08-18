import { NavLink } from "react-router-dom";
import { Search, Bell, Settings, ChevronRight } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 px-8 py-3 flex items-center justify-between sticky top-0 z-50">
      {/* Left: Logo & Nav Links */}
      <div className="flex items-center gap-10">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/30">
            ✏️
          </div>
          <span className="font-bold text-xl text-gray-900 tracking-tight">
            TaskFlow
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
                : "hover:text-gray-900 transition-colors pb-1"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/my-tasks"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
                : "hover:text-gray-900 transition-colors pb-1"
            }
          >
            My Tasks
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
                : "hover:text-gray-900 transition-colors pb-1"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/calendar"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
                : "hover:text-gray-900 transition-colors pb-1"
            }
          >
            Calendar
          </NavLink>
          <NavLink
            to="/ai-insights"
            className={({ isActive }) =>
              isActive
                ? "text-gray-900 font-semibold border-b-2 border-gray-900 pb-1"
                : "hover:text-gray-900 transition-colors pb-1"
            }
          >
            AI Insights
          </NavLink>
        </nav>
      </div>

      {/* Right: Search & Actions */}
      <div className="flex items-center gap-4">
        <div className="relative flex items-center">
          <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-500 cursor-pointer">
            <span>All</span>
            <ChevronRight className="w-3 h-3 rotate-90" />
          </div>
          <input
            type="text"
            placeholder="Search your tasks, projects"
            className="bg-gray-50 border border-gray-200 rounded-full pl-3 pr-8 py-1.5 text-xs w-56 focus:outline-none focus:border-blue-500 transition-all -ml-6 -z-0 pl-14"
          />
          <Search className="w-3.5 h-3.5 text-gray-400 absolute right-3 pointer-events-none" />
        </div>

        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500 relative">
          <Bell className="w-4 h-4" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
          <Settings className="w-4 h-4" />
        </button>

        <img
          src="https://i.pravatar.cc/100?img=33"
          alt="Avatar"
          className="w-8 h-8 rounded-full object-cover border border-gray-200 cursor-pointer"
        />
      </div>
    </header>
  );
}
