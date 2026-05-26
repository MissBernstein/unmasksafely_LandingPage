import { Feather } from 'lucide-react';

export default function ProcessWindow() {
  return (
    <section className="max-w-5xl mx-auto space-y-16 py-12">
      <div className="text-center space-y-6">
        <h2 className="font-serif text-4xl text-[var(--text-primary)] italic">Witness the Process</h2>
        <p className="text-[var(--text-secondary)] opacity-90 text-lg">A glimpse into the evolving interface.</p>
      </div>

      <div className="relative rounded-[40px] p-4 md:p-10 bg-[var(--surface-glass)] border border-[var(--border-subtle)] overflow-hidden group soft-shadow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--blob-primary)_0%,_transparent_100%)] opacity-75"></div>
        
        {/* Mockup Container */}
        <div className="relative bg-[var(--surface-muted)] rounded-[32px] shadow-sm flex items-center justify-center transition-transform duration-1000 overflow-hidden aspect-[4/3] md:aspect-video border border-[var(--border-subtle)]">
            
            {/* The vague narrative UI representation */}
            <div className="w-full max-w-sm space-y-10 p-10 border border-[var(--border-subtle)] rounded-[40px] bg-[var(--surface-glass)] backdrop-blur-md soft-shadow relative">
                
                <div className="space-y-3 text-center relative z-10">
                    <div className="h-3 w-20 bg-[var(--accent)]/25 rounded-full mx-auto"></div>
                    <div className="h-8 w-56 bg-[var(--accent-strong)]/20 rounded-xl mx-auto mt-4"></div>
                </div>
                
                <div className="space-y-6 pt-6 relative z-10">
                    <div className="h-14 w-full bg-[var(--surface-muted)] rounded-[24px] relative overflow-hidden border border-[var(--border-subtle)]">
                      <div className="absolute top-0 left-0 bottom-0 w-[70%] bg-gradient-to-r from-[var(--accent)]/45 to-[var(--accent-strong)]/70 rounded-[24px] transition-all duration-1000 ease-in-out group-hover:w-[85%]"></div>
                    </div>
                    <div className="h-14 w-full bg-[var(--surface-muted)] rounded-[24px] relative overflow-hidden border border-[var(--border-subtle)]">
                       <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-[var(--accent)]/45 rounded-[24px] transition-all duration-1000 ease-in-out group-hover:w-1/2"></div>
                    </div>
                    <div className="h-14 w-full bg-[var(--surface-muted)] rounded-[24px] relative overflow-hidden border border-[var(--border-subtle)]">
                       <div className="absolute top-0 left-0 bottom-0 w-[45%] bg-[var(--accent-strong)]/40 rounded-[24px] transition-all duration-1000 ease-in-out group-hover:w-[40%]"></div>
                    </div>
                </div>
                
                <div className="pt-8 flex justify-center relative z-10">
                    <div className="h-14 w-14 rounded-full bg-[var(--surface-card)] border border-[var(--border-subtle)] soft-shadow flex items-center justify-center text-[var(--accent)]">
                         <Feather size={20} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[var(--surface-overlay)] backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex flex-col items-center justify-center z-20">
                  <a href="#" className="px-8 py-4 bg-[var(--accent)] text-[var(--text-inverse)] rounded-full font-serif italic hover:bg-[var(--accent-strong)] hover:scale-[1.02] transition-all duration-500 soft-shadow flex items-center gap-3">
                    Explore the evolving space &rarr;
                </a>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-75 mt-6 text-[var(--text-primary)]">Enter the app prototype</span>
            </div>
        </div>
      </div>
    </section>
  )
}
