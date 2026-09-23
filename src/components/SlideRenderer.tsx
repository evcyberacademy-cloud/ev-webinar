import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlideData } from '../types';
import { CoverSlide } from './slides/CoverSlide';
import { FounderSlide } from './slides/FounderSlide';
import { BankingArchSlide } from './slides/BankingArchSlide';
import { RamVsStorageSlide } from './slides/RamVsStorageSlide';
import { KernelSyscallSlide } from './slides/KernelSyscallSlide';
import { Day1CompleteSlide } from './slides/Day1CompleteSlide';
import { DayRecapSlide } from './slides/DayRecapSlide';
import { ClosingSlide } from './slides/ClosingSlide';
import { ConceptRevealSlide } from './slides/ConceptRevealSlide';
import { GenericSlide } from './slides/GenericSlide';

interface SlideRendererProps {
  slide: SlideData;
  currentIndex: number;
  currentStep: number;
  onStepForward: () => void;
  onNext: () => void;
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({
  slide,
  currentIndex,
  currentStep,
  onStepForward,
  onNext
}) => {
  const renderSlideContent = () => {
    // Exact specialized slides based on 60-slide curriculum
    if (slide.id === 1) {
      return <CoverSlide slide={slide} onNext={onNext} />;
    }
    if (slide.id === 3) {
      return <FounderSlide slide={slide} />;
    }
    if (slide.id === 9) {
      return <BankingArchSlide slide={slide} currentStep={currentStep} />;
    }
    if (slide.id === 34) {
      return <RamVsStorageSlide slide={slide} />;
    }
    if (slide.id === 44) {
      return <Day1CompleteSlide slide={slide} onNext={onNext} />;
    }
    if (slide.id === 45) {
      return <DayRecapSlide slide={slide} currentStep={currentStep} onStepForward={onStepForward} />;
    }
    if (slide.id === 55) {
      return <KernelSyscallSlide slide={slide} />;
    }
    if (slide.id === 60) {
      return <ClosingSlide slide={slide} />;
    }

    // Interactive pedagogical reveal slide type
    if (slide.type === 'concept-reveal') {
      return (
        <ConceptRevealSlide
          slide={slide}
          currentStep={currentStep}
          onStepForward={onStepForward}
        />
      );
    }

    // Default versatile archetype renderer
    return (
      <GenericSlide 
        slide={slide} 
        currentStep={currentStep} 
        onStepForward={onStepForward} 
      />
    );
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={`${slide.id}-${currentStep}`}
          initial={{ opacity: 0, y: 10, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.99 }}
          transition={{ duration: 0.28, ease: 'easeOut' }}
          className="w-full h-full flex items-center justify-center"
        >
          {renderSlideContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
