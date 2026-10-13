import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadingVideo from './components/FadingVideo'
import BlurText from './components/BlurText'
import {
  ArrowUpRight,
  Play,
  ClockIcon,
  GlobeIcon,
  ImageIcon,
  MovieIcon,
  LightbulbIcon,
} from './components/Icons'

const fadeUp = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

const navLinks = [
  { label: 'Features', id: 'features' },
  { label: 'How it Works', id: 'how-it-works' },
  { label: 'Use Cases', id: 'use-cases' },
  { label: 'Pricing', id: 'pricing' },
  { label: 'Docs', id: 'docs' },
]

function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const navOffset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - navOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

const logos = ['OpenAI', 'Anthropic', 'LangChain', 'Vercel', 'Hugging Face']

const capabilities = [
  {
    icon: ImageIcon,
    tags: ['Planning', 'Reasoning', 'Memory', 'Tools'],
    title: 'Autonomous',
    body: 'The agent plans multi-step tasks, uses tools, remembers context across sessions, and iterates until the goal is achieved — without constant human hand-holding.',
  },
  {
    icon: MovieIcon,
    tags: ['Code', 'Terminal', 'Browser', 'APIs'],
    title: 'Tool-Native',
    body: 'Built to call real tools: write and run code, browse the web, hit APIs, edit files, and control a sandboxed environment. Not just chat — actual work.',
  },
  {
    icon: LightbulbIcon,
    tags: ['Self-Correct', 'Retry', 'Reflect', 'Improve'],
    title: 'Self-Improving',
    body: 'When something fails, the agent diagnoses the error, adjusts its approach, and tries again. Continuous feedback loops turn one-shot prompts into reliable outcomes.',
  },
]

const features = [
  { title: 'Multi-step Planning', desc: 'Breaks complex goals into ordered steps, tracks progress, and adapts when the plan changes.' },
  { title: 'Tool Calling', desc: 'Native access to terminal, file system, browser, HTTP APIs, and custom tools you define.' },
  { title: 'Long-term Memory', desc: 'Remembers project context, past decisions, and preferences across sessions.' },
  { title: 'Sandboxed Runtime', desc: 'Runs code and commands in an isolated environment so experiments stay safe.' },
  { title: 'Human-in-the-loop', desc: 'Pause for approval on sensitive actions. You stay in control when it matters.' },
  { title: 'Streaming UI', desc: 'Watch the agent think, call tools, and produce results in real time.' },
]

const steps = [
  { num: '01', title: 'Describe the goal', desc: 'Tell the agent what you want in plain language — build a feature, fix a bug, research an API.' },
  { num: '02', title: 'Agent plans & acts', desc: 'It creates a plan, picks tools, writes code, runs commands, and iterates until done.' },
  { num: '03', title: 'Review & ship', desc: 'Inspect the output, approve changes, and merge. Or let it open a PR automatically.' },
]

const useCases = [
  { title: 'Codebase Refactors', desc: 'Rename symbols, migrate frameworks, or clean up tech debt across hundreds of files.' },
  { title: 'Feature Development', desc: 'From ticket to working PR — the agent scaffolds, implements, and tests.' },
  { title: 'Debugging', desc: 'Reproduce issues, dig through logs, and propose fixes with full context.' },
  { title: 'Docs & Research', desc: 'Summarize repos, generate docs, or explore unfamiliar APIs for you.' },
]

const plans = [
  {
    name: 'Hobby',
    price: 'Free',
    period: '',
    features: ['50 agent runs / month', '1 workspace', 'Community support', 'Basic tools'],
    cta: 'Get Started',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    features: ['Unlimited runs', '5 workspaces', 'Priority support', 'Custom tools', 'Memory & history'],
    cta: 'Start Pro',
    highlight: true,
  },
  {
    name: 'Team',
    price: '$99',
    period: '/mo',
    features: ['Everything in Pro', 'Shared workspaces', 'SSO & roles', 'Audit logs', 'Dedicated support'],
    cta: 'Contact Sales',
    highlight: false,
  },
]

