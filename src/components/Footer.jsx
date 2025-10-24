export default function Footer() {
  return (
    <footer id="footer" className="mt-16 border-t border-gray-200/60 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Hello World</p>
        <p className="hidden sm:block">Crafted with ❤️ using React & Tailwind</p>
      </div>
    </footer>
  );
}
