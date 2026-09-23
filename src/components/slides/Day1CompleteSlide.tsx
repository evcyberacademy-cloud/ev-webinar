import React from 'react';
import { CheckCircle2, ArrowRight, Shield, Cpu, HardDrive, Layers, Sparkles, Calendar } from 'lucide-react';
import { SlideData } from '../../types';

interface Day1CompleteSlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const Day1CompleteSlide: React.FC<Day1CompleteSlideProps> = ({ onNext }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-8 py-6 select-none">
      {/* Top Banner */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>DAY 1 MUDINJIDHU ✓</span>
        </div>
        
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
          DAY 1: SYSTEM-AH PURINJIKITOM
        </h2>
        
        <p className="text-sm sm:text-base text-cyan-300 font-semibold mt-2">
          Naalaiku: Operating System Ulla Pogaporom
        </p>
      </div>

      {/* Main Grid: What We Mastered vs Tomorrow's Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        {/* Left Column: Day 1 Accomplished */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Day 1 Foundation Purinjikittom
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                44 / 44 Topics
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                <span><strong>CPU Velaikkaarar:</strong> Instructions, Cores, Threads & Registers</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                <Layers className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>RAM vs Storage:</strong> Tharkaiga Table vs Niranthara Cupboard</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                <HardDrive className="w-4 h-4 text-purple-400 shrink-0" />
                <span><strong>Program vs Process:</strong> Recipe book vs Live Samayal</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Real Security:</strong> First principles-la irundhu real security defense</span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[11px] text-slate-400 italic">
            Computer epdi work aaguthu nu first principles-la irundhu ippo ungalukku theliva theriyum.
          </p>
        </div>

        {/* Right Column: Tomorrow Day 2 Preview */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/80 border border-cyan-500/40 flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Calendar className="w-4 h-4" /> DAY 2: OS ULLA POGAPOROM
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                Topics 45 – 60
              </span>
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-cyan-500/20">
                <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">1</span>
                <span><strong>OS Illana:</strong> Hardware kulla nadakara periya kozhappam</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-cyan-500/20">
                <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">2</span>
                <span><strong>The Kernel:</strong> Ella devices-aiyum control panra Sacred Heart</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-cyan-500/20">
                <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">3</span>
                <span><strong>System Calls:</strong> User space-la irundhu Kernel kitta request panradhu</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-cyan-500/20">
                <span className="w-5 h-5 rounded-md bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[10px]">4</span>
                <span><strong>7-Stage Roadmap:</strong> Cybersecurity Engineer aagura roadmap</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
            <span className="text-[11px] text-cyan-300 font-medium">EV CYBER ACADEMY • Day 2 Ready</span>
            {onNext && (
              <button
                onClick={onNext}
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1 transition-colors"
              >
                <span>Day 2-ku Poga</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
