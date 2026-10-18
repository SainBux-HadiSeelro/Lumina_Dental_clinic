/**
 * Lumina Dental Clinics - Modern High-Tech Precision Architecture
 * 24/7 AI Concierge, Interactive Smile Simulator & Clinical Tech Specs
 */

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { TechSpecs } from '@/components/sections/TechSpecs';
import { SmileTransformation } from '@/components/sections/SmileTransformation';
import { CostEstimator } from '@/components/sections/CostEstimator';
import { ClinicLab } from '@/components/sections/ClinicLab';
import { About } from '@/components/sections/About';
import { Doctors } from '@/components/sections/Doctors';
import { Testimonials } from '@/components/sections/Testimonials';
import { AppointmentForm } from '@/components/sections/AppointmentForm';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { DentalChatbot } from '@/components/chat/DentalChatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechSpecs />
        <SmileTransformation />
        <CostEstimator />
        <ClinicLab />
        <About />
        <Doctors />
        <Testimonials />
        <AppointmentForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      {/* 24/7 AI Clinical Concierge Agent */}
      <DentalChatbot />
    </div>
  );
}
