import { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Check, ArrowRight, Shield, CreditCard, DollarSign, Clock, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface TreatmentOption {
  id: string;
  name: string;
  baseCostMin: number;
  baseCostMax: number;
  visits: string;
  duration: string;
  description: string;
}

const TREATMENTS: TreatmentOption[] = [
  {
    id: 'general',
    name: 'Diagnostic Scan & Deep Hygiene',
    baseCostMin: 140,
    baseCostMax: 220,
    visits: '1 Visit',
    duration: '45 mins',
    description: '3D optical scan, periodontal pocket charting, ultrasonic scaling, and biomimetic fluoride shield.'
  },
  {
    id: 'whitening',
    name: 'Laser Biophotonic Whitening',
    baseCostMin: 380,
    baseCostMax: 650,
    visits: '1 Session',
    duration: '60 mins',
    description: 'Cold laser activation lightening enamel by 6-8 shades with zero pulp sensitivity.'
  },
  {
    id: 'braces',
    name: '3D Clear Aligners / Orthodontics',
    baseCostMin: 2400,
    baseCostMax: 4600,
    visits: '4 - 8 Check-ins',
    duration: '4 - 9 Months',
    description: 'Complete set of digital photogrammetry aligners with weekly AI progress monitoring.'
  },
  {
    id: 'implants',
    name: 'Robotic Zirconia / Titanium Implant',
    baseCostMin: 1800,
    baseCostMax: 3200,
    visits: '2 Visits',
    duration: 'Same-day crown option',
    description: '0.01mm guided computer placement with lifetime manufacturer structural warranty.'
  },
  {
    id: 'surgery',
    name: 'Micro-Invasive Oral Surgery',
    baseCostMin: 450,
    baseCostMax: 1100,
    visits: '1 Visit + 1 Follow-up',
    duration: '45 - 90 mins',
    description: 'Gentle wisdom tooth removal or bone grafting under computer-regulated local anesthesia.'
  }
];

export function CostEstimator() {
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentOption>(TREATMENTS[1]);
  const [insuranceType, setInsuranceType] = useState<'ppo' | 'carecredit' | 'none'>('ppo');
  const [units, setUnits] = useState(1);

  // Insurance coverage calculation
  let coverageDiscount = 0; // percentage
  if (insuranceType === 'ppo') {
    coverageDiscount = selectedTreatment.id === 'general' ? 0.75 : 0.45;
  } else if (insuranceType === 'carecredit') {
    coverageDiscount = 0.15; // special clinic partner rebate
  }

  const rawMin = selectedTreatment.baseCostMin * units;
  const rawMax = selectedTreatment.baseCostMax * units;
  const outOfPocketMin = Math.round(rawMin * (1 - coverageDiscount));
  const outOfPocketMax = Math.round(rawMax * (1 - coverageDiscount));
  const estimatedMonthly = Math.round(outOfPocketMin / 12);

  return (
    <section id="cost-estimator" className="py-24 bg-background border-b border-primary/10 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Calculator className="w-4 h-4 text-primary" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                Transparent Pricing // Cost Estimator
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground uppercase tracking-tight">
              Treatment <span className="text-primary italic font-light">Estimator.</span>
            </h2>
          </motion.div>

          <p className="text-xs font-mono text-foreground/60 max-w-sm uppercase">
            Calculate upfront transparent costs with live insurance coverage estimations and 0% APR financing terms.
          </p>
        </div>

        {/* Estimator Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Treatment Selection */}
            <div>
              <label className="text-xs font-heading font-bold uppercase tracking-wider text-foreground block mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-mono">1</span>
                Select Procedure Protocol
              </label>
              <div className="space-y-2.5">
                {TREATMENTS.map((t) => {
                  const isSelected = selectedTreatment.id === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setSelectedTreatment(t)}
                      className={`w-full p-4 rounded-xl border text-left transition-all flex items-center justify-between group ${
                        isSelected
                          ? 'bg-primary/10 border-primary text-foreground shadow-md'
                          : 'bg-muted/20 border-primary/10 text-foreground/80 hover:border-primary/40 hover:bg-muted/40'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-heading font-bold uppercase tracking-tight text-foreground">
                            {t.name}
                          </h4>
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1 font-sans">
                          {t.description}
                        </p>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        <span className="text-xs font-heading font-bold text-primary block">
                          ${t.baseCostMin} - ${t.baseCostMax}
                        </span>
                        <span className="text-[9px] font-mono text-muted-foreground uppercase">
                          {t.visits}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Units / Scope */}
            {selectedTreatment.id === 'implants' && (
              <div>
                <label className="text-xs font-heading font-bold uppercase tracking-wider text-foreground block mb-3 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-mono">2</span>
                  Number of Implant Units
                </label>
                <div className="flex gap-3">
                  {[1, 2, 3, 4].map((num) => (
                    <button
                      key={num}
                      onClick={() => setUnits(num)}
                      className={`px-6 py-2.5 rounded-lg border text-xs font-mono font-bold transition-all ${
                        units === num
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-muted/30 border-primary/15 text-foreground/80 hover:border-primary/40'
                      }`}
                    >
                      {num} {num === 1 ? 'Tooth' : 'Teeth'}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Insurance Plan */}
            <div>
              <label className="text-xs font-heading font-bold uppercase tracking-wider text-foreground block mb-3 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-[10px] flex items-center justify-center font-mono">
                  {selectedTreatment.id === 'implants' ? '3' : '2'}
                </span>
                Insurance & Payment Method
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'ppo', label: 'Major PPO Insurance', sub: 'Up to 75% Coverage' },
                  { id: 'carecredit', label: 'CareCredit / 0% APR', sub: 'Flexible 12-24 Mo' },
                  { id: 'none', label: 'Self-Pay / Direct', sub: 'Standard Pricing' },
                ].map((ins) => (
                  <button
                    key={ins.id}
                    onClick={() => setInsuranceType(ins.id as 'ppo' | 'carecredit' | 'none')}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      insuranceType === ins.id
                        ? 'bg-primary text-primary-foreground border-primary shadow-md'
                        : 'bg-muted/20 border-primary/10 text-foreground/80 hover:border-primary/40'
                    }`}
                  >
                    <p className="text-xs font-heading font-bold uppercase tracking-tight">{ins.label}</p>
                    <p className={`text-[9px] font-mono mt-1 ${insuranceType === ins.id ? 'text-primary-foreground/70' : 'text-primary'}`}>
                      {ins.sub}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <Card className="p-8 bg-background border-2 border-primary/30 rounded-2xl shadow-xl shadow-primary/5 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

              <div className="border-b border-primary/10 pb-4">
                <span className="text-[10px] font-mono font-bold text-primary uppercase tracking-widest block mb-1">
                  Estimated Breakdown
                </span>
                <h3 className="text-xl font-heading font-bold uppercase tracking-tight text-foreground">
                  {selectedTreatment.name}
                </h3>
              </div>

              {/* Price Display */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase text-muted-foreground block">
                  Estimated Out-Of-Pocket Investment:
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-heading font-black text-primary tracking-tight">
                    ${outOfPocketMin.toLocaleString()}
                  </span>
                  <span className="text-2xl font-heading font-bold text-foreground/50">
                    - ${outOfPocketMax.toLocaleString()}
                  </span>
                </div>
                {insuranceType === 'ppo' && (
                  <p className="text-[11px] font-mono text-emerald-500 font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Includes estimated insurance co-pay benefits
                  </p>
                )}
              </div>

              {/* Monthly Installment Option */}
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-primary" />
                  <div>
                    <span className="text-xs font-heading font-bold uppercase tracking-tight text-foreground block">
                      Starting at ${estimatedMonthly}/month
                    </span>
                    <span className="text-[10px] font-mono text-muted-foreground">
                      0% APR over 12 months with CareCredit
                    </span>
                  </div>
                </div>
              </div>

              {/* Timeline & Visit details */}
              <div className="grid grid-cols-2 gap-4 py-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <div>
                    <span className="text-muted-foreground block text-[9px]">Chair Time</span>
                    <span className="font-bold text-foreground">{selectedTreatment.duration}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <div>
                    <span className="text-muted-foreground block text-[9px]">Warranty</span>
                    <span className="font-bold text-foreground">Certified Bio-Grade</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <Button
                className="w-full h-14 text-xs font-bold uppercase tracking-[0.2em] bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 group"
                asChild
              >
                <a href="#appointment">
                  Lock In Estimate & Book
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
