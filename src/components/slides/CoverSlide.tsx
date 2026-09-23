import React from 'react';
import { Shield, Sparkles, Terminal, Award, ChevronRight } from 'lucide-react';
import { SlideData } from '../../types';
import { FOUNDER_IMAGE_URL, LOGO_IMAGE_URL } from '../../data/slides';

interface SlideProps {
  slide: SlideData;
  onNext?: () => void;
}

export const CoverSlide: React.FC<SlideProps> = ({ slide, onNext }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & Brand */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-6 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span className="tracking-wide uppercase">EV CYBER ACADEMY</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            <span className="text-slate-300 font-normal">Day 1 & Day 2</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
            2-DAY CYBER SECURITY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              WEBINAR
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 font-medium leading-snug mb-8 max-w-xl">
            {slide.subtitle}
          </p>

          {/* Core Philosophy Banner */}
          <div className="w-full p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm mb-8 flex items-center justify-between">
            <div>
              <span className="text-[11px] font-semibold tracking-wider text-cyan-400 uppercase block mb-0.5">
                Academy-oda Lakshiyam
              </span>
              <span className="text-sm font-bold text-white tracking-wide">
                “Building Cybersecurity Engineers”
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 border-l border-slate-800 pl-4">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Systems • Architecture • Defense</span>
            </div>
          </div>

          {/* Founder Signature Bar */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-md">
              <img 
                src={FOUNDER_IMAGE_URL} 
                alt="Vimal - Founder & CEO" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <div className="text-base font-bold text-white tracking-wide">
                Vimal
              </div>
              <div className="text-xs text-slate-400 font-medium">
                Founder & CEO — EV CYBER ACADEMY
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Keynote Visual Framing */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-[#070b12] border border-slate-800/80 p-6 flex flex-col items-center justify-center text-center shadow-2xl shadow-cyan-950/20 overflow-hidden">
            {/* Background geometric accents (clean, not slop) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

            {/* EV Cyber Academy Emblem */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-[0_0_30px_rgba(6,182,212,0.25)] mb-6 bg-slate-900">
              <img 
                src={LOGO_IMAGE_URL} 
                alt="EV Cyber Academy Official Logo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
              EV CYBER ACADEMY
            </span>

            <h3 className="text-xl font-extrabold text-white mb-2">
              Systems-First Keynote
            </h3>

            <p className="text-xs text-slate-400 max-w-xs leading-relaxed mb-6">
              Computer architecture, memory, process mechanics, matrum kernel security-ah zero-la irundhu kathupom.
            </p>

            {onNext && (
              <button
                id="begin-webinar-btn"
                onClick={onNext}
                className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] active:scale-95"
              >
                <span>Webinar Thodangalaam</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
