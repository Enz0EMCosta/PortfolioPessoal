import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 bg-transparent font-sans overflow-hidden">
      {/* Organic ink section divider top */}
      <div className="ink-section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 pt-2">
        
        {/* Brand Copyright */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="font-serif italic text-2xl text-slate-900 font-bold">enzo maia</span>
          <span className="text-slate-400">•</span>
          <span className="font-mono text-xs text-slate-600 font-medium">
            © {new Date().getFullYear()} • Projetado &amp; Desenvolvido com carinho
          </span>
        </div>

        {/* Tech Credits & Back to Top */}
        <div className="flex items-center gap-6">
          <span className="font-mono text-xs text-slate-500 hidden md:inline-block">
            React 19 + TypeScript + Tailwind CSS
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Voltar ao topo"
            className="interactive-hover flex items-center gap-2 px-4 py-2 bg-white/90 border border-slate-300 text-slate-800 hover:text-[#2563eb] hover:border-[#2563eb]/50 text-xs font-mono transition-colors shadow-xs cursor-pointer ink-organic-button"
          >
            <span>Topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
