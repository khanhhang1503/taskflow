import { Folder, Plus, MoreVertical, CheckCircle2 } from "lucide-react";

export default function Projects() {
  const projectList = [
    {
      id: 1,
      name: "Hệ thống thiết kế mới",
      category: "Thiết kế UI/UX",
      progress: 80,
      tasksCount: "12/15 công việc",
      dueDate: "27/03/2025",
      color: "bg-[#4C75F2]",
    },
    {
      id: 2,
      name: "Thiết kế lại giao diện Webx",
      category: "Phát triển web",
      progress: 45,
      tasksCount: "5/11 công việc",
      dueDate: "03/04/2025",
      color: "bg-[#5B8DF6]",
    },
    {
      id: 3,
      name: "Dự án thiết kế mẫu email mới",
      category: "Tiếp thị",
      progress: 20,
      tasksCount: "2/10 công việc",
      dueDate: "10/04/2025",
      color: "bg-[#8CB800]",
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dự án</h1>
          <p className="text-gray-400 text-sm mt-1">
            Danh sách các dự án đang triển khai.
          </p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-[#4C75F2] hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm shadow-md shadow-blue-500/20">
          <Plus className="w-4 h-4" />
          <span>Dự án mới</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map((proj) => (
          <div
            key={proj.id}
            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-xl ${proj.color} flex items-center justify-center text-white shadow-sm`}
                >
                  <Folder className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">
                    {proj.name}
                  </h3>
                  <span className="text-[11px] text-gray-400">
                    {proj.category}
                  </span>
                </div>
              </div>
              <MoreVertical className="w-4 h-4 text-gray-400 cursor-pointer" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>Tiến độ</span>
                <span>{proj.progress}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${proj.color}`}
                  style={{ width: `${proj.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs text-gray-400 pt-2 border-t border-gray-50">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" /> {proj.tasksCount}
              </span>
              <span>Hạn chót: {proj.dueDate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
