/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { ClinicLab } from '@/components/sections/ClinicLab';
import { Doctors } from '@/components/sections/Doctors';
import { AppointmentForm } from '@/components/sections/AppointmentForm';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ClinicLab />
        <About />
        <Doctors />
        <Testimonials />
        <AppointmentForm />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
