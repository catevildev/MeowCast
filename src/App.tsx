import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  CornerDownLeft,
  ExternalLink,
  FileText,
  Globe,
  GripVertical,
  MessageSquare,
  Mic,
  Search,
  Sparkles,
} from 'lucide-react';
import mwcIcon from './assets/mwc.svg';
import { t } from './translations';
import type { Language } from './translations';

const GITHUB = 'https://github.com/catevildev/MeowCast';
const RELEASES = `${GITHUB}/releases/latest`;
const FALLBACK_EXE = `${GITHUB}/releases/latest/download/MeowCast-Setup-1.0.9.exe`;

type Provider = 'groq' | 'gemini' | 'openai';
type LiveTab = 'transcript' | 'session' | 'summary';
type MockCopy = (typeof t)['pt']['mock'];

const LANGS: { code: Language; label: string; flag: string }[] = [
  { code: 'pt', label: 'PT', flag: 'br' },
  { code: 'en', label: 'EN', flag: 'us' },
  { code: 'es', label: 'ES', flag: 'es' },
];

const flagSrc = (code: string) => `https://flagcdn.com/w80/${code}.png`;

const Flag = ({ code }: { code: string }) => (
  <span className="inline-flex w-4 h-4 rounded-full overflow-hidden shrink-0 ring-1 ring-white/15">
    <img src={flagSrc(code)} alt="" className="w-full h-full object-cover" />
  </span>
);

const GitHubIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 10.39.6.11.82-.26.82-.58 0-.28-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.22.69.83.57C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
  </svg>
);

const WindowsLogo = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 88 88" fill="currentColor" aria-hidden>
    <path d="M0 12.402l35.687-4.86.016 34.423H0V12.402zm35.67 33.529l.028 34.453L0 75.48V45.93h35.67zM40.16 6.98L87.986 0v41.6H40.16V6.98zM88 45.854V88L40.16 81.318V45.854H88z" />
  </svg>
);

const WindowsDownload = ({
  href,
  label,
  size = 'md',
  icon = true,
  children,
}: {
  href: string;
  label: string;
  size?: 'sm' | 'md';
  icon?: boolean;
  children?: ReactNode;
}) => (
  <a
    href={href}
    aria-label={label}
    className={`inline-flex items-center justify-center rounded-full bg-white text-black font-semibold hover:bg-zinc-100 transition-colors ${
      size === 'sm' ? 'gap-2 px-3.5 py-1.5 text-sm' : 'gap-2.5 px-6 py-3 text-base'
    }`}
  >
    {icon && <WindowsLogo size={size === 'sm' ? 14 : 18} />}
    {children ?? 'Windows'}
  </a>
);

