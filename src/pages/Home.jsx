import Header from '../sections/Header/Header';
import Hero from '../sections/Hero/Hero';
import Features from '../sections/Features/Features';
import CTA from '../sections/CTA/CTA';

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
    </>
  );
}

export default Home;
