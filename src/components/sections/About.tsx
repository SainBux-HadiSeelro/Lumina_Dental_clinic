import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Modern Pain-Free Technology',
  'Experienced Medical Team',
  'Comfortable & Relaxing Environment',
  'Comprehensive Post-Care Support',
  'Flexible Appointment Scheduling',
  'Insurance & Financing Options'
];

export function About() {
  return (
    <section id="about" className="py-24 overflow-hidden border-b border-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-sm overflow-hidden border border-primary/20 relative group">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Clinic Laboratory Infrastructure" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              
              {/* Overlay Stats */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-background/90 backdrop-blur-xl border border-primary/20 rounded-sm">
                 <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                       <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-1 font-mono">Platform</p>
                       <p className="text-xl font-heading font-bold text-foreground italic">LUMINA L1</p>
                    </div>
                    <div className="border-l border-primary/10">
                       <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-1 font-mono">Sync Rate</p>
                       <p className="text-xl font-heading font-bold text-foreground">1.2ms</p>
                    </div>
                 </div>
              </div>

              {/* Lab Scanner Decoration */}
              <div className="absolute top-1/2 left-0 w-full h-[1px] bg-primary/40 animate-pulse pointer-events-none" />
            </div>
            
            {/* Tech Decoration */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-primary" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
               <div className="h-[2px] w-8 bg-primary" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Core Philosophy</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-8 uppercase">
              Biological <br />
              <span className="text-primary italic font-light tracking-tight">Integration.</span>
            </h2>
            
            <div className="space-y-6 text-foreground/60 leading-relaxed mb-10">
              <p>
                Founded on the intersection of regenerative medicine and architectural aesthetics, 
                Lumina Dental represents a departure from traditional clinical models.
              </p>
              <p>
                We view each patient case as a unique engineering challenge, utilizing 
                3D mapping and bio-compatible materials to ensure long-term structural integrity.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                'Digital Smile Design (DSD)',
                'Laser Biostimulation',
                'Micro-Invasive Protocols',
                'Zero-Metal Architecture',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 group">
                   <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                   <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <Button className="h-12 px-8 text-[10px] font-bold uppercase tracking-[0.2em] rounded-none group" variant="outline">
               Read Whitepaper 
               {/* Arrow icon would be better if imported, but I will skip for now to avoid unused imports */}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
