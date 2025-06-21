import { ReactNode } from "react";
import NavigationPanel from "@/components/NavigationPanel/NavigationPanel";
import { NavLinkModel } from "../../types/types";
import Header from "@/components/Header/Header";
import { useAuth } from "@/context/AuthContext";
import ProtectedClient from "@/components/ProtectedRoute/ProtectedClient";

const navProps: NavLinkModel[] = [
  {
    text: "Dashboard",
    link: "/dashboard",
  },
  {
    text: "Barbers",
    link: "/barbers",
  },
  {
    text: "Services",
    link: "/services",
  },
  {
    text: "Appointments",
    link: "/appointments",
  },

  {
    text: "Settings",
    link: "/settings",
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedClient>
      <div className="flex min-h-screen">
        <NavigationPanel navLinks={navProps} />
        <main className="flex-1 bg-gray-100 p-6">
          <Header />
          {children}
        </main>
      </div>
    </ProtectedClient>
  );
}
