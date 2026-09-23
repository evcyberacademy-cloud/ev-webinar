import React from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  LayoutGrid, 
  FileText, 
  RotateCcw,
  Sparkles,
  Download,
  Award
} from 'lucide-react';
import { SlideData, DayNumber } from '../types';
import { LOGO_IMAGE_URL } from '../data/slides';

interface NavigationHeaderProps {
  currentSlide: SlideData;
  currentIndex: number;
  totalSlides: number;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenOverview: () => void;
  onToggleNotes: () => void;
  isNotesOpen: boolean;
  activeDay: DayNumber;
  onSelectDay: (day: DayNumber) => void;
  currentStep: number;
  totalSteps: number;
  onResetStep: () => void;
  completedCount?: number;
  isCurrentCompleted?: boolean;
}

export const NavigationHeader: React.FC<NavigationHeaderProps> = ({
  currentSlide,
  currentIndex,
  totalSlides,
  isFullscreen,
  onToggleFullscreen,
  onOpenOverview,
  onToggleNotes,
  isNotesOpen,
  activeDay,
  onSelectDay,
  currentStep,
  totalSteps,
  onResetStep,
  completedCount = 0,
  isCurrentCompleted = false
}) => {
  const handleDownloadCurriculum = () => {
    // Direct link to download /final.txt
    const link = document.createElement('a');
    link.href = '/final.txt';
    link.download = 'final.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const progressPercent = Math.round((completedCount / totalSlides) * 100);
  
  // 20-block ASCII / visual representation: ████████░░░░░░░░░░
  const totalBlocks = 20;
  const filledBlocks = Math.round((completedCount / totalSlides) * totalBlocks);
  const blockString = '█'.repeat(filledBlocks) + '░'.repeat(Math.max(0, totalBlocks - filledBlocks));

  return (
    <div className="z-30 shrink-0 select-none flex flex-col border-b border-slate-800/80 bg-[#0b0f17]/95 backdrop-blur-md">
      {/* Top Banner: Progress Bar and Day Indicator */}
      <div className="px-4 md:px-6 py-1.5 bg-slate-950/90 border-b border-slate-800/60 flex flex-wrap items-center justify-between text-xs gap-2">
        {/* Left: Day Indicator */}
        <div className="flex items-center gap-2">
          <span className={`px-2 py-0.5 rounded text-[10px] font-bold tracking-wider uppercase border ${
            currentSlide.day === 1
              ? 'bg-cyan-950/80 text-cyan-300 border-cyan-500/40'
              : 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40'
          }`}>
            {currentSlide.day === 1 ? 'DAY 1: SYSTEM-AH PURINJIKUVOM' : 'DAY 2: OS ULLA POGALAM'}
          </span>
          <span className="text-slate-500 hidden sm:inline">•</span>
          <span className="text-slate-400 text-[11px] hidden sm:inline">
            {currentSlide.day === 1 ? 'Topics 01–44' : 'Topics 45–60'}
          </span>
        </div>

        {/* Center: Explicit Progress Format: TOPIC 12 / 60 [✓] | ████████░░░░░░░░░░ | 20% COMPLETE */}
        <div className="flex items-center gap-2.5 font-mono text-[11px]">
          <span className={`font-bold flex items-center gap-1 ${isCurrentCompleted ? 'text-emerald-400' : 'text-cyan-400'}`}>
            <span>TOPIC {String(currentSlide.id).padStart(2, '0')} / {totalSlides}</span>
            {isCurrentCompleted && <span className="text-emerald-400 font-extrabold">✓</span>}
          </span>

          <span className="text-slate-600 hidden md:inline">|</span>

          {/* Block Progress Bar */}
          <span className="text-cyan-400/90 tracking-tighter text-xs hidden md:inline select-none">
            {blockString}
          </span>

          <span className="text-slate-600 hidden md:inline">|</span>

          {/* Percent Complete */}
          <span className="text-amber-400 font-bold">
            {progressPercent}% MUDINJIDHU
          </span>

          <span className="text-slate-600 hidden lg:inline">|</span>

          {/* Topics Completed Counter */}
          <span className="text-slate-300 hidden lg:inline font-sans">
            <strong className="text-emerald-400 font-mono">{completedCount}</strong> / {totalSlides} Topics Mudichachu
          </span>
        </div>

        {/* Right: Quick Overview Trigger */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenOverview}
            className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center gap-1 underline underline-offset-2"
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Ella 60 Topics-um Paarka</span>
          </button>
        </div>
      </div>

      {/* Main Header Navigation Bar */}
      <header className="h-14 px-4 md:px-6 flex items-center justify-between">
        {/* Brand Identity */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.2)] bg-slate-900 flex items-center justify-center shrink-0">
              <img 
                src={LOGO_IMAGE_URL} 
                alt="EV Cyber Academy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-wider text-xs md:text-sm text-white uppercase">
                  EV CYBER ACADEMY
                </span>
                <span className="hidden xl:inline-flex px-1.5 py-0.5 rounded text-[10px] font-semibold bg-cyan-950/80 text-cyan-400 border border-cyan-500/20">
                  LIVE WEBINAR
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium tracking-tight hidden sm:block">
                Building Cybersecurity Engineers
              </p>
            </div>
          </div>

          {/* Day Selector Pill */}
          <div className="hidden lg:flex items-center ml-2 p-1 rounded-lg bg-slate-900 border border-slate-800 text-xs">
            <button
              id="day-1-selector-btn"
              onClick={() => onSelectDay(1)}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                activeDay === 1
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Day 1: System (1–44)
            </button>
            <button
              id="day-2-selector-btn"
              onClick={() => onSelectDay(2)}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                activeDay === 2
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Day 2: OS Ulla (45–60)
            </button>
          </div>
        </div>

        {/* Center Topic indicator */}
        <div className="hidden md:flex flex-col items-center max-w-sm text-center">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-cyan-400/90 truncate max-w-[200px]">
              {currentSlide.sectionTitle}
            </span>
            {totalSteps > 1 && (
              <span className="text-[10px] px-1.5 py-0.2 bg-slate-800 text-slate-300 rounded border border-slate-700">
                Step {currentStep + 1}/{totalSteps}
              </span>
            )}
          </div>
          <span className="text-xs text-slate-200 truncate max-w-xs font-semibold">
            {currentSlide.title}
          </span>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-1.5 md:gap-2">
          {/* Reset step button if multi-step */}
          {totalSteps > 1 && currentStep > 0 && (
            <button
              id="reset-reveal-step-btn"
              onClick={onResetStep}
              title="Step-ah reset panna"
              className="p-1.5 sm:p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors text-xs flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">Reset</span>
            </button>
          )}

          {/* Download final.txt Button */}
          <button
            id="download-curriculum-file-btn"
            onClick={handleDownloadCurriculum}
            title="final.txt download pannunga (Moththam 60 Topics Curriculum)"
            className="p-1.5 sm:p-2 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-300 hover:text-cyan-200 border border-cyan-800/40 transition-all flex items-center gap-1.5 text-xs font-semibold shadow-sm"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">final.txt</span>
          </button>

          {/* Slide Overview Button */}
          <button
            id="open-overview-grid-btn"
            onClick={onOpenOverview}
            title="Ella Topics List ('O' / 'Esc' amukunga)"
            className="p-1.5 sm:p-2 px-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all flex items-center gap-1.5 text-xs font-medium"
          >
            <LayoutGrid className="w-4 h-4 text-cyan-400" />
            <span className="hidden sm:inline">Topics List</span>
          </button>

          {/* Presenter Notes Button */}
          <button
            id="toggle-speaker-notes-btn"
            onClick={onToggleNotes}
            title="Presenter Notes & Tips ('N' amukunga)"
            className={`p-1.5 sm:p-2 rounded-lg border transition-all flex items-center gap-1.5 text-xs font-medium ${
              isNotesOpen
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-800'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="hidden sm:inline">Notes</span>
          </button>

          {/* Fullscreen Button */}
          <button
            id="toggle-fullscreen-btn"
            onClick={onToggleFullscreen}
            title="Full Screen Mode ('F' amukunga)"
            className="p-1.5 sm:p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-slate-300" />
            ) : (
              <Maximize2 className="w-4 h-4 text-slate-300" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

