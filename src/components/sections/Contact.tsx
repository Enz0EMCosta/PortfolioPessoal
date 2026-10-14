import React, { useState } from 'react';
import { SocialLinks } from '../ui/SocialLinks';
import { Mail, Copy, Check, MessageSquare, Send } from 'lucide-react';
import { OrganicInkSplatter } from '../ui/OrganicInkSplatter';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'enzo.costa.dev@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 bg-transparent overflow-hidden">
      {/* Organic ink section divider */}
      <div className="ink-section-divider absolute top-0 left-0 right-0" />

      {/* Atmospheric organic ink splatters */}
      <OrganicInkSplatter
        size={420}
        variant="black"
        rotate={-15}
        opacity={0.4}
        className="absolute top-1/4 -right-20"
      />
      <OrganicInkSplatter
        size={340}
        variant="blue"
        rotate={80}
        opacity={0.35}
        className="absolute bottom-10 -left-16"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-10">
        
        {/* Header Tag with stamped contour */}
        <div className="ink-stamp inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-900 font-bold bg-white/95">
          <MessageSquare className="w-3.5 h-3.5 text-[#2563eb]" />
          <span>Entre em Contato</span>
        </div>

        {/* Big Impactful Title */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-6xl md:text-7xl text-slate-900 leading-tight">
            <span className="font-serif italic">vamos criar algo </span>
            <span className="font-sans font-black not-italic text-[#2563eb]">
              incrível
            </span>{' '}
            <span className="font-serif italic">juntos?</span>
          </h2>
          <p className="max-w-xl mx-auto font-sans font-light text-base sm:text-lg text-slate-700">
            Tem um novo projeto, ideia ou oportunidade em mente? Minha caixa de entrada está sempre aberta para conversas.
          </p>
        </div>

        {/* Big Interactive Email Box styled like an organic stamped letterhead */}
        <div
          className="max-w-lg mx-auto p-5 sm:p-7 bg-white/92 backdrop-blur-xl shadow-[0_20px_50px_-15px_rgba(15,23,42,0.14)] flex flex-col sm:flex-row items-center justify-between gap-4 relative"
          style={{
            borderRadius: '26px 36px 22px 32px',
            border: '2px solid rgba(15, 23, 42, 0.2)',
          }}
        >
          {/* Subtle ink drop in corner */}
          <OrganicInkSplatter
            size={140}
            variant="blue"
            rotate={45}
            opacity={0.25}
            className="absolute -top-8 -right-8"
          />

          <div className="flex items-center gap-3 text-left relative z-10">
            <div
              className="w-11 h-11 bg-blue-50 flex items-center justify-center text-[#2563eb] shrink-0 shadow-xs"
              style={{
                borderRadius: '14px 18px 12px 16px',
                border: '1.5px solid rgba(37, 99, 235, 0.3)',
              }}
            >
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="font-mono text-[11px] text-[#2563eb] block tracking-wider uppercase font-bold">EMAIL DIRETO</span>
              <span className="font-sans font-bold text-sm sm:text-base text-slate-900">{email}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto relative z-10">
            <button
              onClick={handleCopy}
              className="interactive-hover flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-semibold shadow-xs cursor-pointer ink-organic-button"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#2563eb]" />}
              <span>{copied ? 'Copiado!' : 'Copiar'}</span>
            </button>

            <a
              href={`mailto:${email}`}
              className="interactive-hover flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#2563eb] hover:bg-[#1d4ed8] text-white text-xs font-semibold shadow-md shadow-blue-500/25 ink-organic-button"
            >
              <span>Enviar</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="pt-4 flex flex-col items-center gap-4">
          <span className="font-mono text-xs text-slate-500 tracking-wider font-bold">OU CONECTE-SE PELAS REDES SOCIAIS</span>
          <SocialLinks />
        </div>

      </div>
    </section>
  );
};

export default Contact;
