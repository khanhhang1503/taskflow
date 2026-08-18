import { useState } from "react";
import {
  Sparkles,
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Zap,
  Bot,
  TrendingUp,
  Clock,
  ListTodo,
} from "lucide-react";

export default function AiInsights() {
  const [prompt, setPrompt] = useState("");

  const subtasksDemo = [
    "Phân tích UI/UX đối thủ & chốt bảng màu giao diện TaskFlow",
    "Dựng Layout tĩnh cho các trang Dashboard, My Tasks & Calendar",
    "Cấu hình React Router DOM cho toàn bộ hệ thống điều hướng",
    "Tích hợp API Gemini AI cho tính năng tự động gợi ý sub-task",
  ];

  return (
    <div className="max-w-350 mx-auto px-8 py-6 space-y-6">
      {/* 1. Header Trang */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="p-2 bg-indigo-100 rounded-xl text-indigo-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">AI Insights</h1>
          </div>
          <p className="text-gray-400 text-sm mt-1">
            Phân tích hiệu suất làm việc & trợ lý AI đề xuất lộ trình tối ưu cho
            TaskFlow.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-600">
          <Bot className="w-4 h-4" />
          <span>TaskFlow AI Model v2.4 Active</span>
        </div>
      </div>

      {/* 2. Top Banner: Gợi ý nhiệm vụ quan trọng nhất trong ngày */}
      <div className="bg-linear-to-r from-indigo-600 via-indigo-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg shadow-indigo-500/20 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-medium backdrop-blur-md flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-yellow-300" />
            Gợi ý tập trung trong ngày
          </span>
          <span className="text-xs opacity-80">Cập nhật lúc 08:00 AM</span>
        </div>

        <div className="max-w-2xl space-y-2">
          <h2 className="text-xl font-bold">
            Hoàn thiện báo cáo tiến độ hệ thống SAP
          </h2>
          <p className="text-xs text-indigo-100 leading-relaxed">
            Dựa trên deadline sắp tới, AI nhận thấy bạn có bài thuyết trình quan
            trọng. Hãy dành 45 phút tập trung xử lý xong công việc này trước
            11:00 AM để đạt hiệu suất tốt nhất.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-white text-indigo-600 font-semibold px-4 py-2 rounded-xl text-xs hover:bg-opacity-90 transition-all shadow-sm">
          <span>Xem chi tiết công việc</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. Grid 2 Cột: Công cụ AI Chia nhỏ công việc + Thống kê hiệu suất */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cột Trái (2 phần): AI Task Breakdown Tool */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-base">
                  AI Task Generator (Chia nhỏ mục tiêu)
                </h3>
                <p className="text-xs text-gray-400">
                  Nhập mục tiêu lớn, AI sẽ tự động phân rã thành các task nhỏ cụ
                  thể.
                </p>
              </div>
            </div>
          </div>

          {/* Ô Nhập Input */}
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ví dụ: Xây dựng giao diện ứng dụng TaskFlow..."
              className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-indigo-500 transition-all"
            />
            <button className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-4 py-2.5 rounded-xl text-xs transition-all shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Phân tích</span>
            </button>
          </div>

          {/* Kết quả Sub-tasks gợi ý */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
              <span>Danh sách công việc con đề xuất:</span>
              <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
                + Thêm tất cả vào TaskList
              </span>
            </div>

            <div className="space-y-2">
              {subtasksDemo.map((subtask, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50/80 hover:bg-indigo-50/40 rounded-xl border border-gray-100 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs font-medium text-gray-700">
                      {subtask}
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Ước tính: 1-2 giờ
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cột Phải: Thống kê hiệu suất làm việc từ AI */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-5">
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <h3 className="font-bold text-gray-900 text-base">
              Chỉ số năng suất
            </h3>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>

          <div className="space-y-4">
            <div className="p-3.5 bg-gray-50 rounded-xl space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-blue-500" /> Khung giờ
                  vàng:
                </span>
                <span className="font-bold text-gray-900">
                  09:00 - 11:00 AM
                </span>
              </div>
              <p className="text-[11px] text-gray-400">
                Bạn hoàn thành công việc nhanh nhất trong khoảng thời gian này.
              </p>
            </div>

            <div className="p-3.5 bg-gray-50 rounded-xl space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <ListTodo className="w-3.5 h-3.5 text-indigo-500" /> Tỷ lệ
                  hoàn thành:
                </span>
                <span className="font-bold text-emerald-600">85%</span>
              </div>
              <p className="text-[11px] text-gray-400">
                Tăng 12% so với tuần trước. Giữ vững phong độ nhé!
              </p>
            </div>

            <div className="p-4 bg-indigo-50/50 rounded-xl border border-indigo-100">
              <p className="text-xs text-indigo-900 font-medium leading-relaxed">
                💡 <strong>Lời khuyên:</strong> Hãy giải quyết các task có độ ưu
                tiên <strong>High</strong> vào buổi sáng để giải phóng áp lực
                công việc cho buổi chiều.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
