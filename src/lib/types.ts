export interface SectionImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface Outcome {
  title: string;
  description: string;
}

export interface ProblemSection {
  subtitle: string;
  context: string[];
  challenge: string;
  successCriteria: string[];
  image?: SectionImage;
}

export interface ResearchStep {
  id: string;
  title: string;
  items: string[];
}

export interface ResearchSection {
  subtitle: string;
  steps: ResearchStep[];
  image?: SectionImage;
}

export interface DefinitionSection {
  subtitle: string;
  context: string[];
  scope: string[];
  image:SectionImage;
  bottomImage?: SectionImage;
}

export interface CaseStudyProps {
  client: string;
  title: string;
  shortDescription: string;
  tags: string[];
  heroImage?: SectionImage;
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
  image?: SectionImage;
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
  image?: SectionImage;
}

export interface DetailedOutcome {
  title: string;
  description: string;
  image?: SectionImage;
}

export interface DetailedOutcomesSection {
  subtitle: string;
  business: DetailedOutcome;
  user: DetailedOutcome;
  team: DetailedOutcome;
  image?: SectionImage;
}

export interface LearningItem {
  title: string;
  description: string;
  image?: SectionImage;
}

export interface LearningsSection {
  subtitle: string;
  items: LearningItem[];
  image?: SectionImage;
}
