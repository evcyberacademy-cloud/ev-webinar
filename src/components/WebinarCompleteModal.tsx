import React from 'react';
import { Award, CheckCircle2, Download, LayoutGrid, X } from 'lucide-react';
import { LOGO_IMAGE_URL } from '../data/slides';

interface WebinarCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenOverview: () => void;
  onJumpToFinalSlide: () => void;
}

export const WebinarCompleteModal: React.FC<WebinarCompleteModalProps> = ({
  isOpen,
  onClose,
  onOpenOverview,
  onJumpToFinalSlide
}) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/final.txt';
    link.download = 'final.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 select-none animate-in fade-in duration-300">
      <div 
        className="w-full max-w-lg bg-[#0d131f] border-2 border-emerald-500/50 rounded-3xl p-6 sm:p-8 text-center shadow-[0_0_50px_rgba(16,185,129,0.25)] relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Logo */}
        <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden border-2 border-emerald-500/60 shadow-xl bg-slate-900 mb-4 p-0.5">
          <img 
            src={LOGO_IMAGE_URL} 
            alt="EV Cyber Academy" 
            className="w-full h-full object-cover rounded-xl"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Celebration Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-300 text-xs font-black tracking-wider uppercase mb-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
          <span className="text-base">🎉</span>
          <span>WEBINAR VETRIGARAMAAGA MUDINJIDHU!</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
          EV CYBER ACADEMY
        </h2>

        {/* Tagline */}
        <p className="text-sm sm:text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 uppercase tracking-wider mb-5">
          BUILDING CYBERSECURITY ENGINEERS
        </p>

        {/* Completion Stat Box */}
        <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 mb-6">
          <div className="flex items-center justify-center gap-2 text-emerald-300 font-mono font-bold text-lg mb-1">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>60 / 60 Topics Mudichachu</span>
            <span className="text-emerald-400 font-extrabold">✓</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Computer-oda ella core concepts-um — CPU, RAM, Storage-la irundhu OS, Kernel, System Calls varaikkum — zero-la irundhu crystal clear-ah kathukittom!
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-2.5">
          <button
            onClick={() => {
              onClose();
              onJumpToFinalSlide();
            }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2"
          >
            <Award className="w-4 h-4" />
            <span>Kadaisi Conclusion Slide-ku Poga (#60)</span>
          </button>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenOverview();
              }}
              className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-cyan-400" />
              <span>Topics List</span>
            </button>

            <button
              onClick={handleDownload}
              className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-800/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>final.txt Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
