import { motion } from 'motion/react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'How often should I visit the dentist?',
    answer: 'For most patients, we recommend a routine checkup and cleaning every 6 months. This allows us to catch potential issues early and maintain your professional hygiene.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer: 'Yes, we accept most major PPO insurance plans. Our team will handle all the paperwork for you to ensure you get the maximum benefits from your coverage.',
  },
  {
    question: 'Are dental implants painful?',
    answer: 'With modern local anesthesia and sedation options, patients typically feel very little discomfort during the procedure. Most patients report only mild soreness for a few days after.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer: 'If you experience severe pain, a knocked-out tooth, or heavy bleeding, call our emergency line immediately at (555) 123-4567. We prioritize emergency cases for same-day treatment.',
  },
  {
    question: 'How long does professional teeth whitening last?',
    answer: 'Results typically last from 6 months to 2 years depending on your habits (coffee, smoking, etc.). We also provide touch-up kits to help maintain your brightness at home.',
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
               <div className="h-[2px] w-12 bg-primary" />
               <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Information Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 uppercase leading-none">
              Inquiry <span className="text-primary italic font-light tracking-tight">Resolution.</span>
            </h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-foreground/50 text-xs font-mono max-w-xs mb-2 uppercase tracking-tighter"
          >
            Accessing database: Knowledge_Base.v1.2 // Parsing common queries
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-background border border-primary/10 rounded-sm px-8 shadow-none overflow-hidden hover:border-primary/40 transition-all group"
              >
                <AccordionTrigger className="text-left text-sm font-heading font-bold uppercase tracking-tight py-6 hover:no-underline text-foreground group-data-[state=open]:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/60 text-sm leading-relaxed pb-6 border-t border-primary/5 pt-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <div className="mt-16 p-8 bg-primary/5 border border-primary/10 rounded-sm text-center">
           <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary/50 mb-4">Still have inquiries?</p>
           <Button variant="outline" size="sm" className="rounded-none text-[10px] font-bold uppercase tracking-widest px-8" asChild>
             <a href="#contact">Initialize Support Protocol</a>
           </Button>
        </div>
      </div>
    </section>
  );
}
