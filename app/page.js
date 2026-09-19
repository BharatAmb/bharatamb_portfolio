import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TechnologiesBar from '@/components/TechnologiesBar';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import EducationAndCertifications from '@/components/EducationAndCertifications';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 font-sans min-h-screen">
      <Navbar />
      <main className=''>
        <Hero />
        <TechnologiesBar />
        <Experience />
        <Projects />
        <Services />
        <EducationAndCertifications />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}