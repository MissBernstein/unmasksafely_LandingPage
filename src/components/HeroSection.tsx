import { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  vibe: number;
  setVibe: (value: number) => void;
}

export default function HeroSection({ vibe, setVibe }: HeroSectionProps) {
  const [edgePing, setEdgePing] = useState(false);

  useEffect(() => {
    if (vibe === 0 || vibe === 100) {
      setEdgePing(true);
      const timer = setTimeout(() => setEdgePing(false), 800);
      return () => clearTimeout(timer);
    } else {
      setEdgePing(false);
    }
  }, [vibe]);

  // global keyboard listener for arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = document.activeElement?.tagName;
      if (activeTag === 'INPUT' && (document.activeElement as HTMLInputElement).type !== 'range') return;
      if (activeTag === 'TEXTAREA') return;

      if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
        e.preventDefault();
        setVibe(Math.min(100, vibe + 5));
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
        e.preventDefault();
        setVibe(Math.max(0, vibe - 5));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [vibe, setVibe]);

  // text opacity changes based on vibe
  const maskedOpacity = 1 - (vibe / 100) * 0.8;
  const unmaskedOpacity = 0.2 + (vibe / 100) * 0.8;

  const messages = [
    { threshold: 0, text: "The world feels tight. I am holding my breath." },
    { threshold: 25, text: "Noticing the tension. Acknowledging the weight." },
    { threshold: 50, text: "Softening the edges. Letting a sigh escape." },
    { threshold: 75, text: "Dropping the mask. The air feels a bit warmer." },
    { threshold: 100, text: "Coming home to myself. Safe, slow, and human." }
  ];

  const currentMessage = messages.slice().reverse().find(m => vibe >= m.threshold)?.text;

  return (
    <section className="min-h-[75vh] flex flex-col justify-center items-center relative z-10 my-8">
      <div className="max-w-4xl w-full text-center space-y-12 md:space-y-16">
        <div className="space-y-6 md:space-y-8">
          <img
            src="/Logos/unmask_fulllogo.webp"
            alt="Unmask full logo"
            className="h-14 md:h-16 w-auto mx-auto object-contain"
          />
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-[var(--text-primary)] tracking-tight">
            A private space <br className="hidden md:block"/>
            to notice what masking <br className="hidden md:block"/>
            has made <span className="italic font-normal">invisible</span>.
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] opacity-90 max-w-2xl mx-auto leading-relaxed">
            A sensory friendly reflection space for neurodivergent people learning to notice tension, masking, energy, and relational safety - without judgement or pressure.
          </p>
        </div>

        <div className="w-full max-w-xl mx-auto pt-4 md:pt-8">
            <div className={`p-8 md:p-10 rounded-[40px] soft-shadow backdrop-blur-sm text-left relative z-10 transition-all duration-700 ease-out ${edgePing ? 'bg-[var(--surface-card)]/80 border border-[var(--border-strong)] scale-[1.02] shadow-xl' : 'bg-[var(--surface-glass)] border border-[var(--border-subtle)] scale-100 shadow-none'}`}>
                <div className="flex justify-between items-end mb-8 relative">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-55 text-[var(--text-secondary)]">The Vibe Check</span>
                    <p className="font-serif italic text-xl text-[var(--text-primary)]">How much are you holding back?</p>
                  </div>
                </div>
                
                <div className="relative py-4">
                    <input 
                        type="range"
                        min="0"
                        max="100"
                        value={vibe}
                        onChange={(e) => setVibe(parseInt(e.target.value))}
                        aria-label="Vibe check slider"
                    />
                </div>
                
                <div className="flex justify-between text-[11px] font-bold tracking-tighter uppercase text-[var(--text-secondary)] mt-4 mb-8">
                    <span style={{ opacity: Math.max(0.3, maskedOpacity) }} className="transition-opacity duration-700 ease-in-out">Masked</span>
                    <span style={{ opacity: Math.max(0.3, unmaskedOpacity) }} className="transition-opacity duration-700 ease-in-out">Coming Home</span>
                </div>

                <div className="pt-6 border-t border-[var(--border-subtle)] text-center flex items-center justify-center min-h-[4rem]">
                  <p className="text-[15px] italic font-serif text-[var(--text-secondary)] opacity-90 transition-all duration-1000 ease-in-out" aria-live="polite">
                    {currentMessage}
                    </p>
                </div>
            </div>
        </div>
      </div>

            <div className="absolute -bottom-8 animate-pulse text-[var(--accent)] opacity-75">
         <ArrowDown size={24} strokeWidth={2} />
      </div>
    </section>
  )
}
