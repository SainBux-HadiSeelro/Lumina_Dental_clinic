import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  Calendar, 
  Phone, 
  Volume2, 
  VolumeX, 
  RotateCcw,
  ShieldCheck,
  ChevronDown,
  ArrowUpRight,
  Clock,
  Activity
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
  action?: {
    type: 'link' | 'appointment';
    label: string;
    target: string;
  };
}

const QUICK_PROMPTS = [
  '📅 Book an appointment',
  '💎 Teeth Whitening cost',
  '🔩 Dental Implants guide',
  '🚨 Emergency Pain Relief',
  '👨‍⚕️ Meet Specialists',
  '🏥 Clinic timings & address'
];

const INITIAL_MESSAGES: Message[] = [
  {
    id: 'init-1',
    sender: 'ai',
    text: "Hello! I am LUMINA-AI, your 24/7 Live Clinical Concierge. How can I assist you with your dental health, treatment pricing, or appointment scheduling today?",
    timestamp: 'Just now'
  }
];

// Offline & Intelligent Dental Reasoning Knowledge Base
function getSmartDentalResponse(query: string): { text: string; action?: { type: 'link' | 'appointment'; label: string; target: string } } {
  const q = query.toLowerCase();

  // Booking / Appointment
  if (q.includes('book') || q.includes('appointment') || q.includes('schedule') || q.includes('visit') || q.includes('time') || q.includes('apointment') || q.includes('mulaqat')) {
    return {
      text: "You can book your clinical visit in under 60 seconds through our digital booking portal below. Choose your preferred specialist, treatment type, and time slot (Morning, Afternoon, or Evening).",
      action: {
        type: 'appointment',
        label: 'Open Booking Portal',
        target: '#appointment'
      }
    };
  }

  // Teeth Whitening / Laser
  if (q.includes('white') || q.includes('whitening') || q.includes('bright') || q.includes('color') || q.includes('safaid')) {
    return {
      text: "Our Laser Biophotonic Teeth Whitening procedure brightens teeth by 6 to 8 shades in a single 45-minute session using non-abrasive cold laser light. It is completely enamel-safe and costs between $350 - $650 with results lasting up to 2 years.",
      action: {
        type: 'appointment',
        label: 'Book Whitening Session',
        target: '#appointment'
      }
    };
  }

  // Dental Implants
  if (q.includes('implant') || q.includes('missing') || q.includes('tooth loss') || q.includes('screw') || q.includes('zirconia')) {
    return {
      text: "Lumina Dental specializes in Guided 3D Robotic Implants with Grade-5 Titanium and Bio-compatible Zirconia crowns. Diagnostic tolerance is 0.01mm for a 99.8% bio-integration success rate. Treatment takes 1-2 visits, starting from $1,800 with flexible financing.",
      action: {
        type: 'appointment',
        label: 'Consult Implant Specialist',
        target: '#appointment'
      }
    };
  }

  // Braces / Aligners / Invisalign
  if (q.includes('brace') || q.includes('align') || q.includes('invisalign') || q.includes('crooked') || q.includes('teeth straight')) {
    return {
      text: "We offer next-gen Clear Aligners and Modern Ceramic Braces overseen by Dr. James Chen. Using our 3D Digital Smile Design scanner, you can preview your simulated final smile before starting treatment. Full plans range from $2,400 to $4,800 with 0% interest monthly installments.",
      action: {
        type: 'appointment',
        label: 'Get 3D Smile Scan',
        target: '#appointment'
      }
    };
  }

  // Emergency / Pain / Urgent
  if (q.includes('emergency') || q.includes('pain') || q.includes('hurt') || q.includes('ache') || q.includes('blood') || q.includes('broken') || q.includes('dard')) {
    return {
      text: "🚨 IMMEDIATE EMERGENCY CARE: If you are experiencing severe dental trauma, acute pain, or bleeding, our 24/7 emergency unit is standing by. Call our priority triage line immediately at (555) 777-2020 or visit 722 Tech Plaza directly for same-day walk-in care.",
      action: {
        type: 'link',
        label: 'Emergency Hotline: (555) 777-2020',
        target: 'tel:5557772020'
      }
    };
  }

  // Doctors / Specialists
  if (q.includes('doctor') || q.includes('dentist') || q.includes('specialist') || q.includes('sarah') || q.includes('james') || q.includes('elena') || q.includes('chen')) {
    return {
      text: "Our Clinical Board includes:\n• Dr. Sarah Lumina - Principal Dentist (Cosmetic & Biomimetic Restorative)\n• Dr. James Chen - Orthodontist (Clear Aligners & Craniofacial Alignment)\n• Dr. Elena Rossi - Oral Surgeon (Robotic Implants & Periodontics)\n• Dr. Michael Bloom - Pediatric Specialist (Gentle Youth Dentistry)",
      action: {
        type: 'link',
        label: 'View Clinician Profiles',
        target: '#doctors'
      }
    };
  }

  // Cost / Price / Insurance / Fee
  if (q.includes('cost') || q.includes('price') || q.includes('fee') || q.includes('insurance') || q.includes('expensive') || q.includes('pay') || q.includes('kharacha')) {
    return {
      text: "Transparency Protocol:\n• Routine Diagnostic Scan & Cleaning: $120 - $220\n• Laser Whitening: $350 - $650\n• Clear Aligners: $2,400 - $4,800\n• Single Titanium Implant: $1,800 - $3,500\nWe accept all major PPO insurance plans (Delta, Cigna, Aetna, MetLife) and offer 0% APR CareCredit financing.",
      action: {
        type: 'link',
        label: 'Use Cost Estimator',
        target: '#cost-estimator'
      }
    };
  }

  // Hours / Timings / Location / Address
  if (q.includes('hour') || q.includes('time') || q.includes('open') || q.includes('location') || q.includes('address') || q.includes('where') || q.includes('kahan')) {
    return {
      text: "📍 Location: 722 Tech Plaza, Level 4, Mission District, NYC 10012.\n⏱️ Operational Hours:\n• Mon - Fri: 08:00 - 20:00 (EST)\n• Saturday: 09:00 - 15:00 (EST)\n• 24/7 Emergency Response on standby.",
      action: {
        type: 'link',
        label: 'View Location Map',
        target: '#contact'
      }
    };
  }

  // Lab / Tech / Specifications
  if (q.includes('tech') || q.includes('lab') || q.includes('precision') || q.includes('machine') || q.includes('equipment') || q.includes('specs')) {
    return {
      text: "Lumina Dental houses an on-site precision laboratory featuring 3D CBCT ultra-high resolution imaging (0.01mm voxel), Class 100 sterile operating environments, CAD/CAM 5-axis robotic milling for same-day crowns, and Nd:YAG biostimulation lasers.",
      action: {
        type: 'link',
        label: 'View Technical Specs',
        target: '#laboratory'
      }
    };
  }

  // Urdu / Hindi greetings or inquiry
  if (q.includes('kese ho') || q.includes('kya hal') || q.includes('salam') || q.includes('hello') || q.includes('hi') || q.includes('hey') || q.includes('namaste')) {
    return {
      text: "Welcome to Lumina Dental! I'm here 24/7 to help you with treatment information, pricing, doctor appointments, or emergency triage. What can I do for you today?",
      action: {
        type: 'appointment',
        label: 'Book Consultation',
        target: '#appointment'
      }
    };
  }

  // Default intelligent clinical response
  return {
    text: "Thank you for contacting Lumina Dental Studio. Our clinical team provides high-tech precision diagnostics, cosmetic restorations, bio-synthetic implants, and pain-free preventative dentistry. Would you like to check treatment costs, meet our doctors, or schedule an appointment?",
    action: {
      type: 'appointment',
      label: 'Schedule a Visit',
      target: '#appointment'
    }
  };
}

