import { useMemo, useState } from "react";
import { TaskContext } from "./task-context";

const initialTasks = [
  {
    id: 1,
    title: "Chốt bảng màu trong buổi họp",
    project: "Hệ thống thiết kế mới",
    status: "Hoàn thành",
    priority: "Cao",
    completed: true,
    dueDate: "Hôm nay, 17:00",
  },
  {
    id: 2,
    title: "Điều chỉnh màu giao diện",
    project: "Thiết kế lại Webx",
    status: "Đang chờ",
    priority: "Vừa",
    completed: false,
    dueDate: "Ngày mai, 10:00",
  },
  {
    id: 3,
    title: "Nộp báo cáo màu giao diện",
    project: "Mẫu email",
    status: "Đang chờ",
    priority: "Thấp",
    completed: false,
    dueDate: "27/03/2025",
  },
  {
    id: 4,
    title: "Chuẩn bị slide theo dõi hệ thống SAP",
    project: "Học tập",
    status: "Đang chờ",
    priority: "Cao",
    completed: false,
    dueDate: "30/03/2025",
  },
];

export function getPriorityClass(priority) {
  const classes = {
    Cao: "bg-[#E54D38] text-white",
    Vừa: "bg-[#9ACD32] text-white",
    Thấp: "bg-[#4285F4] text-white",
  };

  return classes[priority] || classes["Vừa"];
}

export function getStatusClass(completed) {
  return completed
    ? "bg-[#E6F4EA] text-[#2D8A4E]"
    : "bg-[#F1F3F4] text-[#5F6368]";
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  function addTask(task) {
    const completed = false;

    setTasks((current) => [
      {
        id: Date.now(),
        title: task.title.trim(),
        project: task.project.trim() || "Cá nhân",
        status: "Đang chờ",
        priority: task.priority || "Vừa",
        completed,
        dueDate: task.dueDate.trim() || "Chưa đặt hạn",
      },
      ...current,
    ]);
  }

  function addManyTasks(titles) {
    setTasks((current) => [
      ...titles.map((title, index) => ({
        id: Date.now() + index,
        title,
        project: "Gợi ý từ AI",
        status: "Đang chờ",
        priority: "Vừa",
        completed: false,
        dueDate: "Chưa đặt hạn",
      })),
      ...current,
    ]);
  }

  function toggleTask(taskId) {
    setTasks((current) =>
      current.map((task) => {
        if (task.id !== taskId) {
          return task;
        }

        const completed = !task.completed;

        return {
          ...task,
          completed,
          status: completed ? "Hoàn thành" : "Đang chờ",
        };
      }),
    );
  }

  const filteredTasks = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return tasks.filter((task) => {
      const matchesFilter =
        filter === "all" ||
        (filter === "active" && !task.completed) ||
        (filter === "completed" && task.completed);
      const matchesSearch =
        !normalizedSearch ||
        [task.title, task.project, task.status, task.priority]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery, tasks]);

  const stats = useMemo(
    () => ({
      total: tasks.length,
      active: tasks.filter((task) => !task.completed).length,
      completed: tasks.filter((task) => task.completed).length,
    }),
    [tasks],
  );

  const value = useMemo(
    () => ({
      tasks,
      filteredTasks,
      stats,
      filter,
      searchQuery,
      addTask,
      addManyTasks,
      toggleTask,
      setFilter,
      setSearchQuery,
    }),
    [filter, filteredTasks, searchQuery, stats, tasks],
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
