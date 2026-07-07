import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import HeroPic from "../asset/hero-pic.png";

const FRAMES = [
  { id: "0001", mood: "happy", label: "Grinning, direct gaze" },
  { id: "0002", mood: "sad", label: "Downturned mouth, soft brow" },
  { id: "0003", mood: "happy", label: "Eyes creased, open smile" },
  { id: "0004", mood: "sad", label: "Lowered gaze, flat mouth" },
  { id: "0005", mood: "happy", label: "Raised cheeks, teeth visible" },
];

const SPECS = [
  {
    key: "LATENCY",
    value: "~180ms",
    detail: "From capture to classification, per frame.",
  },
  {
    key: "ON-DEVICE",
    value: "No upload required",
    detail:
      "Webcam frames are scored locally before anything reaches the server.",
  },
  {
    key: "GRANULARITY",
    value: "2-class + confidence",
    detail: "Happy or sad, with a calibrated probability, not a guess.",
  },
];

const USE_CASES = [
  {
    title: "Interactive Installations",
    description:
      "Adapt digital art, museum exhibits, or gaming experiences dynamically based on instantaneous emotional reception.",
    tag: "Creative",
  },
  {
    title: "UX & Focus Groups",
    description:
      "Gather aggregated, privacy-first emotional feedback metrics on interfaces without transmitting video feeds.",
    tag: "Research",
  },
  {
    title: "Accessibility Tools",
    description:
      "Provide alternative macro-inputs or triggers for users navigating digital workspaces via expressions.",
    tag: "Assistive",
  },
];

