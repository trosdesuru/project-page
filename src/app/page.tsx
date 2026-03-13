import ProjectMetadata from '@/components/ProjectMetadata';
import ProjectOutcomes from '@/components/ProjectOutcomes';
import ProjectProblem from '@/components/ProjectProblem';
import ProjectResearch from '@/components/ProjectResearch';
import ProjectDefinition from '@/components/ProjectDefinition';
import { CaseStudyProps } from '@/lib/types';
import CaseStudyHeader from '@/components/CaseStudyHeader';
import ProjectIterative from '@/components/ProjectIterative';
import ProjectDelivery from '@/components/ProjectDelivery';
import ProjectDetailedOutcomes from '@/components/ProjectDetailedOutcomes';
import ProjectLearnings from '@/components/ProjectLearnings';

export default function Home() {
  const projectData: CaseStudyProps = {
    // ... [Mantén los datos anteriores de client, title, tags, metadata, intro y outcomes]
    client: 'King',
    title: 'Designing an MVP to enable strategic business partnerships',
    shortDescription:
      'A new in-game rewards configuration tool for Live Marketing teams, supporting large-scale brand partnerships like KitKat.',
    tags: ['MVP Definition', 'Internal tool', 'B2B', 'Product strategy'],
    metadata: {
      role: 'UX / Product designer (end-to-end)',
      timeline: '3 months - 2023',
      platform: 'Web app, internal tools platform (UP)',
      team: 'PM, EM, FE Dev, BE Devs, QA',
      users: 'Live Marketing Operators',
      constraints:
        'Legacy decommission, UP dependencies, SQL segmentation, QR requirement',
    },
    introduction:
      'King is the gaming company behind the mobile game Candy Crush...',
    outcomes: {
      business: {
        title: 'Strategic business partnership delivered',
        description:
          'KitKat campaign enabled and delivered to millions of customers',
      },
      users: {
        title: '+20% user satisfaction increase',
        description: 'based on CSAT post-release survey',
      },
      team: {
        title: 'Stronger cross-functional alignment',
        description:
          'co-design + feedback loops increased ownership and efficiency',
      },
    },
    // NUEVA DATA:
    problem: {
      subtitle: 'When legacy tooling limits business ambition',
      context: [
        'The Live Marketing Operations teams relied on an outdated internal tool to configure in-game rewards. The tool was going to be decommissioned due to legacy code...',
        "At the same time, King was pursuing a business partnership with KitKat. UP's improved tech capabilities could allow the generation of multiple custom links/QR codes...",
      ],
      challenge:
        'Design and define an MVP for a new tool (UP Reward Hub) in 3 months, so engineering could build it in time to support the partnership.',
      successCriteria: [
        'Month 1 milestone: Validate product requirements through user research → unlock engineering estimation of the MVP.',
        'Month 3 milestone: MVP defined and ready for development to deliver a functional tool in time for the partnership case.',
      ],
    },
    research: {
      subtitle: 'Grounding product decisions in operational reality',
      steps: [
        {
          id: '00',
          title: 'Research goals',
          items: [
            'Understand user flow and context; recognise pain points and friction in reward campaign creation workflows',
            'Validate product requirements through actual user needs',
          ],
        },
        {
          id: '01',
          title: 'Heuristic review & UP platform analysis',
          items: [
            'Audited rewards creation in the legacy tool to identify friction, finding unclear hierarchy and non-relevant inputs',
          ],
        },
      ],
    },
    definition: {
      subtitle: 'Making deliberate MVP trade-offs, together',
      context: [
        'I proposed a collaborative and participative approach to maximise efficiency through co-design sessions. Understanding UX as a team sport, I encouraged developers and product manager to contribute ideas and thoughts.',
      ],
      scope: [
        'Simplified reward creation flows, edit capabilities, and overview',
        'Clear error handling (setting up safety nets)',
        'Alignment with UP design language and consistent patterns',
      ],
    },
    iterativeProcess: {
      subtitle: 'Reducing risk through continuous validation',
      highFidelity: [
        'Once we aligned on the core MVP structure, I moved into high-fidelity design and prototyping.',
        'Applied a clear separation between configuration and overview through a wizard model, best suited to our users mental model.',
        'Used the UP design system to ensure consistency and standardisation.',
      ],
      image: {
        src: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2000&auto=format&fit=crop', // Reemplaza con tu imagen local ej: '/images/mi-proyecto.png'
        alt: 'Itemisation page: from Legacy through Definition to High Fidelity',
        caption:
          'Itemisation page: from Legacy through Definition to High Fidelity',
      },
      testing: [
        'I ran weekly user testing sessions with marketing operators, iterating quickly between rounds.',
        'I also reached out to three designers working within UP tools and ran design critique sessions to ensure Reward Hub complied with platform standards.',
        'After three rounds of testing, I ended with a polished and validated MVP version.',
      ],
    },
    delivery: {
      subtitle: 'Establishing a new foundation for reward operations',
      delivered: [
        'Design components and detailed documentation for handoff to engineering',
        'An informed and validated roadmap for next improvement releases',
      ],
      improvements: [
        'Streamlined rewards creation flow: simplified steps, reduced cognitive load.',
        'Better visibility of item availability and selection',
        'Expanded single and multiple links/QR codes generation options and control',
      ],
    },
    detailedOutcomes: {
      subtitle: 'Unlocking value for the business, users, and teams',
      business: {
        title: 'Successful business partnership with KitKat',
        description:
          'Delivering the MVP definition on schedule (3 months) and collaborating closely allowed engineering to develop the tool on time. QR code generation linked to rewards made the partnership possible and delivered to millions of customers.',
      },
      user: {
        title: 'User satisfaction improved by up to 20%',
        description:
          'Simpler workflows and faster configurations, plus users feeling listened to and seeing their pain points addressed, improved satisfaction from 3.5 to 4.5/5, according to post-release surveys.',
      },
      team: {
        title: 'Empowered cross-functional alignment',
        description:
          'Workshops and co-design sessions increased ownership and engagement. "The UX process empowered the team (...) improved commitment and accountability" - Engineering Manager.',
      },
    },
    learnings: {
      subtitle: 'What this project sharpened in my practice',
      items: [
        {
          title: 'Define a research strategy',
          description:
            'Having methodologies directly linked to specific objectives helped us validate requirements from a user perspective while identifying friction in the flow.',
        },
        {
          title: 'Close collaboration boosts efficiency',
          description:
            'Co-design and early engineering involvement allowed us to balance user needs, business requirements, and tech feasibility.',
        },
        {
          title: 'Look for workarounds to surface tech constraints',
          description:
            "When constraints can't be removed, reduce user pain around them. In the MVP, targeting had to be defined by an SQL expression. We provided pre-made SQL templates they could input directly.",
        },
        {
          title: 'Sharing is caring :)',
          description:
            "This project was selected as one of the year's success cases. I presented the UX process and outcomes in front of 100+ people, including King's CTO.",
        },
      ],
    },
  };

  return (
    <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <article className="flex flex-col gap-10">
        <CaseStudyHeader
          client={projectData.client}
          title={projectData.title}
          shortDescription={projectData.shortDescription}
          tags={projectData.tags}
        />
        <ProjectMetadata
          metadata={projectData.metadata}
          introduction={projectData.introduction}
        />
        <ProjectOutcomes outcomes={projectData.outcomes} />

        {/* Separador visual opcional, muy útil en portfolios */}
        <hr className="my-4 border-gray-200" />

        <ProjectProblem data={projectData.problem} />
        <ProjectResearch data={projectData.research} />
        <ProjectDefinition data={projectData.definition} />
        <hr className="my-4 border-gray-200" />
        <ProjectIterative data={projectData.iterativeProcess} />
        <ProjectDelivery data={projectData.delivery} />
        <ProjectDetailedOutcomes data={projectData.detailedOutcomes} />
        <ProjectLearnings data={projectData.learnings} />

        {/* Cierre / Call to action */}
        <div className="mt-12 border-t pt-12 pb-24 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Want to know more? Let&apos;s connect
          </h2>
          <a
            href="mailto:tuemail@ejemplo.com"
            className="mt-6 inline-block rounded-full bg-gray-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Get in touch
          </a>
        </div>
      </article>
    </main>
  );
}
