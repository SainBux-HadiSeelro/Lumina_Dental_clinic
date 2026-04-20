import { motion } from 'motion/react';
import { Microscope, Zap, ShieldCheck, Activity } from 'lucide-react';

const specs = [
  { label: 'Diagnostic Precision', value: '0.01mm' },
  { label: 'Fiber-Optic Bandwidth', value: '10 Gbps' },
  { label: 'Sterility Grade', value: 'Class 100' },
  { label: 'Bio-Integration', value: '99.9%' },
];

export function ClinicLab() {
  return (
    <section id="laboratory" className="py-24 bg-background overflow-hidden border-b border-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-primary" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">In-House Infrastructure</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground leading-[1.1] mb-8 uppercase">
              The Clinic <br />
              <span className="text-primary italic font-light tracking-tight">Laboratory.</span>
            </h2>
            
            <p className="text-foreground/60 leading-relaxed mb-10 max-w-lg">
              Our on-site laboratory represents the technological core of Lumina Dental. 
              By integrating advanced dental engineering directly into the clinical space, 
              we maintain total control over prosthetic quality and restorative precision.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
               {specs.map((spec) => (
                 <div key={spec.label}>
                    <p className="text-[10px] font-bold text-primary/50 uppercase tracking-widest mb-1 font-mono">{spec.label}</p>
                    <p className="text-2xl font-heading font-bold text-foreground">{spec.value}</p>
                 </div>
               ))}
            </div>

            <div className="space-y-4">
               {[
                 { icon: Microscope, text: 'Micro-Invasive Diagnostic Scanning' },
                 { icon: Zap, text: 'Rapid Prototyping Phase 1-3' },
                 { icon: Activity, text: 'Real-time Biological Monitoring' },
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 py-3 border-t border-primary/5">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-xs font-bold uppercase tracking-widest text-foreground/80">{item.text}</span>
                 </div>
               ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="grid grid-cols-12 gap-4">
               <div className="col-span-8">
                  <div className="aspect-square rounded-sm overflow-hidden border border-primary/20 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1500" 
                      alt="Primary Laboratory Unit" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                    <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-primary/20 p-3 rounded-sm">
                       <p className="text-[9px] font-mono font-bold text-primary uppercase">Main_Frame_A1</p>
                    </div>
                  </div>
               </div>
               <div className="col-span-4 flex flex-col gap-4">
                  <div className="aspect-square rounded-sm overflow-hidden border border-primary/20 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" 
                      alt="Laboratory Analysis" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                  </div>
                  <div className="aspect-square rounded-sm overflow-hidden border border-primary/20 relative group bg-primary p-6 flex flex-col justify-end">
                     <span className="text-[10px] font-bold text-white/50 uppercase tracking-[0.3em] mb-2 font-mono">Status:</span>
                     <span className="text-xl font-heading font-bold text-white uppercase italic">Optimal</span>
                     <div className="absolute top-0 right-0 w-16 h-16 border-t font-mono text-[8px] text-white/20 p-2 flex justify-end">
                        #SYS_77
                     </div>
                  </div>
               </div>
               <div className="col-span-12">
                  <div className="aspect-[21/9] rounded-sm overflow-hidden border border-primary/20 relative group mt-4">
                    <img 
                      src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1500" 
                      alt="Clinic Lab Overview" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />
                    <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-md border border-primary/20 px-4 py-2 rounded-sm">
                       <div className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                          <span className="text-[10px] font-bold text-foreground uppercase tracking-widest">Active_Environment_Sync</span>
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Technical Accents */}
            <div className="absolute -top-10 -right-10 w-40 h-40 border-t border-r border-primary/10 pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-b border-l border-primary/10 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
