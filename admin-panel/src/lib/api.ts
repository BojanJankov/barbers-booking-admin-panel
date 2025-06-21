import { User } from "@/types/user-model";

export async function loginAdmin(email: string, password: string) {
  const res = await fetch("http://localhost:5000/auth/admin/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Login failed");

  const user: User = await res.json();
  const accessToken = res.headers.get("access-token");
  const refreshToken = res.headers.get("refresh-token");

  const returnObj = {
    user,
    accessToken,
    refreshToken,
  };

  return returnObj;
}