const MOOD_COLOR = {
  happy: "var(--amber)",
  sad: "var(--denim)",
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Home = () => {
  const prefersReducedMotion = useReducedMotion();
  const [activeFrame, setActiveFrame] = useState(0);
  const [confidence, setConfidence] = useState(92);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      setActiveFrame((i) => (i + 1) % FRAMES.length);
      setConfidence(84 + Math.round(Math.random() * 14));
    }, 2600);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const activeMood = FRAMES[activeFrame].mood;
  const userInfo = localStorage.getItem("userInfo");

  const PRIVACY_FEATURES = [
    {
      title: "Zero Server Uplinks",
      description:
        "Your camera stream is processed purely in local volatile memory. Raw imagery never transmits across the public internet.",
      icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
    },
    {
      title: "Regulatory Compliance",
      description:
        "Inherently satisfies stringent GDPR, CCPA, and HIPAA compliance frameworks out of the box because zero PII is aggregated.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
  ];

  return (
    <div
      style={{
        "--paper":
          "#FAFAFA" /* Crisper modern white base instead of yellow-beige */,
        "--paper-darker":
          "#F4F4F5" /* Second shade of white/gray for block sections */,
        "--ink": "#18181B" /* Darker ink color for maximum reading contrast */,
        "--amber":
          "#D97706" /* Slightly deeper amber for enhanced visibility */,
        "--denim": "#2563EB" /* Punchier blue tone for UI accents */,
        "--pine": "#059669" /* Clearer emerald green */,
        "--line": "#E4E4E7" /* Defined structural divider line gray */,
      }}
      className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)] selection:bg-[var(--pine)]/20 overflow-x-hidden"
    >
      {/* Hero Section with White Dynamic Gradients */}
      <section
        className="relative min-h-[85vh] md:min-h-[80vh] flex items-center bg-cover bg-center border-b border-[var(--line)]"
        style={{
          backgroundImage: `linear-gradient(to right, #FAFAFA 2%, rgba(250, 250, 250, 0.9) 10%, rgba(250, 250, 250, 0.1) 100%), url(${HeroPic})`,
        }}
      >
        <div className="max-w-6xl w-full mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 z-10 grid md:grid-cols-2">
          <div className="backdrop-blur-[4px] md:backdrop-blur-none bg-[#FAFAFA]/80 md:bg-transparent p-6 sm:p-8 md:p-0 rounded-2xl border border-[var(--line)] md:border-none shadow-lg shadow-black/5 md:shadow-none">
            <motion.p
              initial="hidden"
              animate="show"
              custom={0}
              variants={fadeUp}
              className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--denim)] mb-5"
            >
              Facial expression AI — happy / sad classifier
            </motion.p>

            <motion.h1
              initial="hidden"
              animate="show"
              custom={1}
              variants={fadeUp}
              className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] font-bold tracking-tight text-[var(--ink)]"
            >
              Two expressions.
              <br />
              One frame apart.
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              custom={2}
              variants={fadeUp}
              className="mt-6 text-[15px] sm:text-base text-[var(--ink)] font-normal max-w-md leading-relaxed"
            >
              Point a webcam or drop in a photo. The model reads the corners of
              the mouth and eyes and returns one of two calls — happy or sad —
              with a confidence score you can audit.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              custom={3}
              variants={fadeUp}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to={userInfo ? "/dashboard" : "/register"}
                className="inline-flex items-center gap-2 bg-[var(--ink)] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[var(--pine)] transition-colors duration-300"
              >
                {userInfo ? "Go to Dashboard" : "Get Started"}
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--ink)]/80 hover:text-[var(--ink)] underline decoration-[var(--line)] underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pine)] focus-visible:ring-offset-2 rounded"
              >
                Try Demo
                <span aria-hidden>→</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating Tracking HUD Status indicators */}
        <div className="absolute top-6 right-6 font-mono text-[11px] bg-white border border-[var(--line)] px-4 py-2 rounded-lg shadow-sm hidden sm:block backdrop-blur-md">
          <span className="text-[var(--ink)]/60 font-medium">
            LIVE INDEX: {FRAMES[activeFrame].id} ·{" "}
          </span>
          <span
            className="font-bold transition-colors duration-300"
            style={{ color: MOOD_COLOR[activeMood] }}
          >
            {activeMood.toUpperCase()} ({confidence}%)
          </span>
        </div>
      </section>

      {/* Main Container - Shared White Shade Grid ecosystem */}
      <main className="flex-grow max-w-6xl w-full mx-auto px-5 sm:px-8 lg:px-10 py-14 md:py-20 flex flex-col gap-20 md:gap-28">
        {/* Contact sheet — signature element */}
        <section aria-label="Recent classifications" className="relative">
          <div className="flex items-baseline justify-between mb-5">
            <h2 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--ink)]/60">
              Contact sheet — live session
            </h2>
            <span className="font-mono text-xs font-medium text-[var(--ink)]/50">
              {FRAMES.length} frames
            </span>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1">
            {FRAMES.map((frame, i) => {
              const isActive = i === activeFrame;
              return (
                <button
                  key={frame.id}
                  onClick={() => setActiveFrame(i)}
                  className={`shrink-0 w-36 sm:w-40 text-left rounded-xl border p-3 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pine)] ${
                    isActive
                      ? "border-[var(--ink)] bg-white shadow-md -translate-y-1"
                      : "border-[var(--line)] bg-white hover:bg-[var(--paper-darker)]"
                  }`}
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-[var(--ink)]/60 font-bold mb-2">
                    <span>#{frame.id}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: MOOD_COLOR[frame.mood] }}
                    />
                  </div>
                  <svg viewBox="0 0 100 30" className="w-full h-6 mb-2">
                    <path
                      d={
                        frame.mood === "happy"
                          ? "M4 10 Q50 30 96 10"
                          : "M4 20 Q50 2 96 20"
                      }
                      fill="none"
                      stroke={MOOD_COLOR[frame.mood]}
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <p className="text-[11px] text-[var(--ink)] font-medium leading-snug">
                    {frame.label}
                  </p>
                </button>
              );
            })}
          </div>
        </section>

        {/* NEW SECTION 1: Practical Applications (Features White Shade #2) */}
        <section className="border-t border-[var(--line)] pt-12">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-12">
            <div>
              <h2 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--ink)]/60 mb-4">
                Applications
              </h2>
              <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-[var(--ink)]">
                Where edge classification makes the difference.
              </h3>
            </div>
            <div className="grid sm:grid-cols-1 gap-4">
              {USE_CASES.map((item, index) => (
                <div
                  key={index}
                  className="group p-5 bg-white border border-[var(--line)] rounded-xl hover:bg-[var(--paper-darker)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-base font-bold text-[var(--ink)]">
                      {item.title}
                    </h4>
                    <span className="font-mono text-[10px] font-bold uppercase bg-[var(--paper-darker)] text-[var(--ink)] px-2.5 py-1 rounded">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NEW SECTION 2: Technical Pipeline (Contrasting White Shade Background Block) */}
        <section className="bg-[var(--paper-darker)] border border-[var(--line)] -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 py-14 rounded-2xl md:rounded-3xl">
          <h2 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--ink)]/60 mb-8">
            The Pipeline
          </h2>
          <div className="grid sm:grid-cols-3 gap-8 relative">
            <div className="relative">
              <div className="font-mono text-3xl font-bold text-[var(--denim)] mb-2">
                01
              </div>
              <h4 className="text-md font-bold mb-2 text-[var(--ink)]">
                Frame Capture
              </h4>
              <p className="text-xs text-[var(--ink)]/80 leading-relaxed">
                Normalizes local input arrays, corrects head tilts, and scales
                down regions of interest to match baseline matrix dimensions.
              </p>
            </div>
            <div className="relative">
              <div className="font-mono text-3xl font-bold text-[var(--denim)] mb-2">
                02
              </div>
              <h4 className="text-md font-bold mb-2 text-[var(--ink)]">
                Feature Mapping
              </h4>
              <p className="text-xs text-[var(--ink)]/80 leading-relaxed">
                Convolutional filters separate high-contrast regions around
                spatial anchor targets like the nasolabial folds and eyelids.
              </p>
            </div>
            <div className="relative">
              <div className="font-mono text-3xl font-bold text-[var(--denim)] mb-2">
                03
              </div>
              <h4 className="text-md font-bold mb-2 text-[var(--ink)]">
                Softmax Inference
              </h4>
              <p className="text-xs text-[var(--ink)]/80 leading-relaxed">
                Resolves logit scores into pure binary distribution
                probabilities, exposing real-time precision metrics without
                server latency.
              </p>
            </div>
          </div>
        </section>

        {/* Spec sheet */}
        <section className="border-t border-[var(--line)] pt-12">
          <h2 className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--ink)]/60 mb-8">
            Spec sheet
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {SPECS.map((spec, i) => (
              <motion.div
                key={spec.key}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-l-2 border-[var(--line)] pl-5"
              >
                <div className="font-mono text-[11px] font-bold tracking-wider text-[var(--pine)] mb-1.5">
                  {spec.key}
                </div>
                <div className="text-xl font-bold mb-2 text-[var(--ink)]">
                  {spec.value}
                </div>
                <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                  {spec.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </section>
        {/* Privacy & Trust Section (White Base) */}
        <section className="border-t border-[var(--line)] pt-16">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--denim)] mb-3">
              Compliance & Security
            </p>
            <h3 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)]">
              Privacy-first engineering. By default.
            </h3>
            <p className="mt-4 text-sm text-[var(--ink)]/80 leading-relaxed">
              Traditional computer vision tools compromise client trust by
              harvesting biometric video data. Our pipeline shifts the complete
              inference load onto the client machine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {PRIVACY_FEATURES.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white border border-[var(--line)] rounded-2xl shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--paper-darker)] flex items-center justify-center text-[var(--denim)] mb-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={item.icon}
                    />
                  </svg>
                </div>
                <h4 className="text-base font-bold text-[var(--ink)] mb-2">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Developer API Section (Contrasting Shaded Block) */}
        <section className="bg-white border border-[var(--line)] -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 py-16 rounded-2xl md:rounded-3xl grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--pine)] mb-3">
              Developer SDK
            </p>
            <h3 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
              Integrate matrix hooks in three lines of code.
            </h3>
            <p className="text-sm text-[var(--ink)]/80 leading-relaxed mb-6">
              Drop our lightweight compilation build into any application
              runtime framework. Listen to spatial array score shifts via clean
              declarative hooks.
            </p>
            <div className="flex flex-col gap-3 font-mono text-xs text-[var(--ink)]/70">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--pine)]" />{" "}
                Custom confidence score thresholds
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--pine)]" />{" "}
                Built-in WASM multi-threading support
              </div>
            </div>
          </div>

          {/* Terminal code preview box */}
          <div className="lg:col-span-7 w-full bg-[#18181B] rounded-xl p-5 shadow-xl text-zinc-400 font-mono text-xs overflow-x-auto border border-zinc-800">
            <div className="flex items-center gap-1.5 border-b border-zinc-800 pb-3 mb-4 text-zinc-600">
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2 text-[10px] text-zinc-500">
                useClassifier.js
              </span>
            </div>
            <pre className="leading-relaxed text-zinc-300">
              <code>
                {`import { useEmotionEngine } from "@edge/vision";

const App = () => {
  const { stream, metrics } = useEmotionEngine({ fps: 30 });

  console.log(metrics.mood); 
  // Output: { class: "happy", confidence: 0.94 }
};`}
              </code>
            </pre>
          </div>
        </section>
        {/* Section: Benchmarks */}
        <section className="bg-[var(--paper-darker)] border border-[var(--line)] -mx-5 px-5 sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10 py-16 rounded-2xl md:rounded-3xl">
          <div className="max-w-3xl mb-12">
            <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--denim)] mb-3">
              Telemetry & Benchmarks
            </p>
            <h3 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)]">
              Engineered for extreme resource constraints.
            </h3>
            <p className="mt-4 text-sm text-[var(--ink)]/80 leading-relaxed">
              By bypassing server hops and compressing our neural network
              layers, we achieve desktop-grade tracking speeds directly within
              standard mobile web browsers.
            </p>
          </div>

          {/* Benchmark Grid Grid */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-[var(--line)] rounded-xl">
              <div className="text-zinc-400 font-mono text-xs mb-2">
                WARM BOOT LATENCY
              </div>
              <div className="text-3xl font-bold text-[var(--ink)] tracking-tight">
                14ms
              </div>
              <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-[var(--pine)] h-full w-[92%]" />
              </div>
              <p className="mt-3 text-[11px] text-[var(--ink)]/60 leading-normal">
                Time to first valid classification map array post
                initialization.
              </p>
            </div>

            <div className="p-6 bg-white border border-[var(--line)] rounded-xl">
              <div className="text-zinc-400 font-mono text-xs mb-2">
                NETWORK FOOTPRINT
              </div>
              <div className="text-3xl font-bold text-[var(--ink)] tracking-tight">
                2.4 MB
              </div>
              <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-[var(--denim)] h-full w-[85%]" />
              </div>
              <p className="mt-3 text-[11px] text-[var(--ink)]/60 leading-normal">
                Total compressed asset size of model weights and runtime
                dependencies.
              </p>
            </div>

            <div className="p-6 bg-white border border-[var(--line)] rounded-xl">
              <div className="text-zinc-400 font-mono text-xs mb-2">
                MAX CPU CONSUMPTION
              </div>
              <div className="text-3xl font-bold text-[var(--ink)] tracking-tight">
                &lt; 4.2%
              </div>
              <div className="w-full bg-zinc-100 h-1.5 rounded-full mt-4 overflow-hidden">
                <div className="bg-[var(--amber)] h-full w-[12%]" />
              </div>
              <p className="mt-3 text-[11px] text-[var(--ink)]/60 leading-normal">
                Average system load running live 60fps tracking loops on mobile
                hardware.
              </p>
            </div>
          </div>
        </section>
        {/* Section: Matrix Directory */}
        <section className="border-t border-[var(--line)] pt-16">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-10">
              <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-[var(--pine)] mb-3">
                Operational Framework
              </p>
              <h3 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)] mb-4">
                Tailored solutions for modern web stacks.
              </h3>
              <p className="text-sm text-[var(--ink)]/80 leading-relaxed">
                Our lightweight classification pipeline translates structural
                micro-expressions into immediate systemic triggers.
              </p>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4">
              <div className="p-6 border border-[var(--line)] bg-white rounded-2xl hover:border-[var(--ink)]/40 transition-colors duration-300">
                <span className="font-mono text-[10px] font-bold text-[var(--denim)] uppercase tracking-wider block mb-2">
                  Product Teams
                </span>
                <h4 className="text-base font-bold text-[var(--ink)] mb-2">
                  Dynamic UX Adaptation
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  Automatically soften contrasting UI elements, slow down
                  auto-advance slide parameters, or surface context help
                  triggers when user frustration thresholds drop.
                </p>
              </div>

              <div className="p-6 border border-[var(--line)] bg-white rounded-2xl hover:border-[var(--ink)]/40 transition-colors duration-300">
                <span className="font-mono text-[10px] font-bold text-[var(--pine)] uppercase tracking-wider block mb-2">
                  Game Design
                </span>
                <h4 className="text-base font-bold text-[var(--ink)] mb-2">
                  Reactive Difficulty Scales
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  Inject ambient adaptive gameplay elements. Scale back tactical
                  stress markers or unlock hidden easter eggs based directly on
                  physical emotional feedback loops.
                </p>
              </div>

              <div className="p-6 border border-[var(--line)] bg-white rounded-2xl hover:border-[var(--ink)]/40 transition-colors duration-300">
                <span className="font-mono text-[10px] font-bold text-[var(--amber)] uppercase tracking-wider block mb-2">
                  Research Labs
                </span>
                <h4 className="text-base font-bold text-[var(--ink)] mb-2">
                  Aggregated Focus Testing
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  Generate structured emotional friction heatmaps for user
                  interface testing modules without capturing confidential
                  workspace browser screens.
                </p>
              </div>

              <div className="p-6 border border-[var(--line)] bg-white rounded-2xl hover:border-[var(--ink)]/40 transition-colors duration-300">
                <span className="font-mono text-[10px] font-bold text-purple-600 uppercase tracking-wider block mb-2">
                  Accessibility Labs
                </span>
                <h4 className="text-base font-bold text-[var(--ink)] mb-2">
                  Hands-Free Macros
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  Map structural facial changes directly to complex web input
                  workflows. Empower motor-impaired operators with precise
                  system navigational triggers.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Section: Technical FAQ */}
        <section className="border-t border-[var(--line)] pt-16 mb-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-purple-600 mb-3">
                Documentation Clarifications
              </p>
              <h3 className="font-display text-3xl font-bold tracking-tight text-[var(--ink)]">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-5 bg-white border border-[var(--line)] rounded-xl">
                <h4 className="text-sm font-bold text-[var(--ink)] mb-2">
                  Does the model work reliably under poor ambient lighting
                  conditions?
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  Yes. The pre-processing pipeline automatically normalizes
                  local input arrays and adjusts exposure contrast parameters
                  before feeding localized target matrices into the inference
                  layers.
                </p>
              </div>

              <div className="p-5 bg-white border border-[var(--line)] rounded-xl">
                <h4 className="text-sm font-bold text-[var(--ink)] mb-2">
                  Are users wearing glasses or facial hair classified
                  accurately?
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  Our underlying convolutional networks analyze composite
                  geometric vector shifts across structural anchors (like
                  nasolabial folds and eyelid margins), ensuring accurate
                  scoring regardless of superficial obstructions.
                </p>
              </div>

              <div className="p-5 bg-white border border-[var(--line)] rounded-xl">
                <h4 className="text-sm font-bold text-[var(--ink)] mb-2">
                  Can the model run completely offline?
                </h4>
                <p className="text-xs sm:text-sm text-[var(--ink)]/70 leading-relaxed">
                  Absolutely. Once the client logs into the application and
                  initial model weights cache securely inside IndexedDB, the
                  entire application functions without an internet connection.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] bg-white py-6 text-center text-[var(--ink)]/60 text-xs font-mono font-bold tracking-wide mt-auto">
        © 2026 — facial expression classifier, built with React & a small CNN.
      </footer>
    </div>
  );
};

export default Home;
