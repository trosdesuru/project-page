import CaseStudyHeader from '@/components/CaseStudyHeader';
import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectOutcomes from '@/components/ProjectOutcomes';
import ProjectProblem from '@/components/ProjectProblem';
import ProjectResearch from '@/components/ProjectResearch';
import ProjectDefinition from '@/components/ProjectDefinition';
import ProjectIterative from '@/components/ProjectIterative';
import ProjectDelivery from '@/components/ProjectDelivery';
import ProjectDetailedOutcomes from '@/components/ProjectDetailedOutcomes';
import ProjectLearnings from '@/components/ProjectLearnings';
import FadeIn from '@/components/FadeIn';

import { projectData } from '@/data/projectData';
import ProjectCTA from '@/components/projectCTA';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
      <article className="flex flex-col gap-10">
        <FadeIn>
          <CaseStudyHeader
            client={projectData.client}
            title={projectData.title}
            shortDescription={projectData.shortDescription}
            tags={projectData.tags}
            image={projectData.heroImage}
          />
        </FadeIn>

        <FadeIn delay={0.5}>
          <ProjectMetadata
            metadata={projectData.metadata}
            introduction={projectData.introduction}
          />
        </FadeIn>

        <FadeIn delay={0.6}>
          <ProjectOutcomes outcomes={projectData.outcomes} />
        </FadeIn>

        <FadeIn>
          <hr className="my-4 border-gray-200" />
        </FadeIn>

        <FadeIn>
          <ProjectProblem data={projectData.problem} />
        </FadeIn>

        <FadeIn>
          <ProjectResearch data={projectData.research} />
        </FadeIn>

        <FadeIn>
          <ProjectDefinition data={projectData.definition} />
        </FadeIn>

        <FadeIn>
          <ProjectIterative data={projectData.iterativeProcess} />
        </FadeIn>

        <FadeIn>
          <ProjectDelivery data={projectData.delivery} />
        </FadeIn>

        <FadeIn>
          <ProjectDetailedOutcomes data={projectData.detailedOutcomes} />
        </FadeIn>

        <FadeIn>
          <ProjectLearnings data={projectData.learnings} />
        </FadeIn>

        <FadeIn>
          <ProjectCTA />
        </FadeIn>
      </article>
    </main>
  );
}
