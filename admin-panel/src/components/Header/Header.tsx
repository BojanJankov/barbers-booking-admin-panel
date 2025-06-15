import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-[#111827] border-[#374151] rounded-lg p-2 text-text shadow-lg mx-4 sm:mx-6 lg:mx-8 mt-4">
      <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 flex justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="text-text border-1 border-grey-600 p-2 rounded-sm focus:border-border w-70"
        />
        <nav className="space-x-3 flex items-center sm:space-x-6">
          <div className="relative">
            <Bell className="w-5 sm:w-6 h-5 sm:h-6 text-grey-300 cursor-pointer hover:text-border" />
          </div>
          <img
            src="/admin-avatar.jpeg"
            alt="Admin Avatar"
            className="w-10 h-10 rounded-full border"
          />
        </nav>
      </div>
    </header>
  );
}
