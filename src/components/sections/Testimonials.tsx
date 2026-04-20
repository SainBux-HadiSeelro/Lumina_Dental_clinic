import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Emily Thompson',
    role: 'Patient since 2018',
    content: 'The most comfortable dental experience I have ever had. The staff is incredibly gentle and the technology they use is fascinating. No more fear of the dentist!',
    rating: 5,
  },
  {
    name: 'Michael Peterson',
    role: 'Invisalign Patient',
    content: 'I was hesitant about adult braces, but Lumina made the entire process so easy. Dr. James is amazing and the results are better than I could have imagined.',
    rating: 5,
  },
  {
    name: 'Sophia Williams',
    role: 'Cosmetic Patient',
    content: 'Came in for teeth whitening and left with a completely new level of confidence. The clinic is beautiful and feels more like a spa than a medical office.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-background border-y border-primary/5">
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
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Biometric Validation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 uppercase leading-none">
              Patient <span className="text-primary italic font-light tracking-tight">Case Logs.</span>
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-right"
          >
            <div className="flex items-center justify-end gap-2 mb-2">
              <div className="flex gap-0.5 text-primary">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-xl font-heading font-bold text-foreground">4.9</span>
            </div>
            <p className="text-[10px] font-mono text-foreground/40 uppercase tracking-widest">Aggregate Score // 1.2k+ Entries</p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border border-primary/10 rounded-sm bg-background p-8 flex flex-col justify-between group relative overflow-hidden shadow-none">
                <div className="relative z-10">
                   <div className="flex gap-0.5 text-primary mb-8 opacity-50">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm font-sans text-foreground/70 mb-10 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-4 pt-6 border-t border-primary/5 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary border border-primary/10 text-xs font-mono">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-xs font-heading font-bold text-foreground uppercase tracking-wider">{testimonial.name}</p>
                    <p className="text-[9px] text-primary font-mono font-bold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>

                {/* Tech ID Label */}
                <div className="absolute top-2 right-2 font-mono text-[9px] text-primary/10 font-bold uppercase tracking-widest">
                   #LOG_{index + 901}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
