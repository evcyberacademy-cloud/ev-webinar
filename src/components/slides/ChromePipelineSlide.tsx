import React, { useState } from 'react';
import { 
  MousePointer, 
  AppWindow, 
  Cpu, 
  Layers, 
  HardDrive, 
  Wifi, 
  CheckCircle2, 
  ArrowRight,
  Play,
  RotateCcw
} from 'lucide-react';
import { SlideData } from '../../types';

interface SlideProps {
  slide: SlideData;
  currentStep: number;
}

export const ChromePipelineSlide: React.FC<SlideProps> = ({ slide, currentStep }) => {
  const steps = [
    {
      id: 1,
      title: 'Mouse Click',
      icon: MousePointer,
      sub: 'Physical Hardware Signal',
      desc: 'Mouse click panna udaney electrical signal USB vali CPU-ku interrupt signal anuppum.'
    },
    {
      id: 2,
      title: 'App Input Received',
      icon: AppWindow,
      sub: 'Screen UI Manager',
      desc: 'Screen-la entha edathula click aachu nu paathu, Chrome icon-ah identify pannum.'
    },
    {
      id: 3,
      title: 'OS Handles Request',
      icon: Layers,
      sub: 'System Kernel',
      desc: 'OS permission check panni, Chrome-kaga pudhu process create panna start pannum.'
    },
    {
      id: 4,
      title: 'Storage Reads Binary',
      icon: HardDrive,
      sub: 'SSD Storage',
      desc: 'Storage-la thoongitu irukra Chrome code files & libraries-ah SSD read pannum.'
    },
    {
      id: 5,
      title: 'RAM Allocates Space',
      icon: Layers,
      sub: 'Working Memory',
      desc: 'Chrome run aaga RAM-la thevaiyaana memory space-ah OS allot pannum.'
    },
    {
      id: 6,
      title: 'CPU Executes Code',
      icon: Cpu,
      sub: 'CPU Cores',
      desc: 'CPU processor nanoseconds speed-la Chrome instructions-ah execute panna arambikkum.'
    },
    {
      id: 7,
      title: 'Network Connects',
      icon: Wifi,
      sub: 'Internet Interface',
      desc: 'Web page download panna website server kooda network handshake nadathum.'
    }
  ];

  // Active step is mapped from currentStep (0 to 6)
  const activeIndex = Math.min(currentStep, steps.length - 1);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-8 py-4">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold mb-2">
          <span>SYSTEM EXECUTION PROCESS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Oru Click. Unmaiyila Enna Nadakkudhu?
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl mx-auto">
          Google Chrome-ah double-click pannumpodhu 50 millisecond-la nadakkura chain reaction
        </p>
      </div>

      {/* Horizontal Pipeline Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 mb-6">
        {steps.map((s, index) => {
          const Icon = s.icon;
          const isPassed = index <= activeIndex;
          const isCurrent = index === activeIndex;

          return (
            <div
              key={s.id}
              id={`chrome-pipeline-step-${s.id}`}
              className={`p-3 rounded-xl border flex flex-col items-center text-center transition-all duration-300 relative ${
                isCurrent
                  ? 'bg-cyan-950/90 border-cyan-400 ring-2 ring-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] scale-[1.03]'
                  : isPassed
                  ? 'bg-slate-900 border-cyan-500/40 text-slate-200'
                  : 'bg-slate-950/60 border-slate-800 text-slate-500 opacity-60'
              }`}
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between w-full mb-2">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  #{s.id}
                </span>
                {isPassed && (
                  <CheckCircle2 className={`w-3.5 h-3.5 ${isCurrent ? 'text-cyan-400' : 'text-emerald-400'}`} />
                )}
              </div>

              {/* Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 ${
                isCurrent
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : isPassed
                  ? 'bg-slate-800 text-cyan-400'
                  : 'bg-slate-900 text-slate-600'
              }`}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="text-[11px] font-bold text-white line-clamp-1 mb-0.5">
                {s.title}
              </div>
              <div className="text-[9px] text-slate-400 line-clamp-1">
                {s.sub}
              </div>
            </div>
          );
        })}
      </div>

      {/* Current Step Spotlight Card */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 shrink-0">
            {React.createElement(steps[activeIndex].icon, { className: 'w-7 h-7' })}
          </div>
          <div>
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-1">
              Step {steps[activeIndex].id} of 7 • {steps[activeIndex].sub}
            </div>
            <h3 className="text-lg font-bold text-white mb-1">
              {steps[activeIndex].title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {steps[activeIndex].desc}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300">
            Pipeline: {activeIndex + 1}/7 Completed
          </span>
        </div>
      </div>
    </div>
  );
};
