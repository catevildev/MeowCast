import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ChevronDown, Sparkles, Globe, ExternalLink } from 'lucide-react';
import mwcIcon from './assets/mwc.svg';
import { t } from './translations';
import type { Language } from './translations';

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
  const [lang, setLang] = useState<Language>('en');
  const [activeTab, setActiveTab] = useState<'groq' | 'gemini' | 'openai' | 'local'>('groq');
  const [downloadUrl, setDownloadUrl] = useState<string>('https://github.com/catevildev/MeowCast/releases/latest/download/MeowCast-Setup-1.0.3.exe');

  useEffect(() => {
    fetch('https://api.github.com/repos/catevildev/MeowCast/releases/latest')
      .then(res => res.json())
      .then(data => {
        if (data.assets) {
          const asset = data.assets.find((a: any) => a.name.endsWith('.exe'));
          if (asset) {
            setDownloadUrl(asset.browser_download_url);
          }
        }
      })
      .catch(console.error);
  }, []);
  
  const content = t[lang];

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
            <a href="#features" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">{content.nav.ecosystem}</a>
            <a href="#faq" className="text-zinc-400 hover:text-zinc-100 transition-colors hidden sm:block">{content.nav.community}</a>
            
            {/* Language Switcher */}
            <div className="relative group flex items-center gap-2 cursor-pointer text-zinc-400 hover:text-zinc-100">
              <Globe size={16} />
              <span className="uppercase">{lang}</span>
              <div className="absolute top-full right-0 mt-2 w-24 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col overflow-hidden">
                <button onClick={() => setLang('en')} className={`px-4 py-2 text-left hover:bg-zinc-800 ${lang === 'en' ? 'text-purple-400' : 'text-zinc-300'}`}>EN</button>
                <button onClick={() => setLang('pt')} className={`px-4 py-2 text-left hover:bg-zinc-800 ${lang === 'pt' ? 'text-purple-400' : 'text-zinc-300'}`}>PT-BR</button>
                <button onClick={() => setLang('es')} className={`px-4 py-2 text-left hover:bg-zinc-800 ${lang === 'es' ? 'text-purple-400' : 'text-zinc-300'}`}>ES</button>
              </div>
            </div>

            <a 
              href="https://github.com/catevildev/MeowCast/releases/latest" 
              className="px-4 py-2 bg-white text-black hover:bg-zinc-200 transition-colors rounded-lg font-semibold flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              {content.nav.getStarted}
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
            <Sparkles size={14} /> {content.hero.badge}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-[1.1]" dangerouslySetInnerHTML={{ __html: content.hero.title }}></h1>
          
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            {content.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href={downloadUrl}
              className="px-8 py-4 bg-white text-black hover:bg-zinc-200 transition-all rounded-xl font-semibold flex items-center gap-3 text-lg shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:scale-[1.02]"
            >
              <Download size={20} />
              {content.hero.download}
            </a>
          </div>
          <p className="mt-6 text-xs text-zinc-600 font-mono tracking-widest uppercase">
            {content.hero.requires}
          </p>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent" />

      {/* Features / Mission */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">{content.features.title}</h2>
          <p className="text-zinc-400 text-lg md:text-xl max-w-3xl leading-relaxed">
            {content.features.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12">
          {content.features.items.map((item, idx) => {
            const colors = ['bg-blue-500', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500'];
            return (
              <div key={idx}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-sm ${colors[idx]}`} />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Get Started / API Guide */}
      <section id="getstarted" className="py-24 px-6 bg-zinc-950 border-y border-zinc-900/80">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{content.getStarted.title}</h2>
            <p className="text-zinc-400 text-lg">{content.getStarted.subtitle}</p>
          </div>
          
          <div className="bg-[#0a0a0a] border border-zinc-800/80 rounded-2xl overflow-hidden shadow-2xl">
            {/* Tabs */}
            <div className="flex flex-wrap border-b border-zinc-800 bg-zinc-900/50">
              {['groq', 'gemini', 'openai', 'local'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={`flex-1 py-4 px-6 text-sm font-semibold transition-colors ${
                    activeTab === tab 
                      ? 'bg-[#0a0a0a] text-purple-400 border-t-2 border-purple-500' 
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50 border-t-2 border-transparent'
                  }`}
                >
                  {content.getStarted.tabs[tab as keyof typeof content.getStarted.tabs]}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
                <div className="flex-1">
                  <ol className="space-y-6 relative border-l border-zinc-800 ml-4">
                    {content.getStarted.instructions[activeTab].map((step, idx) => (
                      <li key={idx} className="pl-8 relative">
                        <div className="absolute -left-3.5 top-0 w-7 h-7 bg-zinc-900 border border-zinc-700 rounded-full flex items-center justify-center text-xs font-bold text-zinc-300">
                          {idx + 1}
                        </div>
                        <p className="text-zinc-300 leading-relaxed pt-0.5">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
                
                {activeTab !== 'local' && (
                  <a 
                    href={content.getStarted.links[activeTab as keyof typeof content.getStarted.links]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 flex items-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-zinc-200 font-medium transition-all"
                  >
                    Get API Key <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-32 px-6 max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold tracking-tight mb-12 text-center">{content.faq.title}</h2>
        
        <div className="space-y-2">
          {content.faq.items.map((item, idx) => (
            <FAQItem key={idx} question={item.q} answer={item.a} />
          ))}
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
              {content.footer.desc}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-100 mb-6">{content.footer.ecosystem}</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Desktop App</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Screen Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">AI Skills</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-100 mb-6">{content.footer.explore}</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Open Source</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-zinc-100 mb-6">{content.footer.community}</h4>
            <ul className="space-y-4 text-zinc-400">
              <li><a href="#" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              <li><a href="#" className="hover:text-white transition-colors">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto pt-8 border-t border-zinc-900 flex flex-col md:flex-row items-center justify-between text-zinc-500">
          <p>© {new Date().getFullYear()} catevildev. {content.footer.rights}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
