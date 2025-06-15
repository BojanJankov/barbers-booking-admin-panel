import { NavLinkModel } from "@/app/types/types";

type Props = {
  navLinks: NavLinkModel[];
};

const NavigationPanel = ({ navLinks }: Props) => {
  return (
    <aside className="bg-[#111827] relative z-10 translation-all duration-300 ease-in-out flex-shrink-0 w-64 border-r border-border">
      <div className="flex items-center p-6 space-x-4 border-b border-border">
        <img
          src="/admin-avatar.jpeg"
          alt="Admin Avatar"
          className="w-10 h-10 rounded-full"
        />

        <div>
          <p className="text-sm font-semibold">Bojan Jankov</p>
          <p className="text-xs text-gray-400">Administrator</p>
        </div>
      </div>

      <nav className="mt-4">
        {navLinks.map((navLink) => (
          <a
            className="block text-xl px-6 py-3 hover:bg-border translation"
            key={navLink.link}
            href={navLink.link}
          >
            {navLink.text}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default NavigationPanel;
