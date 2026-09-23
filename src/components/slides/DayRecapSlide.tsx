import React from 'react';
import { HelpCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { SlideData } from '../../types';

interface SlideProps {
  slide: SlideData;
  currentStep: number;
  onStepForward?: () => void;
}

export const DayRecapSlide: React.FC<SlideProps> = ({ slide, currentStep, onStepForward }) => {
  const questions = slide.content.questions || [
    { q: 'CPU unmaiyila enna velai pannum?', a: 'Fetch → Decode → Execute vali instructions-ah sequential-ah nanoseconds speed-la execute pannum.' },
    { q: 'RAM-kum Storage-kum ulla mukkiya difference enna?', a: 'RAM: High-speed temporary table (power cut aana azhiyum); Storage: Permanent cupboard (files eppovum safe).' },
    { q: 'Program-kum Process-kum ulla vithiyasam enna?', a: 'Program: Disk-la irukra recipe book; Process: RAM-la PID kooda odura live samayal.' },
    { q: 'Operating System-na enna ore variyila sollunga?', a: 'Hardware-aiyum applications-aiyum control panni coordinate panra Master Manager.' },
    { q: 'Oru application direct-ah hardware kooda pesa mudiyuma?', a: 'KANDIPPA ILLAI! OS Kernel mattum thaan hardware access-ah isolate panni handle pannum.' }
  ];

  const totalQuestions = questions.length;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-8 py-4">
      {/* Header */}
      <div className="text-center mb-5 shrink-0">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-1.5">
          <span>DAY 2 RECAP QUIZ</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Day 1 Systems Recap
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          OS ulla poraduku munnadi Day 1-la kathukitta concepts-ah quick recap pannuvom
        </p>
      </div>

      {/* Interactive Quiz Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
        {questions.map((item: any, idx: number) => {
          const isRevealed = currentStep >= idx + 1;

          return (
            <div
              key={idx}
              id={`recap-question-card-${idx + 1}`}
              className={`p-3.5 sm:p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                isRevealed
                  ? 'bg-slate-900/90 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                  : 'bg-slate-950/60 border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-slate-800 text-cyan-400">
                    Kelvi 0{idx + 1}
                  </span>
                  {isRevealed ? (
                    <span className="text-[10px] flex items-center gap-1 text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Pathil Kaatapatathu
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-500 font-mono">
                      Chat-la Kellinga
                    </span>
                  )}
                </div>

                <h4 className="text-xs sm:text-sm font-bold text-white mb-2 leading-snug">
                  {item.q}
                </h4>
              </div>

              {/* Reveal Box */}
              {isRevealed ? (
                <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-200 font-medium leading-relaxed animate-in fade-in duration-300 mt-2">
                  <strong>Pathil:</strong> {item.a}
                </div>
              ) : (
                <div className="p-2.5 rounded-lg bg-slate-900/40 border border-dashed border-slate-800 text-[11px] text-slate-500 italic mt-2">
                  Presenter pathil solla kaathirukkirom...
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Bottom Step Indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2 shrink-0">
        <span>Kaatiyathu: {totalQuestions}-la {Math.min(currentStep, totalQuestions)} kelvigal</span>
        {currentStep < totalQuestions && onStepForward && (
          <button
            id="reveal-next-recap-answer-btn"
            onClick={onStepForward}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
          >
            Adutha Pathilai Kaatu <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
};
