import { motion } from 'motion/react';
import { 
  Stethoscope, 
  Sparkles, 
  Smile, 
  ShieldCheck, 
  Zap, 
  Microscope,
  ArrowRight
} from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const services = [
  {
    title: 'General Dentistry',
    description: 'Routine checkups, cleanings, and preventative care to keep your smile healthy.',
    icon: Stethoscope,
    color: 'bg-blue-500/10 text-blue-600',
  },
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments that can brighten your smile by several shades.',
    icon: Sparkles,
    color: 'bg-yellow-500/10 text-yellow-600',
  },
  {
    title: 'Braces & Orthodontics',
    description: 'Modern solutions like Invisalign and clear braces for perfect alignment.',
    icon: Smile,
    color: 'bg-purple-500/10 text-purple-600',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking solutions for missing teeth using the latest tech.',
    icon: Zap,
    color: 'bg-emerald-500/10 text-emerald-600',
  },
  {
    title: 'Oral Surgery',
    description: 'Safe and comfortable surgical procedures including wisdom teeth removal.',
    icon: Microscope,
    color: 'bg-red-500/10 text-red-600',
  },
  {
    title: 'Emergency Care',
    description: 'Urgent dental assistance available 24/7 for pain relief and repairs.',
    icon: ShieldCheck,
    color: 'bg-primary/10 text-primary',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background border-y border-primary/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[2px] w-12 bg-primary" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Capabilities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground leading-none uppercase">
              Clinical <span className="text-primary">Architecture.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-foreground/50 text-sm max-w-sm mb-2 font-mono leading-relaxed"
          >
            [SYSTEM_STATUS: OPTIMIZED] <br />
            Our core protocols integrate biological engineering with precision aesthetics.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden bg-background border border-primary/10 rounded-sm p-8 h-full hover:border-primary/40 transition-all duration-500 shadow-none">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                   <service.icon className="w-16 h-16" />
                </div>
                
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-sm flex items-center justify-center text-primary mb-8 border border-primary/20 bg-primary/5`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  
                  <h3 className="text-xl font-heading font-bold text-foreground mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-foreground/50 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>
                  
                  <a 
                    href="#appointment" 
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary group/link border-b border-primary/20 pb-1"
                  >
                    Enter Protocol
                    <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                  </a>
                </div>

                {/* Technical corner accent */}
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
