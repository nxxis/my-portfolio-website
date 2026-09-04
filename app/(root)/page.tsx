import TopBar from '../_components/top-bar';
import { MobileNav } from '../_components/navigation';
import SideRail from '../_components/side-rail';
import About from '../_components/about';
import Journey from '../_components/journey';
import Experience from '../_components/experience';
import Education from '../_components/education';
import Publications from '../_components/publications';
import Projects from '../_components/projects';
import Contact from '../_components/contact';
import Footer from '../_components/footer';

// Full-height on arrival, but never trapped: content taller than one
// screen (Journey's timeline, Experience's cards) simply scrolls past.
const SECTION_CLASS =
  'scroll-mt-20 min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-4rem)] flex flex-col justify-center py-12 sm:py-16';

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full">
      <TopBar />
      <SideRail />
      <main className="container mx-auto px-3 lg:px-8 xl:px-12 pb-24 sm:pb-16">
        <section id="about" className={SECTION_CLASS}>
          <About />
        </section>
        <section id="journey" className={SECTION_CLASS}>
          <Journey />
        </section>
        <section id="experience" className={SECTION_CLASS}>
          <Experience />
        </section>
        <section id="education" className={SECTION_CLASS}>
          <Education />
        </section>
        <section id="publications" className={SECTION_CLASS}>
          <Publications />
        </section>
        <section id="projects" className={SECTION_CLASS}>
          <Projects />
        </section>
        <section id="contact" className={SECTION_CLASS}>
          <Contact />
        </section>
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
