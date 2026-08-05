import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Sparkles } from 'lucide-react';
import mwcIcon from './assets/mwc.svg';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800/50 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none"
      >
        <span className="text-zinc-200 font-medium text-lg">{question}</span>
        <ChevronDown 
          className={`text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
          size={20} 
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-zinc-400 leading-relaxed text-sm md:text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 font-sans selection:bg-purple-500/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-zinc-800/30 bg-[#0a0a0a]/80 backdrop-blur-md z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={mwcIcon} alt="MeowCast Logo" className="w-8 h-8" />
            <span className="font-semibold text-lg tracking-tight">MeowCast</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#features" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">Ecosystem</a>
            <a href="#faq" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">Community</a>
            <a 
              href="https://github.com/catevildev/MeowCast/releases/latest" 
              className="px-4 py-2 bg-white text-black hover:bg-zinc-200 transition-colors rounded-lg font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-6xl mx-auto flex flex-col items-center text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/10 text-purple-400 text-xs font-semibold mb-8 uppercase tracking-widest">
            <Sparkles size={14} /> MeowCast • LIVE
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]">
            Vibe code at the<br />speed of thought.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Hold a key, speak, release — your words land wherever the cursor blinks, in any app. 
            Private on-device Whisper or ultra-fast cloud multi-modal AI — your call.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://github.com/catevildev/MeowCast/releases/latest/download/MeowCast-Setup-1.0.1.exe"
              className="px-8 py-4 bg-white text-black hover:bg-zinc-200 transition-all rounded-xl font-semibold flex items-center gap-3 text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
            >
              <Download size={20} />
              Download for Windows <span className="text-zinc-500 font-normal text-sm ml-1">.exe</span>
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-600 font-mono tracking-widest uppercase">
            Requires Windows 10+
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      {/* Features / Mission */}
      <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Hold. Speak. Release. Land.</h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            The whole interface is one key. No window to focus, no app to switch — dictation follows your cursor across the desktop.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-sm bg-blue-500" />
              <h3 className="text-xl font-semibold">Hold</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              One global hotkey, system-wide. Hold to record, or use it to toggle mode and dictate hands-free.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-sm bg-emerald-500" />
              <h3 className="text-xl font-semibold">Speak</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Say it like you would to a teammate — agent prompts, commit messages, docs, Slack replies.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-sm bg-amber-500" />
              <h3 className="text-xl font-semibold">Release</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Transcription runs where you choose: on-device through Whisper, or in the cloud using Groq LPU or Gemini Flash.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-sm bg-purple-500" />
              <h3 className="text-xl font-semibold">Land</h3>
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Text lands wherever the cursor blinks — editor, terminal, browser, chat — in under a second.
            </p>
          </div>
        </div>
      </section>

      {/* Video Placeholder Section
      <section className="py-20 px-6 bg-zinc-950 border-y border-zinc-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Thirty seconds, sound on.</h2>
          <p className="text-zinc-400 mb-10 text-lg">The MeowCast demo film — hold, speak, release, and the words land while you watch.</p>
          
          <div className="aspect-video bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 transition-colors border border-white/10 z-10">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1" />
            </div>
            
            <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
              <div className="w-64 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center gap-4 px-4 shadow-2xl">
                 <img src={mwcIcon} className="w-8 h-8 opacity-50 grayscale" />
                 <div className="h-2 w-32 bg-zinc-800 rounded-full overflow-hidden">
                   <div className="h-full w-2/3 bg-emerald-500/50 rounded-full" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">Frequently asked.</h2>
        
        <div className="space-y-2">
          <FAQItem 
            question="Is my voice data actually private?"
            answer="Yes. MeowCast is designed to send audio directly to your provided API keys (OpenAI, Gemini, Groq) or run purely on-device (if configured with local Whisper models). We do not collect, store, or train on your dictation data."
          />
          <FAQItem 
            question="Can I dictate hands-free?"
            answer="Yes, you can configure MeowCast to act as a toggle rather than push-to-talk in the settings."
          />
          <FAQItem 
            question="Which models are available?"
            answer="Currently, MeowCast supports OpenAI's Whisper (cloud), Groq LPU (extremely fast), and Google Gemini (multi-modal capability for screen analysis)."
          />
          <FAQItem 
            question="What platforms does MeowCast run on?"
            answer="Currently, MeowCast is optimized for Windows 10+."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-[#0a0a0a] pt-20 pb-10 px-6 text-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={mwcIcon} className="w-6 h-6 grayscale opacity-80" />
              <span className="font-semibold text-lg">MeowCast</span>
            </div>
            <p className="text-zinc-500 leading-relaxed max-w-sm mb-6">
              The hub of the vibe coding space. Ship software at the speed of thought alongside autonomous AI teammates.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-100 mb-6">Ecosystem</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Desktop App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Screen Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Skills</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-100 mb-6">Explore</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open Source</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-100 mb-6">Community</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-zinc-500">
          <p>© {new Date().getFullYear()} catevildev. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
