import { CaseStudyProps } from '@/lib/types';

export const projectData: CaseStudyProps = {
  client: 'Al Borde del Burnout',
  title: 'Diseñando un santuario digital para la salud mental',
  shortDescription:
    'Diseño y desarrollo de la plataforma web oficial para el podcast "Al Borde del Burnout", creando un espacio accesible y libre de fricciones que centraliza el contenido, fomenta la comunidad y ofrece recursos para la gestión del estrés.',
  tags: [
    'End-to-end UX/UI',
    'Desarrollo Frontend',
    'Salud Digital',
    'Estrategia de Producto',
  ],

  heroImage: {
    src: '/images/group-mac-iphone.png',
    alt: 'Vista principal de la plataforma web Al Borde del Burnout',
  },

  metadata: {
    role: 'UX Engineer & Frontend Developer (end-to-end)',
    timeline: '2 meses - 2024',
    platform: 'Responsive Web App',
    team: 'Miguel Ángel Fort (Creador del Podcast), UX Engineer (Yo)',
    users:
      'Profesionales, freelancers y personas interesadas en la salud mental, la gestión del estrés y la prevención del burnout.',
    constraints:
      'Necesidad de un gestor de contenidos ágil para actualizar episodios, presupuesto ajustado, optimización técnica para SEO.',
  },
  introduction:
    '"Al Borde del Burnout" es un podcast que aborda la salud mental a través de conversaciones honestas sobre la gestión del estrés y el agotamiento laboral. El proyecto necesitaba evolucionar de ser solo un canal de audio en plataformas de terceros a tener un hogar digital propio. Mi responsabilidad abarcó todo el ciclo del producto: desde traducir las necesidades de la comunidad en requisitos técnicos viables, hasta el diseño de la interfaz y su desarrollo frontend completo.',

  outcomes: {
    business: {
      title: 'Centralización de audiencia',
      description:
        'Creación de un canal propio para fidelizar a la audiencia e impulsar la suscripción a la newsletter.',
    },
    users: {
      title: 'Reducción de esfuerzo cognitivo',
      description:
        'Navegación anti-burnout que facilita la búsqueda de recursos y aumenta el tiempo de permanencia.',
    },
    team: {
      title: 'Flujo de trabajo sin bloqueos',
      description:
        'Lanzamiento ágil al centralizar el diseño UX y la construcción técnica sin fricciones de handoff.',
    },
  },

  problem: {
    subtitle: 'Construyendo un hogar más allá de plataformas de terceros',
    context: [
      'El contenido de "Al Borde del Burnout" vivía disperso en plataformas como Spotify, iVoox o YouTube. No existía un punto de encuentro centralizado donde los oyentes pudieran profundizar en las temáticas, acceder de forma organizada a las notas de los programas, o conectar más estrechamente con la marca a través de la newsletter y recursos adicionales.',
    ],
    challenge:
      'Diseñar y desarrollar desde cero una plataforma web que transmitiera calma y claridad, estructurando un catálogo creciente de episodios y recursos sin abrumar visualmente a un usuario que busca reducir su nivel de estrés.',
    successCriteria: [
      'Hito 1: Lanzamiento de una arquitectura de información clara que permitiera categorizar y reproducir episodios directamente en la web.',
      'Hito 2: Alcanzar una puntuación de accesibilidad web superior al 95% en Lighthouse.',
      'Hito 3: Lograr una conversión fluida de visitantes a suscriptores de la newsletter.',
    ],
    image: {
      src: '/images/group-mac-iphone.png',
      alt: 'Dispersión de plataformas vs plataforma centralizada',
      caption:
        'El reto: Unificar un ecosistema disperso en un solo santuario digital',
    },
  },

  research: {
    subtitle: 'Entendiendo la carga cognitiva de nuestra audiencia',
    steps: [
      {
        id: '00',
        title: 'Objetivos de investigación',
        items: [
          'Comprender cómo consumen contenido digital las personas interesadas en el bienestar mental.',
          'Definir la arquitectura óptima para que la web actúe como una herramienta de apoyo, no como una carga adicional.',
        ],
      },
      {
        id: '01',
        title: 'Revisión heurística y análisis competitivo',
        items: [
          'Auditoría de los canales actuales del podcast y análisis de otros creadores de contenido del sector de la salud mental.',
        ],
      },
      {
        id: '02',
        title: 'Feedback de usuarios y mercado',
        items: [
          'Análisis del feedback de la audiencia en redes sociales para descubrir carencias (ej: necesidad de enlaces rápidos a libros recomendados en los episodios).',
        ],
      },
      {
        id: '03',
        title: 'Mapeo de la experiencia (Experience mapping)',
        items: [
          'Mapeo del recorrido del oyente: desde que descubre un clip en redes sociales y escucha el audio, hasta que busca la web para suscribirse.',
        ],
      },
      {
        id: '04',
        title: 'Definición y priorización',
        items: [
          'Priorización de un MVP centrado en 3 pilares: episodios accesibles, página "About" para humanizar el proyecto, y acceso directo a la comunidad.',
        ],
      },
    ],
    image: {
      src: '/images/group-mac-iphone.png',
      alt: 'Mapeo de experiencia de usuario',
      caption:
        'Mapeando el recorrido del oyente desde el descubrimiento hasta la fidelización',
    },
  },

  definition: {
    subtitle:
      'Acortando la brecha entre una UI calmada y requisitos técnicos robustos',
    context: [
      'La transición de los wireframes a los requisitos técnicos fue directa; cada componente fue diseñado pensando en su inmediata implementación en React/TypeScript y HTML/CSS, asegurando un desarrollo veloz y sin sorpresas tecnológicas.',
    ],
    scope: [
      'Navegación anti-burnout: Uso extensivo del espacio en blanco (whitespace) y reducción al mínimo de elementos distractores o pop-ups agresivos.',
      'Reproductor integrado: Funcionalidad para escuchar episodios en la misma página mientras se leen las show notes.',
      'Fundación accesible: Wireframes diseñados estrictamente bajo criterios de Web Accessibility (contraste de color, jerarquía semántica).',
    ],
    image: {
      src: '/images/group-mac-iphone.png',
      alt: 'Wireframes y requisitos técnicos',
      caption: 'Definiendo componentes escalables listos para React',
    },
  },

  iterativeProcess: {
    subtitle: 'Diseñando para la accesibilidad y la resonancia emocional',
    highFidelity: [
      'Desarrollo de un sistema de diseño propio en Figma.',
      'Selección de una paleta de colores y tipografías que evitasen la fatiga visual, transmitiendo la honestidad y transparencia que caracterizan al podcast.',
    ],
    image: {
      src: '/images/group-mac-iphone.png',
      alt: 'Prototipos de alta fidelidad del proyecto',
      caption:
        'Evolución visual: De wireframes a una interfaz que transmite calma',
    },
    testing: [
      'Pruebas de usabilidad focalizadas en dispositivos móviles, dado que la inmensa mayoría de la audiencia de podcasts navega desde sus smartphones.',
      'Iteraciones en el prototipo para mejorar el tamaño de las áreas de interacción (botones, controles de audio) y asegurar una lectura cómoda.',
    ],
  },

  delivery: {
    subtitle: 'Una base escalable lista para crecer',
    delivered: [
      'Una plataforma web completamente responsiva.',
      'Un sistema de diseño documentado en Figma.',
      'Código frontend implementado (Next.js/React) y optimizado para SEO y rendimiento.',
    ],
    improvements: [
      'Visibilidad: Catálogo centralizado que mejora el SEO de los episodios a través de notas indexables.',
      'Control de la audiencia: Independencia parcial de terceros al canalizar el tráfico hacia una newsletter propia.',
      'Experiencia unificada: Los usuarios ya no saltan entre aplicaciones para encontrar libros o enlaces mencionados.',
    ],
  },

  detailedOutcomes: {
    subtitle:
      'Desbloqueando la independencia y un camino claro para el crecimiento',
    business: {
      title: 'Un activo digital escalable',
      description:
        'El proyecto cuenta ahora con una plataforma propia que permite la futura integración de áreas privadas, cursos o patrocinios de manera nativa y centralizada.',
    },
    user: {
      title: 'Un refugio digital sin fricciones',
      description:
        'La comunidad dispone de un espacio seguro, diseñado específicamente para no sobreestimular, facilitando el acceso a la información crítica para su bienestar mental.',
    },
    team: {
      title: 'Eficiencia técnica desde el diseño',
      description:
        'La dualidad técnica y de diseño permitió priorizar el backlog de forma realista. Las decisiones de producto se tomaron sabiendo el coste de implementación, evitando rediseños de última hora.',
    },
  },

  learnings: {
    subtitle: 'Lo que este proyecto perfeccionó en mi práctica',
    items: [
      {
        title: 'Diseño para accesibilidad extrema',
        description:
          'Trabajar en prevención del estrés me obligó a ser aún más estricto con la carga cognitiva, recordando que el diseño no solo debe ser estético, sino funcionalmente pacífico.',
      },
      {
        title: 'El ownership end-to-end acelera la entrega',
        description:
          'Estar a cargo tanto de la arquitectura UX como de las líneas de código frontend demostró que eliminar las barreras entre diseño e ingeniería es la vía más rápida para construir un MVP sólido.',
      },
      {
        title: 'El contenido es la verdadera interfaz',
        description:
          'Aprendí que en plataformas impulsadas por creadores, el diseño debe dar un paso atrás y actuar únicamente como el escenario invisible que hace brillar al contenido (audio y texto).',
      },
    ],
  },
};
