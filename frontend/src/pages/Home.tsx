import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Contributions from '../components/Contributions';
import { FadeInView } from '../components/animations/FadeInView';
import GitHubStats from '../components/GitHubStats';
import Experience from '../components/Experience';

const Home = () => {
  return (
    <main>
      <FadeInView>
        <Hero />
      </FadeInView>
     
        <Experience />
  
    
        <Skills />
     
  
        <Projects />
   
      {/* <FadeInView delay={0.3}>
        <GitHubStats username='sagarkawad' />
      </FadeInView>
      <FadeInView delay={0.4}>
        <Contributions />
      </FadeInView> */}
    
        <Contact />
 
    </main>
  );
};

export default Home;