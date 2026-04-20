import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background border-t border-primary/5">
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
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Location Protocol</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 uppercase leading-none">
              Nexus <span className="text-primary italic font-light tracking-tight">Coordinates.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-foreground/50 text-xs font-mono max-w-xs mb-2 uppercase tracking-tighter"
          >
            Signal strength: Optimal // Geographic lock established
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Phone, label: 'Voice Transmission', value: '+1 (555) 880-9900', sub: '24/7 Response' },
                { icon: MapPin, label: 'Physical Vector', value: '722 Tech Plaza', sub: 'New York, NY 10012' },
                { icon: Mail, label: 'Data Exchange', value: 'ops@lumina.dental', sub: 'Encrypted' },
                { icon: Clock, label: 'Uptime', value: '08:00 - 20:00', sub: 'Mon - Sat' },
              ].map((item, i) => (
                <div key={i} className="p-6 bg-background border border-primary/10 rounded-sm hover:border-primary/40 transition-all group">
                   <div className="w-10 h-10 rounded-sm bg-primary/5 flex items-center justify-center text-primary mb-4 border border-primary/10 group-hover:bg-primary group-hover:text-white transition-all">
                      <item.icon className="w-5 h-5" />
                   </div>
                   <p className="text-[9px] font-mono font-bold text-primary/50 uppercase tracking-widest mb-1">{item.label}</p>
                   <p className="text-sm font-heading font-bold text-foreground uppercase tracking-tight">{item.value}</p>
                   <p className="text-[10px] text-foreground/40 mt-1 font-mono">{item.sub}</p>
                </div>
              ))}
            </div>

            <div className="aspect-video w-full rounded-sm overflow-hidden border border-primary/10 relative grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 shadow-2xl shadow-primary/5">
               <img 
                 src="https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=1000" 
                 alt="Map Placeholder" 
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-primary/20 pointer-events-none mix-blend-overlay" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 border border-primary/10 bg-background rounded-sm relative overflow-hidden"
          >
            {/* Corner Deco */}
            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/20" />
            
            <h3 className="text-2xl font-heading font-bold text-foreground mb-8 uppercase tracking-tighter italic">Direct Query</h3>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Subject ID [Name]</label>
                <div className="relative">
                   <Input className="bg-primary/5 border border-primary/10 h-12 text-xs font-mono rounded-none focus:border-primary transition-colors uppercase" placeholder="SURNAME, GIVEN" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Data Vector [Email]</label>
                <Input className="bg-primary/5 border border-primary/10 h-12 text-xs font-mono rounded-none focus:border-primary transition-colors uppercase" placeholder="EMAIL@DOMAIN.COM" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-primary uppercase tracking-widest">Query Payload [Notes]</label>
                <Textarea className="min-h-[150px] bg-primary/5 border border-primary/10 p-4 text-xs font-mono rounded-none focus:border-primary transition-colors uppercase resize-none" placeholder="INPUT DATA..."></Textarea>
              </div>
              <Button className="w-full h-14 bg-primary hover:bg-primary/90 text-[10px] font-bold uppercase tracking-[0.4em] rounded-none shadow-xl shadow-primary/20">
                Transmit Query
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
