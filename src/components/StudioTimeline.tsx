import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function StudioTimeline() {
  const [view, setView] = useState<'quo' | 'vision'>('quo');

  return (
    <section className="space-y-16 max-w-5xl mx-auto">
      <div className="text-center space-y-6">
        <h2 className="font-serif text-4xl text-[var(--text-primary)] italic">Behind the Curtain</h2>
        <p className="text-[var(--text-secondary)] opacity-90 text-lg max-w-2xl mx-auto leading-relaxed">
          We are unlearning sterile "productivity" tracking. This is a reflection space built with lived experience.
        </p>
      </div>

      <div 
        role="switch"
        aria-checked={view === 'vision'}
        tabIndex={0}
        onClick={() => setView(v => v === 'quo' ? 'vision' : 'quo')}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter' || e.key === 'Tab') {
            if (e.key !== 'Tab') e.preventDefault();
            setView(v => v === 'quo' ? 'vision' : 'quo');
          }
        }}
        className="flex justify-center p-1.5 bg-[var(--surface-glass)] rounded-[32px] w-fit mx-auto border border-[var(--border-subtle)] backdrop-blur-md soft-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--ring-color)] focus:ring-offset-4 group"
        aria-label="Toggle between The Status Quo and Our Vision"
      >
        <div 
          className={`px-6 py-3 rounded-[24px] text-sm font-bold uppercase tracking-widest transition-all duration-700 ${view === 'quo' ? 'bg-[var(--accent)] text-[var(--text-inverse)] shadow-md' : 'text-[var(--text-secondary)] opacity-55 group-hover:opacity-100'}`}
        >
          The Status Quo
        </div>
        <div 
          className={`px-6 py-3 rounded-[24px] text-sm font-bold uppercase tracking-widest transition-all duration-700 ${view === 'vision' ? 'bg-[var(--accent)] text-[var(--text-inverse)] shadow-md' : 'text-[var(--text-secondary)] opacity-55 group-hover:opacity-100'}`}
        >
          Our Vision
        </div>
      </div>

      <div className="relative min-h-[340px]">
        <AnimatePresence mode="wait">
          {view === 'quo' ? (
            <motion.div 
              key="quo"
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Card 
                title="Numerical Scoring" 
                desc="Apps demand a '7 out of 10' for anxiety, forcing us to artificially quantify complex, fluid emotional landscapes."
              />
              <Card 
                title="Gamified Streaks" 
                desc="Punishing us for resting. 'You broke your streak!' guilt-trips us into burnout instead of supporting recovery."
              />
              <Card 
                title="Clinical Interfaces" 
                desc="Sterile blues, harsh whites, and sudden snappy animations that overwhelm a sensitized nervous system."
              />
              <Card 
                title="Performance Tracking" 
                desc="Treating mental health and regulation like an athletic endeavor to be relentlessly optimized."
              />
            </motion.div>
          ) : (
            <motion.div 
              key="vision"
              initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="grid md:grid-cols-2 gap-6"
            >
              <Card 
                title="Symbolic Sliders" 
                desc="Feeling is not math. Soft semantic inputs allow gentle reflection without demanding precision."
                highlight
              />
              <Card 
                title="Rest-Positive Design" 
                desc="No streaks. No numbers. Just quiet acknowledgment of wherever you happen to be today."
                highlight
              />
              <Card 
                title="Sensory-Friendly" 
                desc="Deep earthy tones, slow crossfades, minimal motion, and organic, human typography."
                highlight
              />
              <Card 
                title="Reflective, Not Reactive" 
                desc="A private, soft journal space designed to help you notice your tension, not immediately 'fix' it."
                highlight
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Card({ title, desc, highlight = false }: { title: string; desc: string; highlight?: boolean }) {
  return (
    <div className={`p-8 rounded-[40px] transition-colors duration-1000 ${highlight ? 'bg-[var(--surface-muted)] border border-[var(--border-strong)]' : 'bg-[var(--surface-glass)] border border-[var(--border-subtle)]'} soft-shadow`}>
      <div className="flex items-center gap-3 mb-4">
          {highlight && <div className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"></div>}
          <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">{title}</h3>
      </div>
      <p className="text-[var(--text-secondary)] opacity-90 leading-relaxed text-[15px]">{desc}</p>
    </div>
  )
}
