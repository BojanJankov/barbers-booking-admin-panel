import { useAuth } from "@/context/AuthContext";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const { user } = useAuth();
  redirect(user ? "/barbers" : "/login");
}
