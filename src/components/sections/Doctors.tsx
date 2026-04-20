import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Sarah Lumina',
    role: 'Principal Dentist',
    specialty: 'Cosmetic & Restorative',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Dr. James Chen',
    role: 'Orthodontist',
    specialty: 'Clear Aligners & Braces',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
  },
  {
    name: 'Dr. Elena Rossi',
    role: 'Oral Surgeon',
    specialty: 'Implants & Periodontics',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Dr. Michael Bloom',
    role: 'Pediatric Dentist',
    specialty: 'Children Dentistry',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[2px] w-12 bg-primary" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Board of Specialists</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 uppercase">
              Elite <span className="text-primary italic font-light tracking-tight">Clinicians.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-foreground/50 text-xs font-mono max-w-xs mb-2 uppercase tracking-tighter"
          >
            Our team consists of board-certified clinicians specialized in robotic surgery and biological engineering.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden border border-primary/10 rounded-sm bg-background group hover:border-primary/40 transition-all duration-500 shadow-none">
                <div className="aspect-[3/4] relative overflow-hidden bg-muted flex items-center justify-center">
                  {doctor.image ? (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/5 flex flex-col items-center justify-center relative p-8">
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
                       <div className="w-20 h-20 border border-primary/20 rounded-full flex items-center justify-center mb-4 relative">
                          <div className="absolute inset-0 border-t-2 border-primary/40 rounded-full animate-spin [animation-duration:8s]" />
                          <span className="text-2xl font-heading font-bold text-primary/30 uppercase tracking-tighter">{doctor.name[0]}{doctor.name.split(' ').pop()?.[0]}</span>
                       </div>
                       <p className="text-[10px] font-mono text-primary/40 uppercase tracking-widest text-center">Schematic_Only // NO_REF_IMAGE</p>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
                  
                  {/* Tech Tag */}
                  <div className="absolute top-4 left-4 py-1 px-3 bg-background/80 backdrop-blur-md border border-primary/20 rounded-sm">
                     <span className="text-[9px] font-bold text-primary uppercase tracking-widest font-mono">Specialist ID: {index + 101}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-heading font-bold text-foreground uppercase tracking-tight">{doctor.name}</h4>
                      <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em]">{doctor.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-primary/5">
                     <div className="flex gap-4">
                        <a href="#" className="p-1.5 bg-primary/5 rounded-sm text-primary hover:bg-primary hover:text-white transition-all">
                           <Linkedin className="w-4 h-4" />
                        </a>
                     </div>
                     <span className="text-[10px] font-mono text-foreground/40 uppercase tracking-tighter">Status: Active</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
