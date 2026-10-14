import React from 'react';

export const About: React.FC = () => {
  const timeline = [
    {
      year: 'Mar 2025 — Presente',
      role: 'Estagiário em TI',
      company: 'Hospital Primavera',
      location: 'Aracaju, SE',
      description: 'Suporte e desenvolvimento de sistemas de gestão hospitalar, manutenção de banco de dados e automação de processos internos com foco em eficiência e segurança de dados.',
      accent: '#249D8F',
    },
    {
      year: '2023 — Presente',
      role: 'Graduando em Sistemas de Informação',
      company: 'Universidade Federal de Sergipe (UFS)',
      location: 'São Cristóvão, SE',
      description: 'Curso com foco em fundamentos de computação, engenharia de software, banco de dados e desenvolvimento de sistemas. Na mesma turma de colegas referência na área.',
      accent: '#E9C46A',
    },
    {
      year: '2022 — 2023',
      role: 'Desenvolvedor Web Freelance',
      company: 'Projetos Autônomos',
      location: 'Remoto',
      description: 'Desenvolvimento de landing pages, sistemas web e APIs para clientes locais, com foco em React, JavaScript e WordPress.',
      accent: '#E76F51',
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0e1015] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">

        {/* Editorial Quote Section */}
        <div className="max-w-4xl mx-auto text-center space-y-6 mb-24">
          <span className="font-mono text-xs uppercase tracking-widest text-[#249D8F]">
            Filosofia & Trajetória
          </span>
          <h2 className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-white leading-tight">
            "Acredito que o bom código é aquele que combina{' '}
            <span className="ink-bleed text-[#E9C46A] not-italic font-sans font-bold" data-text="clareza técnica">clareza técnica</span>,{' '}
            <span className="ink-bleed text-[#E76F51] not-italic font-sans font-bold" data-text="velocidade impecável">velocidade impecável</span> e{' '}
            <span className="ink-bleed text-[#249D8F] not-italic font-sans font-bold" data-text="beleza visual">beleza visual</span>."
          </h2>
        </div>

        {/* 2-Column Story & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">

          {/* Left: Story / Bio */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans font-bold text-2xl text-white">
              Desenvolvedor fullstack apaixonado por experiências que impressionam
            </h3>

            <div className="space-y-4 font-sans font-light text-base text-white/70 leading-relaxed">
              <p>
                Sou Enzo Maia, estudante de Sistemas de Informação na UFS e estagiário de TI no Hospital Primavera em Aracaju. Comecei a programar por curiosidade e hoje é minha principal paixão.
              </p>
              <p>
                Trabalho no ponto de encontro entre o design e a engenharia de software — garantindo que cada pixel faça sentido e que a aplicação execute com máxima fluidez, acessibilidade e propósito.
              </p>
              <p>
                Além do desenvolvimento, me fascino por shaders generativos, WebGL, tipografia moderna e motion design na web.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="p-4 rounded-xl bg-[#14171f] border border-white/5">
                <span className="font-mono text-2xl font-bold text-[#249D8F] block mb-1">Fullstack</span>
                <span className="font-sans text-xs text-white/60">Front + Back + DB</span>
              </div>
              <div className="p-4 rounded-xl bg-[#14171f] border border-white/5">
                <span className="font-mono text-2xl font-bold text-[#E76F51] block mb-1">UFS</span>
                <span className="font-sans text-xs text-white/60">Sistemas de Informação</span>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-7">
            <h3 className="font-sans font-bold text-2xl text-white mb-8">
              Jornada Profissional
            </h3>

            <div className="relative border-l border-white/10 pl-6 sm:pl-8 space-y-10">
              {timeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <span
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-[#14171f] border-2 transition-colors"
                    style={{
                      borderColor: item.accent,
                      backgroundColor: 'transparent',
                    }}
                  />
                  <span
                    className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3 h-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
                    style={{ backgroundColor: item.accent }}
                  />

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-xs" style={{ color: item.accent }}>
                      {item.year}
                    </span>
                    <span className="font-mono text-xs text-white/30">•</span>
                    <span className="font-mono text-xs text-white/40">{item.location}</span>
                  </div>

                  <h4 className="font-sans font-bold text-lg text-white group-hover:text-[#E9C46A] transition-colors mb-0.5">
                    {item.role}
                  </h4>
                  <span className="font-sans text-sm text-white/50 block mb-2">{item.company}</span>
                  <p className="font-sans text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
