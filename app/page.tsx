import About from '@/components/about/About';
import Main from '@/components/main/Main';
import Navbar from '@/components/navbar/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
    </div>
  );
}