export function DentalChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const playChime = () => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, audioCtx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.2);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.2);
    } catch {
      // AudioContext not allowed without user gesture
    }
  };

  const handleSend = async (customText?: string) => {
    const textToSend = customText || input;
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customText) setInput('');
    setIsTyping(true);

    // Call live Gemini AI if API key is configured, else use high-fidelity neural knowledge engine
    setTimeout(async () => {
      let replyText = '';
      let replyAction: { type: 'link' | 'appointment'; label: string; target: string } | undefined;

      const apiKey = process.env.GEMINI_API_KEY;
      if (apiKey && apiKey !== 'MY_GEMINI_API_KEY' && apiKey.length > 10) {
        try {
          const { GoogleGenAI } = await import('@google/genai');
          const ai = new GoogleGenAI({ apiKey });
          const systemInstruction = `You are LUMINA-AI, an elite 24/7 live AI dental concierge for Lumina Dental Clinics (located at 722 Tech Plaza, NYC). 
You speak with professional, empathetic, futuristic medical precision.
Services: General Dentistry ($120-250), Laser Whitening ($350-650, 45min, 6-8 shades), Braces & Clear Aligners ($2400-4800, 3D smile design), Implants ($1800-3500, titanium/zirconia, 99.8% bio-integration), Oral Surgery ($400-1200), 24/7 Emergency Care (Call 555-777-2020).
Specialists: Dr. Sarah Lumina (Cosmetics), Dr. James Chen (Orthodontics), Dr. Elena Rossi (Surgery), Dr. Michael Bloom (Pediatrics).
Timings: Mon-Fri 08:00-20:00, Sat 09:00-15:00, 24/7 Emergency.
Keep responses concise, clear, and action-oriented. Suggest booking an appointment when appropriate. If addressed in Roman Urdu/Hindi, reply courteously in the same language.`;

          const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `${systemInstruction}\n\nPatient asks: "${textToSend}"`
          });
          replyText = response.text || '';
          replyAction = {
            type: 'appointment',
            label: 'Book Consultation',
            target: '#appointment'
          };
        } catch {
          const fallback = getSmartDentalResponse(textToSend);
          replyText = fallback.text;
          replyAction = fallback.action;
        }
      } else {
        const fallback = getSmartDentalResponse(textToSend);
        replyText = fallback.text;
        replyAction = fallback.action;
      }

      setIsTyping(false);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: replyAction
      };
      setMessages((prev) => [...prev, aiMsg]);
      playChime();
    }, 800);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Trigger Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="relative"
          >
            {/* Live radar pulse */}
            <span className="absolute -inset-1 rounded-full bg-primary/40 animate-ping opacity-75" />
            
            <button
              onClick={() => setIsOpen(true)}
              className="relative flex items-center gap-3 px-5 py-3.5 bg-background border-2 border-primary text-foreground rounded-full shadow-[0_10px_30px_rgba(var(--primary),0.35)] hover:shadow-[0_15px_40px_rgba(var(--primary),0.5)] hover:scale-105 active:scale-95 transition-all group overflow-hidden"
              aria-label="Open 24/7 AI Dental Assistant"
            >
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center relative shadow-sm">
                <Bot className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-background" />
              </div>

              <div className="text-left hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-heading font-bold uppercase tracking-wider text-foreground">LUMINA AI</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
                <p className="text-[9px] font-mono font-semibold text-primary uppercase tracking-widest">24/7 Live Agent</p>
              </div>

              {unreadCount > 0 && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
                  {unreadCount}
                </span>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Chat Drawer / Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="w-[95vw] sm:w-[420px] h-[600px] max-h-[85vh] bg-background/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex flex-col overflow-hidden relative"
          >
            {/* High-tech top ambient line */}
            <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-primary to-blue-600 animate-gradient" />

            {/* Header */}
            <div className="px-5 py-4 bg-muted/40 border-b border-primary/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shadow-inner">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-background animate-pulse" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-heading font-bold uppercase tracking-tight text-foreground">
                      LUMINA-AI <span className="text-primary text-[11px] font-mono font-medium">[V2.8]</span>
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground">
                    <span className="text-emerald-500 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                      LIVE 24/7
                    </span>
                    <span>•</span>
                    <span className="text-foreground/50">Latency: 0.8ms</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg"
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  title={soundEnabled ? 'Mute chimes' : 'Enable chimes'}
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 opacity-50" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-foreground/60 hover:text-primary hover:bg-primary/10 rounded-lg"
                  onClick={handleReset}
                  title="Clear conversation"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-foreground/60 hover:text-destructive hover:bg-destructive/10 rounded-lg"
                  onClick={() => setIsOpen(false)}
                  title="Close chat"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Quick Status Bar */}
            <div className="px-4 py-1.5 bg-primary/5 border-b border-primary/10 flex items-center justify-between text-[10px] font-mono text-primary/70">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                HIPAA-Grade 256-Bit SSL Secured
              </span>
              <span className="opacity-60">Dr. Lumina On-Call</span>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-primary/20">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div className={`max-w-[82%] space-y-2`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-primary text-primary-foreground rounded-tr-none shadow-md font-sans'
                          : 'bg-muted/70 text-foreground border border-primary/10 rounded-tl-none font-sans backdrop-blur-sm'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                    </div>

                    {/* Action Button inside message */}
                    {msg.action && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="pt-1"
                      >
                        <a
                          href={msg.action.target}
                          onClick={() => {
                            if (msg.action?.target.startsWith('#')) {
                              setIsOpen(false);
                            }
                          }}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-heading font-bold text-[11px] uppercase tracking-wider rounded-lg transition-all group"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{msg.action.label}</span>
                          <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </motion.div>
                    )}

                    <div className={`text-[9px] font-mono text-muted-foreground ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                      {msg.timestamp}
                    </div>
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </motion.div>
              ))}

              {/* Typing Animation */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 items-center text-foreground/50 text-xs font-mono"
                >
                  <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="p-3 bg-muted/60 border border-primary/10 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
                    <span className="text-[10px] font-mono text-primary/70 ml-2 uppercase">Analyzing clinical data...</span>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Action Chips */}
            <div className="px-4 py-2 bg-muted/20 border-t border-primary/10 flex gap-1.5 overflow-x-auto scrollbar-none">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt.replace(/^[^\w\s]+/, '').trim())}
                  className="px-2.5 py-1 bg-background hover:bg-primary/10 text-foreground/80 hover:text-primary text-[10px] font-medium border border-primary/20 rounded-full whitespace-nowrap transition-colors flex-shrink-0 active:scale-95"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-muted/40 border-t border-primary/10 flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about treatments, pricing, booking, pain..."
                className="flex-1 bg-background border border-primary/20 rounded-xl px-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all font-sans"
              />
              <Button
                type="submit"
                size="icon"
                disabled={!input.trim()}
                className="h-10 w-10 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-md disabled:opacity-40 transition-all flex-shrink-0"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
