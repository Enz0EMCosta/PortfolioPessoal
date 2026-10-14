import React from 'react';
import paperCreased from './assets/paper_creased_user.png';
import inkSpray from './assets/ink_spray_grain.jpg';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Projects } from './components/sections/Projects';
import { Journey } from './components/sections/Journey';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="ink-shell min-h-screen flex flex-col text-[#0f172a] selection:bg-[#2563eb] selection:text-white relative bg-[#f4f2ec]">
      {/* ── Layer 1: Crumpled Paper Fold Texture (Image 1 reference) ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center mix-blend-multiply opacity-65 select-none"
        style={{
          backgroundImage: `url(${paperCreased})`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* ── Layer 2: Aerosol Ink Spray & Gritty Stipple Mist (Image 2 reference) ── */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-cover bg-center mix-blend-multiply opacity-40 select-none"
        style={{
          backgroundImage: `url(${inkSpray})`,
          backgroundAttachment: 'fixed',
        }}
      />

      {/* ── Layer 3: Ethereal Soft Blue Ambient Glows (Preserving royal blue tone) ── */}
      <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
        <div className="ink-blob blob-one" />
        <div className="ink-blob blob-two" />
        <div className="ink-blob blob-three" />
      </div>

      <div className="ink-grid" />

      <Header />

      <main className="flex-grow relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Journey />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
