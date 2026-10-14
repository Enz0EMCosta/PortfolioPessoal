import React, { useState } from 'react';
import { Mail, Check, ExternalLink } from 'lucide-react';

interface SocialLinkItem {
  name: string;
  url: string;
  icon: React.ReactNode;
  isEmail?: boolean;
}

export const SocialLinks: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const [copied, setCopied] = useState(false);

  const email = 'enzo.costa.dev@gmail.com';

  const links: SocialLinkItem[] = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: (
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: 'Email',
      url: `mailto:${email}`,
      icon: copied ? (
        <Check className="w-4 h-4 text-emerald-600 animate-bounce" />
      ) : (
        <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
      ),
      isEmail: true,
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {links.map((link) => {
        if (link.isEmail) {
          return (
            <div key={link.name} className="relative group">
              <button
                onClick={handleCopyEmail}
                aria-label="Copiar email de Enzo Maia"
                className="interactive-hover flex items-center gap-2 px-4 py-2 ink-stamp bg-white/95 text-slate-800 transition-all duration-300 hover:border-[#2563eb] hover:text-[#2563eb] hover:shadow-[0_4px_16px_rgba(37,99,235,0.18)] cursor-pointer shadow-xs"
              >
                {link.icon}
                <span className="font-mono text-xs font-semibold">
                  {copied ? 'Copiado!' : link.name}
                </span>
              </button>
            </div>
          );
        }

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Perfil do ${link.name}`}
            className="interactive-hover group flex items-center gap-2 px-4 py-2 ink-stamp bg-white/95 text-slate-800 transition-all duration-300 hover:border-[#2563eb] hover:text-[#2563eb] hover:shadow-[0_4px_16px_rgba(37,99,235,0.18)] cursor-pointer shadow-xs"
          >
            {link.icon}
            <span className="font-mono text-xs font-medium">{link.name}</span>
            <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#2563eb]" />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
