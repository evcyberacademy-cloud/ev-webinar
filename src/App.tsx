import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './data/slides';
import { DayNumber } from './types';
import { NavigationHeader } from './components/NavigationHeader';
import { NavigationControls } from './components/NavigationControls';
import { SlideRenderer } from './components/SlideRenderer';
import { SlideOverviewModal } from './components/SlideOverviewModal';
import { PresenterNotesModal } from './components/PresenterNotesModal';
import { TopicQuestionModal } from './components/TopicQuestionModal';
import { WebinarCompleteModal } from './components/WebinarCompleteModal';

export default function App() {
  // Read initial slide index from URL hash if available
  const getInitialIndex = () => {
    try {
      const hash = window.location.hash.replace('#slide-', '');
      const parsed = parseInt(hash, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= SLIDES.length) {
        return parsed - 1;
      }
    } catch {
      // ignore
    }
    return 0;
  };

  // Persistent completed topics state from localStorage
  const getInitialCompleted = (): number[] => {
    try {
      const saved = localStorage.getItem('ev_cyber_completed_topics');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch {
      // fallback
    }
    return [];
  };

  const [currentIndex, setCurrentIndex] = useState<number>(getInitialIndex);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isQuestionModalOpen, setIsQuestionModalOpen] = useState<boolean>(false);
  const [isCelebrationOpen, setIsCelebrationOpen] = useState<boolean>(false);
  const [completedTopicIds, setCompletedTopicIds] = useState<number[]>(getInitialCompleted);
  const [lastCompletedTopicTitle, setLastCompletedTopicTitle] = useState<string>(() => {
    try {
      return localStorage.getItem('ev_cyber_last_topic_title') || '';
    } catch {
      return '';
    }
  });

  // Touch gesture support for mobile/tablet presentation
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const currentSlide = SLIDES[currentIndex];
  const totalSlides = SLIDES.length;
  const totalSteps = currentSlide.totalSteps || 1;

  // Sync hash in URL when slide changes
  useEffect(() => {
    window.location.hash = `slide-${currentIndex + 1}`;
  }, [currentIndex]);

  // Fullscreen event listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Complete a topic handler
  const handleCompleteTopic = useCallback((slideId: number) => {
    setCompletedTopicIds((prev) => {
      if (prev.includes(slideId)) return prev;
      const updated = [...prev, slideId];
      try {
        localStorage.setItem('ev_cyber_completed_topics', JSON.stringify(updated));
      } catch {
        // ignore
      }

      // Check if 60/60 completed
      if (updated.length === SLIDES.length) {
        setIsCelebrationOpen(true);
      }

      return updated;
    });

    const topicSlide = SLIDES.find((s) => s.id === slideId);
    if (topicSlide) {
      setLastCompletedTopicTitle(topicSlide.title);
      try {
        localStorage.setItem('ev_cyber_last_topic_title', topicSlide.title);
      } catch {
        // ignore
      }
    }
  }, []);

  // Reset Progress Handler
  const handleResetProgress = useCallback(() => {
    setCompletedTopicIds([]);
    setLastCompletedTopicTitle('');
    try {
      localStorage.removeItem('ev_cyber_completed_topics');
      localStorage.removeItem('ev_cyber_last_topic_title');
    } catch {
      // ignore
    }
  }, []);

  // Complete all 60 topics (Demo / Test tool for presenter verification)
  const handleCompleteAll = useCallback(() => {
    const allIds = SLIDES.map((s) => s.id);
    setCompletedTopicIds(allIds);
    setLastCompletedTopicTitle(SLIDES[SLIDES.length - 1].title);
    try {
      localStorage.setItem('ev_cyber_completed_topics', JSON.stringify(allIds));
      localStorage.setItem('ev_cyber_last_topic_title', SLIDES[SLIDES.length - 1].title);
    } catch {
      // ignore
    }
    setIsCelebrationOpen(true);
  }, []);

  // Step Forward or Next Slide (with Topic Question checkpoint)
  const handleNext = useCallback(() => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }

    // Check if the current topic has been completed
    const isCompleted = completedTopicIds.includes(currentSlide.id);

    // If on the final step and not completed, prompt with the 1-question check!
    if (!isCompleted && !isQuestionModalOpen) {
      setIsQuestionModalOpen(true);
      return;
    }

    // If already completed or user is moving past, advance to next slide
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCurrentStep(0);
      setIsQuestionModalOpen(false);
    }
  }, [currentStep, totalSteps, completedTopicIds, currentSlide.id, isQuestionModalOpen, currentIndex, totalSlides]);

  // Step Backward or Prev Slide
  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setCurrentStep(0);
      setIsQuestionModalOpen(false);
    }
  }, [currentIndex]);

  // Direct Jump
  const handleJumpToSlide = useCallback((index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
      setCurrentStep(0);
      setIsQuestionModalOpen(false);
    }
  }, [totalSlides]);

  // Jump to Day
  const handleSelectDay = useCallback((day: DayNumber) => {
    if (day === 1) {
      handleJumpToSlide(0);
    } else if (day === 2) {
      handleJumpToSlide(44); // Slide 45 is index 44 (Day 2 Opening Recap)
    }
  }, [handleJumpToSlide]);

  // Reset Step on current slide
  const handleResetStep = useCallback(() => {
    setCurrentStep(0);
  }, []);

  // Toggle Fullscreen
  const handleToggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid hotkeys when typing in search input inside modal
      if ((e.target as HTMLElement)?.tagName === 'INPUT') return;

      switch (e.code) {
        case 'ArrowRight':
        case 'Space':
        case 'PageDown':
          e.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
        case 'Backspace':
        case 'PageUp':
          e.preventDefault();
          handlePrev();
          break;
        case 'KeyF':
          e.preventDefault();
          handleToggleFullscreen();
          break;
        case 'KeyO':
          e.preventDefault();
          setIsOverviewOpen((prev) => !prev);
          break;
        case 'KeyN':
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;
        case 'KeyQ':
          e.preventDefault();
          setIsQuestionModalOpen((prev) => !prev);
          break;
        case 'Escape':
          if (isQuestionModalOpen) {
            setIsQuestionModalOpen(false);
          } else if (isOverviewOpen) {
            setIsOverviewOpen(false);
          }
          break;
        case 'Digit1':
          if (e.ctrlKey || e.altKey || !e.shiftKey) {
            handleSelectDay(1);
          }
          break;
        case 'Digit2':
          if (e.ctrlKey || e.altKey || !e.shiftKey) {
            handleSelectDay(2);
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, handleToggleFullscreen, isOverviewOpen, isQuestionModalOpen, handleSelectDay]);

  // Touch Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    // Minimum swipe threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swiped left -> Next
        handleNext();
      } else {
        // Swiped right -> Prev
        handlePrev();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div 
      className="w-screen h-screen bg-[#070b12] text-slate-100 flex flex-col justify-between overflow-hidden relative"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Navigation */}
      <NavigationHeader
        currentSlide={currentSlide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onToggleNotes={() => setIsNotesOpen((prev) => !prev)}
        isNotesOpen={isNotesOpen}
        activeDay={currentSlide.day}
        onSelectDay={handleSelectDay}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onResetStep={handleResetStep}
        completedCount={completedTopicIds.length}
        isCurrentCompleted={completedTopicIds.includes(currentSlide.id)}
      />

      {/* Main Slide Presentation Stage */}
      <main className="flex-1 w-full h-full relative overflow-hidden flex items-center justify-center p-2 sm:p-4 md:p-6">
        <SlideRenderer
          slide={currentSlide}
          currentIndex={currentIndex}
          currentStep={currentStep}
          onStepForward={handleNext}
          onNext={handleNext}
        />
      </main>

      {/* Bottom Floating Navigation Dock & Progress Bar */}
      <NavigationControls
        currentSlide={currentSlide}
        currentIndex={currentIndex}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
        onJumpToSlide={handleJumpToSlide}
        currentStep={currentStep}
        totalSteps={totalSteps}
        onStepForward={handleNext}
        canGoPrev={currentIndex > 0}
        canGoNext={currentIndex < totalSlides - 1 || currentStep < totalSteps - 1}
        completedTopicIds={completedTopicIds}
        lastCompletedTopicTitle={lastCompletedTopicTitle}
        onOpenQuestionModal={() => setIsQuestionModalOpen(true)}
      />

      {/* 1-Question Checkpoint Modal */}
      <TopicQuestionModal
        isOpen={isQuestionModalOpen}
        onClose={() => setIsQuestionModalOpen(false)}
        slide={currentSlide}
        onCompleteTopic={handleCompleteTopic}
        onNextSlide={() => {
          if (currentIndex < totalSlides - 1) {
            setCurrentIndex((prev) => prev + 1);
            setCurrentStep(0);
          }
        }}
        isCompleted={completedTopicIds.includes(currentSlide.id)}
        totalSlides={totalSlides}
      />

      {/* Slide Overview Grid Modal */}
      <SlideOverviewModal
        slides={SLIDES}
        currentIndex={currentIndex}
        isOpen={isOverviewOpen}
        onClose={() => setIsOverviewOpen(false)}
        onSelectSlide={handleJumpToSlide}
        completedTopicIds={completedTopicIds}
        onResetProgress={handleResetProgress}
        onCompleteAll={handleCompleteAll}
      />

      {/* Webinar 60/60 Complete Celebration Modal */}
      <WebinarCompleteModal
        isOpen={isCelebrationOpen}
        onClose={() => setIsCelebrationOpen(false)}
        onOpenOverview={() => setIsOverviewOpen(true)}
        onJumpToFinalSlide={() => handleJumpToSlide(totalSlides - 1)}
      />

      {/* Presenter Verbal Cues / Notes Drawer */}
      <PresenterNotesModal
        currentSlide={currentSlide}
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        onNext={handleNext}
      />
    </div>
  );
}

