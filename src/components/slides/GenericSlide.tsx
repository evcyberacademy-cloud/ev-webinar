import React from 'react';
import { 
  Shield, 
  Server, 
  Network, 
  Code, 
  Database, 
  User, 
  Cloud, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  HelpCircle,
  Sparkles,
  Zap,
  Terminal,
  FileCode,
  Layers,
  Activity,
  Lock,
  DoorOpen
} from 'lucide-react';
import { SlideData } from '../../types';
import { SlideTopologyDiagram } from '../visuals/SlideTopologyDiagram';

interface GenericSlideProps {
  slide: SlideData;
  currentStep: number;
  onStepForward?: () => void;
}

export const GenericSlide: React.FC<GenericSlideProps> = ({ 
  slide, 
  currentStep, 
  onStepForward 
}) => {
  const { type, content, title, subtitle } = slide;

  // Helper to map icon names
  const renderIcon = (name?: string) => {
    switch (name) {
      case 'server': return <Server className="w-5 h-5 text-cyan-400" />;
      case 'network': return <Network className="w-5 h-5 text-blue-400" />;
      case 'code': return <Code className="w-5 h-5 text-indigo-400" />;
      case 'database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'user': return <User className="w-5 h-5 text-sky-400" />;
      case 'cloud': return <Cloud className="w-5 h-5 text-purple-400" />;
      case 'cpu': return <Cpu className="w-5 h-5 text-cyan-400" />;
      default: return <Shield className="w-5 h-5 text-cyan-400" />;
    }
  };

  // Determine if this slide should feature a prominent topology diagram
  const shouldShowTopology = [
    2, 4, 5, 6, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 46, 47, 48, 49, 50, 51, 52, 53, 54, 56, 57, 58, 59, 60
  ].includes(slide.id);

  return (
    <div className="w-full h-full flex flex-col justify-center max-w-5xl mx-auto px-3 sm:px-6 py-3">
      {/* Header Banner (Clean, Zero-Pill Typography) */}
      <div className="text-center mb-3 shrink-0">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-cyan-400 text-[11px] font-mono font-semibold mb-1">
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

      {/* Main Visual Stage: Animated Topology as Anchor if relevant */}
      {shouldShowTopology && (
        <div className="mb-3 shrink-0">
          <SlideTopologyDiagram 
            slideId={slide.id} 
            currentStep={currentStep} 
            onStepForward={onStepForward}
            compact={type === 'cards' || type === 'flow'}
          />
        </div>
      )}

      {/* Slide Body based on Type (Concise, low-text-noise) */}
      <div className="shrink-0 space-y-2.5">
        {/* ================= CARDS ARCHETYPE ================= */}
        {type === 'cards' && (
          <div className="w-full">
            {/* 6 Pillars / Assets (Clean single-line cards) */}
            {content.pillars && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {content.pillars.map((item: any, i: number) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      {renderIcon(item.name.toLowerCase())}
                    </div>
                    <div className="min-w-0">
                      <span className="font-bold text-white text-xs block leading-tight">{item.name}</span>
                      <span className="text-[11px] text-slate-400 truncate block mt-0.5">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Assets Grid */}
            {content.assets && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
                {content.assets.map((item: any, i: number) => (
                  <div key={i} className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-white">{item.title}</span>
                      <span className="text-[9px] font-mono text-cyan-400 bg-slate-950 px-1.5 py-0.2 rounded border border-slate-800">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 truncate">{item.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Roles Grid */}
            {content.roles && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {content.roles.map((role: any, i: number) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all">
                    <span className="text-[9px] font-mono text-cyan-300 font-bold block mb-0.5">
                      {role.focus}
                    </span>
                    <h4 className="text-xs font-bold text-white">{role.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">{role.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Days Roadmap (Slide 5) */}
            {content.days && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {content.days.map((day: any, i: number) => (
                  <div 
                    key={i} 
                    className={`p-3.5 rounded-xl border ${
                      day.color === 'blue' 
                        ? 'bg-blue-950/20 border-blue-500/40 shadow-sm' 
                        : 'bg-emerald-950/20 border-emerald-500/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-white">
                        {day.dayNumber}: {day.theme}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        day.color === 'blue' ? 'bg-blue-950 text-blue-300' : 'bg-emerald-950 text-emerald-300'
                      }`}>
                        {day.status}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 gap-1 text-[11px] text-slate-300">
                      {day.topics.slice(0, 4).map((t: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-1.5 truncate">
                          <CheckCircle2 className={`w-3 h-3 shrink-0 ${day.color === 'blue' ? 'text-blue-400' : 'text-emerald-400'}`} />
                          <span className="truncate">{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ================= CONTRAST ARCHETYPE ================= */}
        {type === 'contrast' && (
          <div className="w-full">
            {content.left && content.right && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {/* Left Side */}
                <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold text-white">{content.left.title}</h3>
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold bg-red-950 text-red-300 border border-red-500/30">
                      {content.left.badge}
                    </span>
                  </div>
                  {content.left.items && (
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {content.left.items.slice(0, 3).map((it: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-red-400 font-bold shrink-0">✕</span>
                          <span className="text-[11px] leading-tight">{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Right Side */}
                <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/40 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-bold text-white">{content.right.title}</h3>
                    <span className="text-[9px] px-1.5 py-0.5 rounded font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                      {content.right.badge}
                    </span>
                  </div>
                  {content.right.items && (
                    <ul className="space-y-1.5 text-xs text-slate-200">
                      {content.right.items.slice(0, 3).map((it: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span className="text-[11px] font-medium leading-tight">{it}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= FLOW ARCHETYPE ================= */}
        {type === 'flow' && (
          <div className="w-full">
            {/* Steps grid horizontal */}
            {content.flowSteps && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                {content.flowSteps.map((s: any, i: number) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-center flex flex-col items-center">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 mb-1">
                      {s.step}
                    </span>
                    <h4 className="text-xs font-bold text-white mb-0.5">{s.title}</h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2">{s.desc}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Statement banner */}
            {content.statement && (
              <div className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-center">
                <span className="text-xs sm:text-sm font-bold text-cyan-300">
                  {content.statement}
                </span>
              </div>
            )}
          </div>
        )}

        {/* ================= QUOTE ARCHETYPE ================= */}
        {type === 'quote' && (
          <div className="w-full p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 text-center shadow-xl">
            <span className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-cyan-400 block leading-snug">
              "{content.headline}"
            </span>
            {content.secondaryStatement && (
              <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-xl mx-auto">
                {content.secondaryStatement}
              </p>
            )}
            {content.reflection && (
              <div className="mt-3 pt-2.5 border-t border-slate-800 text-[11px] text-cyan-300 font-mono">
                ⚡ {content.reflection}
              </div>
            )}
          </div>
        )}

        {/* ================= COMPARISON ARCHETYPE ================= */}
        {type === 'comparison' && content.roles && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.roles.map((r: any, i: number) => (
              <div key={i} className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-xs font-bold text-cyan-400 mb-1">{r.role}</div>
                <p className="text-xs text-slate-300 leading-relaxed">{r.text || r.desc}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stepper Footer Indicator */}
      {slide.totalSteps && slide.totalSteps > 1 && (
        <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2.5 pt-2 border-t border-slate-800/60 px-1">
          <span>Step {currentStep + 1} / {slide.totalSteps}</span>
          {currentStep < slide.totalSteps - 1 && onStepForward && (
            <button
              onClick={onStepForward}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Adutha Step <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};
