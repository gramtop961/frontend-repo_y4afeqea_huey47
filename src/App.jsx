import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      <Header />
      <main>
        <Greeting />
        <Features />
        <section id="about" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">About this demo</h2>
          <p className="mt-3 text-gray-600">
            This is a simple, beautiful Hello World app. Use it as a starting point for
            your ideas, or keep it as-is for a friendly landing page.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
