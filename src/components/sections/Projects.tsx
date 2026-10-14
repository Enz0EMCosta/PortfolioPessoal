import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { OrganicInkSplatter } from '../ui/OrganicInkSplatter';

interface Project {
  id: string;
  title: string;
  year: string;
  role: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  accent: string;
}

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'lumina-saas',
      title: 'Lumina Analytics Platform',
      year: '2026',
      role: 'Frontend Lead & Design',
      category: 'SaaS Platform',
      description:
        'Plataforma completa de visualização de métricas e analytics em tempo real, com dashboards personalizáveis, gráficos interativos de alta performance e suporte a temas dinâmicos.',
      tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'WebGL Charts'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      accent: '#2563eb',
    },
    {
      id: 'aurora-ai',
      title: 'Aurora Studio & Creative AI',
      year: '2025',
      role: 'Full Frontend Architecture',
      category: 'Creative Tool',
      description:
        'Estúdio interativo para geração e manipulação de assets visuais com IA generativa, processamento de imagens no cliente via Web Workers e exportação em múltiplos formatos.',
      tags: ['React 19', 'Framer Motion', 'Tailwind CSS', 'Web Workers'],
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      accent: '#1d4ed8',
    },
    {
      id: 'nexus-commerce',
      title: 'Nexus Modern E-Commerce',
      year: '2025',
      role: 'UI/UX & Frontend Dev',
      category: 'E-Commerce Experience',
      description:
        'Experiência de e-commerce ultra-rápida (Lighthouse 100/100) com checkout instantâneo, filtros em tempo real, visualização 3D de produtos e acessibilidade total.',
      tags: ['Next.js', 'Stripe API', 'Tailwind CSS', 'Three.js'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      accent: '#2563eb',
    },
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Organic ink divider */}
      <div className="ink-section-divider absolute top-0 left-0 right-0" />

      {/* Atmospheric organic ink drops */}
      <OrganicInkSplatter
        size={380}
        variant="black"
        rotate={-50}
        opacity={0.32}
        className="absolute top-20 -right-24"
      />
      <OrganicInkSplatter
        size={320}
        variant="blue"
        rotate={75}
        opacity={0.28}
        className="absolute top-1/2 -left-20"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="mb-16 sm:mb-20 text-center max-w-3xl mx-auto space-y-4">
          <span className="ink-stamp inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-900 font-bold bg-white/95">
            Trabalhos Selecionados
          </span>
          <h2 className="text-4xl sm:text-6xl leading-none text-slate-900">
            <span className="font-serif italic">projetos em </span>
            <span className="font-sans font-black not-italic text-[#2563eb]">
              destaque
            </span>
          </h2>
          <p className="font-sans font-light text-sm sm:text-base text-slate-700">
            Uma seleção de projetos recentes onde design refinado, engenharia de software e foco no usuário se encontram.
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16">
          {projects.map((project, idx) => (
            <article
              key={project.id}
              className="project-card group p-5 sm:p-8 relative"
              style={{
                borderRadius: idx % 2 === 0 ? '26px 36px 22px 32px' : '34px 22px 30px 24px',
              }}
            >
              {/* Organic ink splatter mark overlapping the card edge */}
              <OrganicInkSplatter
                size={180}
                variant={idx % 2 === 0 ? 'black' : 'blue'}
                rotate={idx * 45}
                opacity={0.28}
                className={`absolute ${idx % 2 === 0 ? '-top-10 -right-10' : '-bottom-10 -left-10'}`}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7 relative h-64 sm:h-96 project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="absolute top-4 left-4 z-10 font-mono text-[11px] uppercase tracking-[0.16em] px-3.5 py-1 ink-stamp bg-white/95 text-slate-900 font-bold">
                    {project.year}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 relative z-10">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: project.accent }}
                      />
                      <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-slate-600 font-bold">
                        {project.category} • {project.role}
                      </span>
                    </div>

                    <h3 className="font-sans font-bold text-2xl sm:text-3xl text-slate-900 mb-4 transition-colors duration-300 group-hover:text-[#2563eb]">
                      {project.title}
                    </h3>

                    <p className="font-sans text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="meta-tag font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-[#0f172a]/10">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-hover inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] text-white font-sans text-xs font-semibold hover:bg-[#1d4ed8] transition-all duration-300 shadow-sm shadow-blue-500/25 ink-organic-button"
                    >
                      <span>Ver Projeto</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-hover inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-300 text-slate-800 font-sans text-xs font-medium hover:border-slate-500 transition-colors shadow-xs ink-organic-button"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
