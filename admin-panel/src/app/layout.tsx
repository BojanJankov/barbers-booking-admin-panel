import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { NavLinkModel } from "./types/types";
import NavigationPanel from "@/components/NavigationPanel/NavigationPanel";
import Header from "@/components/Header/Header";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#000000] text-[#ffffff]">
        <div className="flex h-screen overflow-hidden">
          <NavigationPanel navLinks={navProps} />
          <div className="flex flex-col flex-1 overflow-auto">
            <div className="max-w-7x1 mx-auto w-full">
              <Header />
              <main>{children}</main>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
