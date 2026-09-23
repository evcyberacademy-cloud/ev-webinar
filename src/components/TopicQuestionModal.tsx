import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ArrowRight, 
  RotateCcw, 
  X, 
  Sparkles,
  Award
} from 'lucide-react';
import { SlideData } from '../types';

interface TopicQuestionModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideData;
  onCompleteTopic: (slideId: number) => void;
  onNextSlide: () => void;
  isCompleted: boolean;
  totalSlides: number;
}

export const TopicQuestionModal: React.FC<TopicQuestionModalProps> = ({
  isOpen,
  onClose,
  slide,
  onCompleteTopic,
  onNextSlide,
  isCompleted,
  totalSlides
}) => {
  const questionData = slide.topicQuestion;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset state when slide changes
  useEffect(() => {
    setSelectedOption(null);
    setIsAnswered(false);
  }, [slide.id]);

  if (!isOpen || !questionData) return null;

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    onCompleteTopic(slide.id);
  };

  const handleReset = () => {
    setSelectedOption(null);
    setIsAnswered(false);
  };

  const handleContinue = () => {
    onCompleteTopic(slide.id);
    onClose();
    onNextSlide();
  };

  const isCorrect = selectedOption === questionData.correctIndex;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
            <div className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <HelpCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 uppercase tracking-wider">
                    Topic {slide.id} / {totalSlides}
                  </span>
                  {isCompleted && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                      <Award className="w-3 h-3" /> Mudinjithu ✓
                    </span>
                  )}
                </div>
                <h3 className="text-base font-bold text-white mt-1">
                  {slide.title}
                </h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              title="Moodu (Esc)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Question Body */}
          <div className="p-6 overflow-y-auto space-y-6">
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50">
              <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Topic Purithal Checkpoint
              </div>
              <p className="text-lg font-medium text-slate-100 leading-relaxed">
                {questionData.question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {questionData.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectOption = idx === questionData.correctIndex;
                const optionLabel = String.fromCharCode(65 + idx);

                let optionStyles = 'border-slate-800 bg-slate-800/30 text-slate-200 hover:border-slate-600 hover:bg-slate-800/60';

                if (isAnswered) {
                  if (isCorrectOption) {
                    optionStyles = 'border-emerald-500/80 bg-emerald-950/40 text-emerald-200 shadow-sm shadow-emerald-500/10';
                  } else if (isSelected) {
                    optionStyles = 'border-red-500/80 bg-red-950/40 text-red-200';
                  } else {
                    optionStyles = 'border-slate-800/50 bg-slate-900/30 text-slate-500 opacity-50';
                  }
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-start space-x-3.5 ${optionStyles}`}
                  >
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                      isAnswered
                        ? isCorrectOption
                          ? 'bg-emerald-500 text-slate-950'
                          : isSelected
                            ? 'bg-red-500 text-white'
                            : 'bg-slate-800 text-slate-500'
                        : 'bg-slate-800 text-cyan-400 border border-slate-700'
                    }`}>
                      {optionLabel}
                    </span>
                    <span className="text-sm sm:text-base pt-0.5 leading-snug flex-1">
                      {option}
                    </span>
                    {isAnswered && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    )}
                    {isAnswered && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer Explanation */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-xl border ${
                  isCorrect 
                    ? 'bg-emerald-950/30 border-emerald-800/50 text-emerald-200' 
                    : 'bg-cyan-950/30 border-cyan-800/50 text-cyan-200'
                }`}
              >
                <div className="flex items-center gap-2 font-semibold text-sm mb-1">
                  {isCorrect ? (
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" /> Super nanba! Sariyaana Answer! Topic Mudinjithu.
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5 text-amber-400">
                      <HelpCircle className="w-4 h-4" /> Nalla try nanba! Idhoda sariyaana vilakkam:
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {questionData.explanation}
                </p>
              </motion.div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-2">
              {isAnswered && (
                <button
                  onClick={handleReset}
                  className="px-3.5 py-2 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Innoru Thadava Try Panna
                </button>
              )}
            </div>

            <div className="flex items-center space-x-3 ml-auto">
              {!isCompleted && (
                <button
                  id="modal-complete-topic-btn"
                  onClick={() => onCompleteTopic(slide.id)}
                  className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-950/40 transition-all active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Topic-ah Mudika ✓</span>
                </button>
              )}

              <button
                id="modal-next-topic-btn"
                onClick={handleContinue}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all flex items-center gap-2 active:scale-95"
              >
                <span>{slide.id === totalSlides ? 'Webinar-ah Mudika' : 'Adutha Topic'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
