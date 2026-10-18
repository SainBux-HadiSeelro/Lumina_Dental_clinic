import { useState, useRef, MouseEvent, TouchEvent } from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeftRight, CheckCircle, Calendar, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  duration: string;
  doctor: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
  metric: string;
  metricLabel: string;
  description: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Laser Whitening & Biomimetic Veneers',
    category: 'Cosmetic Dentistry',
    duration: '2 Sessions (45 min each)',
    doctor: 'Dr. Sarah Lumina',
    beforeImage: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200',
    beforeLabel: 'Baseline Pre-Op',
    afterLabel: 'Post-Laser Restored',
    metric: '+8 Shades',
    metricLabel: 'Enamel Brightness',
    description: 'Patient presented with severe tetracycline staining and micro-enamel fractures. Restored with dual Nd:YAG laser whitening and ultra-thin 0.2mm zirconia veneers.'
  },
  {
    id: 'case-2',
    title: 'Precision 3D Clear Aligners',
    category: 'Orthodontics',
    duration: '6 Months',
    doctor: 'Dr. James Chen',
    beforeImage: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&q=80&w=1200',
    beforeLabel: 'Initial Misalignment',
    afterLabel: 'Ideal Occlusion',
    metric: '100% Symmetrical',
    metricLabel: 'Arch Alignment',
    description: 'Class II crowding and deep bite corrected using 24 sets of custom 3D printed polymer aligners with weekly digital photogrammetry tracking.'
  },
  {
    id: 'case-3',
    title: 'Guided Zirconia Implant Restoration',
    category: 'Oral Surgery & Implants',
    duration: 'Same-Day Placement',
    doctor: 'Dr. Elena Rossi',
    beforeImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200',
    afterImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    beforeLabel: 'Edentulous Site',
    afterLabel: 'Integrated Implant',
    metric: '99.8%',
    metricLabel: 'Osseointegration',
    description: 'Minimally invasive computer-guided pilot drilling with immediate robotic ceramic crown loading for instantaneous bite restoration.'
  }
];

export function SmileTransformation() {
  const [activeCase, setActiveCase] = useState<CaseStudy>(CASES[0]);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) handleMove(e.touches[0].clientX);
  };

  return (
    <section id="transformation" className="py-24 bg-muted/20 border-b border-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                Interactive Smile Simulator // Live Results
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground uppercase tracking-tight">
              Clinical <span className="text-primary italic font-light">Transformations.</span>
            </h2>
          </motion.div>

          <p className="text-xs font-mono text-foreground/60 max-w-sm uppercase">
            Drag the interactive slider left & right to inspect authentic pre-op and post-op biological restorations.
          </p>
        </div>

        {/* Case Study Selector Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {CASES.map((cs) => (
            <button
              key={cs.id}
              onClick={() => {
                setActiveCase(cs);
                setSliderPosition(50);
              }}
              className={`px-5 py-3 rounded-xl border text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activeCase.id === cs.id
                  ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-105'
                  : 'bg-background border-primary/15 text-foreground/80 hover:border-primary/40 hover:text-primary'
              }`}
            >
              {cs.title}
            </button>
          ))}
        </div>

        {/* Main Comparison Area */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Comparison Slider (8 cols) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-primary/30 shadow-2xl select-none cursor-ew-resize bg-black"
            >
              {/* After Image (Background) */}
              <img
                src={activeCase.afterImage}
                alt="After treatment result"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full backdrop-blur-md shadow-md z-10">
                {activeCase.afterLabel}
              </div>

              {/* Before Image (Clipped by slider percentage) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPosition}%` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt="Before treatment condition"
                  className="absolute inset-0 w-full h-full object-cover filter contrast-90 brightness-95"
                  style={{
                    width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                    maxWidth: 'none'
                  }}
                />
                <div className="absolute top-4 left-4 bg-background/90 text-foreground text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full backdrop-blur-md border border-primary/20 shadow-md">
                  {activeCase.beforeLabel}
                </div>
              </div>

              {/* Divider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground border-2 border-white shadow-xl flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Interaction Hint */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white/80 text-[10px] font-mono px-3 py-1 rounded-full pointer-events-none">
                ◀ Drag to inspect transformation ▶
              </div>
            </div>
          </div>

          {/* Case Study Details (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-background border border-primary/20 rounded-2xl shadow-sm space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest px-2.5 py-1 bg-primary/10 rounded-full">
                  {activeCase.category}
                </span>
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold uppercase tracking-tight text-foreground">
                  {activeCase.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground mt-1">
                  Lead Specialist: {activeCase.doctor}
                </p>
              </div>

              <p className="text-xs font-sans text-foreground/70 leading-relaxed">
                {activeCase.description}
              </p>

              <div className="grid grid-cols-2 gap-4 py-4 border-y border-primary/10">
                <div>
                  <span className="text-[9px] font-mono uppercase text-muted-foreground block mb-1">
                    Timeline
                  </span>
                  <p className="text-xs font-heading font-bold text-foreground">
                    {activeCase.duration}
                  </p>
                </div>
                <div>
                  <span className="text-[9px] font-mono uppercase text-muted-foreground block mb-1">
                    {activeCase.metricLabel}
                  </span>
                  <p className="text-xl font-heading font-black text-primary">
                    {activeCase.metric}
                  </p>
                </div>
              </div>

              <Button
                className="w-full h-12 text-xs font-bold uppercase tracking-widest bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
                asChild
              >
                <a href="#appointment">Book Smile Consultation</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