export default function App() {
  return (
    <div className="bg-black text-white font-body">
      {/* ========== HERO ========== */}
      <section className="h-screen overflow-hidden bg-black relative">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
          className="absolute left-1/2 top-0 -translate-x-1/2 object-cover object-top z-0"
          style={{ width: '120%', height: '120%' }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
            <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
              <span className="font-heading italic text-2xl">a</span>
            </div>

            <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => scrollToId(link.id)}
                  className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/login"
                className="px-3 py-2 text-sm font-medium text-white/90 font-body hover:text-white"
              >
                Sign In
              </Link>
              <Link
                to="/login"
                className="ml-1 px-4 py-2 bg-white text-black rounded-full text-sm font-medium flex items-center gap-1.5"
              >
                Get Started <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <Link
              to="/login"
              className="md:hidden liquid-glass rounded-full px-4 py-2 text-sm font-medium"
            >
              Sign In
            </Link>
          </nav>

          <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm"
            >
              <span className="bg-white text-black text-xs font-semibold px-2 py-0.5 rounded-full">New</span>
              <span className="text-white/90">Agent CLI v2 is live — autonomous coding agents</span>
            </motion.div>

            <div className="mt-6 max-w-3xl">
              <BlurText
                text="Autonomous AI Agents That Actually Get Work Done"
                className="text-6xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.8] tracking-[-4px]"
              />
            </div>

            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.8 }}
              className="mt-4 text-sm md:text-base text-white max-w-2xl font-body font-light leading-tight"
            >
              Not another chatbot. A full agent runtime with planning, tools, memory, and a
              sandboxed environment — so it can write code, run commands, and finish complex tasks
              end to end.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 1.1 }}
              className="mt-6 flex gap-6 items-center"
            >
              <Link
                to="/login"
                className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium"
              >
                Try the Agent <ArrowUpRight className="w-4 h-4" />
              </Link>
              <button type="button" onClick={() => scrollToId('how-it-works')} className="flex items-center gap-2 text-sm text-white/90">
                <Play className="w-4 h-4" /> Watch Demo
              </button>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 1.3 }}
              className="mt-8 flex gap-4 flex-wrap justify-center"
            >
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                <ClockIcon className="w-6 h-6 text-white/80" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">10x</div>
                <div className="text-sm text-white/70 mt-1">Faster Task Completion vs Manual</div>
              </div>
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                <GlobeIcon className="w-6 h-6 text-white/80" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">24/7</div>
                <div className="text-sm text-white/70 mt-1">Always-On Agent Runtime</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 1.4 }}
            className="flex flex-col items-center gap-4 pb-8"
          >
            <div className="liquid-glass rounded-full px-5 py-2 text-sm text-white/80">
              Powered by leading models and open-source frameworks
            </div>
            <div className="flex gap-12 md:gap-16 flex-wrap justify-center">
              {logos.map((name) => (
                <span key={name} className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/60">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CAPABILITIES (existing) ========== */}
      <section className="min-h-screen overflow-hidden bg-black relative" id="features">
        <FadingVideo
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_093722_ccfc7ebf-182f-419f-8a62-2dc02db7dd9d.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 px-8 md:px-16 lg:px-20 pt-24 pb-10 flex flex-col min-h-screen">
          <div className="mb-auto">
            <p className="text-sm font-body text-white/80 mb-6">// Capabilities</p>
            <h2 className="font-heading italic text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-3px] whitespace-pre-line">
              {`Agent runtime,\nend to end`}
            </h2>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col">
                <div className="flex items-start justify-between gap-3">
                  <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {cap.tags.map((tag) => (
                      <span key={tag} className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-1" />
                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">{cap.title}</h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">{cap.body}</p>
              </div>
            ))}
          </div>

          {/* Extra feature grid */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div key={f.title} className="liquid-glass rounded-2xl p-5">
                <h4 className="font-heading italic text-xl tracking-tight">{f.title}</h4>
                <p className="mt-2 text-sm text-white/70 font-light leading-snug">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HOW IT WORKS ========== */}
      <section id="how-it-works" className="min-h-screen bg-black px-8 md:px-16 lg:px-20 py-24 relative overflow-hidden">
        <FadingVideo
          src="https://assets.mixkit.co/videos/1168/1168-720.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        />
        <div className="absolute inset-0 bg-black/80 z-[1]" />
        <div className="relative z-10">
        <p className="text-sm text-white/60 mb-4">// How it Works</p>
        <h2 className="font-heading italic text-5xl md:text-6xl tracking-[-2px] leading-none max-w-2xl">
          Three steps from idea to shipped code
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="liquid-glass rounded-[1.25rem] p-8">
              <span className="text-white/40 font-heading italic text-4xl">{s.num}</span>
              <h3 className="mt-4 font-heading italic text-2xl tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm text-white/70 font-light leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ========== USE CASES ========== */}
      <section id="use-cases" className="min-h-screen bg-[#060910] px-8 md:px-16 lg:px-20 py-24 relative overflow-hidden">
        <FadingVideo
          src="https://assets.mixkit.co/videos/1187/1187-720.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        />
        <div className="absolute inset-0 bg-black/80 z-[1]" />
        <div className="relative z-10">
        <p className="text-sm text-white/60 mb-4">// Use Cases</p>
        <h2 className="font-heading italic text-5xl md:text-6xl tracking-[-2px] leading-none max-w-2xl">
          Built for real engineering work
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((u) => (
            <div key={u.title} className="liquid-glass rounded-[1.25rem] p-8 flex flex-col justify-between min-h-[200px]">
              <h3 className="font-heading italic text-3xl tracking-tight">{u.title}</h3>
              <p className="mt-4 text-sm text-white/70 font-light leading-relaxed">{u.desc}</p>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ========== PRICING ========== */}
      <section id="pricing" className="min-h-screen bg-black px-8 md:px-16 lg:px-20 py-24 relative overflow-hidden">
        <FadingVideo
          src="https://assets.mixkit.co/videos/159/159-720.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        />
        <div className="absolute inset-0 bg-black/70 z-[1]" />
        <div className="relative z-10">
        <p className="text-sm text-white/60 mb-4 text-center">// Pricing</p>
        <h2 className="font-heading italic text-5xl md:text-6xl tracking-[-2px] leading-none text-center">
          Simple plans for every stage
        </h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`rounded-[1.25rem] p-8 flex flex-col ${
                p.highlight ? 'liquid-glass-strong ring-1 ring-white/20' : 'liquid-glass'
              }`}
            >
              <h3 className="font-heading italic text-2xl">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-heading italic">{p.price}</span>
                <span className="text-white/50 text-sm">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-2 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="text-sm text-white/70 flex items-start gap-2">
                    <span className="text-white/40 mt-0.5">→</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/login"
                className={`mt-8 block text-center rounded-full py-3 text-sm font-medium ${
                  p.highlight ? 'bg-white text-black' : 'liquid-glass text-white'
                }`}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* ========== DOCS ========== */}
      <section id="docs" className="min-h-[70vh] bg-[#060910] px-8 md:px-16 lg:px-20 py-24 relative overflow-hidden">
        <FadingVideo
          src="https://assets.mixkit.co/videos/1173/1173-720.mp4"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-50"
        />
        <div className="absolute inset-0 bg-black/70 z-[1]" />
        <div className="relative z-10">
        <p className="text-sm text-white/60 mb-4">// Docs</p>
        <h2 className="font-heading italic text-5xl md:text-6xl tracking-[-2px] leading-none max-w-2xl">
          Everything you need to get started
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: 'Quickstart', desc: 'Install the CLI and run your first agent in under 5 minutes.' },
            { title: 'Tool API', desc: 'Define custom tools and give the agent new superpowers.' },
            { title: 'Memory', desc: 'How long-term and short-term memory work under the hood.' },
            { title: 'Sandbox', desc: 'Security model and how code execution is isolated.' },
            { title: 'Integrations', desc: 'Connect GitHub, Slack, Linear, and more.' },
            { title: 'Examples', desc: 'Ready-made recipes for common engineering tasks.' },
          ].map((d) => (
            <a
              key={d.title}
              href="#"
              className="liquid-glass rounded-2xl p-6 hover:bg-white/5 transition-colors block"
            >
              <h3 className="font-heading italic text-xl">{d.title}</h3>
              <p className="mt-2 text-sm text-white/60 font-light">{d.desc}</p>
            </a>
          ))}
        </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-10 px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-heading italic text-xl">a</span>
        <p className="text-sm text-white/40">© 2026 Agent Studio. All rights reserved.</p>
        <div className="flex gap-6 text-sm text-white/50">
          <a href="#" className="hover:text-white">Privacy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <Link to="/login" className="hover:text-white">Sign In</Link>
        </div>
      </footer>
    </div>
  )
}
