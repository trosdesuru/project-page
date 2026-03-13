export interface Outcome {
  title: string;
  description: string;
}

export interface ProblemSection {
  subtitle: string;
  context: string[];
  challenge: string;
  successCriteria: string[];
}

export interface ResearchStep {
  id: string;
  title: string;
  items: string[];
}

export interface ResearchSection {
  subtitle: string;
  steps: ResearchStep[];
}

export interface DefinitionSection {
  subtitle: string;
  context: string[];
  scope: string[];
}

export interface CaseStudyProps {
  client: string;
  title: string;
  shortDescription: string;
  tags: string[];
  metadata: {
    role: string;
    timeline: string;
    platform: string;
    team: string;
    users: string;
    constraints: string;
  };
  introduction: string;
  outcomes: {
    business: Outcome;
    users: Outcome;
    team: Outcome;
  };

  problem: ProblemSection;
  research: ResearchSection;
  definition: DefinitionSection;
  iterativeProcess: IterativeProcessSection;
  delivery: DeliverySection;
  detailedOutcomes: DetailedOutcomesSection;
  learnings: LearningsSection;
}

export interface IterativeProcessSection {
  subtitle: string;
  highFidelity: string[];
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  testing: string[];
}

export interface DeliverySection {
  subtitle: string;
  delivered: string[];
  improvements: string[];
}

export interface DetailedOutcome {
  title: string;
  description: string;
}

export interface DetailedOutcomesSection {
  subtitle: string;
  business: DetailedOutcome;
  user: DetailedOutcome;
  team: DetailedOutcome;
}

export interface LearningItem {
  title: string;
  description: string;
}

export interface LearningsSection {
  subtitle: string;
  items: LearningItem[];
}