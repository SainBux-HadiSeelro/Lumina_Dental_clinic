import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Zap, 
  Microscope, 
  Database, 
  CheckCircle2, 
  Sparkles, 
  Activity,
  Maximize2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface SpecCategory {
  id: string;
  name: string;
  icon: typeof Cpu;
  badge: string;
  description: string;
  specs: {
    title: string;
    value: string;
    subtext: string;
    standard: string;
  }[];
}

const SPEC_CATEGORIES: SpecCategory[] = [
  {
    id: 'diagnostics',
    name: 'Hardware & Optics',
    icon: Microscope,
    badge: 'Hardware // Tier-1',
    description: 'Sub-millimeter radiographic and optical diagnostics equipment operating on ultra-low radiation wavelengths.',
    specs: [
      {
        title: '3D Cone Beam Computed Tomography (CBCT)',
        value: '0.01 mm',
        subtext: 'Isotropic Voxel Resolution',
        standard: '75% Lower Radiation than standard dental CT'
      },
      {
        title: 'Intraoral 3D Scanner Frame Rate',
        value: '60 FPS',
        subtext: 'Real-time color photogrammetry',
        standard: 'Powder-free, distortionless 12-micron accuracy'
      },
      {
        title: 'Dual Photonic Lasers (Nd:YAG + Er:YAG)',
        value: '2940 nm',
        subtext: 'Hard & Soft Tissue Biostimulation',
        standard: 'Bactericidal disinfection without heat necrosis'
      },
      {
        title: '5-Axis CAD/CAM Robotic Milling Unit',
        value: '< 18 Mins',
        subtext: 'Same-Day Crown & Inlay Fabrication',
        standard: 'Wet & dry robotic precision ceramic milling'
      }
    ]
  },
  {
    id: 'materials',
    name: 'Biomaterials',
    icon: Layers,
    badge: 'Materials // Grade-A',
    description: 'Zero-cytotoxic, biocompatible compounds engineered to fuse naturally with human bone and oral tissue.',
    specs: [
      {
        title: 'Titanium Grade-5 Ti-6Al-4V ELI',
        value: '99.8%',
        subtext: 'Osseointegration Success Rate',
        standard: 'ASTM F136 Medical Implant Standard'
      },
      {
        title: 'Monolithic Translucent Zirconia',
        value: '1,200 MPa',
        subtext: 'Flexural Flex Strength',
        standard: 'Zero metal allergy risk with natural light refraction'
      },
      {
        title: 'Nanohybrid Composite Resins',
        value: '82% Wt',
        subtext: 'Inorganic Micro-Filler Density',
        standard: 'Mirror polish longevity & wear resistance'
      },
      {
        title: 'Biomimetic Hydroxyapatite Serum',
        value: '100% Bio',
        subtext: 'Enamel Remineralization Substrate',
        standard: 'Micro-tubule occlusion for total sensitivity elimination'
      }
    ]
  },
  {
    id: 'safety',
    name: 'Cleanroom & Sterility',
    icon: ShieldCheck,
    badge: 'Sterilization // Protocol',
    description: 'Hospital-grade airborne pathogen elimination and continuous closed-loop water sterilization.',
    specs: [
      {
        title: 'Cleanroom Air Filtration',
        value: 'Class 100',
        subtext: 'Positive Pressure Laminar Flow',
        standard: 'HEPA H14 filtration: 99.995% at 0.1 microns'
      },
      {
        title: 'Waterline Decontamination Protocol',
        value: '< 5 CFU/mL',
        subtext: 'Bacterial Colony Count (Limit: 500)',
        standard: 'Continuous ultrasonic biofilm neutralization'
      },
      {
        title: 'Class B Autoclave Thermal Cycle',
        value: '134 °C',
        subtext: 'Fractionated Vacuum Sterilization',
        standard: 'Full spore-test validation on every clinical tray'
      },
      {
        title: 'Automated Instrument Tracking',
        value: '100% RFID',
        subtext: 'Every Cassette Logged Digitally',
        standard: 'Full chain of custody from autoclave to patient chair'
      }
    ]
  },
  {
    id: 'software',
    name: 'AI & Data Architecture',
    icon: Cpu,
    badge: 'Neural Core // Cloud',
    description: 'Real-time diagnostic AI models and cryptographic data security protecting patient records.',
    specs: [
      {
        title: 'Real-Time Diagnostic AI Neural Model',
        value: '99.4%',
        subtext: 'Interproximal Caries Detection Rate',
        standard: 'Trained on 250,000+ validated clinical scans'
      },
      {
        title: 'Digital Smile Design (DSD) Simulation',
        value: 'Real-Time',
        subtext: 'Facial Biometric Symmetry Engine',
        standard: 'Generates photo-realistic 3D preview in minutes'
      },
      {
        title: 'Data Security & Storage',
        value: '256-Bit SSL',
        subtext: 'Zero-Knowledge Encryption',
        standard: 'Full HIPAA, GDPR & ISO 27001 compliance'
      },
      {
        title: '24/7 AI Triage Concierge Response',
        value: '< 1.2 Sec',
        subtext: 'Autonomous Patient Assistance',
        standard: 'Multi-lingual triage, instant booking & symptom sorting'
      }
    ]
  }
];

