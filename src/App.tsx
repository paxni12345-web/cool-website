import { motion } from 'framer-motion'
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
  transition: { duration: 0.8, ease: 'easeOut' },
}

const navLinks = ['Features', 'How it Works', 'Use Cases', 'Pricing', 'Docs']
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
          {/* Navbar */}
          <nav className="fixed top-4 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-16">
            <div className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
              <span className="font-heading italic text-2xl">a</span>
            </div>

            <div className="hidden md:flex liquid-glass rounded-full px-1.5 py-1.5 items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/ /g, '-')}`}
                  className="px-3 py-2 text-sm font-medium text-white/90 font-body"
                >
                  {link}
                </a>
              ))}
              <a
                href="#get-started"
                className="ml-1 px-4 py-2 bg-white text-black rounded-full text-sm font-medium flex items-center gap-1.5"
              >
                Get Started <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="h-12 w-12" />
          </nav>

          {/* Main content */}
          <div className="flex-1 flex flex-col items-center justify-center pt-24 px-4 text-center">
            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-sm"
            >
              <span className="bg-white text-black text-xs font-semibold px-2 py-0.5 rounded-full">
                New
              </span>
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
              <a
                href="#get-started"
                className="liquid-glass-strong rounded-full px-5 py-2.5 flex items-center gap-2 text-sm font-medium"
              >
                Try the Agent <ArrowUpRight className="w-4 h-4" />
              </a>
              <button className="flex items-center gap-2 text-sm text-white/90">
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
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                  10x
                </div>
                <div className="text-sm text-white/70 mt-1">Faster Task Completion vs Manual</div>
              </div>
              <div className="liquid-glass p-5 w-[220px] rounded-[1.25rem] text-left">
                <GlobeIcon className="w-6 h-6 text-white/80" />
                <div className="text-4xl font-heading italic tracking-[-1px] leading-none mt-4">
                  24/7
                </div>
                <div className="text-sm text-white/70 mt-1">Always-On Agent Runtime</div>
              </div>
            </motion.div>
          </div>

          {/* Trust bar */}
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
                <span
                  key={name}
                  className="font-heading italic text-2xl md:text-3xl tracking-tight text-white/60"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== CAPABILITIES ========== */}
      <section className="min-h-screen overflow-hidden bg-black relative">
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
              <div
                key={cap.title}
                className="liquid-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="liquid-glass h-11 w-11 rounded-[0.75rem] flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-wrap gap-1.5 justify-end">
                    {cap.tags.map((tag) => (
                      <span
                        key={tag}
                        className="liquid-glass rounded-full px-3 py-1 text-[11px] text-white/90 font-body whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1" />

                <h3 className="font-heading italic text-3xl md:text-4xl tracking-[-1px] leading-none">
                  {cap.title}
                </h3>
                <p className="mt-3 text-sm text-white/90 font-body font-light leading-snug max-w-[32ch]">
                  {cap.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
