import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/40 via-slate-50 to-white selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden">
        {/* Subtle Decorative Background Blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-200/30 rounded-full blur-3xl -z-10 animate-pulse duration-4000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl -z-10 animate-pulse duration-3000"></div>

        <div className="max-w-4xl w-full bg-white/70 backdrop-blur-xl border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 md:p-16 text-center transform transition-all duration-300">
          {/* Small Feature Badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 tracking-wide uppercase mb-6 border border-indigo-100/50">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
            Next-Gen Emotion AI
          </span>

          {/* Main Hook Typography */}
          <h2 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tight leading-[1.15] mb-6">
            Is the world{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Happy
            </span>{" "}
            or{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Sad?
            </span>
          </h2>

          {/* Subtext description */}
          <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            Experience our advanced AI-powered facial recognition system
            designed to understand, analyze, and map real-time human emotions
            seamlessly.
          </p>

          {/* Interaction/Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold text-base shadow-md shadow-indigo-200 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-300 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto border border-slate-200 text-slate-600 px-8 py-3.5 rounded-xl font-semibold text-base bg-white/50 hover:bg-slate-50 hover:border-slate-300 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
              Watch Demo
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm py-6 text-center text-slate-400 text-sm border-t border-slate-100 tracking-wide font-medium">
        <div>
          © 2026 AI Emotion Detection System. Crafted with care using React &
          Tailwind.
        </div>
      </footer>
    </div>
  );
}

export default App;
