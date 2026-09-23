import React from 'react';
import { ShieldCheck, Mail, ArrowRight, Sparkles, Award } from 'lucide-react';
import { SlideData } from '../../types';
import { FOUNDER_IMAGE_URL, LOGO_IMAGE_URL } from '../../data/slides';

interface SlideProps {
  slide: SlideData;
}

export const ClosingSlide: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-4 sm:px-8 py-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        {/* Left Column: Founder Photo & Academy Emblem */}
        <div className="md:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 flex flex-col items-center text-center shadow-2xl shadow-cyan-950/20">
            {/* Academy Logo badge */}
            <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/40 shadow-lg mb-4 bg-slate-900">
              <img 
                src={LOGO_IMAGE_URL} 
                alt="EV Cyber Academy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Founder Portrait Circle */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-md mb-3">
              <img 
                src={FOUNDER_IMAGE_URL} 
                alt="Vimal" 
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="text-base font-extrabold text-white">
              Vimal
            </div>
            <div className="text-xs text-cyan-400 font-semibold mb-3">
              Founder & CEO — EV CYBER ACADEMY
            </div>

            <div className="w-full pt-3 border-t border-slate-800 flex items-center justify-center gap-2 text-[11px] text-slate-400">
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>evcyberacademy@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Right Column: Keynote Closing Message */}
        <div className="md:col-span-7 flex flex-col text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs font-bold tracking-wider mb-3 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
            <span className="text-base">🎉</span>
            <span>WEBINAR VETRIGARAMAAGA MUDINJIDHU ✓ (60 / 60 TOPICS MUDICHACHU)</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-2">
            EV CYBER ACADEMY
          </h1>

          <p className="text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-extrabold mb-4 uppercase tracking-wide">
            BUILDING CYBERSECURITY ENGINEERS
          </p>

          {/* Proven 4-Stage Pathway */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 mb-6">
            <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-2">
              Cybersecurity Engineer Aagura Vali
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-cyan-400 font-bold block">01. Basics</span>
                <span className="text-[10px] text-slate-400">Hardware & OS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-blue-400 font-bold block">02. Practical</span>
                <span className="text-[10px] text-slate-400">Hands-on Labs</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-indigo-400 font-bold block">03. Projects</span>
                <span className="text-[10px] text-slate-400">Real Scenarios</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block">04. Portfolio</span>
                <span className="text-[10px] text-slate-400">Career Ready</span>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <p className="text-sm text-slate-300 leading-relaxed mb-6">
            Indha 2-Day Cyber Security Webinar-la kalanthukitta ungal anaivarukkum manamaarndha nandri. Eppovum system epdi work aaguthu nu aazhama kellinga. Ungaloda purithal thaan ungaloda miga periya aayudham!
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span>Ungaloda Kelvigal Kekkalaam (Q&A Open)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
