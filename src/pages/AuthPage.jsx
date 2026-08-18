import { useMemo, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Eye,
  EyeOff,
  Lock,
  Mail,
  PencilLine,
  Sparkles,
  User,
} from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import heroImage from "../assets/hero.png";

const benefits = [
  "Theo dõi công việc, dự án và hạn chót trong một nơi.",
  "Lên lịch công việc theo ngày, tuần và tháng.",
  "Nhận gợi ý chia nhỏ mục tiêu từ TaskFlow AI.",
];

export default function AuthPage({ mode = "login" }) {
  const isRegister = mode === "register";
  const navigate = useNavigate();
  const location = useLocation();
  const { login, register, isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const from = location.state?.from?.pathname || "/";

  const copy = useMemo(
    () =>
      isRegister
        ? {
            title: "Tạo tài khoản TaskFlow",
            subtitle: "Bắt đầu quản lý công việc cá nhân rõ ràng hơn.",
            submit: "Đăng ký",
            switchText: "Đã có tài khoản?",
            switchAction: "Đăng nhập",
            switchTo: "/login",
          }
        : {
            title: "Chào mừng quay lại",
            subtitle:
              "Đăng nhập để tiếp tục không gian làm việc TaskFlow của bạn.",
            submit: "Đăng nhập",
            switchText: "Chưa có tài khoản?",
            switchAction: "Đăng ký",
            switchTo: "/register",
          },
    [isRegister],
  );

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (isRegister && form.name.trim().length < 2) {
      setError("Tên hiển thị cần có ít nhất 2 ký tự.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Vui lòng nhập email hợp lệ.");
      return;
    }

    if (form.password.length < 6) {
      setError("Mật khẩu cần có ít nhất 6 ký tự.");
      return;
    }

    const result = isRegister ? register(form) : login(form);

    if (!result.ok) {
      setError(result.message);
      return;
    }

    navigate(from, { replace: true });
  }

  return (
    <main className="min-h-screen bg-[#F4F6FA] text-gray-900">
      <div className="min-h-screen grid lg:grid-cols-[minmax(0,1fr)_500px]">
        <section className="hidden lg:flex flex-col justify-between overflow-hidden px-10 py-8 bg-[#111827] text-white relative">
          <div className="absolute inset-0 opacity-20">
            <img
              src={heroImage}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-br from-[#111827] via-[#172033]/95 to-[#23314f]/90" />

          <div className="relative z-10 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <div className="w-9 h-9 bg-[#4C75F2] rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
                <PencilLine className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">TaskFlow</span>
            </Link>
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
              Sẵn sàng AI
            </span>
          </div>

          <div className="relative z-10 max-w-2xl space-y-8">
            <div className="space-y-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-blue-100">
                <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
                Không gian quản lý công việc cá nhân
              </span>
              <h1 className="max-w-xl text-5xl font-bold leading-tight tracking-tight">
                Biến công việc rối thành một luồng xử lý rõ ràng.
              </h1>
              <p className="text-sm leading-6 text-gray-300 max-w-lg">
                TaskFlow giúp bạn nắm được việc hôm nay, hạn chót sắp tới và
                những mục tiêu cần chia nhỏ để bắt tay vào làm ngay.
              </p>
            </div>

            <div className="grid gap-3">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-3 text-sm text-gray-200"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="relative z-10 text-xs text-gray-500">
            Dành cho những ngày cần tập trung, lên kế hoạch rõ ràng và ít bỏ sót
            chi tiết hơn.
          </p>
        </section>

        <section className="flex items-center justify-center px-4 sm:px-6 py-8">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="lg:hidden flex items-center justify-center gap-2 mb-8"
            >
              <div className="w-9 h-9 bg-[#4C75F2] rounded-full flex items-center justify-center text-white shadow-md shadow-blue-500/30">
                <PencilLine className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight">TaskFlow</span>
            </Link>

            <div className="bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/70 p-5 sm:p-7 space-y-6">
              <div className="grid grid-cols-2 rounded-2xl bg-gray-100 p-1 text-sm font-semibold">
                <Link
                  to="/login"
                  className={`rounded-xl px-3 py-2 text-center transition-all ${
                    !isRegister
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className={`rounded-xl px-3 py-2 text-center transition-all ${
                    isRegister
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  Đăng ký
                </Link>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4C75F2]">
                  <CalendarDays className="w-4 h-4" />
                  <span>Tài khoản TaskFlow</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tight">
                  {copy.title}
                </h2>
                <p className="text-sm text-gray-500">{copy.subtitle}</p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {isRegister && (
                  <label className="block space-y-1.5">
                    <span className="text-xs font-semibold text-gray-600">
                      Tên hiển thị
                    </span>
                    <div className="relative">
                      <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={updateField}
                        placeholder="Ví dụ: Nguyễn An"
                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-3 text-sm outline-none transition-all focus:border-[#4C75F2] focus:bg-white focus:shadow-sm"
                      />
                    </div>
                  </label>
                )}

                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-gray-600">
                    Địa chỉ email
                  </span>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={updateField}
                      placeholder="ten@vidu.com"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-3 text-sm outline-none transition-all focus:border-[#4C75F2] focus:bg-white focus:shadow-sm"
                    />
                  </div>
                </label>

                <label className="block space-y-1.5">
                  <span className="text-xs font-semibold text-gray-600">
                    Mật khẩu
                  </span>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      name="password"
                      type={showPassword ? "text" : "password"}
                      value={form.password}
                      onChange={updateField}
                      placeholder="Tối thiểu 6 ký tự"
                      className="w-full rounded-2xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-11 text-sm outline-none transition-all focus:border-[#4C75F2] focus:bg-white focus:shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((value) => !value)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      aria-label={
                        showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"
                      }
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </label>

                {error && (
                  <p className="rounded-2xl bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#4C75F2] px-4 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-colors hover:bg-blue-700"
                >
                  <span>{copy.submit}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-center text-sm text-gray-500">
                {copy.switchText}{" "}
                <Link
                  to={copy.switchTo}
                  className="font-semibold text-[#4C75F2] hover:text-blue-700"
                >
                  {copy.switchAction}
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
