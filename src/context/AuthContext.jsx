import { useMemo, useState } from "react";
import { AuthContext } from "./auth-context";

const USERS_KEY = "taskflow_users";
const SESSION_KEY = "taskflow_current_user";

function readStoredJson(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function getUsers() {
  return readStoredJson(USERS_KEY, []);
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() =>
    readStoredJson(SESSION_KEY, null),
  );

  function register({ name, email, password }) {
    const users = getUsers();
    const normalizedEmail = email.trim().toLowerCase();

    if (users.some((user) => user.email === normalizedEmail)) {
      return {
        ok: false,
        message: "Email này đã được đăng ký.",
      };
    }

    const user = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: normalizedEmail,
      password,
      avatar: `https://i.pravatar.cc/100?u=${encodeURIComponent(
        normalizedEmail,
      )}`,
    };

    saveUsers([...users, user]);

    const sessionUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);

    return { ok: true };
  }

  function login({ email, password }) {
    const normalizedEmail = email.trim().toLowerCase();
    const user = getUsers().find(
      (item) => item.email === normalizedEmail && item.password === password,
    );

    if (!user) {
      return {
        ok: false,
        message: "Email hoặc mật khẩu chưa đúng.",
      };
    }

    const sessionUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);

    return { ok: true };
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
    setCurrentUser(null);
  }

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      login,
      register,
      logout,
    }),
    [currentUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
