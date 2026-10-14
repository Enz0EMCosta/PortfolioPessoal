import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { SocialLinks } from '../ui/SocialLinks';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#home' },
    { label: 'Stack', href: '#techstack' },
    { label: 'Projetos', href: '#projects' },
    { label: 'Jornada', href: '#journey' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#f3efe6]/90 backdrop-blur-xl border-b border-[#0f172a]/10 shadow-[0_4px_25px_rgba(15,23,42,0.06)]'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        {/* Logo with organic ink touch */}
        <a
          href="#home"
          className="interactive-hover group flex items-baseline gap-1.5 focus:outline-none relative"
        >
          <span className="font-serif italic text-2xl sm:text-3xl text-slate-900 group-hover:text-[#2563eb] transition-colors">
            enzo
          </span>
          <span className="font-sans font-bold text-sm tracking-tight text-slate-700 group-hover:text-[#2563eb] transition-colors">
            maia
          </span>
          {/* Organic ink drop indicator */}
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#2563eb] shadow-[0_0_10px_rgba(37,99,235,0.6)] animate-pulse" />
        </a>

        {/* Desktop Navigation - Stamped ink pill shape */}
        <nav className="hidden md:flex items-center gap-1 bg-white/85 px-4 py-1.5 ink-stamp backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="interactive-hover font-sans text-xs font-medium text-slate-700 hover:text-[#2563eb] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-slate-100/90"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            className="interactive-hover group flex items-center gap-2 px-5 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans text-xs font-semibold ink-organic-button shadow-md shadow-blue-500/25"
          >
            <span>Vamos Conversar</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
          className="md:hidden p-2 text-slate-700 hover:text-[#2563eb] focus:outline-none"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#f3efe6]/98 border-b border-[#0f172a]/15 px-6 py-6 space-y-4 backdrop-blur-2xl shadow-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-sans text-sm text-slate-800 hover:text-[#2563eb] py-2 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-[#0f172a]/10">
            <SocialLinks className="justify-start mb-4" />
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans text-xs font-semibold ink-organic-button shadow-md shadow-blue-500/25"
            >
              <span>Vamos Conversar</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
