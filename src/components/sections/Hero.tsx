import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Calendar, ArrowRight, Bot, Sparkles, Activity, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-25" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-7"
          >
            {/* High-tech status pills */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 border border-primary/20 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold">
                <span className="w-2 h-2 bg-primary animate-pulse rounded-full" />
                Precision Dental Studio // V2.8
              </div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 border border-emerald-500/20 rounded-full text-[10px] uppercase tracking-widest font-mono font-bold">
                <span className="w-2 h-2 bg-emerald-500 animate-ping rounded-full" />
                24/7 AI Concierge Active
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-bold tracking-tighter text-foreground leading-[0.92] mb-8 uppercase">
              Next-Gen <br />
              <span className="text-primary tracking-[-0.05em] block">Dental Care.</span>
            </h1>
            
            <p className="text-base sm:text-lg text-foreground/70 mb-10 max-w-xl leading-relaxed font-sans border-l-2 border-primary/40 pl-6">
              Harnessing sub-millimeter 3D diagnostic imaging, biomimetic tissue restoration, 
              and 24/7 autonomous AI clinical triage to deliver dental perfection with zero pain.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <Button size="lg" className="h-14 px-8 sm:px-10 text-xs font-bold uppercase tracking-[0.2em] rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 group" asChild>
                <a href="#appointment">
                  Book Instant Visit
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 sm:px-10 text-xs font-bold uppercase tracking-[0.2em] rounded-xl border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary" asChild>
                <a href="#transformation">
                  View Transformations
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="h-14 px-6 text-xs font-bold uppercase tracking-[0.2em] text-primary hover:bg-primary/10 rounded-xl" asChild>
                <a href="#specs">
                  Lab Specs
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-primary/15 max-w-lg">
              <div>
                <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-1 font-mono">Accuracy</p>
                <p className="text-2xl sm:text-3xl font-heading font-black text-foreground">0.01<span className="text-sm font-normal text-primary">mm</span></p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-1 font-mono">Integration</p>
                <p className="text-2xl sm:text-3xl font-heading font-black text-foreground">99.8<span className="text-sm font-normal text-primary">%</span></p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-primary/70 uppercase tracking-widest mb-1 font-mono">Patient Trust</p>
                <p className="text-2xl sm:text-3xl font-heading font-black text-foreground">15k<span className="text-sm font-normal text-primary">+</span></p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
            {/* Tech Frame */}
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden border-2 border-primary/30 bg-muted shadow-2xl shadow-primary/10 group">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Dental Lab & Precision Robotics" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

              {/* Floating Live Telemetry Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-background/90 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-heading font-bold uppercase tracking-wider text-foreground">
                      Cleanroom A1 Active
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-primary font-bold">CLASS 100</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                  <span>Robotic CAD/CAM</span>
                  <span className="text-emerald-500 font-bold">100% Calibrated</span>
                </div>
              </div>

              {/* Top Corner Schematic Badge */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-md border border-primary/20 px-3 py-1.5 rounded-full text-[9px] font-mono font-bold text-primary uppercase">
                #LUMINA_SYS_2026
              </div>
            </div>

            {/* Decorative Cyber Frame Accents */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-2 border-r-2 border-primary/50 rounded-tr-3xl pointer-events-none" />
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-2 border-l-2 border-primary/50 rounded-bl-3xl pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
