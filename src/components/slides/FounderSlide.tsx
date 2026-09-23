import React from 'react';
import { ShieldCheck, Award, Terminal, Compass, CheckCircle } from 'lucide-react';
import { SlideData } from '../../types';
import { FOUNDER_IMAGE_URL, LOGO_IMAGE_URL } from '../../data/slides';

interface SlideProps {
  slide: SlideData;
}

export const FounderSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Large Founder Portrait */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative group">
            {/* Soft backdrop glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-cyan-500/20 to-blue-500/10 rounded-3xl blur-xl" />
            
            <div className="relative w-64 sm:w-72 aspect-[4/5] rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl bg-slate-900">
              <img 
                src={FOUNDER_IMAGE_URL} 
                alt="Vimal - Founder & CEO" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent flex items-center justify-between">
                <span className="text-[11px] font-mono text-cyan-400 font-semibold">
                  EV CYBER ACADEMY
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                  Leadership
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title & Speaker Space */}
        <div className="md:col-span-7 flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>FOUNDER ARIMUGAM</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
            Vimal
          </h2>

          <p className="text-lg text-cyan-400 font-semibold mb-6">
            Founder & CEO — EV CYBER ACADEMY
          </p>

          {/* Highlights & Space for Verbal Speech */}
          <div className="space-y-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed">
                “Ennudaiya mission romba simple: Computer, OS matrum Network epdi work aagudhu nu first principles-la puriya vachi, ungalai oru unmaiyana Cybersecurity Engineer-a maathurathu thaan.”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Systems-First Approach</div>
                  <div className="text-[11px] text-slate-400">Manapaadam pannama, base root-ah purinjikurathu</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                <Compass className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Zero-la Irundhu Mentorship</div>
                  <div className="text-[11px] text-slate-400">Coding theriyalanum zero-la irundhu guide panradhu</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Presenter Space Cue */}
          <div className="py-2.5 px-4 rounded-lg bg-slate-950/60 border border-dashed border-slate-800 text-xs text-slate-400 flex items-center justify-between">
            <span className="italic font-medium text-slate-400">
              Vimal-oda live arimuga urai
            </span>
            <span className="text-[10px] text-cyan-400 font-mono">
              [Vimal audience kitta pesuvaaru]
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
