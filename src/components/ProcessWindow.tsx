import { Feather } from 'lucide-react';

export default function ProcessWindow() {
  return (
    <section className="max-w-5xl mx-auto space-y-16 py-12">
      <div className="text-center space-y-6">
        <h2 className="font-serif text-4xl text-[#10241f] italic">Witness the Process</h2>
        <p className="text-[#3b2515] opacity-85 text-lg">A glimpse into the evolving interface.</p>
      </div>

      <div className="relative rounded-[40px] p-4 md:p-10 bg-[#ffffff]/75 border border-[#10241f]/10 overflow-hidden group soft-shadow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#ebd2a8_0%,_transparent_100%)] opacity-75"></div>
        
        {/* Mockup Container */}
        <div className="relative bg-[#ebd2a8]/45 rounded-[32px] shadow-sm flex items-center justify-center transition-transform duration-1000 overflow-hidden aspect-[4/3] md:aspect-video border border-[#10241f]/10">
            
            {/* The vague narrative UI representation */}
            <div className="w-full max-w-sm space-y-10 p-10 border border-[#ffffff]/70 rounded-[40px] bg-[#ffffff]/60 backdrop-blur-md soft-shadow relative">
                
                <div className="space-y-3 text-center relative z-10">
                    <div className="h-3 w-20 bg-[#c95e2f]/25 rounded-full mx-auto"></div>
                    <div className="h-8 w-56 bg-[#8c4807]/15 rounded-xl mx-auto mt-4"></div>
                </div>
                
                <div className="space-y-6 pt-6 relative z-10">
                    <div className="h-14 w-full bg-[#ebd2a8]/65 rounded-[24px] relative overflow-hidden border border-[#ffffff]/65">
                      <div className="absolute top-0 left-0 bottom-0 w-[70%] bg-gradient-to-r from-[#c95e2f]/45 to-[#8c4807]/70 rounded-[24px] transition-all duration-1000 ease-in-out group-hover:w-[85%]"></div>
                    </div>
                    <div className="h-14 w-full bg-[#ebd2a8]/65 rounded-[24px] relative overflow-hidden border border-[#ffffff]/65">
                       <div className="absolute top-0 left-0 bottom-0 w-1/3 bg-[#c95e2f]/45 rounded-[24px] transition-all duration-1000 ease-in-out group-hover:w-1/2"></div>
                    </div>
                    <div className="h-14 w-full bg-[#ebd2a8]/65 rounded-[24px] relative overflow-hidden border border-[#ffffff]/65">
                       <div className="absolute top-0 left-0 bottom-0 w-[45%] bg-[#8c4807]/30 rounded-[24px] transition-all duration-1000 ease-in-out group-hover:w-[40%]"></div>
                    </div>
                </div>
                
                <div className="pt-8 flex justify-center relative z-10">
                    <div className="h-14 w-14 rounded-full bg-[#ffffff] border border-[#10241f]/10 soft-shadow flex items-center justify-center text-[#c95e2f]">
                         <Feather size={20} strokeWidth={1.5} />
                    </div>
                </div>
            </div>

            {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#ebd2a8]/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700 ease-in-out flex flex-col items-center justify-center z-20">
                  <a href="#" className="px-8 py-4 bg-[#c95e2f] text-[#ffffff] rounded-full font-serif italic hover:bg-[#8c4807] hover:scale-[1.02] transition-all duration-500 soft-shadow flex items-center gap-3">
                    Explore the evolving space &rarr;
                </a>
                  <span className="text-[10px] uppercase tracking-widest font-bold opacity-70 mt-6 text-[#10241f]">Enter the app prototype</span>
            </div>
        </div>
      </div>
    </section>
  )
}
