import React from 'react';
import { ChevronLeft, ChevronRight, Sparkles, HelpCircle, CheckCircle2, Award } from 'lucide-react';
import { SlideData } from '../types';

interface NavigationControlsProps {
  currentSlide: SlideData;
  currentIndex: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onJumpToSlide: (index: number) => void;
  currentStep: number;
  totalSteps: number;
  onStepForward: () => void;
  canGoPrev: boolean;
  canGoNext: boolean;
  completedTopicIds: number[];
  lastCompletedTopicTitle: string;
  onOpenQuestionModal: () => void;
}

export const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentSlide,
  currentIndex,
  totalSlides,
  onPrev,
  onNext,
  onJumpToSlide,
  currentStep,
  totalSteps,
  onStepForward,
  canGoPrev,
  canGoNext,
  completedTopicIds,
  lastCompletedTopicTitle,
  onOpenQuestionModal
}) => {
  const progressPercent = ((currentIndex + 1) / totalSlides) * 100;
  const completionPercent = (completedTopicIds.length / totalSlides) * 100;
  const hasMultipleSteps = totalSteps > 1;
  const hasRemainingSteps = currentStep < totalSteps - 1;
  const isCurrentCompleted = completedTopicIds.includes(currentSlide.id);
  const completedCount = completedTopicIds.length;

  return (
    <div className="relative shrink-0 select-none bg-[#0b0f17]/95 border-t border-slate-800/80">
      {/* Progress Bar Header: Completion Mark Display */}
      <div className="px-4 md:px-8 pt-2 pb-1 flex items-center justify-between text-xs">
        {/* The required completion mark: e.g. "2 topics completed <Who is Vimal?>" */}
        <div className="flex items-center gap-2">
          <div className={`px-2 py-0.5 rounded-full flex items-center gap-1.5 font-medium transition-colors ${
            completedCount > 0 
              ? 'bg-emerald-950/70 border border-emerald-500/40 text-emerald-300' 
              : 'bg-slate-900 border border-slate-800 text-slate-400'
          }`}>
            <Award className={`w-3.5 h-3.5 ${completedCount > 0 ? 'text-emerald-400' : 'text-slate-500'}`} />
            <span className="font-semibold">{completedCount} topics mudichachu</span>
            {lastCompletedTopicTitle ? (
              <span className="text-emerald-400/90 font-normal">
                &lt;{lastCompletedTopicTitle}&gt;
              </span>
            ) : (
              <span className="text-slate-500 font-normal">
                &lt;Innum mudiyala&gt;
              </span>
            )}
          </div>
        </div>

        {/* Current Slide and Track Indicator */}
        <div className="flex items-center gap-2 text-[11px] text-slate-400">
          <span>Topic {currentSlide.id} / {totalSlides}</span>
          <span className="text-slate-700">•</span>
          <span className="font-mono text-cyan-400 font-semibold">{Math.round(completionPercent)}% Mudinjithu</span>
        </div>
      </div>

      {/* Interactive Dual-layer Progress Bar (Seek + Completed) */}
      <div 
        className="w-full h-2 bg-slate-900 cursor-pointer relative group"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = e.clientX - rect.left;
          const targetIndex = Math.min(
            totalSlides - 1,
            Math.max(0, Math.floor((clickX / rect.width) * totalSlides))
          );
          onJumpToSlide(targetIndex);
        }}
      >
        {/* Completed topics fill background */}
        <div 
          className="absolute inset-y-0 left-0 bg-emerald-600/30 transition-all duration-300"
          style={{ width: `${completionPercent}%` }}
        />
        {/* Current slide position pointer */}
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.6)] relative z-10"
          style={{ width: `${progressPercent}%` }}
        />
        {/* Subtle hover tooltip hint */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity absolute -top-7 left-1/2 -translate-x-1/2 bg-slate-900/95 text-[10px] text-slate-200 px-2.5 py-0.5 rounded border border-slate-700 pointer-events-none whitespace-nowrap shadow-lg z-20">
          Topic #{currentIndex + 1}-ku poga click pannunga ({completedCount}/60 mudichachu)
        </div>
      </div>

      {/* Floating Bottom Control Bar */}
      <div className="h-14 px-4 md:px-8 flex items-center justify-between">
        {/* Left: Keyboard shortcuts guide */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-500 font-mono">
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">Space</kbd>
            Aduthu
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">Q</kbd>
            Quiz
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">O</kbd>
            Overview
          </span>
        </div>

        {/* Center: Interactive Topic Question Check & Reveal Stepper */}
        <div className="flex items-center justify-center gap-2 flex-1 sm:flex-none">
          {/* Complete Topic ✓ Button */}
          <button
            id="topic-question-modal-btn"
            onClick={onOpenQuestionModal}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md active:scale-95 ${
              isCurrentCompleted
                ? 'bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 hover:bg-emerald-900/80 shadow-emerald-950/40'
                : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/20 ring-1 ring-emerald-400/40 animate-pulse'
            }`}
          >
            {isCurrentCompleted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Topic Mudinjithu ✓</span>
              </>
            ) : (
              <>
                <Award className="w-4 h-4 text-white" />
                <span>Topic-ah Mudika ✓</span>
              </>
            )}
          </button>

          {/* Reveal Stepper if applicable */}
          {hasMultipleSteps && (
            <button
              id="reveal-step-action-btn"
              onClick={onStepForward}
              disabled={!hasRemainingSteps}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md ${
                hasRemainingSteps
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-blue-500/20 active:scale-95'
                  : 'bg-slate-900 text-slate-500 border border-slate-800 cursor-default'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-200" />
              <span>
                {hasRemainingSteps 
                  ? `Step ${currentStep + 1}/${totalSteps}` 
                  : `Ellam Steps Vandhachu`}
              </span>
            </button>
          )}
        </div>

        {/* Right: Prev & Next buttons */}
        <div className="flex items-center gap-2">
          <button
            id="prev-slide-btn"
            onClick={onPrev}
            disabled={!canGoPrev}
            title="Munnadi Topic (← / Backspace)"
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              canGoPrev
                ? 'bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 active:scale-95 shadow-sm'
                : 'bg-slate-950 text-slate-600 border border-slate-900 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Munnadi Topic</span>
            <span className="sm:hidden">Munnadi</span>
          </button>

          <button
            id="next-slide-btn"
            onClick={onNext}
            disabled={!canGoNext}
            title="Adutha Topic (Space / → / Enter)"
            className={`px-5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all ${
              canGoNext
                ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold active:scale-95 shadow-[0_0_16px_rgba(6,182,212,0.3)]'
                : 'bg-slate-950 text-slate-600 border border-slate-900 cursor-not-allowed'
            }`}
          >
            <span className="hidden sm:inline">Adutha Topic</span>
            <span className="sm:hidden">Aduthu</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

