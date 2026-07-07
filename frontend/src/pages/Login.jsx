import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import api from "../api/axios";
import LoginImg from "../asset/login.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeftVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const { data } = await api.post("/auth/login", formData);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    const user = localStorage.getItem("userInfo");
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-[#FAFAFA] font-sans selection:bg-indigo-600/10 text-[#18181B] relative">
      {/* LEFT SIDE: Symmetrical 50% Clean Form Component */}
      <div className="flex items-center justify-center p-6 sm:p-12 md:p-16 lg:p-20 bg-white order-2 md:order-1">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-md w-full"
        >
          <motion.div variants={fadeUpVariants} className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-2">
              Sign In
            </h2>
            <p className="text-slate-500 text-sm sm:text-[15px]">
              Access your cloud environment safely.
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-rose-50 border border-rose-100 text-rose-700 px-4 py-3 rounded-xl mb-6 text-sm font-semibold flex items-center gap-2.5"
            >
              <svg
                className="w-4 h-4 shrink-0 text-rose-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {error}
            </motion.div>
          )}

          <motion.form
            variants={fadeUpVariants}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5 tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#FAFAFA] focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/5 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400 text-sm sm:text-[15px]"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-600 mb-1.5 tracking-wider">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-[#FAFAFA] focus:bg-white focus:border-indigo-600 focus:ring-4 focus:ring-indigo-600/5 outline-none transition-all duration-200 text-slate-900 placeholder:text-slate-400 text-sm sm:text-[15px]"
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
                disabled={isLoading}
              />
            </div>

            <div className="flex items-center justify-between pt-1 pb-2">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded text-indigo-600 border-slate-300 focus:ring-indigo-500/20 focus:ring-offset-0 transition cursor-pointer"
                />
                <span className="text-xs sm:text-sm text-slate-500 font-medium">
                  Remember me
                </span>
              </label>
              <a
                href="#"
                className="text-xs sm:text-sm text-indigo-600 font-semibold hover:text-indigo-700 hover:underline underline-offset-4 transition"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full !mt-4 bg-indigo-600 text-white py-3.5 rounded-xl font-semibold shadow-sm hover:bg-indigo-700 hover:shadow shadow-indigo-600/10 active:scale-[0.995] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-[15px]"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Authorizing...
                </>
              ) : (
                "Sign In"
              )}
            </button>
          </motion.form>

          <motion.p
            variants={fadeUpVariants}
            className="mt-8 text-center text-slate-500 text-sm"
          >
            New here?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:text-indigo-700 hover:underline underline-offset-4 transition-colors"
            >
              Create Account
            </Link>
          </motion.p>
        </motion.div>
      </div>

      {/* RIGHT SIDE: Symmetrical 50% Image and Branding Component */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeLeftVariants}
        className="relative flex flex-col justify-between p-8 sm:p-12 md:p-16 min-h-[40vh] md:min-h-screen text-white bg-zinc-950 overflow-hidden order-1 md:order-2 border-b md:border-b-0 md:border-l border-[#E4E4E7]/60"
      >
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-normal opacity-60 scale-100 md:scale-105 transition-transform duration-[12s] hover:scale-100"
          style={{ backgroundImage: `url(${LoginImg})` }}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/70 md:bg-gradient-to-b md:from-zinc-950/40 md:via-zinc-950/60 md:to-zinc-950/90 pointer-events-none" />

        <div className="relative z-10 self-start hidden sm:block">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-[11px] font-mono tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Workspace Portal
          </div>
        </div>

        <div className="relative z-10 my-auto max-w-md mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 inline-flex items-center gap-2 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full border border-white/20 text-xs font-mono tracking-wider uppercase sm:hidden"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Workspace Portal
          </motion.div>

          <h1 className="text-3xl sm:text-4xl md:text-[2.6rem] font-bold tracking-tight leading-[1.15] font-display mb-4 drop-shadow-sm">
            Welcome back.
          </h1>
          <p className="text-zinc-200 text-sm sm:text-[15px] leading-relaxed font-normal">
            Sign back in to pick up where you left off. Monitor logs, run
            classification pipelines, and manage your data on-the-fly.
          </p>
        </div>

        <div className="relative z-10 font-mono text-[10px] sm:text-[11px] text-zinc-400 tracking-wide mt-8 md:mt-0 md:text-right">
          © 2026 Collective Intelligence Inc.
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
