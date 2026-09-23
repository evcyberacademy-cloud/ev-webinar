import React from 'react';
import { 
  HelpCircle, 
  Lightbulb, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronRight,
  Cpu,
  Zap,
  Layers,
  ArrowRight
} from 'lucide-react';
import { SlideData } from '../../types';
import { SlideTopologyDiagram } from '../visuals/SlideTopologyDiagram';

interface ConceptRevealSlideProps {
  slide: SlideData;
  currentStep: number;
  onStepForward?: () => void;
}

export const ConceptRevealSlide: React.FC<ConceptRevealSlideProps> = ({
  slide,
  currentStep,
  onStepForward
}) => {
  const { content, title, subtitle } = slide;
  const {
    question,
    realLifeAnalogy,
    simpleExplanation,
    technicalTerm,
    technicalSubtitle,
    cyberConnection
  } = content;

  const isStep1Revealed = currentStep >= 1;
  const isStep2Revealed = currentStep >= 2;

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-3 sm:px-6 py-3">
      {/* 1. Header (Clean, Zero-Pill Typography) */}
      <div className="text-center mb-3 shrink-0">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono font-semibold mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span>{slide.sectionTitle.toUpperCase()}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xs sm:text-sm text-slate-400 mt-0.5 max-w-2xl mx-auto truncate">
            {subtitle}
          </p>
        )}
      </div>

      {/* 2. THE HERO: Animated Interactive Topology Diagram */}
      <div className="mb-3 shrink-0">
        <SlideTopologyDiagram 
          slideId={slide.id} 
          currentStep={currentStep} 
          onStepForward={onStepForward} 
        />
      </div>

      {/* 3. Concise, Punchy Tactical Cards (NO walls of text) */}
      <div className="space-y-2 shrink-0">
        {/* Step 0: The Core Question Bar */}
        <div className="p-2.5 sm:p-3 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div className="truncate">
              <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block leading-none mb-0.5">
                AARAMBA KELVI
              </span>
              <span className="text-xs sm:text-sm font-bold text-white truncate block">
                {question}
              </span>
            </div>
          </div>

          {/* Progressive Step Controller Button */}
          {!isStep1Revealed && onStepForward && (
            <button
              onClick={onStepForward}
              className="px-3 py-1.5 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0 shadow-sm"
            >
              <span>Udhaaranam Paar</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Step 1: Real-life Analogy vs Computer (Crisp 1-line contrast) */}
        {isStep1Revealed && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 animate-in fade-in slide-in-from-bottom-1 duration-200">
            {/* Real Life Metaphor */}
            <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/40 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-950 border border-amber-500/50 flex items-center justify-center text-amber-400 shrink-0">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <span className="text-[9px] font-mono uppercase text-amber-400 font-bold block leading-none">
                  REAL-LIFE ANALOGY
                </span>
                <span className="text-xs font-semibold text-slate-200 block truncate mt-0.5">
                  {realLifeAnalogy || simpleExplanation}
                </span>
              </div>
            </div>

            {/* In the Computer */}
            <div className="p-2.5 rounded-xl bg-cyan-950/20 border border-cyan-500/40 flex items-center justify-between gap-2.5">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-7 h-7 rounded-lg bg-cyan-950 border border-cyan-500/50 flex items-center justify-center text-cyan-300 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono uppercase text-cyan-400 font-bold block leading-none">
                    COMPUTER KULLA
                  </span>
                  <span className="text-xs font-semibold text-slate-200 block truncate mt-0.5">
                    {simpleExplanation}
                  </span>
                </div>
              </div>

              {!isStep2Revealed && onStepForward && (
                <button
                  onClick={onStepForward}
                  className="px-2.5 py-1 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 text-[11px] font-semibold flex items-center gap-1 shrink-0"
                >
                  <span>Tech Term</span>
                  <ChevronRight className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 2: Technical Term & Cyber Protection (Punchy badges) */}
        {isStep2Revealed && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 animate-in fade-in slide-in-from-bottom-1 duration-200">
            {/* Tech Term Badge */}
            <div className="p-2.5 rounded-xl bg-gradient-to-r from-cyan-950/60 to-blue-950/60 border border-cyan-500/40 flex items-center justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase text-cyan-400 font-bold block leading-none">
                  TECHNICAL TERM
                </span>
                <div className="text-sm font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                  <span>{technicalTerm}</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                </div>
              </div>
              {technicalSubtitle && (
                <span className="text-[10px] text-cyan-300 font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800">
                  {technicalSubtitle}
                </span>
              )}
            </div>

            {/* Cyber Defense Angle */}
            {cyberConnection && (
              <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[9px] font-mono uppercase text-emerald-400 font-bold block leading-none">
                    CYBER DEFENSE ANGLE
                  </span>
                  <span className="text-xs text-slate-200 block truncate mt-0.5">
                    {cyberConnection}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