const ListeningWidget = ({ label, className = '' }: { label: string; className?: string }) => {
  const [bars, setBars] = useState([10, 18, 12]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setBars([
        8 + Math.random() * 12,
        12 + Math.random() * 10,
        8 + Math.random() * 12,
      ]);
    }, 260);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 bg-zinc-900/90 border border-blue-500/50 rounded-full px-[14px] py-[6px] backdrop-blur-xl shadow-[0_0_10px_rgba(59,130,246,0.5),0_0_20px_rgba(59,130,246,0.2)] ${className}`}
      aria-hidden
    >
      <div className="w-[32px] h-[32px] flex items-center justify-center gap-[3px]">
        {bars.map((height, i) => (
          <motion.div
            key={i}
            className="w-[4px] bg-blue-400 rounded-full"
            animate={{ height }}
            transition={{ type: 'tween', duration: 0.24, ease: 'easeInOut' }}
          />
        ))}
      </div>
      <span className="text-white text-[13px] font-semibold leading-tight tracking-tight pr-1">
        {label}
      </span>
    </div>
  );
};

const readLang = (): Language => {
  try {
    const saved = localStorage.getItem('meowcast-lang');
    if (saved === 'pt' || saved === 'en' || saved === 'es') return saved;
  } catch {
    /* ignore */
  }
  return 'pt';
};

const TAB_META: { key: LiveTab; Icon: typeof Mic }[] = [
  { key: 'transcript', Icon: Mic },
  { key: 'session', Icon: MessageSquare },
  { key: 'summary', Icon: FileText },
];

const Display = ({
  as: Tag = 'h2',
  className = '',
  children,
}: {
  as?: 'h1' | 'h2';
  className?: string;
  children: ReactNode;
}) => (
  <Tag className={`display text-zinc-50 ${className}`}>{children}</Tag>
);

const easeOut = [0.22, 1, 0.36, 1] as const;

const Reveal = ({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.18, margin: '0px 0px -60px 0px' }}
    transition={{ duration: 0.65, delay, ease: easeOut }}
  >
    {children}
  </motion.div>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-zinc-800/70 py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-6 text-left"
      >
        <span className="text-zinc-100 text-base md:text-lg font-medium">{question}</span>
        <ChevronDown
          className={`text-zinc-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={18}
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
            <p className="pt-3 text-zinc-400 leading-relaxed text-sm md:text-base">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LiveSenseMock = ({
  copy,
  tabs,
  tab,
  compact = false,
}: {
  copy: MockCopy;
  tabs: string[];
  tab: LiveTab;
  compact?: boolean;
}) => (
  <div className="w-full rounded-2xl border border-zinc-800 bg-[#09090b] shadow-[0_24px_80px_rgba(0,0,0,0.45)] overflow-hidden">
    <div className={`flex items-center gap-3 border-b border-zinc-800 ${compact ? 'px-3 py-2.5' : 'px-4 py-3'}`}>
      <div className={`flex rounded-full bg-zinc-900 border border-zinc-800 p-1 min-w-0 overflow-x-auto ${compact ? 'text-[10px]' : 'text-[11px]'}`}>
        {TAB_META.map(({ key, Icon }, i) => (
          <span
            key={key}
            className={`inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap ${
              compact ? 'px-2 py-1' : 'px-3 py-1'
            } ${tab === key ? 'bg-white text-black' : 'text-zinc-500'}`}
          >
            {!compact && <Icon size={12} />}
            {tabs[i]}
          </span>
        ))}
      </div>
      <span
        className="ml-auto w-2 h-2 rounded-full bg-emerald-400 shrink-0"
        style={{ boxShadow: '0 0 0 3px rgba(52,211,153,0.2)' }}
      />
    </div>

    <div className={`${compact ? 'p-4 min-h-[168px]' : 'p-5 min-h-[280px]'} space-y-4`}>
      {tab === 'transcript' && (
        <>
          <div>
            <div className="text-[10px] tracking-[0.14em] text-sky-400 font-semibold mb-1">{copy.you}</div>
            <p className="text-sm text-zinc-200 leading-relaxed">{copy.transcriptYou}</p>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.14em] text-zinc-500 font-semibold mb-1">{copy.others}</div>
            <p className="text-sm text-zinc-300 leading-relaxed">{copy.transcriptOthers}</p>
          </div>
        </>
      )}

      {tab === 'session' && (
        <>
          <div className="text-xs text-zinc-500">{copy.topic}</div>
          <div>
            <div className="text-[10px] tracking-widest text-zinc-500 font-semibold mb-1">{copy.theySaid}</div>
            <p className="text-sm text-zinc-200 leading-relaxed italic">“{copy.theyLine}”</p>
          </div>
          <div className="rounded-xl border border-sky-500/30 bg-[#0f172a] p-4">
            <div className="flex items-center gap-2 text-sky-400 text-[11px] font-bold tracking-wider uppercase mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              {copy.sayThis}
            </div>
            <p className="text-sm text-zinc-100 leading-relaxed">{copy.suggestion}</p>
          </div>
        </>
      )}

      {tab === 'summary' && (
        <>
          <div className="text-sm font-semibold text-zinc-100">{copy.summaryHeading}</div>
          <div className="rounded-xl border border-sky-500/20 bg-[#0f172a] p-4">
            <div className="text-[10px] tracking-[0.14em] uppercase text-sky-400 font-semibold mb-2">
              {copy.panorama}
            </div>
            <p className="text-sm text-zinc-200 leading-relaxed">{copy.summaryBody}</p>
          </div>
          {!compact && (
            <>
              <div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-zinc-500 font-semibold mb-2">
                  {copy.topicsKicker}
                </div>
                <div className="flex gap-2 text-sm text-zinc-300">
                  <span className="text-sky-400 shrink-0">◎</span>
                  <div>
                    <div className="text-zinc-100">{copy.topic}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{copy.topicNotes}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-[10px] tracking-[0.14em] uppercase text-zinc-500 font-semibold mb-2">
                  {copy.actionsKicker}
                </div>
                <div className="flex gap-2 text-sm text-zinc-300">
                  <span className="text-emerald-400 shrink-0">◎</span>
                  <div>
                    <div className="text-zinc-100">{copy.action}</div>
                    <div className="text-xs text-zinc-500 mt-0.5">{copy.actionOwner}</div>
                  </div>
                </div>
              </div>
            </>
          )}
          {compact && (
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 px-3 py-2.5 text-sm text-zinc-300">
              <span className="text-emerald-400 mr-2">✓</span>
              {copy.action}
            </div>
          )}
        </>
      )}
    </div>
  </div>
);

