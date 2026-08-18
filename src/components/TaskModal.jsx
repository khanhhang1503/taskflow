import { useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  title: "",
  project: "",
  dueDate: "",
  priority: "Vừa",
};

export default function TaskModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  if (!isOpen) {
    return null;
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.title.trim()) {
      setError("Vui lòng nhập tên công việc.");
      return;
    }

    onSubmit(form);
    setForm(initialForm);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-gray-950/40 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-2xl bg-white p-5 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Thêm công việc mới
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Điền thông tin cơ bản để đưa công việc vào danh sách.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            aria-label="Đóng"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <form className="mt-5 space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-1.5">
            <span className="text-xs font-semibold text-gray-600">
              Tên công việc
            </span>
            <input
              name="title"
              value={form.title}
              onChange={updateField}
              placeholder="Ví dụ: Hoàn thiện báo cáo tiến độ"
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#4C75F2] focus:bg-white"
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-gray-600">
                Dự án
              </span>
              <input
                name="project"
                value={form.project}
                onChange={updateField}
                placeholder="Cá nhân"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#4C75F2] focus:bg-white"
              />
            </label>

            <label className="block space-y-1.5">
              <span className="text-xs font-semibold text-gray-600">
                Hạn chót
              </span>
              <input
                name="dueDate"
                value={form.dueDate}
                onChange={updateField}
                placeholder="Hôm nay, 17:00"
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#4C75F2] focus:bg-white"
              />
            </label>
          </div>

          <label className="block space-y-1.5">
            <span className="text-xs font-semibold text-gray-600">
              Độ ưu tiên
            </span>
            <select
              name="priority"
              value={form.priority}
              onChange={updateField}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-[#4C75F2] focus:bg-white"
            >
              <option>Cao</option>
              <option>Vừa</option>
              <option>Thấp</option>
            </select>
          </label>

          {error && (
            <p className="rounded-xl bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
              {error}
            </p>
          )}

          <div className="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-600 hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#4C75F2] px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-blue-500/20 hover:bg-blue-700"
            >
              Lưu công việc
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
