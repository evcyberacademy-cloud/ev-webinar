import React, { useState } from 'react';
import { Shield, ShieldAlert, Lock, ArrowDown, Cpu, Layers, Terminal, AlertTriangle } from 'lucide-react';
import { SlideData } from '../../types';

interface SlideProps {
  slide: SlideData;
}

export const KernelSyscallSlide: React.FC<SlideProps> = ({ slide }) => {
  const [activeZone, setActiveZone] = useState<'user' | 'kernel' | null>('user');

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-8 py-4">
      {/* Header */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-2">
          <span>OS SECURITY BOUNDARY</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          User Space vs Kernel Space
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          Katchi Vilakkam: Hotel Dining Table (Apps) vs Samayal Araai / Kitchen (Kernel & Hardware)
        </p>
      </div>

      {/* Visual Metaphor Banner */}
      <div className="mb-3 p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300">
          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono font-bold text-[10px]">
            REAL-LIFE EXAMPLE
          </span>
          <span>Hotel customer direct-ah samayal arai-ku poi katti eduka mudiyadhu. Waiter kitta (System Call) thaan kekkanum!</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 hidden sm:inline">Pathukaappu</span>
      </div>

      {/* Main Rings Architecture */}
      <div className="space-y-3 relative">
        {/* User Space (Ring 3) */}
        <div 
          id="zone-user-space-card"
          onClick={() => setActiveZone('user')}
          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
            activeZone === 'user'
              ? 'bg-blue-950/40 border-blue-400 ring-2 ring-blue-400/30 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-extrabold text-white">USER SPACE</span>
                <span className="ml-2 text-xs font-mono text-blue-400 font-semibold">(Ring 3)</span>
              </div>
            </div>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-blue-950 text-blue-300 border border-blue-500/30 font-semibold">
              Kattupaadugal Udaiya Idham (Restricted)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-2">
            {['Google Chrome', 'Python Scripts', 'Terminal / Bash', 'Code Editors / Apps'].map((app, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs font-medium text-slate-200 text-center">
                {app}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 italic">
            Direct-ah hardware access panna mudiyadhu. Oru app crash aanaalum antha app mattum thaan close aagum, computer safe-ah irukkum.
          </p>
        </div>

        {/* System Call Gate (The Barrier) */}
        <div className="relative py-2 flex items-center justify-center">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent" />
          <div className="relative px-4 py-1.5 rounded-full bg-slate-950 border border-cyan-500/80 text-cyan-300 text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>SYSTEM CALL GATE (Pathukaappu Vasal)</span>
            <ArrowDown className="w-3.5 h-3.5 text-cyan-400" />
          </div>
        </div>

        {/* Kernel Space (Ring 0) */}
        <div 
          id="zone-kernel-space-card"
          onClick={() => setActiveZone('kernel')}
          className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
            activeZone === 'kernel'
              ? 'bg-purple-950/40 border-purple-400 ring-2 ring-purple-400/30 shadow-[0_0_20px_rgba(168,85,247,0.2)]'
              : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="text-sm font-extrabold text-white">KERNEL SPACE</span>
                <span className="ml-2 text-xs font-mono text-purple-400 font-semibold">(Ring 0)</span>
              </div>
            </div>
            <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30 font-semibold">
              Muzhu Adhigaaram (Full Hardware Control)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-2">
            {['OS Kernel Core', 'Device Drivers', 'CPU Scheduler', 'Virtual Memory Arbiter'].map((comp, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-slate-950/80 border border-purple-500/20 text-xs font-medium text-purple-200 text-center">
                {comp}
              </div>
            ))}
          </div>

          <p className="text-[11px] text-slate-400 italic">
            Ella hardware, RAM memory-aiyum direct-ah control pannum. Inga thavaru nadandha Blue Screen (BSOD) vandhu restart aagum.
          </p>
        </div>

        {/* Physical Hardware Layer */}
        <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
          <span className="font-mono font-bold text-slate-400 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            UNMAIYANA HARDWARE:
          </span>
          <span className="text-slate-400">CPU Compute • RAM Silicon • SSD Storage • Network Card (NIC)</span>
        </div>
      </div>
    </div>
  );
};