const MeetingFrame = ({ copy, children }: { copy: MockCopy; children: ReactNode }) => (
  <div className="rounded-2xl border border-zinc-800 bg-[#111111] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
    <div className="flex justify-end px-4 py-2 border-b border-zinc-800 bg-[#161616]">
      <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-700 text-zinc-400">
        {copy.meetingApp}
      </span>
    </div>
    <div className="p-3">{children}</div>
  </div>
);

const DictationMock = ({ copy }: { copy: MockCopy }) => (
  <div className="relative w-full pb-6">
    <div className="rounded-xl border border-zinc-800 bg-[#161616] p-4 pr-6 pb-12">
      <div className="text-[10px] tracking-widest uppercase text-zinc-500 mb-2">{copy.dictationApp}</div>
      <p className="text-sm text-zinc-200 leading-relaxed">
        {copy.dictationTyped}
        <span className="caret" />
      </p>
    </div>
    <div className="absolute bottom-1 right-1">
      <ListeningWidget label={copy.listening} />
    </div>
  </div>
);

const SpotlightMock = ({ copy }: { copy: MockCopy }) => (
  <div className="w-full rounded-xl border border-zinc-800 bg-[#111111] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
    <div className="flex items-center gap-2.5 px-3 py-2.5 border-b border-zinc-800/50 bg-[#161616]">
      <GripVertical size={14} className="text-zinc-500 shrink-0" />
      <Search size={15} className="text-zinc-500 shrink-0" />
      <span className="flex-1 min-w-0 text-[13px] text-zinc-200 font-medium truncate">{copy.spotlightQ}</span>
      <kbd className="hidden sm:flex items-center gap-1 text-[10px] text-zinc-500 bg-zinc-800/80 border border-zinc-700/80 rounded-md px-1.5 py-0.5 shrink-0">
        <CornerDownLeft size={10} /> {copy.enter}
      </kbd>
    </div>
    <div className="p-3 space-y-3">
      <section className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-3">
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-sky-400 mb-1.5">
          <Sparkles size={12} className="shrink-0" />
          {copy.smartAnswer}
        </div>
        <p className="text-[13px] text-zinc-100 leading-relaxed">{copy.spotlightA}</p>
      </section>
      <div>
        <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500 mb-1.5">
          <Globe size={12} />
          {copy.sources}
        </div>
        <div className="rounded-xl border border-zinc-800/80 bg-[#1A1B23] p-3">
          <div className="flex items-start gap-2.5 min-w-0">
            <img
              src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(copy.source)}&sz=32`}
              alt=""
              className="w-4 h-4 mt-0.5 rounded-sm shrink-0 bg-zinc-800"
            />
            <div className="flex-1 min-w-0">
              <div className="text-[11px] text-zinc-500 truncate">{copy.source}</div>
              <div className="mt-0.5 text-sm font-medium text-sky-400 leading-snug">{copy.sourceTitle}</div>
              <p className="mt-1 text-xs text-zinc-400 leading-relaxed line-clamp-2">{copy.sourceSnippet}</p>
            </div>
            <ArrowUpRight size={14} className="text-zinc-600 shrink-0 mt-1" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const SectionKicker = ({ children }: { children: string }) => (
  <div className="text-sky-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">{children}</div>
);

const LangSwitch = ({ lang, onChange }: { lang: Language; onChange: (code: Language) => void }) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const current = LANGS.find((item) => item.code === lang) ?? LANGS[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 text-sm"
        aria-label="Idioma"
        aria-expanded={open}
      >
        <Flag code={current.flag} />
        {current.label}
        <ChevronDown size={12} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-32 rounded-lg border border-zinc-800 bg-zinc-950 overflow-hidden z-20 shadow-xl">
          {LANGS.map((item) => (
            <button
              key={item.code}
              type="button"
              onClick={() => {
                onChange(item.code);
                setOpen(false);
              }}
              className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-zinc-900 ${
                lang === item.code ? 'text-sky-400' : 'text-zinc-300'
              }`}
            >
              <Flag code={item.flag} />
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>(readLang);
  const [provider, setProvider] = useState<Provider>('groq');
  const [downloadUrl, setDownloadUrl] = useState(FALLBACK_EXE);
  const [liveTab, setLiveTab] = useState<LiveTab>('session');

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
    try {
      localStorage.setItem('meowcast-lang', lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  useEffect(() => {
    fetch('https://api.github.com/repos/catevildev/MeowCast/releases/latest')
      .then((res) => res.json())
      .then((data) => {
        const asset = data.assets?.find((a: { name: string }) => a.name.endsWith('.exe'));
        if (asset?.browser_download_url) setDownloadUrl(asset.browser_download_url);
      })
      .catch(() => {});
  }, []);

  const content = t[lang];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 border-b border-zinc-800/40 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-5 h-16 grid grid-cols-3 items-center">
          <a href="#" className="flex items-center gap-2.5 justify-self-start">
            <img src={mwcIcon} alt="MeowCast" className="w-7 h-7" />
            <span className="font-semibold tracking-tight">MeowCast</span>
          </a>

          <div className="hidden md:flex items-center justify-center gap-8 text-sm text-zinc-400">
            <a href="#como-funciona" className="hover:text-zinc-100 transition-colors">{content.nav.how}</a>
            <a href="#livesense" className="hover:text-zinc-100 transition-colors">{content.nav.livesense}</a>
            <a href="#privacidade" className="hover:text-zinc-100 transition-colors">{content.nav.privacy}</a>
          </div>

          <div className="flex items-center gap-3 justify-self-end">
            <LangSwitch lang={lang} onChange={setLang} />
            <WindowsDownload href={downloadUrl} label={content.nav.download} size="sm" icon={false}>
              Download
            </WindowsDownload>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[92vh] flex flex-col pt-16">
        <div className="hero-ambient" aria-hidden>
          <span className="hero-orb hero-orb-a" />
          <span className="hero-orb hero-orb-b" />
          <span className="hero-orb hero-orb-c" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 py-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="max-w-4xl">
            <ListeningWidget label={content.mock.listening} className="mb-8" />

            <Display as="h1" className="text-[2.5rem] sm:text-6xl md:text-[4.35rem] leading-[1.08] mb-6">
              {content.hero.title}
              <br />
              <span className="text-zinc-400 font-medium tracking-tight">{content.hero.titleItalic}</span>
            </Display>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
              {content.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <WindowsDownload href={downloadUrl} label={content.hero.download} />
              <a
                href="#livesense"
                className="px-7 py-3.5 rounded-full border border-zinc-600 hover:border-zinc-400 text-zinc-100 font-medium transition-colors"
              >
                {content.hero.secondary} ↓
              </a>
            </div>

            <ul className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              {content.trust.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Check size={15} className="text-sky-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[11px] tracking-widest uppercase text-zinc-600">{content.hero.requires}</p>
          </motion.div>
        </div>

        <div id="como-funciona" className="relative z-10">
          <div className="max-w-6xl mx-auto px-5 py-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <p className="text-zinc-200 font-medium shrink-0">{content.apps.left}</p>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
              {['Zoom', 'Meet', 'Teams', 'Discord', 'Slack', 'WhatsApp'].map((app) => (
                <span key={app} className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-950">
                  {app}
                </span>
              ))}
            </div>
            <p className="text-zinc-500 text-sm md:ml-auto md:max-w-md md:text-right">{content.apps.right}</p>
          </div>
        </div>
      </section>

      <section className="py-24 px-5 max-w-6xl mx-auto">
        <Reveal>
          <SectionKicker>{content.scenes.kicker}</SectionKicker>
          <Display className="text-4xl md:text-5xl mb-14">{content.scenes.title}</Display>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {content.scenes.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1} className="h-full">
              <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 flex flex-col h-full">
              <div className="mb-8 min-h-[240px] flex items-center">
                {idx === 0 && <DictationMock copy={content.mock} />}
                {idx === 1 && (
                  <LiveSenseMock copy={content.mock} tabs={content.livesense.tabs} tab="session" compact />
                )}
                {idx === 2 && <SpotlightMock copy={content.mock} />}
              </div>
              <div className="text-[11px] tracking-widest uppercase text-sky-400 mb-3">{item.tag}</div>
              <h3 className="text-xl font-semibold tracking-tight mb-3">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="livesense" className="py-24 px-5 border-y border-zinc-900 bg-zinc-950/40 scroll-mt-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <SectionKicker>{content.livesense.kicker}</SectionKicker>
            <Display className="text-4xl md:text-5xl mb-5">{content.livesense.title}</Display>
            <p className="text-zinc-400 leading-relaxed mb-8">{content.livesense.body}</p>
            <div className="space-y-5">
              {content.livesense.points.map((point) => (
                <div key={point.title}>
                  <div className="font-semibold text-zinc-100">{point.title}</div>
                  <div className="text-sm text-zinc-400">{point.desc}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mt-8">
              {TAB_META.map(({ key }, i) => (
                <button
                  key={key}
                  onClick={() => setLiveTab(key)}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    liveTab === key
                      ? 'bg-white text-black border-white'
                      : 'border-zinc-700 text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {content.livesense.tabs[i]}
                </button>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <MeetingFrame copy={content.mock}>
              <LiveSenseMock copy={content.mock} tabs={content.livesense.tabs} tab={liveTab} />
            </MeetingFrame>
            <p className="mt-4 text-xs text-zinc-500">{content.livesense.caption}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-5 max-w-6xl mx-auto">
        <Reveal>
          <SectionKicker>{content.kit.kicker}</SectionKicker>
          <Display className="text-4xl md:text-5xl mb-12">{content.kit.title}</Display>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {content.kit.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.06} className="h-full">
              <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 h-full">
                <h3 className="text-lg font-semibold tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-5 border-y border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionKicker>{content.start.kicker}</SectionKicker>
            <Display className="text-4xl md:text-5xl mb-3">{content.start.title}</Display>
            <p className="text-zinc-400 max-w-2xl mb-12">{content.start.subtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {content.start.steps.map((step, idx) => (
              <Reveal key={step.n} delay={idx * 0.08} className="h-full">
                <div className="rounded-2xl border border-zinc-800 p-6 h-full">
                  <div className="text-sky-400 font-mono text-sm mb-3">{step.n}</div>
                  <h3 className="text-lg font-semibold tracking-tight mb-2">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="rounded-2xl border border-zinc-800 overflow-hidden bg-[#0a0a0a]">
            <div className="flex border-b border-zinc-800 bg-zinc-950">
              {(Object.keys(content.start.tabs) as Provider[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setProvider(tab)}
                  className={`flex-1 py-3 text-sm font-medium ${
                    provider === tab ? 'text-sky-400 border-b-2 border-sky-400' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {content.start.tabs[tab]}
                </button>
              ))}
            </div>
            <div className="p-8 flex flex-col md:flex-row gap-8 justify-between">
              <ol className="space-y-4">
                {content.start.instructions[provider].map((step, i) => (
                  <li key={step} className="flex gap-3 text-zinc-300 text-sm">
                    <span className="w-6 h-6 rounded-full border border-zinc-700 flex items-center justify-center text-xs shrink-0">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              <a
                href={content.start.links[provider]}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 hover:bg-zinc-900 text-sm"
              >
                {content.start.getKey} <ExternalLink size={14} />
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-5 max-w-6xl mx-auto">
        <Reveal>
          <SectionKicker>{content.personas.kicker}</SectionKicker>
          <Display className="text-4xl md:text-5xl mb-12">{content.personas.title}</Display>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {content.personas.items.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.08} className="h-full">
              <div className="rounded-2xl border border-zinc-800 p-6 h-full">
                <h3 className="text-lg font-semibold tracking-tight mb-2">{item.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-5 border-y border-zinc-900 bg-zinc-950/40">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionKicker>{content.price.kicker}</SectionKicker>
            <Display className="text-4xl md:text-5xl mb-5 max-w-3xl">{content.price.title}</Display>
            <p className="text-zinc-400 max-w-2xl mb-10">{content.price.body}</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {content.price.points.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.08} className="h-full">
                <div className="rounded-2xl border border-zinc-800 bg-[#111111] p-6 h-full">
                  <h3 className="font-semibold tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-400">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 max-w-3xl mx-auto">
        <Reveal>
          <div id="privacidade" className="pt-24 pb-10 scroll-mt-20">
            <SectionKicker>{content.privacy.kicker}</SectionKicker>
            <Display className="text-4xl md:text-5xl mb-5">{content.privacy.title}</Display>
            <p className="text-zinc-400 leading-relaxed">{content.privacy.body}</p>
          </div>
        </Reveal>

        <Reveal>
          <div id="faq" className="pt-6 pb-24">
            <Display className="text-4xl md:text-5xl mb-8">{content.faq.title}</Display>
            {content.faq.items.map((item) => (
              <FAQItem key={item.q} question={item.q} answer={item.a} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 px-5 text-center border-t border-zinc-900">
        <Reveal>
          <Display className="text-4xl md:text-5xl mb-4">{content.cta.title}</Display>
          <p className="text-zinc-400 mb-8">{content.cta.body}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WindowsDownload href={downloadUrl} label={content.cta.download} />
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full border border-zinc-600 hover:border-zinc-400 inline-flex items-center justify-center gap-2"
            >
              <GitHubIcon size={18} />
              {content.cta.github}
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="border-t border-zinc-900 pt-16 pb-10 px-5 text-sm">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={mwcIcon} alt="" className="w-6 h-6" />
              <span className="font-semibold">MeowCast</span>
            </div>
            <p className="text-zinc-500 leading-relaxed max-w-sm">{content.footer.desc}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{content.footer.product}</h4>
            <ul className="space-y-3 text-zinc-400">
              {content.footer.productLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{content.footer.more}</h4>
            <ul className="space-y-3 text-zinc-400">
              {content.footer.moreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white inline-flex items-center gap-2">
                    {link.label === 'GitHub' && <GitHubIcon size={14} />}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto pt-6 border-t border-zinc-900 text-zinc-600 flex flex-col md:flex-row justify-between gap-3">
          <p>© {new Date().getFullYear()} catevildev. {content.footer.rights}</p>
          <a href={RELEASES} className="hover:text-zinc-400">
            Windows · GitHub Releases
          </a>
        </div>
      </footer>
    </div>
  );
}
