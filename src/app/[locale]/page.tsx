import {useTranslations} from 'next-intl';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}