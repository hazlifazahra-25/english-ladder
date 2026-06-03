import { PageId } from "../types";
import logo from "../assets/logo revisian.png";

interface TopNavProps {
  activePage: PageId;
  onPageChange: (page: PageId) => void;
}

const navItems: Array<{ id: PageId; label: string }> = [
  { id: "home", label: "Home" },
  { id: "library", label: "Story Library" },
  { id: "journey", label: "Journey Map" },
  { id: "progress", label: "Progress" },
  { id: "about", label: "About" },
  { id: "subscribe", label: "Subscribe" }
];

function TopNav({ activePage, onPageChange }: TopNavProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-sky-100/70 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <button
          type="button"
          className="flex items-center gap-3 text-left"
          onClick={() => onPageChange("home")}
        >
<img
  src={logo}
  alt="English Ladder Logo"
  className="h-40 w-40 object-contain"
/>
          <div>
            <p className="font-display text-xl font-extrabold text-navy-900">English Ladder</p>
            <p className="text-xs font-bold uppercase tracking-wide text-sky-600">
              Climb, Read, and Grow.
            </p>
          </div>
        </button>
        <nav className="hidden flex-wrap items-center justify-end gap-2 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activePage === item.id
                  ? "bg-sky-500 text-white shadow-soft"
                  : "bg-sky-50 text-navy-700 hover:bg-sky-100"
              }`}
              onClick={() => onPageChange(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => onPageChange("library")}
            className="story-cta rounded-full bg-navy-800 px-4 py-2 text-sm font-extrabold text-white"
          >
            Start Story
          </button>
        </nav>
      </div>
      <div className="mx-auto flex w-full max-w-7xl gap-2 overflow-auto px-4 pb-3 lg:hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
              activePage === item.id
                ? "bg-sky-500 text-white shadow-soft"
                : "bg-sky-50 text-navy-700 hover:bg-sky-100"
            }`}
            onClick={() => onPageChange(item.id)}
          >
            {item.label}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onPageChange("library")}
          className="whitespace-nowrap rounded-full bg-navy-800 px-4 py-2 text-sm font-extrabold text-white"
        >
          Start Story
        </button>
      </div>
    </header>
  );
}

export default TopNav;
