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
        
        {/* Simple top navigation */}
        <nav className="flex flex-col md:flex-row justify-between items-center py-8 gap-6 mb-4">
            <a href="#" aria-label="Unmask home" className="block">
              <img
                src="/Logos/unmask_textlogo.webp"
                alt="Unmask"
                className="h-9 md:h-10 w-auto object-contain"
              />
            </a>
            <div className="flex gap-8 text-[11px] uppercase tracking-widest font-bold opacity-75 text-[var(--text-secondary)]">
                <a href="#" className="hover:opacity-100 hover:text-[var(--accent)] transition-all">The Ritual</a>
                <a href="#" className="hover:opacity-100 hover:text-[var(--accent)] transition-all">Studio Diary</a>
                <a href="#" className="hover:opacity-100 hover:text-[var(--accent)] transition-all">Community</a>
            </div>
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
        <footer className="mt-10 pb-16 flex flex-col items-center sm:flex-row sm:justify-between items-end gap-6 text-[var(--text-primary)]">
          <div className="flex gap-4">
            <button type="button" aria-label="Facebook" className="w-10 h-10 border border-[var(--border-subtle)] rounded-full flex items-center justify-center opacity-65 hover:opacity-95 transition-opacity cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </button>
            <button type="button" aria-label="Twitter" className="w-10 h-10 border border-[var(--border-subtle)] rounded-full flex items-center justify-center opacity-65 hover:opacity-95 transition-opacity cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
            </button>
          </div>
          <div className="text-right flex items-center gap-4">
            <img
              src="/Logos/unmask_iconlogo.webp"
              alt="Unmask icon"
              className="w-8 h-8 rounded-full object-cover border border-[var(--border-subtle)]"
            />
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 mb-1">Design by Lived Experience</p>
              <p className="font-serif italic text-sm text-[var(--text-secondary)]/90">Unmask Safely &copy; 2024</p>
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
