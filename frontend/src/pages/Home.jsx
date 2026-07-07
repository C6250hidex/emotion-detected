import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/40 via-slate-50 to-white selection:bg-indigo-100 selection:text-indigo-900">
      <div className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative overflow-hidden flex flex-col gap-24">
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl -z-10 animate-pulse duration-4000"></div>
        <div className="absolute top-40 right-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl -z-10 animate-pulse duration-3000"></div>
        <header className="text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 tracking-wide uppercase mb-6 border border-indigo-100/50 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
            Next-Gen Emotion AI
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-800 tracking-tight leading-[1.1] mb-6">
            Is the world{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
              Happy
            </span>{" "}
            or{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
              Sad?
            </span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl max-w-2xl font-normal leading-relaxed mb-10">
            Experience our advanced AI-powered facial recognition system
            designed to understand, analyze, and map real-time human emotions
            seamlessly.
          </p>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/register" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-base shadow-md shadow-indigo-100 hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                Get Started Free
              </button>
            </Link>
            <Link to="/demo" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto border border-slate-200 text-slate-600 px-8 py-4 rounded-xl font-semibold text-base bg-white hover:bg-slate-50 hover:border-slate-300 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200">
                Watch Demo
              </button>
            </Link>
          </div>
        </header>
        <section className="w-full bg-white/70 backdrop-blur-xl border border-slate-100 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] p-4 sm:p-6 lg:p-8 transform transition-all">
          <div className="border border-slate-100 rounded-2xl bg-slate-50/50 overflow-hidden grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
            <div className="p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Live Analysis
                </span>
                <span className="px-2 py-0.5 text-xs font-medium text-emerald-700 bg-emerald-50 rounded-md border border-emerald-100">
                  Active
                </span>
              </div>
              <div className="h-32 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center justify-center relative p-4">
                <div className="w-full h-full flex items-end gap-1.5 pt-6">
                  <div className="w-full bg-indigo-500/80 h-[40%] rounded-t-sm animate-pulse"></div>
                  <div className="w-full bg-indigo-600 h-[75%] rounded-t-sm"></div>
                  <div className="w-full bg-indigo-500/60 h-[25%] rounded-t-sm animate-pulse"></div>
                  <div className="w-full bg-indigo-700 h-[90%] rounded-t-sm"></div>
                  <div className="w-full bg-emerald-500 h-[60%] rounded-t-sm"></div>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Primary Tone
              </span>
              <div className="h-32 bg-white rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center px-6">
                <div className="text-3xl font-black text-slate-800">88.4%</div>
                <div className="text-sm text-slate-500 font-medium mt-1">
                  Joy & Engagement Detected
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                Global Pulse
              </span>
              <div className="h-32 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-4 px-6">
                <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-xl">
                  🌍
                </div>
                <div>
                  <div className="text-base font-bold text-slate-800">
                    Stable-Positive
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    Aggregated from 14k sources
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="bg-white/60 p-6 sm:p-8 rounded-2xl border border-slate-100/80 hover:bg-white transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-lg font-bold mb-4">
              ⏱️
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Real-Time Processing
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Sub-millisecond facial feature telemetry mapping for accurate
              instantly updating stream insights.
            </p>
          </div>

          <div className="bg-white/60 p-6 sm:p-8 rounded-2xl border border-slate-100/80 hover:bg-white transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold mb-4">
              🔒
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Privacy First Architecture
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Vectorized structural node recognition models ensure zero local
              photo data leaves the device ecosystem.
            </p>
          </div>
          <div className="bg-white/60 p-6 sm:p-8 rounded-2xl border border-slate-100/80 hover:bg-white transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold mb-4">
              📊
            </div>
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Granular Micro-Analytics
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Unpack deep emotional subtleties tracking multi-axis metrics
              spanning micro-expressions.
            </p>
          </div>
        </section>
      </div>
      <footer className="bg-white/80 backdrop-blur-sm py-6 text-center text-slate-400 text-sm border-t border-slate-100 tracking-wide font-medium mt-auto">
        <div>
          © 2026 AI Emotion Detection System. Crafted with care using React &
          Tailwind.
        </div>
      </footer>
    </div>
  );
};

export default Home;
