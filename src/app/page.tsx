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

// Importamos nuestra data "limpia" como servicio
import { projectData } from '@/data/projectData';

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="flex flex-col gap-10">
        <CaseStudyHeader
          client={projectData.client}
          title={projectData.title}
          shortDescription={projectData.shortDescription}
          tags={projectData.tags}
          image={projectData.heroImage}
        />

        <ProjectMetadata
          metadata={projectData.metadata}
          introduction={projectData.introduction}
        />

        <ProjectOutcomes outcomes={projectData.outcomes} />

        <hr className="my-4 border-gray-200" />

        <ProjectProblem data={projectData.problem} />
        <ProjectResearch data={projectData.research} />
        <ProjectDefinition data={projectData.definition} />
        <ProjectIterative data={projectData.iterativeProcess} />
        <ProjectDelivery data={projectData.delivery} />
        <ProjectDetailedOutcomes data={projectData.detailedOutcomes} />
        <ProjectLearnings data={projectData.learnings} />
      </article>
    </main>
  );
}
