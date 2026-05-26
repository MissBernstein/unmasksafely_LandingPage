import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import StudioTimeline from './components/StudioTimeline';
import ProcessWindow from './components/ProcessWindow';
import SupportEcosystem from './components/SupportEcosystem';

type ThemeMode = 'light' | 'dark';

export default function App() {
  const [vibe, setVibe] = useState(35); // 0 (Masked) to 100 (Unmasked)
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [followSystem, setFollowSystem] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const savedTheme = window.localStorage.getItem('theme-preference');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setTheme(savedTheme);
      setFollowSystem(false);
      return;
    }

    if (!window.matchMedia) {
      setTheme('light');
      return;
    }

    const media = window.matchMedia('(prefers-color-scheme: dark)');
    setTheme(media.matches ? 'dark' : 'light');

    const onChange = (event: MediaQueryListEvent) => {
      setTheme(event.matches ? 'dark' : 'light');
    };

    if (media.addEventListener) {
      media.addEventListener('change', onChange);
      return () => media.removeEventListener('change', onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if (followSystem) {
      window.localStorage.removeItem('theme-preference');
      return;
    }

    window.localStorage.setItem('theme-preference', theme);
  }, [theme, followSystem]);

  const toggleTheme = () => {
    setFollowSystem(false);
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const enableSystemTheme = () => {
    setFollowSystem(true);
    if (typeof window !== 'undefined' && window.matchMedia) {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    } else {
      setTheme('light');
    }
  };

  return (
    <div className="min-h-screen relative font-sans overflow-x-hidden">
      
      {/* Gentle organic background breathing blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden flex items-center justify-center">
        <div className="absolute w-[150vw] h-[150vw] md:w-[100vw] md:h-[100vw] lg:w-[80vw] lg:h-[80vw] bg-[radial-gradient(circle,_var(--blob-primary)_0%,_transparent_60%)] animate-breathe"></div>
        <div className="absolute w-[120vw] h-[120vw] md:w-[80vw] md:h-[80vw] lg:w-[60vw] lg:h-[60vw] bg-[radial-gradient(circle,_var(--blob-secondary)_0%,_transparent_62%)] opacity-25 animate-breathe" style={{ animationDelay: '-5s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10">
        
        {/* Top bar */}
        <nav className="flex flex-col md:flex-row justify-between items-center py-8 gap-6 mb-4">
            <a href="#" aria-label="Unmask home" className="block">
              <img
                src="/Logos/unmask_textlogo.webp"
                alt="Unmask"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </a>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label={theme === 'light' ? 'Dark mode aktivieren' : 'Light mode aktivieren'}
                className="h-10 w-10 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-glass)] text-[var(--text-primary)] flex items-center justify-center hover:bg-[var(--surface-card)] transition-colors"
              >
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </button>
              <button
                type="button"
                onClick={enableSystemTheme}
                className="px-3 py-2 rounded-full border border-[var(--border-subtle)] text-[11px] uppercase tracking-widest font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-glass)] transition-colors"
                aria-pressed={followSystem}
              >
                System
              </button>
            </div>
        </nav>

        <HeroSection vibe={vibe} setVibe={setVibe} />
        
        <div className="space-y-24 md:space-y-32 pt-12 md:pt-24 pb-12">
          <StudioTimeline />
          <ProcessWindow />
          <SupportEcosystem />
        </div>

        {/* Footer */}
        <footer className="mt-10 pb-16 flex justify-center items-center text-[var(--text-primary)]">
          <div className="flex items-center gap-4">
            <img
              src="/Logos/unmask_iconlogo.webp"
              alt="Unmask icon"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-subtitle italic text-sm text-[var(--text-secondary)]/90">Unmask 2026</p>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
