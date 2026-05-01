'use client';

import Navbar from '@/components/Navbar';
import MarketTicker from '@/components/MarketTicker';
import MetricsTicker from '@/components/MetricsTicker';
import MouseFollower from '@/components/MouseFollower';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import ComparisonSlider from '@/components/ComparisonSlider';
import WhatsAppShowcase from '@/components/WhatsAppShowcase';
import Showcase from '@/components/Showcase';
import EvidenceDossier from '@/components/EvidenceDossier';
import ROICalculator from '@/components/ROICalculator';
import TargetAudience from '@/components/TargetAudience';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <main>
      <MarketTicker />
      <Navbar />
      <MouseFollower />
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
        <ComparisonSlider />
      </div>
      <div className="reveal">
        <WhatsAppShowcase />
      </div>
      <div className="reveal">
        <Showcase />
      </div>
      <div className="reveal">
        <EvidenceDossier />
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
        <FAQ />
      </div>
      <div className="reveal">
        <LeadForm />
      </div>
      <Footer />
    </main>
  );
}
