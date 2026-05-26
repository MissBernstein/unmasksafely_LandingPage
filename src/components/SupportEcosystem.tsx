import { Heart, Coffee, MessagesSquare, Mail } from 'lucide-react';
import { useState } from 'react';

export default function SupportEcosystem() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(email) setSubmitted(true);
    }

  return (
    <section className="space-y-12 max-w-5xl mx-auto pb-32">
       <div className="text-center space-y-6">
                                <h2 className="font-serif text-4xl text-[var(--text-primary)] italic">Support & Connection</h2>
                                <p className="text-[var(--text-secondary)] opacity-90 text-lg">Ways to witness, fund, and join this quiet corner.</p>
      </div>

      <div className="space-y-16">
        
        {/* Support Group */}
        <div className="space-y-6">
           <h3 className="text-[11px] font-bold tracking-widest uppercase opacity-55 text-[var(--text-secondary)] px-2 text-center md:text-left">Fund the Project</h3>
           <div className="grid md:grid-cols-5 gap-6 md:gap-8">
               <a href="#" className="col-span-1 md:col-span-3 group block p-8 md:p-10 rounded-[40px] bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-700 soft-shadow">
                   <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                       <div className="p-4 bg-[var(--surface-muted)] rounded-[24px] text-[var(--accent-strong)] group-hover:bg-[var(--accent)] group-hover:text-[var(--text-inverse)] transition-colors duration-700">
                           <Heart size={26} strokeWidth={1.5} />
                       </div>
                       <div className="space-y-3 flex-1">
                            <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)] pb-1">Support the Growth</h3>
                            <p className="text-[var(--text-secondary)] opacity-90 leading-relaxed text-[15px] max-w-md">This project is independent and needs care. Your support on GoFundMe directly funds development, sensory-friendly design research, and secure hosting.</p>
                       </div>
                   </div>
               </a>

               <a href="#" className="col-span-1 md:col-span-2 group block p-8 md:p-10 rounded-[40px] bg-[var(--surface-card)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-all duration-700 soft-shadow flex flex-col justify-between min-h-[240px]">
                   <div className="p-4 bg-[var(--surface-muted)] w-fit rounded-[24px] text-[var(--accent-strong)] group-hover:bg-[var(--accent)] group-hover:text-[var(--text-inverse)] transition-colors duration-700 mb-6">
                       <Coffee size={24} strokeWidth={1.5} />
                   </div>
                   <div className="space-y-2">
                        <h3 className="font-serif text-xl font-bold text-[var(--text-primary)]">Buy me a coffee</h3>
                        <p className="text-[var(--text-secondary)] opacity-90 text-[15px]">A small token of appreciation via Ko-Fi.</p>
                   </div>
               </a>
           </div>
        </div>

        {/* Community & Updates Group */}
        <div className="space-y-6">
           <h3 className="text-[11px] font-bold tracking-widest uppercase opacity-55 text-[var(--text-secondary)] px-2 text-center md:text-left">Join & Witness</h3>
           <div className="grid md:grid-cols-5 gap-6 md:gap-8">
               <a href="#" className="col-span-1 md:col-span-2 group block p-8 md:p-10 rounded-[40px] bg-[var(--text-primary)] text-[var(--text-inverse)] border border-transparent hover:bg-[var(--accent-strong)] transition-all duration-700 soft-shadow flex flex-col justify-between min-h-[240px]">
                   <div className="p-4 bg-[var(--text-inverse)]/10 w-fit rounded-[24px] text-[var(--text-inverse)] transition-colors duration-700 mb-6">
                       <MessagesSquare size={24} strokeWidth={1.5} />
                   </div>
                   <div className="space-y-3">
                        <h3 className="font-serif text-xl font-bold pb-1">The Subreddit</h3>
                        <p className="opacity-80 text-[15px] leading-relaxed">Join the quiet community. We discuss masking, burnout, and unlearning.</p>
                   </div>
               </a>

               <div className="col-span-1 md:col-span-3 p-8 md:p-10 rounded-[40px] bg-[var(--surface-muted)] border border-[var(--border-subtle)] relative overflow-hidden soft-shadow text-[var(--text-secondary)] min-h-[300px]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--surface-card)_0%,_transparent_100%)] opacity-55"></div>
                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                         <div className="space-y-3">
                             <div className="flex items-center gap-3 text-[var(--accent-strong)] mb-6">
                                 <Mail size={18} strokeWidth={2} />
                                 <span className="text-[10px] tracking-widest font-bold uppercase opacity-80">The Update Ritual</span>
                             </div>
                             <h3 className="font-serif text-2xl font-bold text-[var(--text-primary)]">Quiet Notes.</h3>
                             <p className="opacity-80 text-[15px] max-w-md leading-relaxed">No spam. No marketing funnels. I'll only write when there is something meaningful to share about the project's evolution.</p>
                         </div>

                         {!submitted ? (
                              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-6">
                                 <input 
                                     type="email" 
                                     required
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                                     placeholder="Quietly entering email..." 
                                     className="bg-[var(--surface-card)]/75 border border-[var(--border-subtle)] text-[var(--text-secondary)] placeholder:text-[var(--text-secondary)]/55 px-5 py-4 rounded-[24px] focus:outline-none focus:border-[var(--accent)] transition-all flex-1 min-w-0 font-sans"
                                 />
                                 <button type="submit" className="bg-[var(--accent)] hover:bg-[var(--accent-strong)] text-[var(--text-inverse)] px-8 py-4 rounded-[24px] transition-all duration-300 soft-shadow font-serif italic whitespace-nowrap">
                                     Witness the journey
                                 </button>
                             </form>
                         ) : (
                             <div className="p-5 mt-6 rounded-[24px] bg-[var(--surface-card)] border border-[var(--border-subtle)] flex items-center gap-4 transition-all duration-1000 animate-in fade-in slide-in-from-bottom-4 soft-shadow">
                                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-pulse"></div>
                                  <p className="text-[var(--text-secondary)] text-[15px]">Received. Thank you for your soft presence.</p>
                             </div>
                         )}
                    </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  )
}
