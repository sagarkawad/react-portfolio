import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { FadeInView } from '../components/animations/FadeInView';
import GitHubStats from '../components/GitHubStats';

const Home = () => {
  return (
    <main>
      <FadeInView>
        <Hero />
      </FadeInView>
      <FadeInView delay={0.2}>
        <Skills />
      </FadeInView>
      <FadeInView delay={0.3}>
        <Projects />
      </FadeInView>
      <FadeInView delay={0.3}>
        <GitHubStats username='sagarkawad' />
      </FadeInView>
      <FadeInView delay={0.4}>
        <Contact />
      </FadeInView>
    </main>
  );
};

export default Home;