import React, { useState } from 'react';
import { Layers, HardDrive, Zap, Power, CheckCircle2, AlertTriangle, ArrowRight, ShieldCheck } from 'lucide-react';
import { SlideData } from '../../types';

interface SlideProps {
  slide: SlideData;
}

export const RamVsStorageSlide: React.FC<SlideProps> = ({ slide }) => {
  const [powerOff, setPowerOff] = useState(false);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-8 py-3">
      {/* Header */}
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-1.5">
          <span>HARDWARE ARCHITECTURE VILAKKAM</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          RAM vs Storage (Katchi Vilakkam)
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-0.5 max-w-xl mx-auto">
          Padikkura Table (Tharkaiga Memory) vs Beero / Cupboard (Niranthara Files)
        </p>
      </div>

      {/* Interactive Power Cut Demonstration */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setPowerOff(!powerOff)}
          className={`px-4 py-2 rounded-xl text-xs font-bold font-mono flex items-center gap-2 transition-all duration-300 shadow-lg ${
            powerOff
              ? 'bg-rose-600 text-white shadow-rose-900/50 ring-2 ring-rose-400'
              : 'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700'
          }`}
        >
          <Power className="w-4 h-4" />
          <span>{powerOff ? '⚡ Current Illai (Power ON panna click panga)' : '🔌 Sudden Power Cut Test Panna (Click Me)'}</span>
        </button>
      </div>

      {/* Visual Metaphor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* RAM Visual: The Desk */}
        <div className={`p-5 rounded-2xl border transition-all duration-500 flex flex-col justify-between ${
          powerOff 
            ? 'bg-red-950/30 border-red-500/40 opacity-75' 
            : 'bg-cyan-950/20 border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.15)]'
        }`}>
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-300">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">RAM (Memory)</h3>
                  <span className="text-xs text-cyan-400 font-medium">Vilakkam: Padikkura Table 📝</span>
                </div>
              </div>
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${
                powerOff ? 'bg-red-900 text-red-200' : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
              }`}>
                {powerOff ? 'ELLAM AZHINJIDUCHU!' : 'ULTRA FAST (30 GB/s)'}
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Ippo unga computer-la nadakkura ella velaiyum <strong>live-ah</strong> inga thaan irukum. CPU nanoseconds-la idhula irundhu data edukkum.
            </p>

            {/* Active Items on the Desk */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 min-h-[90px] flex flex-col justify-center">
              <span className="text-[10px] font-mono text-slate-400 block mb-1.5 font-semibold">
                IPPO TABLE-LA IRUKKURA ITEMS:
              </span>
              {powerOff ? (
                <div className="text-xs text-red-400 font-bold flex items-center gap-1.5 py-2 animate-pulse">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>POOF! Current ponadhala table-la irundha ellam kaanaama pochu!</span>
                </div>
              ) : (
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono">
                    🌐 Chrome (YouTube tab)
                  </span>
                  <span className="px-2 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono">
                    💬 WhatsApp Message
                  </span>
                  <span className="px-2 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 text-[11px] font-mono">
                    🎮 Game Player Position
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
            <span className="text-cyan-400 font-bold">Cyber Context:</span>
            <span>Neenga type panra passwords & keys live-ah RAM-la thaan irukum.</span>
          </div>
        </div>

        {/* Storage Visual: The Cupboard */}
        <div className="p-5 rounded-2xl bg-indigo-950/20 border border-indigo-500/40 shadow-[0_0_25px_rgba(99,102,241,0.15)] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-indigo-950 border border-indigo-500/50 flex items-center justify-center text-indigo-300">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white">Storage (SSD / Disk)</h3>
                  <span className="text-xs text-indigo-400 font-medium">Vilakkam: Beero / Cupboard 🗄️</span>
                </div>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-indigo-950 text-indigo-300 border border-indigo-500/30">
                PERMANENT (512GB - 2TB)
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed mb-3">
              Files-ah permanent-ah save panni vachirukkum. Current ponalum files eppovum azhiyaadhu.
            </p>

            {/* Permanent Items in Cupboard */}
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 min-h-[90px] flex flex-col justify-center">
              <span className="text-[10px] font-mono text-slate-400 block mb-1.5 font-semibold">
                CUPBOARD-LA PATHUKAAPA IRUKRA FILES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[11px] font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  🖼️ Tour Photos
                </span>
                <span className="px-2 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[11px] font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  📁 Windows 11 OS Files
                </span>
                <span className="px-2 py-1 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 text-[11px] font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  📄 Resume PDF
                </span>
              </div>
              {powerOff && (
                <div className="text-[11px] text-emerald-400 font-bold mt-2">
                  ✅ Current ponalum cupboard kulla files 100% pathukaapa iruku!
                </div>
              )}
            </div>
          </div>

          <div className="mt-3 pt-2.5 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
            <span className="text-indigo-400 font-bold">Cyber Context:</span>
            <span>Computer restart aanaalum vaazhanum nu malware inga oliyum.</span>
          </div>
        </div>
      </div>

      {/* Summary Banner */}
      <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-200">
          <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
          <span><strong>Thanga Vidhi:</strong> Files Storage-la thoongum. RAM-ku vandhu thaan velai paarkum.</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400 hidden sm:inline">Visual First</span>
      </div>
    </div>
  );
};