export function TechSpecs() {
  const [activeTab, setActiveTab] = useState('diagnostics');
  const currentCategory = SPEC_CATEGORIES.find((c) => c.id === activeTab) || SPEC_CATEGORIES[0];

  return (
    <section id="specs" className="py-24 bg-background relative overflow-hidden border-b border-primary/10">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none opacity-30" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                Technical Specifications // Lumina V2.8
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground uppercase tracking-tight">
              Clinical <span className="text-primary italic font-light">Specifications.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left md:text-right"
          >
            <p className="text-xs font-mono text-foreground/50 uppercase tracking-widest mb-1">
              Validation Protocol: Certified ISO 13485
            </p>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 text-[10px] font-mono font-bold uppercase tracking-widest rounded-full">
              <Activity className="w-3 h-3" /> All Systems Verified
            </span>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {SPEC_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden group ${
                  isActive
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]'
                    : 'bg-muted/30 border-primary/10 text-foreground hover:border-primary/40 hover:bg-muted/60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <Icon className={`w-5 h-5 ${isActive ? 'text-primary-foreground' : 'text-primary'}`} />
                  <span className={`text-[9px] font-mono uppercase tracking-widest ${isActive ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                    0{SPEC_CATEGORIES.indexOf(cat) + 1}
                  </span>
                </div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-tight">{cat.name}</h4>
                <p className={`text-[9px] font-mono mt-1 ${isActive ? 'text-primary-foreground/70' : 'text-primary/70'}`}>
                  {cat.badge}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Description Banner */}
            <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest block mb-1">
                  Architecture Overview // {currentCategory.name}
                </span>
                <p className="text-sm text-foreground/70 max-w-2xl font-sans">
                  {currentCategory.description}
                </p>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-xs font-bold uppercase tracking-widest border-primary/30 hover:bg-primary/10 text-primary flex-shrink-0"
                asChild
              >
                <a href="#appointment">Schedule Lab Consultation</a>
              </Button>
            </div>

            {/* Spec Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {currentCategory.specs.map((spec, idx) => (
                <Card
                  key={spec.title}
                  className="p-6 bg-background border border-primary/15 rounded-xl hover:border-primary/40 transition-all hover:shadow-lg hover:shadow-primary/5 relative group overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
                      PARAMETER #{idx + 1}
                    </span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 text-[9px] font-mono font-bold uppercase rounded">
                      Standard
                    </span>
                  </div>

                  <h4 className="text-base font-heading font-bold text-foreground mb-3 uppercase tracking-tight">
                    {spec.title}
                  </h4>

                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-3xl font-heading font-black text-primary tracking-tight">
                      {spec.value}
                    </span>
                    <span className="text-xs font-mono text-foreground/60 uppercase">
                      {spec.subtext}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-primary/10 flex items-center gap-2 text-xs font-sans text-muted-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                    <span>{spec.standard}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Comparative Benchmarks */}
            <div className="p-6 bg-muted/30 border border-primary/10 rounded-2xl overflow-x-auto">
              <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-primary" />
                Performance Benchmark Comparison
              </h4>
              <table className="w-full text-xs font-mono text-left">
                <thead>
                  <tr className="border-b border-primary/10 text-muted-foreground uppercase text-[10px]">
                    <th className="py-2.5 px-3">Protocol Metric</th>
                    <th className="py-2.5 px-3 text-primary font-bold">Lumina Precision V2.8</th>
                    <th className="py-2.5 px-3">Industry Standard</th>
                    <th className="py-2.5 px-3 text-right">Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary/5 text-foreground/80">
                  <tr>
                    <td className="py-3 px-3 font-sans font-medium text-foreground">Diagnostic Imaging Accuracy</td>
                    <td className="py-3 px-3 text-primary font-bold">0.01 mm (10 microns)</td>
                    <td className="py-3 px-3 text-muted-foreground">0.15 - 0.25 mm</td>
                    <td className="py-3 px-3 text-emerald-500 font-bold text-right">+1500% Precision</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-sans font-medium text-foreground">Prosthetic Fabrication Turnaround</td>
                    <td className="py-3 px-3 text-primary font-bold">Single-Visit (&lt; 45 Mins)</td>
                    <td className="py-3 px-3 text-muted-foreground">10 - 14 Days (Offsite)</td>
                    <td className="py-3 px-3 text-emerald-500 font-bold text-right">Instant Same-Day</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-sans font-medium text-foreground">Surgical Placement Bio-Integration</td>
                    <td className="py-3 px-3 text-primary font-bold">99.8% Success Rate</td>
                    <td className="py-3 px-3 text-muted-foreground">92 - 95% Average</td>
                    <td className="py-3 px-3 text-emerald-500 font-bold text-right">Near-Zero Failure</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 font-sans font-medium text-foreground">Patient Support Availability</td>
                    <td className="py-3 px-3 text-primary font-bold">24/7 Live AI + On-Call Surgeon</td>
                    <td className="py-3 px-3 text-muted-foreground">Business Hours Only</td>
                    <td className="py-3 px-3 text-emerald-500 font-bold text-right">Always Accessible</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
