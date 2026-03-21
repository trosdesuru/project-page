import { CaseStudyProps } from '@/lib/types';

export const projectData: CaseStudyProps = {
  client: 'Al Borde del Burnout',
  title: 'Diseñando un santuario digital con Next.js',
  shortDescription:
    'Estrategia UX y desarrollo Frontend (React/Next.js) para un ecosistema de salud mental. Implementé una arquitectura sin recargas de página que mantiene el estado global del reproductor de audio, garantizando fricción cero al usuario.',
  tags: [
    'UX Engineering',
    'Frontend (Next.js)',
    'Global State Management',
    'Salud Digital',
  ],

  heroImage: {
    src: '/images/group-mac-iphone.png',
    alt: 'Plataforma web Al Borde del Burnout responsiva',
  },

  metadata: {
    role: 'UX Engineer (End-to-End)',
    timeline: '2 meses - 2024',
    platform: 'Web App (Next.js, TypeScript, Tailwind)',
    team: 'Creador del Podcast, UX Engineer (Yo)',
    users:
      'Profesionales buscando recursos de gestión del estrés y prevención del burnout laboral.',
    constraints:
      'Necesidad de un Single Page Application (SPA) para reproducción de audio ininterrumpida, alto rendimiento SEO (Lighthouse >95) y presupuesto ajustado.',
  },
  introduction:
    '"Al Borde del Burnout" necesitaba evolucionar de un simple feed de Spotify a una plataforma propia. Mi rol fue ejecutar el proyecto de principio a fin (End-to-End): desde diseñar una UI que redujera la carga cognitiva, hasta programar la arquitectura en Next.js. El mayor logro técnico fue implementar un reproductor de audio persistente que acompaña al usuario mientras explora artículos, sin cortes ni recargas de página.',

  outcomes: {
    business: {
      title: 'Fidelización y propiedad de datos',
      description:
        'Redirección del tráfico de plataformas de terceros a un dominio propio, impulsando la captación directa de leads (newsletter).',
    },
    users: {
      title: 'Consumo ininterrumpido',
      description:
        'Gracias a la gestión de estado global de React, los usuarios pueden leer show notes o buscar libros sin que el podcast se pause.',
    },
    team: {
      title: 'Velocidad de entrega (Zero-Handoff)',
      description:
        'Al dominar tanto el diseño en Figma como el código, eliminé la fricción del handoff tradicional, lanzando el MVP en tiempo récord.',
    },
  },

  problem: {
    subtitle: 'El reto: Escuchar y explorar al mismo tiempo',
    context: [
      'El contenido sobre salud mental requiere foco. Los usuarios de Spotify a menudo pierden los enlaces o libros mencionados durante el episodio. Crear una web tradicional basada en HTML/PHP significaba que, si el usuario hacía clic en un artículo mientras escuchaba, la página recargaría y el audio se cortaría, rompiendo la inmersión.',
    ],
    challenge:
      'Construir una arquitectura Frontend robusta que permitiera navegación asíncrona fluida, combinada con un diseño de interfaz que transmitiera calma absoluta y redujera el ruido visual.',
    successCriteria: [
      'Implementación de reproductor global persistente mediante React Context.',
      'Rendimiento impecable: Puntuación de accesibilidad web y performance superior al 95% en Lighthouse.',
      'Diseño responsivo optimizado para una audiencia 90% Mobile-first.',
    ],
    image: {
      src: '/images/spotify.png',
      alt: 'Dispersión de plataformas',
      caption:
        'Unificando el contenido de audio y texto mediante tecnología SPA moderna.',
    },
  },

  research: {
    subtitle: 'Arquitectura y reducción de carga cognitiva',
    steps: [
      {
        id: '01',
        title: 'Análisis de interacciones de estado persistente',
        items: [
          'Investigación de patrones de navegación en aplicaciones como Spotify Web o SoundCloud para replicar la persistencia del reproductor en Next.js.',
        ],
      },
      {
        id: '02',
        title: 'Mapeo de Rutas y SEO Dinámico',
        items: [
          'Definición de rutas dinámicas [slug] para permitir indexación SEO de cada episodio individual sin perder los beneficios de una aplicación cliente.',
        ],
      },
      {
        id: '03',
        title: 'Diseño para la fatiga mental',
        items: [
          'Auditoría visual del sector de salud mental: descarte de animaciones agresivas o pop-ups, apostando por un diseño brutalista suave y mucho espacio en blanco.',
        ],
      },
    ],
    image: {
      src: '/images/research-square.png',
      alt: 'Arquitectura de rutas',
      caption:
        'Mapeando la persistencia de componentes a través del routing de Next.js.',
    },
  },

  definition: {
    subtitle: 'Definiendo la base técnica del proyecto',
    context: [
      'La transición del concepto visual al código fue directa. Diseñé los componentes en Figma pensando estrictamente en su equivalencia en Tailwind CSS y TypeScript, garantizando que lo diseñado era 100% programable de forma nativa.',
    ],
    scope: [
      'Reproductor Global: Componente renderizado fuera del Layout principal para evitar desmontajes.',
      'Tipado estricto (TypeScript): Asegurar que los datos de los episodios (título, URL del audio, metadata) fluyan sin errores desde el CMS.',
      'Accesibilidad semántica: Uso correcto de etiquetas ARIA y contrastes verificados para lectores de pantalla.',
    ],
    image: {
      src: '/images/wireframe-mac.png',
      alt: 'Wireframes técnicos y componentes',
      caption: 'Traduciendo Wireframes directamente a Componentes de React funcionales.',
    },
  },

  iterativeProcess: {
    subtitle: 'Prototipado en código real',
    highFidelity: [
      'En lugar de hacer infinitas iteraciones en Figma, pasé rápidamente a programar prototipos interactivos funcionales en el navegador.',
      'Esto permitió probar la verdadera latencia de carga de los audios y ajustar el diseño de los "Loading States" y Skeleton loaders de React.',
    ],
    image: {
      src: '/images/frame-group.png',
      alt: 'Estados de carga de la interfaz',
      caption:
        'Ajustando la experiencia del usuario basándose en latencias de red reales.',
    },
    testing: [
      'Pruebas de rendimiento en dispositivos móviles de gama baja para asegurar que el parsing de JavaScript no penalizaba la batería ni calentaba el dispositivo.',
    ],
  },

  delivery: {
    subtitle: 'Despliegue y optimización',
    delivered: [
      'Aplicación web Full-Stack desplegada en Vercel, con CI/CD automatizado.',
      'Código modular, tipado y documentado para facilitar futuras integraciones de bases de datos o pasarelas de pago.',
    ],
    improvements: [
      'Conversión Directa: Componentes de suscripción a la newsletter incrustados sin fricción en el hilo de lectura.',
      'Performance: Carga inicial casi instantánea gracias al pre-renderizado de páginas estáticas (SSG) de Next.js.',
    ],
    image: {
      src: '/images/design-system.png',
      alt: 'Librería de Componentes en React',
    },
  },

  detailedOutcomes: {
    subtitle: 'Un activo digital robusto e independiente',
    business: {
      title: 'Plataforma preparada para monetización',
      description:
        'Al ser dueños del código y la infraestructura, el cliente puede ahora integrar contenido premium o comunidades privadas sin pagar comisiones a terceros.',
    },
    user: {
      title: 'Inmersión sin barreras',
      description:
        'La comunidad disfruta de una experiencia fluida, donde el diseño pasa a un segundo plano para dejar brillar al contenido de valor.',
    },
    team: {
      title: 'Sinergia Diseño-Desarrollo',
      description:
        'Demostración práctica de cómo un perfil UX Engineer reduce tiempos de desarrollo, elimina malentendidos técnicos y entrega productos con un acabado visual perfecto.',
    },
    image: {
      src: '/images/group-mac-iphone.png',
      alt: 'Muestra final del proyecto',
    },
  },

  learnings: {
    subtitle: 'La ventaja competitiva del UX Engineer',
    items: [
      {
        title: 'La arquitectura es diseño',
        description:
          'Mantener el estado de la UI (como un reproductor de audio) es una decisión puramente de Experiencia de Usuario resuelta mediante la arquitectura de software.',
      },
      {
        title: 'Prototipar en código evita mentiras',
        description:
          'Figma lo aguanta todo, pero el navegador web no. Trabajar el frontend real me permitió diseñar soluciones honestas respecto a los tiempos de carga y animaciones.',
      },
      {
        title: 'Accesibilidad desde la base',
        description:
          'Aprendí que la accesibilidad no se añade al final con colores de contraste; se construye desde el minuto 1 utilizando código semántico y gestionando el foco del teclado en React.',
      },
    ],
  },
};