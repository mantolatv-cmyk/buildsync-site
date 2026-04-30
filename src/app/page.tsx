import Navbar from '@/components/Navbar';
import MetricsTicker from '@/components/MetricsTicker';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Showcase from '@/components/Showcase';
import TargetAudience from '@/components/TargetAudience';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <MetricsTicker />
      </div>
      <Hero />
      <Features />
      <Showcase />
      <TargetAudience />
      <Testimonials />
      <Footer />
    </main>
  );
}
