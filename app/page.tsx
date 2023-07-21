import About from '@/components/about/About';
import Main from '@/components/main/Main';
import Navbar from '@/components/navbar/Navbar';
import Skills from '@/components/skills/Skills';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      <Skills />
    </div>
  );
}
