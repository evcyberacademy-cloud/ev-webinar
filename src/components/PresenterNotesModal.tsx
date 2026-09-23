import React from 'react';
import { X, Mic, Lightbulb, MessageSquare, ArrowRight } from 'lucide-react';
import { SlideData } from '../types';

interface PresenterNotesModalProps {
  currentSlide: SlideData;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
}

export const PresenterNotesModal: React.FC<PresenterNotesModalProps> = ({
  currentSlide,
  isOpen,
  onClose,
  onNext
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-20 right-6 z-40 w-96 max-w-[calc(100vw-3rem)] bg-[#0f172a] border border-amber-500/40 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col select-none animate-in slide-in-from-bottom-4 duration-200">
      {/* Header */}
      <div className="p-3.5 px-4 bg-amber-950/40 border-b border-amber-500/30 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Mic className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-300 tracking-wide uppercase">
              Presenter Notes & Tips
            </span>
            <span className="text-[10px] text-amber-400/80 block">
              Vimal-kaga | Google Meet Live Webinar
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
          title="Notes Moodu ('N' amukunga)"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Slide Context */}
      <div className="p-3 bg-slate-950/60 border-b border-slate-800 text-xs">
        <div className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider mb-0.5">
          Topic {currentSlide.id} • {currentSlide.sectionTitle}
        </div>
        <div className="font-semibold text-white truncate">
          {currentSlide.title}
        </div>
      </div>

      {/* Speaker Notes List */}
      <div className="p-4 space-y-3 max-h-60 overflow-y-auto text-xs">
        <div className="flex items-center gap-1.5 text-amber-400 text-[11px] font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Vaayaala pesura mukkiya points:</span>
        </div>

        {currentSlide.presenterNotes && currentSlide.presenterNotes.length > 0 ? (
          <ul className="space-y-2 text-slate-300">
            {currentSlide.presenterNotes.map((note, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-amber-400 font-bold text-[13px] leading-none mt-0.5">•</span>
                <span>{note}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400 italic">
            Visual diagram-ah kaatti chat box-la quick reaction kellinga.
          </p>
        )}

        <div className="pt-2 border-t border-slate-800 flex items-center gap-2 text-[10px] text-slate-400">
          <Lightbulb className="w-3 h-3 text-amber-400 shrink-0" />
          <span>Slide-la romba text vaikkama, vaayaala simple-ah explain pannunga.</span>
        </div>
      </div>

      {/* Footer quick action */}
      <div className="p-2.5 px-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
        <span className="text-[10px] text-slate-500">'N' key thottu open/close pannalaam</span>
        <button
          onClick={onNext}
          className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1 text-[11px]"
        >
          Adutha Topic <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};
