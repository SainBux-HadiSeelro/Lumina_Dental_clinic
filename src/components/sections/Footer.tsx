import { Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-primary/20 pt-24 pb-12 overflow-hidden relative">
      {/* Technical Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--primary),0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--primary),0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-10 h-10 border-2 border-primary flex items-center justify-center font-heading font-bold text-primary group-hover:bg-primary group-hover:text-white transition-all">
                <span className="text-xl">L</span>
              </div>
              <span className="text-2xl font-heading font-bold tracking-tight text-foreground uppercase">Lumina <span className="text-primary/70">Dental.</span></span>
            </a>
            <p className="text-foreground/50 text-xs leading-relaxed mb-8 uppercase tracking-tighter">
              [SYSTEM_PROFILE]: BIOLOGICAL_ENGINEERING <br />
              EST. 2012 // CORE_LOCATION: NYC_COORD <br />
              PRECISION_AESTHETICS // ACTIVE
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
             <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Directories</h4>
             <ul className="space-y-4">
               {['Capabilities', 'Philosophy', 'Elite_Unit', 'Case_Logs', 'Portal'].map((item) => (
                 <li key={item}>
                   <a href={`#${item.toLowerCase()}`} className="text-foreground/40 hover:text-primary text-[11px] font-mono uppercase tracking-[0.1em] transition-colors flex items-center gap-2 group">
                     <div className="w-1 h-1 bg-primary group-hover:scale-150 transition-transform" />
                     {item}
                   </a>
                 </li>
               ))}
             </ul>
           </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Operational_Hours</h4>
            <ul className="space-y-6">
              {[
                { days: 'Shift_001 (MON-FRI)', time: '08:00 - 20:00' },
                { days: 'Shift_002 (SATURDAY)', time: '09:00 - 15:00' },
              ].map((hour) => (
                <li key={hour.days} className="text-xs">
                  <span className="text-primary/40 block text-[9px] uppercase font-bold mb-1 font-mono tracking-tighter">{hour.days}</span>
                  <span className="text-foreground/80 font-heading font-bold tracking-widest">{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-8">Base_Coordinates</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/50 text-[11px] leading-relaxed uppercase tracking-tighter">
                  722 Tech Plaza, Level 4<br />
                  Mission district, NYC 10012
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/50 text-[11px] uppercase font-mono tracking-tighter">(555) 880-9900</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground/50 text-[11px] uppercase font-mono tracking-tighter">connect@lumina.dental</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-foreground/30 font-mono uppercase tracking-[0.2em]">
          <p>© 2024 LUMINA_DENTAL_SYSTEM. ALL_RIGHTS_RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">SECURITY_POLICY</a>
            <a href="#" className="hover:text-primary transition-colors">USER_AGREEMENT</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
