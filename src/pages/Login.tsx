import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import FadingVideo from '../components/FadingVideo'
import { ArrowUpRight } from '../components/Icons'

const fadeUp = {
  initial: { filter: 'blur(10px)', opacity: 0, y: 20 },
  animate: { filter: 'blur(0px)', opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: 'easeOut' as const },
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Demo only — replace with real auth later
    setTimeout(() => {
      setLoading(false)
      alert('Demo login — connect your auth backend here')
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-black text-white font-body relative overflow-hidden">
      <FadingVideo
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top bar */}
        <nav className="flex items-center justify-between px-8 lg:px-16 pt-6">
          <Link to="/" className="liquid-glass h-12 w-12 rounded-full flex items-center justify-center">
            <span className="font-heading italic text-2xl">a</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            ← Back to home
          </Link>
        </nav>

        {/* Center card */}
        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <motion.div
            {...fadeUp}
            className="liquid-glass-strong rounded-[1.5rem] p-8 md:p-10 w-full max-w-md"
          >
            <div className="text-center mb-8">
              <h1 className="font-heading italic text-4xl md:text-5xl tracking-[-2px] leading-none">
                Welcome back
              </h1>
              <p className="mt-3 text-sm text-white/70 font-light">
                Sign in to your agent workspace
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs text-white/60 mb-1.5 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full liquid-glass rounded-xl px-4 py-3 text-sm bg-transparent border-0 outline-none focus:ring-1 focus:ring-white/30 placeholder:text-white/30"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs text-white/60 tracking-wide">Password</label>
                  <a href="#" className="text-xs text-white/50 hover:text-white/80">
                    Forgot?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full liquid-glass rounded-xl px-4 py-3 text-sm bg-transparent border-0 outline-none focus:ring-1 focus:ring-white/30 placeholder:text-white/30"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-white text-black rounded-full py-3 text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/90 transition-colors disabled:opacity-60"
              >
                {loading ? 'Signing in…' : (
                  <>
                    Sign In <ArrowUpRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-xs text-white/40">or continue with</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="liquid-glass rounded-full py-2.5 text-sm text-white/80 hover:text-white transition-colors"
              >
                Google
              </button>
              <button
                type="button"
                className="liquid-glass rounded-full py-2.5 text-sm text-white/80 hover:text-white transition-colors"
              >
                GitHub
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-white/50">
              Don't have an account?{' '}
              <a href="#" className="text-white hover:underline">
                Create one
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
