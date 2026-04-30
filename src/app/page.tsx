'use client';

import Navbar from '@/components/Navbar';
import MetricsTicker from '@/components/MetricsTicker';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import WhatsAppShowcase from '@/components/WhatsAppShowcase';
import Showcase from '@/components/Showcase';
import ROICalculator from '@/components/ROICalculator';
import TargetAudience from '@/components/TargetAudience';
import Testimonials from '@/components/Testimonials';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <Navbar />
      <MetricsTicker />
      <Hero />
      <TrustBar />
      <div className="reveal">
        <HowItWorks />
      </div>
      <div className="reveal">
        <Features />
      </div>
      <div className="reveal">
        <WhatsAppShowcase />
      </div>
      <div className="reveal">
        <Showcase />
      </div>
      <div className="reveal">
        <ROICalculator />
      </div>
      <div className="reveal">
        <TargetAudience />
      </div>
      <div className="reveal">
        <Testimonials />
      </div>
      <div className="reveal">
        <LeadForm />
      </div>
      <Footer />
    </main>
  );
}
