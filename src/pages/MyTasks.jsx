import { Plus, SlidersHorizontal, ChevronRight } from "lucide-react";

export default function MyTasks() {
  const taskList = [
    {
      id: 1,
      title: "Chốt bảng màu trong buổi họp",
      project: "Hệ thống thiết kế mới",
      status: "Hoàn thành",
      priority: "Cao",
      priorityBg: "bg-[#E54D38]",
      statusBg: "bg-[#E6F4EA] text-[#2D8A4E]",
      completed: true,
      dueDate: "Hôm nay, 17:00",
    },
    {
      id: 2,
      title: "Điều chỉnh màu giao diện",
      project: "Thiết kế lại Webx",
      status: "Đang chờ",
      priority: "Vừa",
      priorityBg: "bg-[#9ACD32]",
      statusBg: "bg-[#F1F3F4] text-[#5F6368]",
      completed: false,
      dueDate: "Ngày mai, 10:00",
    },
    {
      id: 3,
      title: "Nộp báo cáo màu giao diện",
      project: "Mẫu email",
      status: "Đang chờ",
      priority: "Thấp",
      priorityBg: "bg-[#4285F4]",
      statusBg: "bg-[#F1F3F4] text-[#5F6368]",
      completed: false,
      dueDate: "27 Mar 2025",
    },
    {
      id: 4,
      title: "Prepare SAP System Monitoring Deck",
      project: "Academic",
      status: "Đang chờ",
      priority: "Cao",
      priorityBg: "bg-[#E54D38]",
      statusBg: "bg-[#F1F3F4] text-[#5F6368]",
      completed: false,
      dueDate: "30 Mar 2025",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header trang */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Công việc của tôi</h1>
          <p className="text-gray-400 text-sm mt-1">
            Quản lý và theo dõi toàn bộ danh sách công việc cá nhân.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#4C75F2] hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm shadow-md shadow-blue-500/20 transition-all">
          <Plus className="w-4 h-4" />
          <span>Thêm công việc</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4">
        <div className="grid grid-cols-1 sm:flex sm:items-center gap-2 text-xs font-medium">
          <button className="px-4 py-2 bg-gray-900 text-white rounded-xl">
            Tất cả (4)
          </button>
          <button className="px-4 py-2 hover:bg-gray-100 text-gray-600 rounded-xl">
            Đang thực hiện (3)
          </button>
          <button className="px-4 py-2 hover:bg-gray-100 text-gray-600 rounded-xl">
            Đã hoàn thành (1)
          </button>
        </div>
        <button className="flex items-center gap-2 text-xs font-medium text-gray-600 border border-gray-200 px-3 py-2 rounded-xl hover:bg-gray-50">
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>Lọc công việc</span>
        </button>
      </div>

      {/* Main Task List Table */}
      <div className="bg-white p-4 sm:p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
        {taskList.map((task) => (
          <div
            key={task.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50/50 px-2 rounded-xl transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div
                className={`w-5 h-5 rounded-full border flex items-center justify-center cursor-pointer ${task.completed ? "bg-[#10B981] border-[#10B981] text-white" : "border-gray-300 bg-white"}`}
              >
                {task.completed && <span className="text-xs font-bold">✓</span>}
              </div>
              <div>
                <p
                  className={`text-sm font-medium ${task.completed ? "line-through text-gray-400" : "text-gray-800"}`}
                >
                  {task.title}
                </p>
                <p className="text-[11px] text-gray-400">
                {task.project} • Hạn chót: {task.dueDate}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
              <span
                className={`text-[11px] px-3 py-1 rounded-full font-medium ${task.statusBg}`}
              >
                {task.status}
              </span>
              <span
                className={`text-[11px] text-white px-3 py-1 rounded-full font-medium ${task.priorityBg} w-16 text-center`}
              >
                {task.priority}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-300" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
