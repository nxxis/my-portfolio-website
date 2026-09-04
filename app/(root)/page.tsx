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

export default function Portfolio() {
  return (
    <div className="min-h-screen w-full">
      <Header />
      <div className="container mx-auto px-3 lg:px-8 xl:px-12 lg:flex lg:gap-12 xl:gap-20">
        <Sidebar />
        <main className="min-w-0 flex-1 py-8 lg:py-16 pb-24 lg:pb-16 space-y-20 sm:space-y-28">
          <section id="about" className="scroll-mt-24 snap-start">
            <About />
          </section>
          <section id="journey" className="scroll-mt-24 snap-start">
            <Journey />
          </section>
          <section id="experience" className="scroll-mt-24 snap-start">
            <Experience />
          </section>
          <section id="education" className="scroll-mt-24 snap-start">
            <Education />
          </section>
          <section id="publications" className="scroll-mt-24 snap-start">
            <Publications />
          </section>
          <section id="projects" className="scroll-mt-24 snap-start">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-24 snap-start">
            <Contact />
          </section>
        </main>
      </div>
      <Footer />
      <Navigation />
    </div>
  );
}
