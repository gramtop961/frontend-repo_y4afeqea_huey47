import { Rocket } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center rounded-md bg-gradient-to-tr from-indigo-500 to-fuchsia-500 p-2 text-white shadow">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold tracking-tight text-gray-900">Hello World</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          <a href="#footer" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}
