import { TopicQuestion } from './data/topicQuestions';

export type DayNumber = 1 | 2;

export type SectionId = 
  | 'opening'
  | 'intro-mental-models'
  | 'cybersecurity'
  | 'ethical-hacking'
  | 'fundamentals'
  | 'architecture'
  | 'program-process'
  | 'day1-closing'
  | 'day2-recap'
  | 'os-core'
  | 'os-internals'
  | 'kernel-syscalls'
  | 'cyber-mechanics'
  | 'mindset-closing';

export interface SlideData {
  id: number;
  day: DayNumber;
  section: SectionId;
  sectionTitle: string;
  title: string;
  subtitle?: string;
  type: 
    | 'cover'
    | 'founder'
    | 'message'
    | 'cards'
    | 'contrast'
    | 'flow'
    | 'architecture'
    | 'interactive-pipeline'
    | 'comparison'
    | 'concept-reveal'
    | 'quote'
    | 'quiz-recap'
    | 'closing'
    | 'ram-storage'
    | 'day1-recap'
    | 'kernel-syscall';
  content: any;
  presenterNotes?: string[];
  totalSteps?: number; // For progressive reveal
  topicQuestion?: TopicQuestion;
}
