import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShieldCheck, Calendar, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Technical Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="md:col-span-7"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 border border-primary/20 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold mb-8">
               <span className="w-2 h-2 bg-primary animate-pulse rounded-full" />
               Precision Clinical Lab // V2.4
            </div>
            
            <h1 className="text-6xl md:text-8xl font-heading font-bold tracking-tighter text-foreground leading-[0.9] mb-8 uppercase">
               Next-Gen <br />
               <span className="text-primary tracking-[-0.05em] block">Dental Care.</span>
            </h1>
            
            <p className="text-lg text-foreground/60 mb-12 max-w-xl leading-relaxed font-sans border-l-2 border-primary/20 pl-6">
              Harnessing advanced digital diagnostic imaging and biological restoration 
              to provide a level of precision previously impossible. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button size="lg" className="h-14 px-10 text-xs font-bold uppercase tracking-[0.2em] rounded-none bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 group" asChild>
                <a href="#appointment">
                  Initialize Booking
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 text-xs font-bold uppercase tracking-[0.2em] rounded-none border-primary/20 text-foreground hover:bg-primary/5" asChild>
                <a href="#services">
                  Case Studies
                </a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-primary/10 max-w-lg">
               <div>
                  <p className="text-[10px] font-bold text-primary/50 uppercase tracking-widest mb-1 font-mono">Accuracy</p>
                  <p className="text-2xl font-heading font-bold text-foreground">99.8%</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold text-primary/50 uppercase tracking-widest mb-1 font-mono">Digital-Twin</p>
                  <p className="text-2xl font-heading font-bold text-foreground">Active</p>
               </div>
               <div>
                  <p className="text-[10px] font-bold text-primary/50 uppercase tracking-widest mb-1 font-mono">Patient-ID</p>
                  <p className="text-2xl font-heading font-bold text-foreground">50k+</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 relative"
          >
             {/* Tech Frame */}
             <div className="relative z-10 aspect-square rounded-[2rem] overflow-hidden border border-primary/20 bg-muted">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000" 
                  alt="Modern Dental Lab" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
             </div>
             {/* Decorative Accents */}
             <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-primary/40 rounded-tr-3xl" />
             <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-primary/40 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
