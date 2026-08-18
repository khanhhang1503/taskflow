import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
} from "lucide-react";

export default function CalendarPage() {
  const [currentView, setCurrentView] = useState("month");

  const events = [
    {
      id: 1,
      title: "Chốt bảng màu giao diện",
      time: "09:00",
      day: 1,
      type: "task",
      priority: "Cao",
      priorityBg: "bg-[#E54D38]",
    },
    {
      id: 2,
      title: "Họp báo cáo tiến độ SAP",
      time: "14:00",
      day: 1,
      type: "event",
      priority: "Vừa",
      priorityBg: "bg-[#9ACD32]",
    },
    {
      id: 3,
      title: "Điều chỉnh màu giao diện",
      time: "10:00",
      day: 5,
      type: "task",
      priority: "Vừa",
      priorityBg: "bg-[#9ACD32]",
    },
    {
      id: 4,
      title: "Nộp báo cáo màu giao diện",
      time: "11:00",
      day: 12,
      type: "task",
      priority: "Thấp",
      priorityBg: "bg-[#4285F4]",
    },
    {
      id: 5,
      title: "Nộp bài tập thảo luận nhóm",
      time: "17:00",
      day: 18,
      type: "deadline",
      priority: "Cao",
      priorityBg: "bg-[#E54D38]",
    },
    {
      id: 6,
      title: "Review lại giao diện TaskFlow",
      time: "08:30",
      day: 25,
      type: "task",
      priority: "Thấp",
      priorityBg: "bg-[#4285F4]",
    },
  ];

  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lịch</h1>
          <p className="text-gray-400 text-sm mt-1">
            Theo dõi thời gian biểu, hạn chót và sự kiện theo lịch.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          {/* Chế độ xem lịch */}
          <div className="bg-white border border-gray-200 rounded-xl p-1 flex items-center text-xs font-medium text-gray-500">
            {[
              { value: "month", label: "Tháng" },
              { value: "week", label: "Tuần" },
              { value: "day", label: "Ngày" },
            ].map((view) => (
              <button
                key={view.value}
                onClick={() => setCurrentView(view.value)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  currentView === view.value
                    ? "bg-gray-900 text-white font-semibold shadow-sm"
                    : "hover:text-gray-900"
                }`}
              >
                {view.label}
              </button>
            ))}
          </div>

          <button className="flex items-center justify-center gap-2 bg-[#4C75F2] hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-xl text-sm shadow-md shadow-blue-500/20 transition-all">
            <Plus className="w-4 h-4" />
            <span>Thêm sự kiện</span>
          </button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h2 className="text-lg font-bold text-gray-900">Tháng 8, 2026</h2>
          <span className="text-xs bg-blue-50 text-[#4C75F2] font-semibold px-2.5 py-1 rounded-full">
            Hôm nay
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-600 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <div className="min-w-[780px]">
        <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/50 text-center text-xs font-semibold text-gray-400 py-3">
          <span>T2</span>
          <span>T3</span>
          <span>T4</span>
          <span>T5</span>
          <span>T6</span>
          <span>T7</span>
          <span>CN</span>
        </div>

        <div className="grid grid-cols-7 auto-rows-fr divide-x divide-y divide-gray-100">
          {daysInMonth.map((day) => {
            const dayEvents = events.filter((e) => e.day === day);
            const isToday = day === 10;

            return (
              <div
                key={day}
                className={`min-h-27.5 p-2 transition-colors hover:bg-gray-50/50 ${
                  isToday ? "bg-blue-50/30" : ""
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span
                    className={`text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full ${
                      isToday ? "bg-[#4C75F2] text-white" : "text-gray-700"
                    }`}
                  >
                    {day}
                  </span>
                </div>

                <div className="space-y-1">
                  {dayEvents.map((evt) => (
                    <div
                      key={evt.id}
                      className="p-1.5 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-200 cursor-pointer text-[11px] space-y-0.5 transition-all shadow-2xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-800 truncate max-w-[90px]">
                          {evt.title}
                        </span>
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${evt.priorityBg}`}
                        ></span>
                      </div>
                      <div className="flex items-center gap-1 text-[9px] text-gray-400">
                        <Clock className="w-2.5 h-2.5" />
                        <span>{evt.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </div>
  );
}
