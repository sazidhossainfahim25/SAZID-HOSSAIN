import ProjectsPage from './projects/page';
import AboutPage from './about/page';
import ContactPage from './contact/page';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SkillsPage from './skills/page';
import EducationExperience from '@/components/EducationExperience';

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPage />
      <SkillsPage />
      <EducationExperience/>
      <ProjectsPage />
      <ContactPage />
      <Footer />
    </>
  );
}
