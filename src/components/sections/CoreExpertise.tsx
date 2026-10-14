import React, { useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';

// Real tech stack from Enzo Maia's resume
const ALL_SKILLS = [
  // Frontend
  { name: 'React', category: 'Frontend', color: '#61DAFB', desc: 'Biblioteca para construção de interfaces modernas e reativas.' },
  { name: 'Next.js', category: 'Frontend', color: '#ffffff', desc: 'Framework React com SSR, SSG e App Router para aplicações de alta performance.' },
  { name: 'TypeScript', category: 'Frontend', color: '#3178C6', desc: 'Superset tipado de JavaScript para código mais seguro e escalável.' },
  { name: 'JavaScript', category: 'Frontend', color: '#F7DF1E', desc: 'Linguagem de programação base do desenvolvimento web moderno.' },
  { name: 'HTML5', category: 'Frontend', color: '#E34F26', desc: 'Marcação semântica moderna para estrutura de páginas web.' },
  { name: 'CSS3', category: 'Frontend', color: '#1572B6', desc: 'Estilização avançada com animações, Grid e Flexbox.' },
  { name: 'Tailwind CSS', category: 'Frontend', color: '#38BDF8', desc: 'Framework CSS utilitário para desenvolvimento ágil e responsivo.' },
  { name: 'Framer Motion', category: 'Frontend', color: '#FF0055', desc: 'Biblioteca de animações declarativas para React.' },
  // Backend
  { name: 'Node.js', category: 'Backend', color: '#8CC84B', desc: 'Ambiente de execução JavaScript do lado do servidor, base de APIs REST.' },
  { name: 'Express', category: 'Backend', color: '#ffffff', desc: 'Framework minimalista para criação de APIs e servidores Node.js.' },
  { name: 'Python', category: 'Backend', color: '#3776AB', desc: 'Linguagem versátil usada em scripts, automações e backends.' },
  { name: 'PHP', category: 'Backend', color: '#777BB4', desc: 'Linguagem backend amplamente usada em sistemas web e CMS.' },
  // Database
  { name: 'MySQL', category: 'Database', color: '#00758F', desc: 'Banco de dados relacional robusto com suporte SQL completo.' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791', desc: 'Banco relacional avançado com suporte a JSON, full-text search e mais.' },
  { name: 'MongoDB', category: 'Database', color: '#47A248', desc: 'Banco NoSQL orientado a documentos para dados flexíveis e escaláveis.' },
  // Tools
  { name: 'Git', category: 'Ferramentas', color: '#F05032', desc: 'Sistema de controle de versão essencial para qualquer projeto.' },
  { name: 'Figma', category: 'Ferramentas', color: '#F24E1E', desc: 'Ferramenta de design colaborativo para UI/UX e prototipagem.' },
  { name: 'Docker', category: 'Ferramentas', color: '#2496ED', desc: 'Containerização de aplicações para deploy consistente e escalável.' },
  { name: 'Linux', category: 'Ferramentas', color: '#FCC624', desc: 'Sistema operacional base para servidores e ambientes de desenvolvimento.' },
  { name: 'REST APIs', category: 'Ferramentas', color: '#249D8F', desc: 'Arquitetura de comunicação entre sistemas via HTTP/JSON.' },
];

const CATEGORIES = ['Todos', 'Frontend', 'Backend', 'Database', 'Ferramentas'];

export const CoreExpertise: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const filtered = activeCategory === 'Todos'
    ? ALL_SKILLS
    : ALL_SKILLS.filter(s => s.category === activeCategory);

  const hoveredData = ALL_SKILLS.find(s => s.name === hoveredSkill);

  const pillGroups = [
    { category: 'Frontend Engineering', description: 'Arquitetura escalável com React, Next.js (App Router), TypeScript estrito, SSR/SSG e WebGL Shaders.', tags: ['React 19', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], accent: '#249D8F' },
    { category: 'Backend & APIs', description: 'Desenvolvimento de APIs REST robustas com Node.js, Express, PHP e gerenciamento de bancos SQL/NoSQL.', tags: ['Node.js', 'Express', 'MySQL', 'PostgreSQL', 'MongoDB'], accent: '#E9C46A' },
    { category: 'Ferramentas & DevOps', description: 'Workflow profissional com Git, Docker, Linux, Figma e pipelines CI/CD para deploy eficiente.', tags: ['Git', 'Docker', 'Linux', 'Figma', 'REST APIs'], accent: '#E76F51' },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 bg-[#0e1015] overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#E9C46A] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Stack & Ferramentas</span>
            </span>
            <h2 className="font-serif italic text-4xl sm:text-6xl text-white">
              core <span className="font-sans font-extrabold not-italic text-white/90">expertise</span>
            </h2>
          </div>
          <p className="max-w-md font-sans text-sm sm:text-base text-white/60 leading-relaxed">
            Tecnologias que domino no dia a dia — passe o mouse para saber mais sobre cada uma.
          </p>
        </div>

        {/* ── Category Filter Pills ── */}
        <div className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-white text-[#0e1015] border-white font-bold'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Skills Grid with Tooltip ── */}
        <div className="relative mb-20 rounded-3xl bg-[#14171f]/60 border border-white/10 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-wrap gap-3">
            {filtered.map(skill => (
              <div
                key={skill.name}
                className="relative"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {/* Skill Pill */}
                <div
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#1c202a] border border-white/8 cursor-default transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg group"
                  style={{
                    borderColor: hoveredSkill === skill.name ? skill.color + '60' : undefined,
                    boxShadow: hoveredSkill === skill.name ? `0 0 14px ${skill.color}25` : undefined,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125"
                    style={{ backgroundColor: skill.color }}
                  />
                  <span className="font-mono text-sm text-white/80 group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </div>

                {/* Floating Tooltip Card */}
                {hoveredSkill === skill.name && hoveredData && (
                  <div
                    ref={tooltipRef}
                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50 w-56 pointer-events-none animate-in fade-in slide-in-from-bottom-2 duration-150"
                  >
                    <div
                      className="relative rounded-xl bg-[#1c202a]/95 backdrop-blur-md border p-3 shadow-2xl"
                      style={{ borderColor: skill.color + '40' }}
                    >
                      {/* Arrow */}
                      <div
                        className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0"
                        style={{
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: `6px solid ${skill.color}40`,
                        }}
                      />
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: skill.color }} />
                        <span className="font-sans font-bold text-sm text-white">{skill.name}</span>
                        <span
                          className="ml-auto font-mono text-[10px] px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: skill.color + '20', color: skill.color }}
                        >
                          {skill.category}
                        </span>
                      </div>
                      <p className="font-sans text-xs text-white/70 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── Skill Category Summary Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {pillGroups.map(skill => (
            <div
              key={skill.category}
              className="glass-card p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                <div
                  className="w-10 h-1 rounded-full mb-6 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: skill.accent }}
                />
                <h3 className="font-sans font-bold text-xl text-white mb-3">{skill.category}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed mb-6">{skill.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {skill.tags.map(tag => (
                  <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-white/5 text-white/70 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreExpertise;
