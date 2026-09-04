import Header from '../_components/header';
import Sidebar from '../_components/sidebar';
import Navigation from '../_components/navigation';
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
  'scroll-mt-24 snap-start min-h-[calc(100vh-4rem)] lg:min-h-screen flex flex-col justify-center';

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="container mx-auto px-3 lg:px-8 xl:px-12 lg:flex lg:gap-12 xl:gap-20">
        <Sidebar />
        <main className="min-w-0 flex-1 pb-24 lg:pb-0">
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
      </div>
      <Footer />
      <Navigation />
    </div>
  );
}
