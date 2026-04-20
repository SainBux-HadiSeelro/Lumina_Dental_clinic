import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'Laboratory', href: '#laboratory' },
  { name: 'About', href: '#about' },
  { name: 'Doctors', href: '#doctors' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        scrolled
          ? 'bg-background/80 backdrop-blur-md py-3 border-border'
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold shadow-[0_0_15px_rgba(var(--primary),0.3)] group-hover:scale-110 transition-all">
             <span className="text-xl tracking-tighter">L</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground uppercase">Lumina <span className="text-primary font-light tracking-[0.2em] ml-1">Dental</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50 hover:text-primary transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-primary/70 mr-4">
            <span className="opacity-50">TEL:</span>
            <span className="font-bold underline decoration-primary/30 underline-offset-4">(555) 777-2020</span>
          </div>
          <Button className="rounded-md px-6 bg-primary hover:bg-primary/90 text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/20" asChild>
            <a href="#appointment">
              Book Portal
            </a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-[0.3em] py-3 border-b border-primary/5 text-foreground/70 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-6 flex flex-col gap-6">
                 <div className="flex items-center gap-3 text-[10px] font-mono text-primary/70 uppercase tracking-widest">
                  <Phone className="w-3 h-3" />
                  <span>Connect // (555) 777-2020</span>
                </div>
                <Button className="w-full h-12 rounded-none text-[10px] font-bold uppercase tracking-[.4em]" asChild onClick={() => setIsOpen(false)}>
                  <a href="#appointment">Initialize Portal</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
