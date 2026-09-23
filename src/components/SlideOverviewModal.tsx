import React, { useState } from 'react';
import { X, Search, CheckCircle2, ChevronRight, Layers, Award, Circle } from 'lucide-react';
import { SlideData, DayNumber } from '../types';

interface SlideOverviewModalProps {
  slides: SlideData[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectSlide: (index: number) => void;
  completedTopicIds: number[];
  onResetProgress?: () => void;
  onCompleteAll?: () => void;
}

export const SlideOverviewModal: React.FC<SlideOverviewModalProps> = ({
  slides,
  currentIndex,
  isOpen,
  onClose,
  onSelectSlide,
  completedTopicIds = [],
  onResetProgress,
  onCompleteAll
}) => {
  const [filterMode, setFilterMode] = useState<'all' | 'completed' | 'pending' | 'day1' | 'day2'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const completedCount = completedTopicIds.length;
  const totalCount = slides.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const filteredSlides = slides.filter((slide) => {
    const isCompleted = completedTopicIds.includes(slide.id);
    
    let matchesFilter = true;
    if (filterMode === 'completed') matchesFilter = isCompleted;
    else if (filterMode === 'pending') matchesFilter = !isCompleted;
    else if (filterMode === 'day1') matchesFilter = slide.day === 1;
    else if (filterMode === 'day2') matchesFilter = slide.day === 2;

    const matchesSearch = 
      slide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slide.sectionTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      String(slide.id).includes(searchQuery);

    return matchesFilter && matchesSearch;
  });

  const day1Slides = filteredSlides.filter((s) => s.day === 1);
  const day2Slides = filteredSlides.filter((s) => s.day === 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-6 select-none animate-in fade-in duration-200">
      <div 
        className="w-full max-w-5xl max-h-[92vh] bg-[#0d121d] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-4 bg-[#090d15]">
          <div>
            <div className="flex items-center gap-3">
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-cyan-400" />
                Webinar Overview (Moththam 60 Topics)
              </h2>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-emerald-400" />
                {completedCount} / {totalCount} Mudichachu ({progressPercent}%)
              </span>
            </div>
            
            {/* Symbol Legend */}
            <div className="flex items-center gap-4 text-xs font-mono mt-1.5 text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="font-extrabold text-sm">✓</span> Mudinjithu
              </span>
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="font-extrabold text-sm">●</span> Ippo Paarkura Topic
              </span>
              <span className="flex items-center gap-1.5 text-slate-400">
                <span className="font-extrabold text-sm">○</span> Innum Mudiyala
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Mode Toggle */}
            <div className="hidden sm:flex items-center p-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium">
              <button
                onClick={() => setViewMode('list')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  viewMode === 'list' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                List View
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-2.5 py-1 rounded-md transition-all ${
                  viewMode === 'grid' ? 'bg-cyan-500/20 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                Cards View
              </button>
            </div>

            <button
              id="close-overview-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="px-4 sm:px-6 py-2.5 border-b border-slate-800/80 bg-slate-950/40 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterMode === 'all'
                  ? 'bg-slate-800 text-white border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Ellam (60)
            </button>
            <button
              onClick={() => setFilterMode('completed')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterMode === 'completed'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/50 shadow-sm'
                  : 'text-emerald-500/80 hover:text-emerald-300'
              }`}
            >
              ✓ Mudinjithu ({completedCount})
            </button>
            <button
              onClick={() => setFilterMode('pending')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterMode === 'pending'
                  ? 'bg-slate-800 text-slate-200 border border-slate-700'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ○ Innum Mudiyala ({totalCount - completedCount})
            </button>
            <button
              onClick={() => setFilterMode('day1')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterMode === 'day1'
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              DAY 1 (01–44)
            </button>
            <button
              onClick={() => setFilterMode('day2')}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                filterMode === 'day2'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              DAY 2 (45–60)
            </button>
          </div>

          <div className="relative w-full sm:w-56">
            <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Topic-ah thedunga..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Content Body: List View (Structured by Day 1 & Day 2) OR Grid View */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {viewMode === 'list' ? (
            <div className="space-y-6">
              {/* Day 1 Section */}
              {day1Slides.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-cyan-900/40">
                    <h3 className="text-xs sm:text-sm font-extrabold text-cyan-400 tracking-wider uppercase font-mono flex items-center gap-2">
                      <span>DAY 1: SYSTEM-AH PURINJIKUVOM</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/40">
                        Topics 01–44
                      </span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {day1Slides.map((slide) => {
                      const actualIndex = slide.id - 1;
                      const isCurrent = actualIndex === currentIndex;
                      const isCompleted = completedTopicIds.includes(slide.id);

                      // Determine symbol: ✓ = Completed, ● = Current, ○ = Not completed
                      let symbol = '○';
                      let symbolColor = 'text-slate-500';
                      if (isCompleted) {
                        symbol = '✓';
                        symbolColor = 'text-emerald-400';
                      } else if (isCurrent) {
                        symbol = '●';
                        symbolColor = 'text-cyan-400';
                      }

                      return (
                        <div
                          key={slide.id}
                          id={`overview-topic-item-${slide.id}`}
                          onClick={() => {
                            onSelectSlide(actualIndex);
                            onClose();
                          }}
                          className={`flex items-center justify-between p-2.5 px-3 rounded-xl border text-left cursor-pointer transition-all ${
                            isCurrent
                              ? 'bg-cyan-950/50 border-cyan-500/80 shadow-[0_0_12px_rgba(6,182,212,0.2)] text-cyan-200'
                              : isCompleted
                                ? 'bg-slate-900/70 border-emerald-500/30 hover:border-emerald-400/60 text-slate-200'
                                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <span className={`font-mono font-bold text-sm w-4 shrink-0 text-center ${symbolColor}`}>
                              {symbol}
                            </span>
                            <span className="font-mono text-xs text-slate-400 w-7 shrink-0">
                              {String(slide.id).padStart(2, '0')}
                            </span>
                            <span className="text-slate-600">—</span>
                            <span className={`text-xs truncate ${isCurrent ? 'font-bold text-white' : 'font-medium'}`}>
                              {slide.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            {isCurrent && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono font-semibold">
                                Ippo
                              </span>
                            )}
                            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Day 2 Section */}
              {day2Slides.length > 0 && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-emerald-900/40">
                    <h3 className="text-xs sm:text-sm font-extrabold text-emerald-400 tracking-wider uppercase font-mono flex items-center gap-2">
                      <span>DAY 2: OPERATING SYSTEM ULLA POGALAM</span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800/40">
                        Topics 45–60
                      </span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {day2Slides.map((slide) => {
                      const actualIndex = slide.id - 1;
                      const isCurrent = actualIndex === currentIndex;
                      const isCompleted = completedTopicIds.includes(slide.id);

                      let symbol = '○';
                      let symbolColor = 'text-slate-500';
                      if (isCompleted) {
                        symbol = '✓';
                        symbolColor = 'text-emerald-400';
                      } else if (isCurrent) {
                        symbol = '●';
                        symbolColor = 'text-cyan-400';
                      }

                      return (
                        <div
                          key={slide.id}
                          id={`overview-topic-item-${slide.id}`}
                          onClick={() => {
                            onSelectSlide(actualIndex);
                            onClose();
                          }}
                          className={`flex items-center justify-between p-2.5 px-3 rounded-xl border text-left cursor-pointer transition-all ${
                            isCurrent
                              ? 'bg-cyan-950/50 border-cyan-500/80 shadow-[0_0_12px_rgba(6,182,212,0.2)] text-cyan-200'
                              : isCompleted
                                ? 'bg-slate-900/70 border-emerald-500/30 hover:border-emerald-400/60 text-slate-200'
                                : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <span className={`font-mono font-bold text-sm w-4 shrink-0 text-center ${symbolColor}`}>
                              {symbol}
                            </span>
                            <span className="font-mono text-xs text-slate-400 w-7 shrink-0">
                              {String(slide.id).padStart(2, '0')}
                            </span>
                            <span className="text-slate-600">—</span>
                            <span className={`text-xs truncate ${isCurrent ? 'font-bold text-white' : 'font-medium'}`}>
                              {slide.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            {isCurrent && (
                              <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 font-mono font-semibold">
                                Ippo
                              </span>
                            )}
                            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Cards Grid View */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
              {filteredSlides.map((slide) => {
                const actualIndex = slide.id - 1;
                const isCurrent = actualIndex === currentIndex;
                const isCompleted = completedTopicIds.includes(slide.id);

                return (
                  <div
                    key={slide.id}
                    id={`overview-slide-card-${slide.id}`}
                    onClick={() => {
                      onSelectSlide(actualIndex);
                      onClose();
                    }}
                    className={`group relative p-3.5 rounded-xl border text-left cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-cyan-950/40 border-cyan-500/80 shadow-[0_0_15px_rgba(6,182,212,0.25)] ring-1 ring-cyan-400'
                        : isCompleted
                          ? 'bg-slate-900/80 border-emerald-500/30 hover:border-emerald-400/60'
                          : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded font-bold bg-slate-800/90 text-slate-300">
                          #{String(slide.id).padStart(2, '0')}
                        </span>
                        
                        <div className="flex items-center gap-1.5">
                          {isCompleted ? (
                            <span className="text-[10px] px-1.5 py-0.5 rounded font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" /> Done
                            </span>
                          ) : (
                            <span className="text-[10px] px-1.5 py-0.5 rounded font-medium bg-slate-800 text-slate-500 flex items-center gap-1">
                              <Circle className="w-2.5 h-2.5" /> Pending
                            </span>
                          )}

                          <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                            slide.day === 1 
                              ? 'bg-cyan-950 text-cyan-400 border border-cyan-800/40' 
                              : 'bg-emerald-950 text-emerald-400 border border-emerald-800/40'
                          }`}>
                            D{slide.day}
                          </span>
                        </div>
                      </div>

                      <p className="text-[10px] text-cyan-400/90 uppercase tracking-wider font-semibold mb-1 truncate">
                        {slide.sectionTitle}
                      </p>
                      <h4 className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                        {slide.title}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span className="capitalize text-[10px] text-slate-500">{slide.type}</span>
                      {isCurrent ? (
                        <span className="flex items-center gap-1 text-cyan-400 text-[10px] font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Ippo
                        </span>
                      ) : (
                        <span className="text-slate-500 group-hover:text-slate-300 transition-colors flex items-center">
                          Poga <ChevronRight className="w-3 h-3 ml-0.5" />
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 px-6 border-t border-slate-800 bg-[#090d15] flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
          <div className="flex items-center gap-2">
            <span>Thirumba vara <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">Esc</kbd> / <kbd className="px-1.5 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">O</kbd> amukunga</span>
          </div>

          <div className="flex items-center gap-3">
            {onResetProgress && completedCount > 0 && (
              <button
                onClick={onResetProgress}
                className="text-[11px] text-red-400 hover:text-red-300 hover:underline"
              >
                Progress Reset Panna
              </button>
            )}

            {onCompleteAll && completedCount < totalCount && (
              <button
                onClick={onCompleteAll}
                className="text-[11px] text-cyan-400 hover:text-cyan-300 hover:underline"
              >
                Demo: Ellam 60-um Mudika
              </button>
            )}

            <span className="text-emerald-400 font-semibold">
              {completedCount} / {totalCount} topics kathukittom
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
