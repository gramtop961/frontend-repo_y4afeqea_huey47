import { Star, Sparkles, Smile } from "lucide-react";

function FeatureItem({ icon: Icon, title, description }) {
  return (
    <div className="rounded-xl border border-gray-200/70 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-500 to-fuchsia-500 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default function Features() {
  const items = [
    {
      icon: Sparkles,
      title: "Clean design",
      description: "Minimal, polished UI out of the box so your hello feels special.",
    },
    {
      icon: Star,
      title: "Fast by default",
      description: "Built with Vite + React and Tailwind for a snappy experience.",
    },
    {
      icon: Smile,
      title: "Pleasant to use",
      description: "Small touches and smooth motion for a friendly vibe.",
    },
  ];

  return (
    <section id="features" className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <FeatureItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
