"use client";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/lib/api";
import { User } from "@/types/user-model";

interface AuthContextType {
  user: User | null;
  accessToken: string | null;
  loading: boolean;
  login: (email: string, password: string) => void;
}

const AuthContext = createContext<AuthContextType>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const loadUser = async () => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("accessToken");

        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setAccessToken(storedToken);
        }

        setLoading(false);
      };

      loadUser();
    })();
  }, []);

  const login = async (email: string, password: string) => {
    const { user, accessToken, refreshToken } = await loginAdmin(
      email,
      password
    );
    setUser(user);
    setAccessToken(accessToken);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    router.push("/barbers");
  };

  return (
    <AuthContext.Provider value={{ user, login, accessToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
