import {
  Calendar as CalendarIcon,
  ChevronRight,
  Plus,
  Folder,
  MoreVertical,
  ArrowRight,
  SlidersHorizontal,
  Check,
  ArrowUpRight,
  ClipboardList,
} from "lucide-react";

export default function Dashboard() {
  const stats = [
    { label: "Tổng dự án", count: "3" },
    { label: "Tổng công việc", count: "3" },
    { label: "Đang thực hiện", count: "3" },
    { label: "Đã hoàn thành", count: "1" },
  ];

  const dailyTasks = [
    { time: "09:00", title: "Chốt bảng màu giao diện", status: "purple" },
    { time: "10:00", title: "Điều chỉnh màu giao diện", status: "gray" },
    { time: "11:00", title: "Nộp báo cáo màu giao diện", status: "purple" },
  ];

  const taskList = [
    {
      id: 1,
      title: "Chốt bảng màu trong buổi họp",
      status: "Hoàn thành",
      priority: "Cao",
      priorityBg: "bg-[#C85A32] text-white",
      statusBg: "bg-[#E6F4EA] text-[#2D8A4E]",
      completed: true,
      avatars: [
        "https://i.pravatar.cc/100?img=33",
        "https://i.pravatar.cc/100?img=12",
      ],
      extraCount: "4+",
    },
    {
      id: 2,
      title: "Điều chỉnh màu giao diện",
      status: "Đang chờ",
      priority: "Vừa",
      priorityBg: "bg-[#A3B831] text-white",
      statusBg: "bg-[#F1F3F4] text-[#80868B]",
      completed: false,
      avatars: [
        "https://i.pravatar.cc/100?img=47",
        "https://i.pravatar.cc/100?img=60",
      ],
      extraCount: "1+",
    },
    {
      id: 3,
      title: "Nộp báo cáo màu giao diện",
      status: "Đang chờ",
      priority: "Thấp",
      priorityBg: "bg-[#5B72E6] text-white",
      statusBg: "bg-[#F1F3F4] text-[#80868B]",
      completed: false,
      avatars: [
        "https://i.pravatar.cc/100?img=68",
        "https://i.pravatar.cc/100?img=32",
      ],
      extraCount: "2+",
    },
  ];

  const projects = [
    {
      name: "Hệ thống thiết kế mới",
      dueDate: "27/03/2025",
      iconBg: "bg-[#4C75F2]",
    },
    {
      name: "Thiết kế lại giao diện Webx",
      dueDate: "03/04/2025",
      iconBg: "bg-[#5B8DF6]",
    },
    {
      name: "Dự án thiết kế mẫu email mới",
      dueDate: "10/04/2025",
      iconBg: "bg-[#8CB800]",
    },
  ];

  return (
    <div className="pb-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 space-y-6">
        {/* Lời chào và thống kê */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Chào buổi sáng!
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              Mỗi công việc hoàn thành là một bước gần hơn tới mục tiêu của bạn.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-8">
              {stats.map((item, index) => (
                <div key={index} className="text-center">
                  <p className="text-[11px] text-gray-400 font-medium mb-1 whitespace-nowrap">
                    {item.label}
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    {item.count}
                  </p>
                </div>
              ))}
            </div>

            <button className="flex items-center justify-center gap-2 bg-[#4C75F2] hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 text-sm transition-all sm:ml-4">
              <Plus className="w-4 h-4" />
              <span>Thêm công việc</span>
            </button>
          </div>
        </div>

        {/* --- HÀNG 1: Công việc hôm nay + lịch nhỏ --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Thẻ công việc hôm nay (2 cột) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 border border-gray-200 rounded-lg">
                  <CalendarIcon className="w-4 h-4 text-gray-600" />
                </div>
                <h2 className="font-bold text-gray-900 text-base">
                  Công việc hôm nay
                </h2>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  ←
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  →
                </button>
              </div>
            </div>

            <div className="space-y-3 my-auto">
              {dailyTasks.map((task, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-xs font-medium text-gray-400 w-12">
                    {task.time}
                  </span>
                  <div
                    className={`flex-1 flex items-center justify-between px-4 py-3 rounded-xl text-xs ${
                      task.status === "purple"
                        ? "bg-[#EEF2FF] text-[#3730A3]"
                        : "bg-[#F4F5F7] text-gray-700"
                    }`}
                  >
                    <span className="font-medium">{task.title}</span>
                    <div className="flex items-center gap-3">
                      <button className="text-[11px] text-gray-400 hover:text-gray-600 font-medium">
                        Xem chi tiết
                      </button>
                      <MoreVertical className="w-3.5 h-3.5 text-gray-400 cursor-pointer" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lịch nhỏ (1 cột) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <button className="text-gray-400 hover:text-gray-600">‹</button>
              <h3 className="font-bold text-gray-800 text-sm">Tháng 3 / 2025</h3>
              <button className="text-gray-400 hover:text-gray-600">›</button>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-gray-400 mb-1">
              <span>CN</span>
              <span>T2</span>
              <span>T3</span>
              <span>T4</span>
              <span>T5</span>
              <span>T6</span>
              <span>T7</span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-700">
              <div className="flex items-center justify-center">
                <span className="w-7 h-7 bg-[#4C75F2] text-white rounded-full flex items-center justify-center font-bold">
                  1
                </span>
              </div>
              {[
                2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
                20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
              ].map((day) => (
                <div
                  key={day}
                  className="flex items-center justify-center py-1 hover:bg-gray-50 rounded-full cursor-pointer"
                >
                  <span>{day}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- HÀNG 2: Danh sách công việc + dự án --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Thẻ danh sách công việc (2 cột) */}
          <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600">
                  <ClipboardList className="w-4 h-4" />
                </div>
                <h2 className="font-bold text-gray-900 text-base">Công việc</h2>
              </div>

              {/* 2 Nút tròn góc phải */}
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </button>
                <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Danh sách công việc */}
            <div className="space-y-4 my-auto">
              {taskList.map((task) => (
                <div
                  key={task.id}
                  className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_90px_80px_90px_32px] items-center gap-3 md:gap-4 pb-4 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  {/* Cột 1: Checkbox & Tên Task */}
                  <div className="flex items-center gap-3.5 min-w-0 pr-2">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 cursor-pointer ${
                        task.completed
                          ? "bg-[#55A99D] text-white"
                          : "border-2 border-gray-200 bg-white"
                      }`}
                    >
                      {task.completed && (
                        <Check className="w-3.5 h-3.5 stroke-3" />
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold truncate ${
                        task.completed ? "text-gray-800" : "text-gray-700"
                      }`}
                    >
                      {task.title}
                    </span>
                  </div>

                  {/* Cột 2: Status Badge */}
                  <div className="hidden md:flex justify-center">
                    <span
                      className={`text-[11px] px-3 py-1 rounded-full font-medium w-full text-center ${task.statusBg}`}
                    >
                      {task.status}
                    </span>
                  </div>

                  {/* Cột 3: Priority Badge */}
                  <div className="hidden md:flex justify-center">
                    <span
                      className={`text-[11px] px-3 py-1.5 rounded-lg font-semibold w-full text-center ${task.priorityBg}`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  {/* Cột 4: Thành viên và số lượng thêm */}
                  <div className="hidden md:flex items-center justify-end gap-1">
                    <div className="flex items-center -space-x-2">
                      {task.avatars.map((url, i) => (
                        <img
                          key={i}
                          src={url}
                          alt="avatar"
                          className="w-6 h-6 rounded-full border-2 border-white object-cover"
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 font-medium w-5 text-right">
                      {task.extraCount}
                    </span>
                  </div>

                  {/* Cột 5: Nút Chevron */}
                  <div className="flex justify-end">
                    <button className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thẻ dự án (1 cột) */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 border border-gray-200 rounded-lg">
                  <Folder className="w-4 h-4 text-gray-600" />
                </div>
                <h2 className="font-bold text-gray-900 text-base">Dự án</h2>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="space-y-4 my-auto">
              {projects.map((proj, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-lg ${proj.iconBg} flex items-center justify-center text-white shadow-sm`}
                    >
                      <Folder className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-800">
                        {proj.name}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Hạn chót - {proj.dueDate}
                      </p>
                    </div>
                  </div>
                  <span className="text-gray-300 text-xs font-bold cursor-pointer">
                    =
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
